/* =========================================================
   Too Space Cinema - script.js
   ========================================================= */


/* =========================================================
   기본 설정
   ========================================================= */

const POSTER_CACHE_KEY = "too-space-cinema-posters";

const RATING_SCALES = {
  imdb: 10,
  cine21: 10,
  rottenTomatoes: 100,
  letterboxd: 5
};

const SITE_NAMES = {
  imdb: "IMDb",
  cine21: "CINE21",
  rottenTomatoes: "Rotten Tomatoes",
  letterboxd: "Letterboxd"
};

const SITE_URLS = {
  imdb: "https://www.imdb.com/",
  cine21: "https://www.cine21.com/",
  rottenTomatoes: "https://www.rottentomatoes.com/",
  letterboxd: "https://letterboxd.com/"
};


/* =========================================================
   영화 표시 설정
   ========================================================= */

const INITIAL_DISPLAY_COUNT = 20;
const LOAD_MORE_COUNT = 20;

let displayCount = INITIAL_DISPLAY_COUNT;


/* =========================================================
   전역 상태
   ========================================================= */

let currentMovies = [];
let currentGenre = "전체";
let currentSort = "popular";
let currentSearch = "";

let selectedMovie = null;


/* =========================================================
   배열 안전 처리
   ========================================================= */

function toArray(value) {
  if (Array.isArray(value)) {
    return value;
  }

  if (
    value === undefined ||
    value === null ||
    value === ""
  ) {
    return [];
  }

  return [value];
}


/* =========================================================
   문자열 안전 처리
   ========================================================= */

function safeString(value) {
  if (
    value === undefined ||
    value === null
  ) {
    return "";
  }

  return String(value).trim();
}


/* =========================================================
   영화 장르 처리
   ========================================================= */

function getMovieGenres(movie) {
  if (Array.isArray(movie?.genre)) {
    return movie.genre;
  }

  return String(movie?.genre || "")
    .split(",")
    .map(genre => genre.trim())
    .filter(Boolean);
}


/* =========================================================
   영화 검색용 문자열
   ========================================================= */

