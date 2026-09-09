/* =====================================================
   TOO SPACE CINEMA
   Movie Website Controller
   =====================================================

   주요 기능
   - 영화 검색
   - 한국어 / 영어 / 별칭 검색
   - 부분 검색
   - 장르 필터
   - 평점순 / 최신순 / 오래된순 정렬
   - 영화 상세 모달
   - 더보기
   - 평점 만점 자동 환산
   - 없음 평점 자동 제외
   - 종합 평점 10점 만점 통일
   - 포스터 자동 보완
   - 영화 데이터 자동 검증

===================================================== */


/* =====================================================
   MOVIE DATABASE
===================================================== */

/*
  movies.js가 먼저 로드되어 있어야 합니다.
  index.html에서

  <script src="movies.js"></script>
  <script src="script.js"></script>

  순서인지 확인하세요.
*/


/* =====================================================
   SETTINGS
===================================================== */

const MOVIES_PER_PAGE = 20;

let currentMovies = [];

let currentPage = 1;

let currentGenre = "전체";

let currentSearch = "";

let currentSort = "popular";


/* =====================================================
   POSTER SYSTEM
===================================================== */

/*
  movies.js에서 poster가 비어 있는 영화의 경우
  Wikipedia REST API에서 포스터 이미지를 자동으로 찾는다.

  이미 poster가 있는 영화는 다시 요청하지 않는다.
*/

const POSTER_CACHE = new Map();


async function fetchWikipediaPoster(title) {

  if (!title) {
    return "";
  }


  if (POSTER_CACHE.has(title)) {
    return POSTER_CACHE.get(title);
  }


  try {

    const apiUrl =
      "https://en.wikipedia.org/api/rest_v1/page/summary/" +
      encodeURIComponent(
        title.replace(/\s+/g, "_")
      );


    const response =
      await fetch(apiUrl);


    if (!response.ok) {

      POSTER_CACHE.set(
        title,
        ""
      );

      return "";

    }


    const data =
      await response.json();


    const poster =
      data.thumbnail?.source ||
      data.originalimage?.source ||
      "";


    POSTER_CACHE.set(
      title,
      poster
    );


    return poster;

  }

  catch (error) {

    console.warn(
      "포스터 불러오기 실패:",
      title,
      error
    );


    POSTER_CACHE.set(
      title,
      ""
    );


    return "";

  }

}


/*
  포스터가 없는 영화의 포스터를 찾는다.
*/

async function resolvePosters() {

  if (
    typeof movies === "undefined" ||
    !Array.isArray(movies)
  ) {

    return;

  }


  await Promise.all(

    movies.map(
      async movie => {

        if (
          movie.poster &&
          String(movie.poster).trim() !== ""
        ) {

          return;

        }


        const candidates = [

          movie.englishTitle,

          `${movie.englishTitle} film`,

          movie.title

        ];


        for (
          const title of candidates
        ) {

          const poster =
            await fetchWikipediaPoster(
              title
            );


          if (poster) {

            movie.poster =
              poster;

            break;

          }

        }

      }
    )

  );

}


/* =====================================================
   RATING SYSTEM
===================================================== */

/*
  모든 평점을 10점 만점으로 변환한다.

  IMDb
  10점 → 그대로

  CINE21
  10점 → 그대로

  Letterboxd
  5점 → ×2

  Rotten Tomatoes
  100점 → ÷10

  NAVER
  완전히 제거
*/


const RATING_SCALES = {

  imdb: 10,

  cine21: 10,

  rottenTomatoes: 100,

  letterboxd: 5

};


/*
  평점 이름
*/

const RATING_NAMES = {

  imdb: "IMDb",

  cine21: "CINE21",

  rottenTomatoes: "Rotten Tomatoes",

  letterboxd: "Letterboxd"

};


/*
  평점 숫자 확인
*/