function getMovieSearchText(movie) {
  const genres = getMovieGenres(movie);

  const aliases = Array.isArray(movie?.aliases)
    ? movie.aliases
    : [movie?.aliases].filter(Boolean);

  const actors = Array.isArray(movie?.actors)
    ? movie.actors
    : [movie?.actors].filter(Boolean);

  return [
    movie?.title,
    movie?.englishTitle,
    ...aliases,
    movie?.director,
    ...actors,
    ...genres
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}


/* =========================================================
   영화 검색
   ========================================================= */

function movieMatchesSearch(movie, searchTerm) {
  const keyword = safeString(searchTerm).toLowerCase();

  if (!keyword) {
    return true;
  }

  return getMovieSearchText(movie).includes(keyword);
}


/* =========================================================
   평점 존재 여부
   ========================================================= */

function hasRating(value) {
  if (
    value === null ||
    value === undefined ||
    value === "" ||
    value === "없음"
  ) {
    return false;
  }

  const number = Number(value);

  return Number.isFinite(number);
}


/* =========================================================
   평점 숫자 변환
   ========================================================= */

function normalizeRating(site, value) {
  if (!hasRating(value)) {
    return null;
  }

  const number = Number(value);

  if (!Number.isFinite(number)) {
    return null;
  }

  return number;
}


/* =========================================================
   평점 → 10점 기준 변환
   ========================================================= */

function ratingToTen(site, value) {
  const normalized = normalizeRating(site, value);

  if (normalized === null) {
    return null;
  }

  /*
    Rotten Tomatoes
    87 → 8.7
  */
  if (site === "rottenTomatoes") {
    return normalized / 10;
  }

  /*
    Letterboxd
    4.4 → 8.8
  */
  if (site === "letterboxd") {
    return normalized * 2;
  }

  /*
    IMDb / CINE21
    이미 10점 기준
  */
  return normalized;
}


/* =========================================================
   전체 평점 계산
   ========================================================= */

function calculateOverallRating(ratings) {
  if (!ratings) {
    return null;
  }

  const values = [];

  Object.keys(RATING_SCALES).forEach(site => {
    const converted = ratingToTen(
      site,
      ratings[site]
    );

    if (
      converted !== null &&
      Number.isFinite(converted)
    ) {
      values.push(converted);
    }
  });

  if (values.length === 0) {
    return null;
  }

  const average =
    values.reduce(
      (sum, value) => sum + value,
      0
    ) / values.length;

  return average;
}


/* =========================================================
   평점 표시
   ========================================================= */

function formatRating(site, value) {
  const normalized = normalizeRating(
    site,
    value
  );

  if (normalized === null) {
    return "없음";
  }

  /*
    Rotten Tomatoes는 원래 퍼센트이므로
    87 → 87%
  */
  if (site === "rottenTomatoes") {
    return `${normalized.toFixed(0)}%`;
  }

  /*
    IMDb / CINE21 / Letterboxd
  */
  return normalized.toFixed(1);
}


/* =========================================================
   전체 평점 표시
   ========================================================= */

function formatOverallRating(ratings) {
  const overall =
    calculateOverallRating(ratings);

  if (overall === null) {
    return "없음";
  }

  return overall.toFixed(2);
}


/* =========================================================
   포스터 캐시
   ========================================================= */

function getPosterCache() {
  try {
    const cached =
      localStorage.getItem(
        POSTER_CACHE_KEY
      );

    if (!cached) {
      return {};
    }

    return JSON.parse(cached);
  }

  catch (error) {
    console.warn(
      "포스터 캐시를 불러오지 못했습니다.",
      error
    );

    return {};
  }
}


/* =========================================================
   포스터 캐시 저장
   ========================================================= */

function savePosterCache(cache) {
  try {
    localStorage.setItem(
      POSTER_CACHE_KEY,
      JSON.stringify(cache)
    );
  }

  catch (error) {
    console.warn(
      "포스터 캐시 저장 실패:",
      error
    );
  }
}


/* =========================================================
   포스터 URL 확인
   ========================================================= */

function isValidPosterUrl(url) {
  if (
    !url ||
    typeof url !== "string"
  ) {
    return false;
  }

  return (
    url.startsWith("http://") ||
    url.startsWith("https://")
  );
}


/* =========================================================
   Wikipedia 포스터 가져오기
   ========================================================= */

async function fetchWikipediaPoster(movie) {
  if (!movie) {
    return "";
  }

  const title =
    movie.englishTitle ||
    movie.title;

  if (!title) {
    return "";
  }

  try {
    const url =
      "https://en.wikipedia.org/api/rest_v1/page/summary/" +
      encodeURIComponent(
        title.replace(/ /g, "_")
      );

    const response =
      await fetch(url);

    if (!response.ok) {
      return "";
    }

    const data =
      await response.json();

    if (
      data &&
      data.thumbnail &&
      data.thumbnail.source
    ) {
      return data.thumbnail.source;
    }

    return "";
  }

  catch (error) {
    console.warn(
      `포스터 검색 실패: ${title}`,
      error
    );

    return "";
  }
}


/* =========================================================
   포스터 전체 처리
   ========================================================= */

async function resolvePosters() {
  if (
    typeof movies === "undefined" ||
    !Array.isArray(movies)
  ) {
    console.error(
      "movies.js의 movies 배열을 찾을 수 없습니다."
    );

    return;
  }

  const cache =
    getPosterCache();

  let cacheChanged = false;

  for (const movie of movies) {

    if (
      isValidPosterUrl(movie.poster)
    ) {
      cache[movie.id] =
        movie.poster;

      continue;
    }

    if (
      cache[movie.id] &&
      isValidPosterUrl(cache[movie.id])
    ) {
      movie.poster =
        cache[movie.id];

      continue;
    }

    const poster =
      await fetchWikipediaPoster(movie);

    if (poster) {
      movie.poster = poster;
      cache[movie.id] = poster;
      cacheChanged = true;
    }
  }

  if (cacheChanged) {
    savePosterCache(cache);
  }
}


/* =========================================================
   DOM 요소
   ========================================================= */

const movieGrid =
  document.getElementById(
    "movieGrid"
  );

const searchInput =
  document.getElementById(
    "searchInput"
  );

const clearSearchButton =
  document.getElementById(
    "clearSearch"
  );

const genreButtons =
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

const resetButton =
  document.getElementById(
    "resetButton"
  );

const emptyMessage =
  document.getElementById(
    "emptyMessage"
  );

const loadMoreButton =
  document.getElementById(
    "loadMoreButton"
  );

const movieModal =
  document.getElementById(
    "movieModal"
  );

const modalBackground =
  movieModal
    ? movieModal.querySelector(
        ".modal-background"
      )
    : null;

const modalContent =
  movieModal
    ? movieModal.querySelector(
        ".modal-content"
      )
    : null;

const modalBody =
  document.getElementById(
    "modalBody"
  );

const modalClose =
  document.getElementById(
    "modalClose"
  );


/* =========================================================
   영화 카드 생성
   ========================================================= */

function createMovieCard(movie) {

  const card =
    document.createElement(
      "article"
    );

  card.className =
    "movie-card";

  card.dataset.movieId =
    movie.id;


  /* 포스터 */

  const poster =
    document.createElement(
      "div"
    );

  poster.className =
    "movie-poster";


  if (
    isValidPosterUrl(movie.poster)
  ) {

    const image =
      document.createElement(
        "img"
      );

    image.src =
      movie.poster;

    image.alt =
      `${movie.title || "영화"} 포스터`;

    image.loading =
      "lazy";

    image.onerror =
      () => {

        image.remove();

        poster.classList.add(
          "no-poster"
        );

        poster.textContent =
          "POSTER";
      };

    poster.appendChild(
      image
    );

  }

  else {

    poster.classList.add(
      "no-poster"
    );

    poster.textContent =
      "POSTER";
  }


  /* 영화 정보 */

  const info =
    document.createElement(
      "div"
    );

  info.className =
    "movie-info";


  const title =
    document.createElement(
      "h3"
    );

  title.textContent =
    movie.title ||
    "제목 없음";


  const englishTitle =
    document.createElement(
      "p"
    );

  englishTitle.className =
    "english-title";

  englishTitle.textContent =
    movie.englishTitle ||
    "";


  const year =
    document.createElement(
      "p"
    );

  year.className =
    "movie-year";

  year.textContent =
    movie.year ||
    "";


  const genres =
    document.createElement(
      "div"
    );

  genres.className =
    "movie-genres";


  getMovieGenres(movie)
    .forEach(genre => {

      const span =
        document.createElement(
          "span"
        );

      span.textContent =
        genre;

      genres.appendChild(
        span
      );
    });


  /* 종합 평점 */

  const overall =
    document.createElement(
      "div"
    );

  overall.className =
    "movie-overall-rating";


  const overallValue =
    formatOverallRating(
      movie.ratings
    );


  overall.innerHTML = `
    <span class="rating-label">
      종합 평점
    </span>

    <strong>
      ${escapeHtml(overallValue)}
    </strong>

    <span>/ 10</span>
  `;


  info.appendChild(title);
  info.appendChild(englishTitle);
  info.appendChild(year);
  info.appendChild(genres);
  info.appendChild(overall);


  card.appendChild(
    poster
  );

  card.appendChild(
    info
  );


  /* 카드 클릭 */

  card.addEventListener(
    "click",
    () => {
      openModal(movie);
    }
  );


  return card;
}


/* =========================================================
   영화 카드 출력
   ========================================================= */

function renderMovies(movieList) {

  if (!movieGrid) {
    console.warn(
      "movieGrid 요소를 찾을 수 없습니다."
    );

    return;
  }


  movieGrid.innerHTML =
    "";


  if (
    !movieList ||
    movieList.length === 0
  ) {

    if (emptyMessage) {
      emptyMessage.classList.remove(
        "hidden"
      );
    }

    movieGrid.innerHTML =
      "";

    if (loadMoreButton) {
      loadMoreButton.style.display =
        "none";
    }

    return;
  }


  if (emptyMessage) {
    emptyMessage.classList.add(
      "hidden"
    );
  }


  const visibleMovies =
    movieList.slice(
      0,
      displayCount
    );


  visibleMovies.forEach(
    movie => {

      movieGrid.appendChild(
        createMovieCard(movie)
      );

    }
  );


  /* 더 보기 버튼 */

  if (loadMoreButton) {

    if (
      visibleMovies.length <
      movieList.length
    ) {

      loadMoreButton.style.display =
        "";

      loadMoreButton.textContent =
        `더 많은 영화 보기 (${visibleMovies.length}/${movieList.length})`;

    }

    else {

      loadMoreButton.style.display =
        "none";

    }
  }
}


/* =========================================================
   장르 버튼 생성
   ========================================================= */

function createGenreButtons() {

  if (!genreButtons) {
    console.warn(
      "genreFilter 요소를 찾을 수 없습니다."
    );

    return;
  }


  if (
    typeof movies === "undefined" ||
    !Array.isArray(movies)
  ) {
    return;
  }


  const genres =
    new Set();


  movies.forEach(
    movie => {

      getMovieGenres(movie)
        .forEach(
          genre => {
            genres.add(genre);
          }
        );

    }
  );


  genreButtons.innerHTML =
    "";


  /* 전체 버튼 */

  const allButton =
    document.createElement(
      "button"
    );

  allButton.type =
    "button";

  allButton.className =
    "filter-button active";

  allButton.dataset.genre =
    "전체";

  allButton.textContent =
    "전체";

  genreButtons.appendChild(
    allButton
  );


  /* 장르 버튼 */

  Array.from(genres)
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

        button.type =
          "button";

        button.className =
          "filter-button";

        button.dataset.genre =
          genre;

        button.textContent =
          genre;

        genreButtons.appendChild(
          button
        );
      }
    );
}