function ratingNumber(value) {

  if (
    value === null ||
    value === undefined ||
    value === "" ||
    value === "없음"
  ) {

    return null;

  }


  const number =
    Number(value);


  if (!Number.isFinite(number)) {

    return null;

  }


  return number;

}


/*
  평점을 10점 만점으로 변환
*/

function convertRatingToTen(
  site,
  value
) {

  const number =
    ratingNumber(value);


  if (number === null) {

    return null;

  }


  const scale =
    RATING_SCALES[site];


  if (!scale) {

    return null;

  }


  let converted;


  if (scale === 10) {

    converted =
      number;

  }

  else {

    converted =
      number * 10 / scale;

  }


  /*
    0~10 범위 보호
  */

  converted =
    Math.max(
      0,
      Math.min(
        10,
        converted
      )
    );


  return Number(
    converted.toFixed(2)
  );

}


/*
  특정 사이트 평점을
  10점 만점으로 가져오기
*/

function getNormalizedRating(
  movie,
  site
) {

  if (
    !movie ||
    !movie.ratings
  ) {

    return null;

  }


  return convertRatingToTen(
    site,
    movie.ratings[site]
  );

}


/*
  종합 평점 계산

  - NAVER 제외
  - 없음 제외
  - 각 사이트를 10점으로 변환
  - 실제 존재하는 평점만 평균
*/

function getOverallRating(movie) {

  const sites = [

    "imdb",

    "cine21",

    "rottenTomatoes",

    "letterboxd"

  ];


  const ratings =
    sites

      .map(
        site =>
          getNormalizedRating(
            movie,
            site
          )
      )

      .filter(
        value =>
          value !== null
      );


  if (!ratings.length) {

    return null;

  }


  const sum =
    ratings.reduce(
      (
        total,
        value
      ) =>
        total + value,
      0
    );


  const average =
    sum / ratings.length;


  return Number(
    average.toFixed(1)
  );

}


/* =====================================================
   DOM
===================================================== */

const movieGrid =
  document.getElementById(
    "movieGrid"
  );


const searchInput =
  document.getElementById(
    "searchInput"
  );


const clearSearch =
  document.getElementById(
    "clearSearch"
  );


const genreFilter =
  document.getElementById(
    "genreFilter"
  );


const sortSelect =
  document.getElementById(
    "sortSelect"
  );


const resultCount =
  document.getElementById(
    "resultCount"
  );


const emptyMessage =
  document.getElementById(
    "emptyMessage"
  );


const resetButton =
  document.getElementById(
    "resetButton"
  );


const loadMoreButton =
  document.getElementById(
    "loadMoreButton"
  );


const movieModal =
  document.getElementById(
    "movieModal"
  );


const modalBody =
  document.getElementById(
    "modalBody"
  );


const modalClose =
  document.getElementById(
    "modalClose"
  );


/* =====================================================
   INIT
===================================================== */

document.addEventListener(
  "DOMContentLoaded",
  async () => {

    /*
      포스터 자동 보완을 먼저 실행
    */

    await resolvePosters();


    createGenreButtons();

    updateMovies();

    setupEvents();


    /*
      영화 데이터 검증
    */

    validateMovieData();

  }
);


/* =====================================================
   EVENT
===================================================== */

function setupEvents() {

  if (searchInput) {

    searchInput.addEventListener(
      "input",
      handleSearch
    );

  }


  if (clearSearch) {

    clearSearch.addEventListener(
      "click",
      () => {

        if (searchInput) {

          searchInput.value =
            "";

        }


        currentSearch =
          "";


        clearSearch.classList.remove(
          "show"
        );


        updateMovies();


        if (searchInput) {

          searchInput.focus();

        }

      }
    );

  }


  if (sortSelect) {

    sortSelect.addEventListener(
      "change",
      () => {

        currentSort =
          sortSelect.value;


        currentPage =
          1;


        updateMovies();

      }
    );

  }


  if (resetButton) {

    resetButton.addEventListener(
      "click",
      resetFilters
    );

  }


  if (loadMoreButton) {

    loadMoreButton.addEventListener(
      "click",
      () => {

        currentPage++;

        renderMovies();

      }
    );

  }


  if (modalClose) {

    modalClose.addEventListener(
      "click",
      closeModal
    );

  }


  const modalBackground =
    document.querySelector(
      ".modal-background"
    );


  if (modalBackground) {

    modalBackground.addEventListener(
      "click",
      closeModal
    );

  }


  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape" &&
        movieModal &&
        !movieModal.classList.contains(
          "hidden"
        )
      ) {

        closeModal();

      }

    }
  );

}