/* =========================================================
   장르 선택
   ========================================================= */

function setCurrentGenre(
  genre
) {

  currentGenre =
    genre || "전체";

  displayCount =
    INITIAL_DISPLAY_COUNT;


  if (genreButtons) {

    genreButtons
      .querySelectorAll(
        ".filter-button"
      )
      .forEach(
        button => {

          button.classList.toggle(
            "active",
            button.dataset.genre ===
              currentGenre
          );

        }
      );
  }


  updateMovies();
}


/* =========================================================
   영화 필터링
   ========================================================= */

function filterMovies() {

  if (
    typeof movies === "undefined" ||
    !Array.isArray(movies)
  ) {
    return [];
  }


  let filtered =
    movies.filter(
      movie => {

        const searchMatch =
          movieMatchesSearch(
            movie,
            currentSearch
          );


        const movieGenres =
          getMovieGenres(movie);


        const genreMatch =
          currentGenre === "전체" ||
          movieGenres.includes(
            currentGenre
          );


        return (
          searchMatch &&
          genreMatch
        );
      }
    );


  /* =====================================================
     정렬
     ===================================================== */

  switch (currentSort) {

    /* 인기순
       별도의 인기 데이터가 없으므로
       현재 movies.js의 기본 순서를 유지
    */

    case "popular":

      break;


    /* 종합 평점 */

    case "overall":

      filtered.sort(
        (a, b) => {

          const ratingA =
            calculateOverallRating(
              a.ratings
            ) ?? -1;

          const ratingB =
            calculateOverallRating(
              b.ratings
            ) ?? -1;

          return ratingB - ratingA;
        }
      );

      break;


    /* IMDb */

    case "imdb":

      filtered.sort(
        (a, b) => {

          const ratingA =
            ratingToTen(
              "imdb",
              a.ratings?.imdb
            ) ?? -1;

          const ratingB =
            ratingToTen(
              "imdb",
              b.ratings?.imdb
            ) ?? -1;

          return ratingB - ratingA;
        }
      );

      break;


    /* CINE21 */

    case "cine21":

      filtered.sort(
        (a, b) => {

          const ratingA =
            ratingToTen(
              "cine21",
              a.ratings?.cine21
            ) ?? -1;

          const ratingB =
            ratingToTen(
              "cine21",
              b.ratings?.cine21
            ) ?? -1;

          return ratingB - ratingA;
        }
      );

      break;


    /* Rotten Tomatoes */

    case "rt":

      filtered.sort(
        (a, b) => {

          const ratingA =
            ratingToTen(
              "rottenTomatoes",
              a.ratings?.rottenTomatoes
            ) ?? -1;

          const ratingB =
            ratingToTen(
              "rottenTomatoes",
              b.ratings?.rottenTomatoes
            ) ?? -1;

          return ratingB - ratingA;
        }
      );

      break;


    /* 최신순 */

    case "newest":

      filtered.sort(
        (a, b) =>
          Number(b.year || 0) -
          Number(a.year || 0)
      );

      break;


    /* 오래된순 */

    case "oldest":

      filtered.sort(
        (a, b) =>
          Number(a.year || 9999) -
          Number(b.year || 9999)
      );

      break;


    /* 제목순 */

    case "title":

      filtered.sort(
        (a, b) =>
          String(
            a.title || ""
          ).localeCompare(
            String(
              b.title || ""
            ),
            "ko"
          )
      );

      break;


    default:

      break;
  }


  return filtered;
}


/* =========================================================
   영화 업데이트
   ========================================================= */

function updateMovies() {

  const filtered =
    filterMovies();


  currentMovies =
    filtered;


  renderMovies(
    filtered
  );


  updateMovieCount(
    filtered.length
  );
}


/* =========================================================
   영화 개수 표시
   ========================================================= */

function updateMovieCount(
  count
) {

  if (resultCount) {

    resultCount.textContent =
      String(count);

  }


  /* 혹시 다른 곳에서
     .movie-count를 사용한다면
     그것도 같이 지원
  */

  const elements =
    document.querySelectorAll(
      ".movie-count"
    );


  elements.forEach(
    element => {

      element.textContent =
        `${count}편`;

    }
  );
}


/* =========================================================
   검색 이벤트
   ========================================================= */

function setupSearchEvent() {

  if (!searchInput) {
    return;
  }


  searchInput.addEventListener(
    "input",
    event => {

      currentSearch =
        event.target.value || "";

      displayCount =
        INITIAL_DISPLAY_COUNT;

      updateMovies();

    }
  );


  if (clearSearchButton) {

    clearSearchButton.addEventListener(
      "click",
      clearSearch
    );

  }
}


/* =========================================================
   정렬 이벤트
   ========================================================= */

function setupSortEvent() {

  if (!sortSelect) {
    return;
  }


  sortSelect.addEventListener(
    "change",
    event => {

      currentSort =
        event.target.value ||
        "popular";

      displayCount =
        INITIAL_DISPLAY_COUNT;

      updateMovies();

    }
  );
}


/* =========================================================
   장르 이벤트
   ========================================================= */

function setupGenreEvent() {

  if (!genreButtons) {
    return;
  }


  genreButtons.addEventListener(
    "click",
    event => {

      const button =
        event.target.closest(
          ".filter-button"
        );


      if (!button) {
        return;
      }


      setCurrentGenre(
        button.dataset.genre ||
        "전체"
      );

    }
  );
}


/* =========================================================
   더 보기 이벤트
   ========================================================= */

function setupLoadMoreEvent() {

  if (!loadMoreButton) {
    return;
  }


  loadMoreButton.addEventListener(
    "click",
    () => {

      displayCount +=
        LOAD_MORE_COUNT;

      renderMovies(
        currentMovies
      );

    }
  );
}


/* =========================================================
   필터 초기화 이벤트
   ========================================================= */

function setupResetEvent() {

  if (!resetButton) {
    return;
  }


  resetButton.addEventListener(
    "click",
    resetFilters
  );
}


/* =========================================================
   이벤트 전체 설정
   ========================================================= */

function setupEvents() {

  setupSearchEvent();

  setupSortEvent();

  setupGenreEvent();

  setupLoadMoreEvent();

  setupResetEvent();


  /* 모달 닫기 */

  if (modalClose) {

    modalClose.addEventListener(
      "click",
      closeModal
    );

  }


  /* 모달 배경 클릭 */

  if (modalBackground) {

    modalBackground.addEventListener(
      "click",
      closeModal
    );

  }


  /* ESC */

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape"
      ) {
        closeModal();
      }

    }
  );
}


/* =========================================================
   평점 항목 생성
   ========================================================= */

function createRatingItem(
  site,
  value
) {

  const item =
    document.createElement(
      "div"
    );

  item.className =
    "rating-item";


  const siteName =
    document.createElement(
      "span"
    );

  siteName.className =
    "rating-site";

  siteName.textContent =
    SITE_NAMES[site] ||
    site;


  const display =
    document.createElement(
      "span"
    );

  display.className =
    "rating-value";


  display.textContent =
    formatRating(
      site,
      value
    );


  item.appendChild(
    siteName
  );

  item.appendChild(
    display
  );


  return item;
}