/* =====================================================
   SEARCH
===================================================== */

function normalizeText(text) {

  return String(
    text || ""
  )

    .toLowerCase()

    .replace(
      /\s+/g,
      ""
    )

    .replace(
      /[^\p{L}\p{N}]/gu,
      ""
    );

}


function handleSearch(event) {

  currentSearch =
    event.target.value.trim();


  currentPage =
    1;


  if (clearSearch) {

    clearSearch.classList.toggle(
      "show",
      currentSearch.length > 0
    );

  }


  updateMovies();

}


function movieMatchesSearch(movie) {

  if (!currentSearch) {

    return true;

  }


  const keyword =
    normalizeText(
      currentSearch
    );


  if (!keyword) {

    return true;

  }


  const searchable = [

    movie.title,

    movie.englishTitle,

    movie.director,

    ...(movie.aliases || []),

    ...(movie.genre || []),

    ...(movie.actors || [])

  ];


  return searchable.some(
    item =>
      normalizeText(item)
        .includes(keyword)
  );

}


/* =====================================================
   GENRE
===================================================== */

function createGenreButtons() {

  if (!genreFilter) {

    return;

  }


  const genres =
    new Set();


  movies.forEach(
    movie => {

      (
        movie.genre || []
      ).forEach(
        genre =>
          genres.add(genre)
      );

    }
  );


  const existingButtons =
    genreFilter.querySelectorAll(
      ".filter-button"
    );


  if (
    existingButtons.length > 0
  ) {

    genreFilter

      .querySelectorAll(
        ".filter-button:not([data-genre='전체'])"
      )

      .forEach(
        button =>
          button.remove()
      );

  }


  [...genres]

    .sort(
      (a, b) =>
        a.localeCompare(
          b,
          "ko"
        )
    )

    .forEach(
      genre => {

        const button =
          document.createElement(
            "button"
          );


        button.className =
          "filter-button";


        button.dataset.genre =
          genre;


        button.textContent =
          genre;


        genreFilter.appendChild(
          button
        );

      }
    );


  let allButton =
    genreFilter.querySelector(
      "[data-genre='전체']"
    );


  if (!allButton) {

    allButton =
      document.createElement(
        "button"
      );


    allButton.className =
      "filter-button";


    allButton.dataset.genre =
      "전체";


    allButton.textContent =
      "전체";


    genreFilter.prepend(
      allButton
    );

  }


  genreFilter

    .querySelectorAll(
      ".filter-button"
    )

    .forEach(
      button => {

        button.classList.toggle(
          "active",
          button.dataset.genre ===
            "전체"
        );

      }
    );


  /*
    기존에 이벤트가 중복 등록되는 것을
    막기 위해 한 번만 등록한다.
  */

  if (
    !genreFilter.dataset.initialized
  ) {

    genreFilter.dataset.initialized =
      "true";


    genreFilter.addEventListener(
      "click",
      event => {

        const button =
          event.target.closest(
            ".filter-button"
          );


        if (!button) {

          return;

        }


        genreFilter

          .querySelectorAll(
            ".filter-button"
          )

          .forEach(
            btn =>
              btn.classList.remove(
                "active"
              )
          );


        button.classList.add(
          "active"
        );


        currentGenre =
          button.dataset.genre;


        currentPage =
          1;


        updateMovies();

      }
    );

  }

}


/* =====================================================
   FILTER
===================================================== */

function filterMovies() {

  return movies.filter(
    movie => {

      const genreMatch =
        currentGenre ===
          "전체" ||
        (
          movie.genre || []
        ).includes(
          currentGenre
        );


      const searchMatch =
        movieMatchesSearch(
          movie
        );


      return (
        genreMatch &&
        searchMatch
      );

    }
  );

}


/* =====================================================
   SORT
===================================================== */

function sortMovies(
  movieList
) {

  const sorted =
    [...movieList];


  switch (
    currentSort
  ) {


    case "overall":

      sorted.sort(
        (a, b) =>
          (
            getOverallRating(b)
            ?? -1
          ) -
          (
            getOverallRating(a)
            ?? -1
          )
      );

      break;


    case "imdb":

      sorted.sort(
        (a, b) =>
          (
            getNormalizedRating(
              b,
              "imdb"
            )
            ?? -1
          ) -
          (
            getNormalizedRating(
              a,
              "imdb"
            )
            ?? -1
          )
      );

      break;


    /*
      NAVER 정렬 완전 삭제
    */


    case "cine21":

      sorted.sort(
        (a, b) =>
          (
            getNormalizedRating(
              b,
              "cine21"
            )
            ?? -1
          ) -
          (
            getNormalizedRating(
              a,
              "cine21"
            )
            ?? -1
          )
      );

      break;


    case "rt":

      sorted.sort(
        (a, b) =>
          (
            getNormalizedRating(
              b,
              "rottenTomatoes"
            )
            ?? -1
          ) -
          (
            getNormalizedRating(
              a,
              "rottenTomatoes"
            )
            ?? -1
          )
      );

      break;


    case "letterboxd":

      sorted.sort(
        (a, b) =>
          (
            getNormalizedRating(
              b,
              "letterboxd"
            )
            ?? -1
          ) -
          (
            getNormalizedRating(
              a,
              "letterboxd"
            )
            ?? -1
          )
      );

      break;


    case "newest":

      sorted.sort(
        (a, b) =>
          (
            Number(b.year) || 0
          ) -
          (
            Number(a.year) || 0
          )
      );

      break;


    case "oldest":

      sorted.sort(
        (a, b) =>
          (
            Number(a.year) || 0
          ) -
          (
            Number(b.year) || 0
          )
      );

      break;


    case "title":

      sorted.sort(
        (a, b) =>
          String(a.title || "")
            .localeCompare(
              String(b.title || ""),
              "ko"
            )
      );

      break;


    case "popular":

    default:

      sorted.sort(
        (a, b) =>
          (
            getOverallRating(b)
            ?? 0
          ) -
          (
            getOverallRating(a)
            ?? 0
          )
      );

      break;

  }


  return sorted;

}


/* =====================================================
   UPDATE
===================================================== */

function updateMovies() {

  currentMovies =
    sortMovies(
      filterMovies()
    );


  currentPage =
    1;


  renderMovies();

}


/* =====================================================
   RENDER
===================================================== */

function renderMovies() {

  if (!movieGrid) {

    return;

  }


  const visibleCount =
    currentPage *
    MOVIES_PER_PAGE;


  const visibleMovies =
    currentMovies.slice(
      0,
      visibleCount
    );


  movieGrid.innerHTML =
    "";


  visibleMovies.forEach(
    (
      movie,
      index
    ) => {

      const card =
        createMovieCard(
          movie,
          index
        );


      movieGrid.appendChild(
        card
      );

    }
  );


  if (resultCount) {

    resultCount.textContent =
      currentMovies.length;

  }


  if (emptyMessage) {

    emptyMessage.classList.toggle(
      "hidden",
      currentMovies.length > 0
    );

  }


  const hasMore =
    visibleCount <
    currentMovies.length;


  if (loadMoreButton) {

    loadMoreButton.classList.toggle(
      "hidden",
      !hasMore
    );

  }

}