/* =========================================================
   평점 영역 생성
   ========================================================= */

function createRatingsElement(
  ratings
) {

  const container =
    document.createElement(
      "div"
    );

  container.className =
    "ratings-container";


  Object.keys(
    RATING_SCALES
  ).forEach(
    site => {

      const item =
        createRatingItem(
          site,
          ratings
            ? ratings[site]
            : null
        );

      container.appendChild(
        item
      );

    }
  );


  return container;
}


/* =========================================================
   상세 모달 열기
   ========================================================= */

function openModal(movie) {

  if (
    !movieModal ||
    !modalBody
  ) {
    console.warn(
      "영화 모달 요소를 찾을 수 없습니다."
    );

    return;
  }


  selectedMovie =
    movie;


  const genres =
    getMovieGenres(movie);


  const aliases =
    Array.isArray(
      movie.aliases
    )
      ? movie.aliases
      : toArray(
          movie.aliases
        );


  const actors =
    Array.isArray(
      movie.actors
    )
      ? movie.actors
      : toArray(
          movie.actors
        );


  const overall =
    formatOverallRating(
      movie.ratings
    );


  /* 포스터 */

  const posterHtml =
    isValidPosterUrl(
      movie.poster
    )

      ? `
        <img
          src="${escapeHtml(
            movie.poster
          )}"
          alt="${escapeHtml(
            movie.title ||
            "영화 포스터"
          )} 포스터"
        >
      `

      : `
        <div class="modal-no-poster">
          POSTER
        </div>
      `;


  /* 장르 */

  const genresHtml =
    genres
      .map(
        genre => `
          <span class="modal-genre">
            ${escapeHtml(
              genre
            )}
          </span>
        `
      )
      .join("");


  /* 별칭 */

  const aliasesHtml =
    aliases.length > 0

      ? aliases
          .map(
            alias => `
              <span>
                ${escapeHtml(
                  alias
                )}
              </span>
            `
          )
          .join(", ")

      : "없음";


  /* 배우 */

  const actorsHtml =
    actors.length > 0

      ? actors
          .map(
            actor =>
              escapeHtml(
                actor
              )
          )
          .join(", ")

      : "없음";


  /* 모달 내용 */

  modalBody.innerHTML = `
    <div class="modal-movie">

      <div class="modal-poster">
        ${posterHtml}
      </div>


      <div class="modal-info">

        <h2>
          ${escapeHtml(
            movie.title ||
            "제목 없음"
          )}
        </h2>


        <p class="modal-english-title">
          ${escapeHtml(
            movie.englishTitle ||
            ""
          )}
        </p>


        <p class="modal-year">
          ${escapeHtml(
            String(
              movie.year ||
              ""
            )
          )}
        </p>


        <div class="modal-genres">
          ${genresHtml}
        </div>


        <div class="modal-overall">

          <span>
            종합 평점
          </span>

          <strong>
            ${escapeHtml(
              overall
            )}
          </strong>

          <small>
            / 10
          </small>

        </div>


        <div class="modal-detail">

          <div class="detail-row">

            <strong>
              감독
            </strong>

            <span>
              ${escapeHtml(
                movie.director ||
                "없음"
              )}
            </span>

          </div>


          <div class="detail-row">

            <strong>
              출연
            </strong>

            <span>
              ${actorsHtml}
            </span>

          </div>


          <div class="detail-row">

            <strong>
              별칭
            </strong>

            <span>
              ${aliasesHtml}
            </span>

          </div>

        </div>


        <div class="modal-ratings">

          <h3>
            사이트별 평점
          </h3>

          <div class="ratings-grid">
            ${createRatingsHtml(
              movie.ratings
            )}
          </div>

        </div>


        ${
          movie.description
            ? `
              <div class="modal-description">

                <h3>
                  줄거리
                </h3>

                <p>
                  ${escapeHtml(
                    movie.description
                  )}
                </p>

              </div>
            `
            : ""
        }

      </div>

    </div>
  `;


  movieModal.classList.remove(
    "hidden"
  );

  movieModal.classList.add(
    "show"
  );


  movieModal.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.classList.add(
    "modal-open"
  );
}


/* =========================================================
   HTML 이스케이프
   ========================================================= */