/* =====================================================
   MOVIE CARD
===================================================== */

function createMovieCard(
  movie,
  index
) {

  const card =
    document.createElement(
      "article"
    );


  card.className =
    "movie-card";


  card.style.animationDelay =
    `${
      Math.min(
        index,
        15
      ) * 0.025
    }s`;


  const overall =
    getOverallRating(
      movie
    );


  const scoreText =
    overall !== null
      ? overall.toFixed(1)
      : "없음";


  const poster =
    movie.poster || "";


  card.innerHTML = `

    <div class="poster-wrapper">

      <img
        src="${escapeAttribute(poster)}"
        alt="${escapeAttribute(movie.title)} 포스터"
        loading="lazy"
        onerror="this.style.display='none'"
      >

      <div class="poster-overlay">

        <span class="poster-rating">
          ★ ${scoreText}
        </span>

      </div>

    </div>


    <div class="movie-info">

      <h3 class="movie-title">
        ${escapeHTML(movie.title)}
      </h3>


      <p class="movie-original">
        ${escapeHTML(movie.englishTitle)}
      </p>


      <div class="movie-meta">

        <span>
          ${escapeHTML(movie.year)}
        </span>


        <span class="movie-score">
          ★ ${scoreText}
        </span>

      </div>

    </div>

  `;


  card.addEventListener(
    "click",
    () =>
      openModal(movie)
  );


  return card;

}


/* =====================================================
   MODAL
===================================================== */

function openModal(
  movie
) {

  if (
    !movieModal ||
    !modalBody
  ) {

    return;

  }


  const ratings =
    movie.ratings || {};


  modalBody.innerHTML = `

    <div class="modal-inner">

      <div>

        <img
          class="modal-poster"
          src="${escapeAttribute(movie.poster || "")}"
          alt="${escapeAttribute(movie.title)} 포스터"
          onerror="this.style.display='none'"
        >

      </div>


      <div>

        <h2 class="modal-title">
          ${escapeHTML(movie.title)}
        </h2>


        <p class="modal-original">
          ${escapeHTML(movie.englishTitle)}
        </p>


        <div class="modal-basic">

          <span class="modal-tag">
            ${escapeHTML(movie.year)}
          </span>


          ${
            (movie.genre || [])
              .map(
                genre =>
                  `
                    <span class="modal-tag">
                      ${escapeHTML(genre)}
                    </span>
                  `
              )
              .join("")
          }

        </div>


        <p class="modal-description">
          ${escapeHTML(movie.description)}
        </p>


        <div class="modal-basic">

          <span class="modal-tag">
            감독 ·
            ${escapeHTML(movie.director)}
          </span>

        </div>


        <div class="rating-section">

          <h4>
            영화 평점
          </h4>


          <div class="rating-list">

            ${createRatingItem(
              "IMDb",
              ratings.imdb,
              "imdb"
            )}


            ${createRatingItem(
              "CINE21",
              ratings.cine21,
              "cine21"
            )}


            ${createRatingItem(
              "Rotten Tomatoes",
              ratings.rottenTomatoes,
              "rottenTomatoes"
            )}


            ${createRatingItem(
              "Letterboxd",
              ratings.letterboxd,
              "letterboxd"
            )}


            ${createOverallRatingItem(
              getOverallRating(movie)
            )}

          </div>

        </div>


        <div class="rating-section">

          <h4>
            출연
          </h4>


          <div class="modal-basic">

            ${
              (movie.actors || [])
                .map(
                  actor =>
                    `
                      <span class="modal-tag">
                        ${escapeHTML(actor)}
                      </span>
                    `
                )
                .join("")
            }

          </div>

        </div>

      </div>

    </div>

  `;


  movieModal.classList.remove(
    "hidden"
  );


  document.body.style.overflow =
    "hidden";

}