function escapeHtml(value) {

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


/* =========================================================
   평점 HTML 생성
   ========================================================= */

function createRatingsHtml(
  ratings
) {

  return Object.keys(
    RATING_SCALES
  )
    .map(
      site => {

        const value =
          ratings
            ? ratings[site]
            : null;


        return `
          <div class="rating-detail-item">

            <span class="rating-detail-site">
              ${escapeHtml(
                SITE_NAMES[site] ||
                site
              )}
            </span>

            <strong class="rating-detail-value">
              ${escapeHtml(
                formatRating(
                  site,
                  value
                )
              )}
            </strong>

          </div>
        `;
      }
    )
    .join("");
}


/* =========================================================
   모달 닫기
   ========================================================= */

function closeModal() {

  if (!movieModal) {
    return;
  }


  movieModal.classList.remove(
    "show"
  );

  movieModal.classList.add(
    "hidden"
  );


  movieModal.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.classList.remove(
    "modal-open"
  );


  selectedMovie =
    null;
}


/* =========================================================
   URL에서 영화 ID 확인
   ========================================================= */

function getMovieIdFromUrl() {

  const params =
    new URLSearchParams(
      window.location.search
    );


  const id =
    params.get("id");


  if (!id) {
    return null;
  }


  const number =
    Number(id);


  return Number.isFinite(
    number
  )
    ? number
    : null;
}


/* =========================================================
   URL 영화 열기
   ========================================================= */

function openMovieFromUrl() {

  const movieId =
    getMovieIdFromUrl();


  if (movieId === null) {
    return;
  }


  if (
    typeof movies === "undefined" ||
    !Array.isArray(movies)
  ) {
    return;
  }


  const movie =
    movies.find(
      item =>
        Number(item.id) ===
        movieId
    );


  if (movie) {
    openModal(movie);
  }
}


/* =========================================================
   데이터 검증
   ========================================================= */

function validateMovieData() {

  if (
    typeof movies === "undefined" ||
    !Array.isArray(movies)
  ) {

    console.error(
      "❌ movies.js의 movies 배열이 없습니다."
    );

    return false;
  }


  let valid =
    true;


  console.log(
    `🎬 현재 영화 수: ${movies.length}편`
  );


  /* ID 검사 */

  movies.forEach(
    (movie, index) => {

      const expectedId =
        index + 1;


      if (
        Number(movie.id) !==
        expectedId
      ) {

        console.error(
          `❌ ID 오류: ${movie.title} → 현재 ${movie.id}, 예상 ${expectedId}`
        );

        valid =
          false;
      }

    }
  );


  /* 중복 ID 검사 */

  const ids =
    movies.map(
      movie => movie.id
    );


  const duplicateIds =
    ids.filter(
      (id, index) =>
        ids.indexOf(id) !==
        index
    );


  if (
    duplicateIds.length > 0
  ) {

    console.error(
      "❌ 중복 ID:",
      duplicateIds
    );

    valid =
      false;
  }


  /* 필수 데이터 검사 */

  movies.forEach(
    movie => {

      if (!movie.title) {
        console.warn(
          "⚠️ 한국 제목 없음:",
          movie
        );
      }

      if (!movie.englishTitle) {
        console.warn(
          "⚠️ 영어 제목 없음:",
          movie
        );
      }

      if (!movie.year) {
        console.warn(
          "⚠️ 개봉연도 없음:",
          movie
        );
      }

      if (!movie.genre) {
        console.warn(
          "⚠️ 장르 없음:",
          movie
        );
      }

      if (!movie.director) {
        console.warn(
          "⚠️ 감독 없음:",
          movie
        );
      }

      if (!movie.ratings) {
        console.warn(
          "⚠️ 평점 데이터 없음:",
          movie
        );
      }

    }
  );


  if (valid) {

    console.log(
      `✅ 영화 데이터 검사 완료: ${movies.length}편`
    );

  }


  return valid;
}


/* =========================================================
   중복 영화 확인
   ========================================================= */

function debugDuplicateMovies() {

  if (
    typeof movies === "undefined" ||
    !Array.isArray(movies)
  ) {

    console.error(
      "movies 배열이 없습니다."
    );

    return [];
  }


  const seen =
    new Map();

  const duplicates =
    [];


  movies.forEach(
    movie => {

      const values = [

        movie.title,

        movie.englishTitle,

        ...(
          Array.isArray(
            movie.aliases
          )
            ? movie.aliases
            : toArray(
                movie.aliases
              )
        )

      ]
        .filter(Boolean)
        .map(
          value =>
            String(value)
              .trim()
              .toLowerCase()
        );


      values.forEach(
        value => {

          if (
            seen.has(value)
          ) {

            duplicates.push({
              value,
              first:
                seen.get(value),
              duplicate:
                movie
            });

          }

          else {

            seen.set(
              value,
              movie
            );

          }

        }
      );

    }
  );


  if (
    duplicates.length === 0
  ) {

    console.log(
      "✅ 중복 영화가 없습니다."
    );

  }

  else {

    console.warn(
      "⚠️ 중복 가능성이 있는 영화:",
      duplicates
    );

  }


  return duplicates;
}


/* =========================================================
   ID 연속성 확인
   ========================================================= */

function debugMovieIds() {

  if (
    typeof movies === "undefined" ||
    !Array.isArray(movies)
  ) {

    console.error(
      "movies 배열이 없습니다."
    );

    return [];
  }


  const errors =
    [];


  movies.forEach(
    (movie, index) => {

      const expected =
        index + 1;

      const actual =
        Number(movie.id);


      if (
        actual !== expected
      ) {

        errors.push({
          index,
          expected,
          actual,
          title:
            movie.title
        });

      }

    }
  );


  if (
    errors.length === 0
  ) {

    console.log(
      `✅ ID가 1부터 ${movies.length}까지 연속입니다.`
    );

  }

  else {

    console.warn(
      "⚠️ ID 오류:",
      errors
    );

  }


  return errors;
}


/* =========================================================
   전체 데이터 진단
   ========================================================= */

function debugAll() {

  console.group(
    "🔎 Too Space Cinema 전체 진단"
  );


  validateMovieData();

  debugMovies();

  debugRatings();

  debugDuplicateMovies();

  debugMovieIds();


  console.groupEnd();
}


/* =========================================================
   영화 정보 확인
   ========================================================= */

function debugMovies() {

  if (
    typeof movies === "undefined" ||
    !Array.isArray(movies)
  ) {

    console.error(
      "❌ movies 배열을 찾을 수 없습니다."
    );

    return;
  }


  console.group(
    "🎬 Too Space Cinema 영화 데이터"
  );


  console.log(
    "전체 영화 수:",
    movies.length
  );


  movies.forEach(
    movie => {

      console.log(
        `${movie.id}. ${movie.title} / ${movie.englishTitle}`
      );

    }
  );


  console.groupEnd();
}


/* =========================================================
   평점 데이터 확인
   ========================================================= */

function debugRatings() {

  if (
    typeof movies === "undefined" ||
    !Array.isArray(movies)
  ) {

    console.error(
      "movies 배열이 없습니다."
    );

    return;
  }


  console.group(
    "⭐ 영화 평점 확인"
  );


  movies.forEach(
    movie => {

      console.log(
        movie.title,
        {
          IMDb:
            movie.ratings?.imdb,

          CINE21:
            movie.ratings?.cine21,

          RottenTomatoes:
            movie.ratings
              ?.rottenTomatoes,

          Letterboxd:
            movie.ratings
              ?.letterboxd,

          종합:
            formatOverallRating(
              movie.ratings
            )
        }
      );

    }
  );


  console.groupEnd();
}


/* =========================================================
   검색 초기화
   ========================================================= */

function clearSearch() {

  currentSearch =
    "";


  if (searchInput) {
    searchInput.value =
      "";
  }


  displayCount =
    INITIAL_DISPLAY_COUNT;


  updateMovies();
}


/* =========================================================
   장르 초기화
   ========================================================= */

function clearGenre() {

  currentGenre =
    "전체";


  displayCount =
    INITIAL_DISPLAY_COUNT;


  if (genreButtons) {

    genreButtons
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


  updateMovies();
}


/* =========================================================
   필터 전체 초기화
   ========================================================= */

function resetFilters() {

  currentSearch =
    "";

  currentGenre =
    "전체";

  currentSort =
    "popular";

  displayCount =
    INITIAL_DISPLAY_COUNT;


  if (searchInput) {
    searchInput.value =
      "";
  }


  if (sortSelect) {
    sortSelect.value =
      "popular";
  }


  if (genreButtons) {

    genreButtons
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


  updateMovies();
}


/* =========================================================
   영화 ID로 찾기
   ========================================================= */

function findMovieById(id) {

  if (
    typeof movies === "undefined" ||
    !Array.isArray(movies)
  ) {
    return null;
  }


  return movies.find(
    movie =>
      Number(movie.id) ===
      Number(id)
  ) || null;
}


/* =========================================================
   영화 제목으로 찾기
   ========================================================= */

function findMovieByTitle(title) {

  if (
    typeof movies === "undefined" ||
    !Array.isArray(movies)
  ) {
    return null;
  }


  const keyword =
    String(title || "")
      .trim()
      .toLowerCase();


  if (!keyword) {
    return null;
  }


  return movies.find(
    movie => {

      const values = [

        movie.title,

        movie.englishTitle,

        ...(
          Array.isArray(
            movie.aliases
          )
            ? movie.aliases
            : toArray(
                movie.aliases
              )
        )

      ];


      return values
        .filter(Boolean)
        .some(
          value =>
            String(value)
              .trim()
              .toLowerCase() ===
            keyword
        );

    }
  ) || null;
}


/* =========================================================
   영화 상세 정보 반환
   ========================================================= */

function getMovieDetails(
  movie
) {

  if (!movie) {
    return null;
  }


  return {

    id:
      movie.id,

    title:
      movie.title,

    englishTitle:
      movie.englishTitle,

    year:
      movie.year,

    genre:
      getMovieGenres(movie),

    aliases:
      Array.isArray(
        movie.aliases
      )
        ? movie.aliases
        : toArray(
            movie.aliases
          ),

    director:
      movie.director || "",

    actors:
      Array.isArray(
        movie.actors
      )
        ? movie.actors
        : toArray(
            movie.actors
          ),

    poster:
      movie.poster || "",

    ratings:
      movie.ratings || {},

    overallRating:
      calculateOverallRating(
        movie.ratings
      ),

    description:
      movie.description || ""

  };
}


/* =========================================================
   가장 높은 평점 영화
   ========================================================= */

function getHighestRatedMovie(
  movieList = movies
) {

  if (
    !Array.isArray(movieList) ||
    movieList.length === 0
  ) {
    return null;
  }


  let highestMovie =
    null;

  let highestRating =
    -1;


  movieList.forEach(
    movie => {

      const rating =
        calculateOverallRating(
          movie.ratings
        );


      if (
        rating !== null &&
        rating > highestRating
      ) {

        highestRating =
          rating;

        highestMovie =
          movie;

      }

    }
  );


  return highestMovie;
}


/* =========================================================
   가장 오래된 영화
   ========================================================= */

function getOldestMovie(
  movieList = movies
) {

  if (
    !Array.isArray(movieList) ||
    movieList.length === 0
  ) {
    return null;
  }


  return [...movieList]
    .sort(
      (a, b) =>
        Number(a.year || 9999) -
        Number(b.year || 9999)
    )[0] || null;
}


/* =========================================================
   가장 최신 영화
   ========================================================= */

function getNewestMovie(
  movieList = movies
) {

  if (
    !Array.isArray(movieList) ||
    movieList.length === 0
  ) {
    return null;
  }


  return [...movieList]
    .sort(
      (a, b) =>
        Number(b.year || 0) -
        Number(a.year || 0)
    )[0] || null;
}


/* =========================================================
   장르별 영화 검색
   ========================================================= */

function getMoviesByGenre(
  genre
) {

  if (
    typeof movies === "undefined" ||
    !Array.isArray(movies)
  ) {
    return [];
  }


  if (
    !genre ||
    genre === "전체"
  ) {
    return [...movies];
  }


  return movies.filter(
    movie =>
      getMovieGenres(movie)
        .includes(genre)
  );
}


/* =========================================================
   감독별 영화 검색
   ========================================================= */

function getMoviesByDirector(
  director
) {

  if (
    typeof movies === "undefined" ||
    !Array.isArray(movies)
  ) {
    return [];
  }


  const keyword =
    String(director || "")
      .trim()
      .toLowerCase();


  if (!keyword) {
    return [];
  }


  return movies.filter(
    movie =>
      String(
        movie.director || ""
      )
        .toLowerCase()
        .includes(keyword)
  );
}


/* =========================================================
   배우별 영화 검색
   ========================================================= */

function getMoviesByActor(
  actor
) {

  if (
    typeof movies === "undefined" ||
    !Array.isArray(movies)
  ) {
    return [];
  }


  const keyword =
    String(actor || "")
      .trim()
      .toLowerCase();


  if (!keyword) {
    return [];
  }


  return movies.filter(
    movie => {

      const actors =
        Array.isArray(
          movie.actors
        )
          ? movie.actors
          : toArray(
              movie.actors
            );


      return actors.some(
        name =>
          String(name)
            .toLowerCase()
            .includes(keyword)
      );

    }
  );
}


/* =========================================================
   영화 개수 반환
   ========================================================= */

function getMovieCount() {

  if (
    typeof movies === "undefined" ||
    !Array.isArray(movies)
  ) {
    return 0;
  }


  return movies.length;
}


/* =========================================================
   장르 목록 반환
   ========================================================= */

function getAllGenres() {

  if (
    typeof movies === "undefined" ||
    !Array.isArray(movies)
  ) {
    return [];
  }


  const genres =
    new Set();


  movies.forEach(
    movie => {

      getMovieGenres(movie)
        .forEach(
          genre => {
            genres.add(genre);
          }
        );

    }
  );


  return Array.from(
    genres
  ).sort(
    (a, b) =>
      a.localeCompare(
        b,
        "ko"
      )
  );
}


/* =========================================================
   전역 함수 등록
   ========================================================= */

window.debugMovies =
  debugMovies;

window.debugRatings =
  debugRatings;

window.debugDuplicateMovies =
  debugDuplicateMovies;

window.debugMovieIds =
  debugMovieIds;

window.debugAll =
  debugAll;

window.clearSearch =
  clearSearch;

window.clearGenre =
  clearGenre;

window.resetFilters =
  resetFilters;

window.findMovieById =
  findMovieById;

window.findMovieByTitle =
  findMovieByTitle;

window.getMovieDetails =
  getMovieDetails;

window.getHighestRatedMovie =
  getHighestRatedMovie;

window.getOldestMovie =
  getOldestMovie;

window.getNewestMovie =
  getNewestMovie;

window.getMoviesByGenre =
  getMoviesByGenre;

window.getMoviesByDirector =
  getMoviesByDirector;

window.getMoviesByActor =
  getMoviesByActor;

window.getMovieCount =
  getMovieCount;

window.getAllGenres =
  getAllGenres;


/* =========================================================
   초기화
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  async () => {

    console.log(
      "🎬 Too Space Cinema 초기화 시작"
    );


    /* movies.js 확인 */

    if (
      typeof movies === "undefined" ||
      !Array.isArray(movies)
    ) {

      console.error(
        "❌ movies.js가 정상적으로 로드되지 않았습니다."
      );

      if (movieGrid) {

        movieGrid.innerHTML = `
          <div class="empty-message">
            영화 데이터를 불러오지 못했습니다.
          </div>
        `;

      }

      return;
    }


    /* 기본 화면 */

    createGenreButtons();

    updateMovies();

    setupEvents();

    validateMovieData();

    openMovieFromUrl();


    /* 포스터 */

    try {

      await resolvePosters();

      updateMovies();

    }

    catch (error) {

      console.warn(
        "포스터 처리 중 오류가 발생했습니다.",
        error
      );

    }


    console.log(
      `🎬 Too Space Cinema: ${movies.length}편 로드 완료`
    );

    console.log(
      "🔎 검색 / 장르 / 정렬 기능 준비 완료"
    );

    console.log(
      "⭐ IMDb / CINE21 / Rotten Tomatoes / Letterboxd 평점 사용"
    );

  }
);