/* =====================================================
   RATING DISPLAY
===================================================== */

function createRatingItem(
  name,
  value,
  site
) {

  let displayValue;


  if (
    value === null ||
    value === undefined ||
    value === "없음"
  ) {

    displayValue =
      "없음";

  }

  else {

    displayValue =
      Number(value)
        .toFixed(1);

  }


  const normalized =
    site
      ? getNormalizedRating(
          {
            ratings: {
              [site]: value
            }
          },
          site
        )
      : null;


  let normalizedText =
    "";


  /*
    원래 평점 옆에
    10점 환산값을 표시한다.
  */

  if (
    normalized !== null &&
    RATING_SCALES[site] !== 10
  ) {

    normalizedText =
      `
        <small>
          → ${normalized.toFixed(1)}/10
        </small>
      `;

  }


  return `

    <div class="rating-item">

      <span class="rating-name">
        ${escapeHTML(name)}
      </span>


      <span class="rating-value">

        ${displayValue}


        ${
          value !== null &&
          value !== undefined &&
          value !== "없음"
            ? ` / ${RATING_SCALES[site]}`
            : ""
        }


        ${normalizedText}

      </span>

    </div>

  `;

}


/* =====================================================
   OVERALL RATING DISPLAY
===================================================== */

function createOverallRatingItem(
  value
) {

  const displayValue =
    value === null
      ? "없음"
      : value.toFixed(1);


  return `

    <div class="rating-item">

      <span class="rating-name">
        Too Space 종합
      </span>


      <span class="rating-value">

        ${displayValue}


        ${
          value !== null
            ? " / 10"
            : ""
        }

      </span>

    </div>

  `;

}


/* =====================================================
   CLOSE MODAL
===================================================== */

function closeModal() {

  if (!movieModal) {

    return;

  }


  movieModal.classList.add(
    "hidden"
  );


  document.body.style.overflow =
    "";

}


/* =====================================================
   RESET
===================================================== */

function resetFilters() {

  currentGenre =
    "전체";


  currentSearch =
    "";


  currentSort =
    "popular";


  currentPage =
    1;


  if (searchInput) {

    searchInput.value =
      "";

  }


  if (sortSelect) {

    sortSelect.value =
      "popular";

  }


  if (genreFilter) {

    genreFilter

      .querySelectorAll(
        ".filter-button"
      )

      .forEach(
        button => {

          button.classList.toggle(
            "active",
            button.dataset.genre ===
              "전체"
          );

        }
      );

  }


  if (clearSearch) {

    clearSearch.classList.remove(
      "show"
    );

  }


  updateMovies();

}


/* =====================================================
   SECURITY
===================================================== */

function escapeHTML(
  value
) {

  return String(
    value ?? ""
  )

    .replace(
      /&/g,
      "&amp;"
    )

    .replace(
      /</g,
      "&lt;"
    )

    .replace(
      />/g,
      "&gt;"
    )

    .replace(
      /"/g,
      "&quot;"
    )

    .replace(
      /'/g,
      "&#039;"
    );

}


function escapeAttribute(
  value
) {

  return escapeHTML(
    value
  );

}


/* =====================================================
   DATA VALIDATION
===================================================== */

function validateMovieData() {

  if (
    typeof movies === "undefined" ||
    !Array.isArray(movies)
  ) {

    console.error(
      "❌ movies.js의 movies 배열을 찾을 수 없습니다."
    );

    return;

  }


  const errors = [];


  /* ---------------------------------------------
     1. 영화 개수
  --------------------------------------------- */

  if (
    movies.length !== 100
  ) {

    errors.push(
      `영화 개수 오류: ${movies.length}편`
    );

  }


  /* ---------------------------------------------
     2. ID 1~100 연속 여부
  --------------------------------------------- */

  movies.forEach(
    (
      movie,
      index
    ) => {

      if (
        movie.id !== index + 1
      ) {

        errors.push(
          `ID 오류: ${index + 1}번째 영화의 실제 ID가 ${movie.id}`
        );

      }

    }
  );


  /* ---------------------------------------------
     3. 한국 제목 중복
  --------------------------------------------- */

  const koreanTitles =
    movies.map(
      movie =>
        String(
          movie.title || ""
        )
          .trim()
          .toLowerCase()
    );


  const duplicateKoreanTitles =
    koreanTitles.filter(
      (
        title,
        index
      ) =>
        title &&
        koreanTitles.indexOf(title) !== index
    );


  if (
    duplicateKoreanTitles.length
  ) {

    errors.push(
      `한국 제목 중복: ${
        [
          ...new Set(
            duplicateKoreanTitles
          )
        ].join(", ")
      }`
    );

  }


  /* ---------------------------------------------
     4. 영어 제목 중복
  --------------------------------------------- */

  const englishTitles =
    movies.map(
      movie =>
        String(
          movie.englishTitle || ""
        )
          .trim()
          .toLowerCase()
    );


  const duplicateEnglishTitles =
    englishTitles.filter(
      (
        title,
        index
      ) =>
        title &&
        englishTitles.indexOf(title) !== index
    );


  if (
    duplicateEnglishTitles.length
  ) {

    errors.push(
      `영어 제목 중복: ${
        [
          ...new Set(
            duplicateEnglishTitles
          )
        ].join(", ")
      }`
    );

  }


  /* ---------------------------------------------
     5. 필수 데이터
  --------------------------------------------- */

  movies.forEach(
    movie => {

      if (!movie.title) {

        errors.push(
          `한국 제목 없음: ID ${movie.id}`
        );

      }


      if (!movie.englishTitle) {

        errors.push(
          `영어 제목 없음: ID ${movie.id}`
        );

      }


      if (!movie.year) {

        errors.push(
          `개봉년도 없음: ID ${movie.id}`
        );

      }


      if (!movie.ratings) {

        errors.push(
          `평점 데이터 없음: ID ${movie.id}`
        );

      }

    }
  );


  /* ---------------------------------------------
     6. NAVER 완전 제거 확인
  --------------------------------------------- */

  const movieDataText =
    JSON.stringify(
      movies
    ).toLowerCase();


  if (
    movieDataText.includes(
      "naver"
    )
  ) {

    errors.push(
      "movies.js에 NAVER 데이터가 남아 있습니다."
    );

  }


  /* ---------------------------------------------
     7. 포스터 확인
  --------------------------------------------- */

  const missingPosters =
    movies.filter(
      movie =>
        !movie.poster ||
        String(movie.poster).trim() === ""
    );


  if (
    missingPosters.length
  ) {

    console.warn(
      "⚠️ 포스터를 아직 찾지 못한 영화:",
      missingPosters.map(
        movie =>
          `${movie.id}: ${movie.title}`
      )
    );

  }


  /* ---------------------------------------------
     8. 결과
  --------------------------------------------- */

  if (
    errors.length === 0
  ) {

    console.log(
      "✅ Too Space Cinema 데이터 검증 완료: 오류 없음"
    );

  }

  else {

    console.error(
      "❌ Too Space Cinema 데이터 검증 오류:",
      errors
    );

  }

}


/* =====================================================
   DEBUG
===================================================== */

function getMovieCount() {

  return movies.length;

}


function getMoviesWithRating(
  site
) {

  return movies.filter(
    movie =>
      getNormalizedRating(
        movie,
        site
      ) !== null
  );

}


/*
  콘솔에서 확인:

  getMovieCount()

  getMoviesWithRating("imdb")

  getMoviesWithRating("cine21")

  getMoviesWithRating("rottenTomatoes")

  getMoviesWithRating("letterboxd")

  getOverallRating(movies[0])

*/
