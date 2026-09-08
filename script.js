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

===================================================== */


/* =====================================================
   MOVIE DATABASE
===================================================== */

const movies = [

  {
    id: 1,

    title: "파묘",
    englishTitle: "Exhuma",

    year: 2024,

    genre: [
      "공포",
      "미스터리",
      "드라마"
    ],

    aliases: [
      "파묘",
      "EXHUMA",
      "엑슈마"
    ],

    director: "장재현",

    actors: [
      "최민식",
      "김고은",
      "유해진",
      "이도현"
    ],

    poster:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Exhuma_%282024%29_film_poster.jpg/500px-Exhuma_%282024%29_film_poster.jpg",

    ratings: {
      imdb: 6.9,
      naver: "없음",
      cine21: "없음",
      rottenTomatoes: "없음",
      letterboxd: 3.5
    },

    description:
      "무덤을 파헤친 뒤 벌어지는 기이한 사건을 다룬 미스터리 오컬트 영화."
  },


  {
    id: 2,

    title: "인터스텔라",
    englishTitle: "Interstellar",

    year: 2014,

    genre: [
      "SF",
      "드라마",
      "어드벤처"
    ],

    aliases: [
      "인터스텔라",
      "INTERSTELLAR",
      "INTER STELLAR"
    ],

    director: "크리스토퍼 놀란",

    actors: [
      "매튜 맥커너히",
      "앤 해서웨이",
      "제시카 차스테인"
    ],

    poster:
      "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",

    ratings: {
      imdb: 8.7,
      naver: "없음",
      cine21: "없음",
      rottenTomatoes: "없음",
      letterboxd: 4.4
    },

    description:
      "인류의 새로운 터전을 찾기 위해 우주로 떠난 탐사대의 이야기를 그린 SF 영화."
  },


  {
    id: 3,

    title: "범죄도시 4",
    englishTitle: "The Roundup: Punishment",

    year: 2024,

    genre: [
      "액션",
      "범죄"
    ],

    aliases: [
      "범죄도시4",
      "범죄도시 4",
      "THE ROUNDUP PUNISHMENT"
    ],

    director: "허명행",

    actors: [
      "마동석",
      "김무열",
      "박지환",
      "이동휘"
    ],

    poster:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Roundup_Punishment.jpg/500px-The_Roundup_Punishment.jpg",

    ratings: {
      imdb: 6.5,
      naver: "없음",
      cine21: "없음",
      rottenTomatoes: "없음",
      letterboxd: 3.0
    },

    description:
      "괴물형사 마석도가 온라인 불법 도박 조직을 소탕하기 위해 벌이는 액션 범죄 영화."
  },


  {
    id: 4,

    title: "인사이드 아웃 2",
    englishTitle: "Inside Out 2",

    year: 2024,

    genre: [
      "애니메이션",
      "코미디",
      "가족"
    ],

    aliases: [
      "인사이드아웃2",
      "인사이드 아웃2",
      "INSIDE OUT 2",
      "INSIDEOUT2"
    ],

    director: "켈시 만",

    actors: [
      "에이미 포엘러",
      "마야 호크",
      "켄싱턴 톨먼"
    ],

    poster:
      "https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg",

    ratings: {
      imdb: 7.5,
      naver: "없음",
      cine21: "없음",
      rottenTomatoes: "없음",
      letterboxd: 3.8
    },

    description:
      "라일리의 성장과 함께 새로운 감정들이 등장하면서 벌어지는 이야기를 그린 애니메이션."
  },


  {
    id: 5,

    title: "헤어질 결심",
    englishTitle: "Decision to Leave",

    year: 2022,

    genre: [
      "멜로",
      "미스터리",
      "범죄"
    ],

    aliases: [
      "헤어질결심",
      "DECISION TO LEAVE"
    ],

    director: "박찬욱",

    actors: [
      "박해일",
      "탕웨이",
      "이정현"
    ],

    poster:
      "https://upload.wikimedia.org/wikipedia/en/4/4a/Decision_to_Leave.jpg",

    ratings: {
      imdb: 7.3,
      naver: "없음",
      cine21: "없음",
      rottenTomatoes: "없음",
      letterboxd: 4.0
    },

    description:
      "한 남자의 죽음을 수사하던 형사가 사망자의 아내에게 묘한 감정을 느끼면서 벌어지는 이야기."
  },


  {
    id: 6,

    title: "기생충",
    englishTitle: "Parasite",

    year: 2019,

    genre: [
      "드라마",
      "스릴러"
    ],

    aliases: [
      "기생충",
      "PARASITE",
      "패러사이트"
    ],

    director: "봉준호",

    actors: [
      "송강호",
      "이선균",
      "조여정",
      "최우식"
    ],

    poster:
      "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png",

    ratings: {
      imdb: 8.5,
      naver: "없음",
      cine21: "없음",
      rottenTomatoes: "없음",
      letterboxd: 4.5
    },

    description:
      "서로 다른 두 가족이 만나면서 벌어지는 이야기를 통해 계층과 사회의 모습을 보여주는 영화."
  },


  {
    id: 7,

    title: "올드보이",
    englishTitle: "Oldboy",

    year: 2003,

    genre: [
      "스릴러",
      "미스터리",
      "액션"
    ],

    aliases: [
      "올드 보이",
      "OLDBOY",
      "OLD BOY"
    ],

    director: "박찬욱",

    actors: [
      "최민식",
      "유지태",
      "강혜정"
    ],

    poster:
      "https://upload.wikimedia.org/wikipedia/en/6/67/Oldboy_%282003_film%29.jpg",

    ratings: {
      imdb: 8.1,
      naver: "없음",
      cine21: "없음",
      rottenTomatoes: "없음",
      letterboxd: 4.2
    },

    description:
      "15년 동안 이유도 모른 채 감금되었던 남자가 풀려난 뒤 자신을 가둔 사람을 찾아 나서는 이야기."
  },


  {
    id: 8,

    title: "라라랜드",
    englishTitle: "La La Land",

    year: 2016,

    genre: [
      "뮤지컬",
      "로맨스",
      "드라마"
    ],

    aliases: [
      "라라 랜드",
      "LALALAND",
      "LA LA LAND"
    ],

    director: "데이미언 셔젤",

    actors: [
      "라이언 고슬링",
      "엠마 스톤"
    ],

    poster:
      "https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png",

    ratings: {
      imdb: 8.0,
      naver: "없음",
      cine21: "없음",
      rottenTomatoes: "없음",
      letterboxd: 4.0
    },

    description:
      "꿈을 좇는 두 사람이 만나 사랑과 현실 사이에서 선택을 고민하는 뮤지컬 영화."
  },


  {
    id: 9,

    title: "오펜하이머",
    englishTitle: "Oppenheimer",

    year: 2023,

    genre: [
      "드라마",
      "역사"
    ],

    aliases: [
      "OPPENHEIMER",
      "오펜하이머"
    ],

    director: "크리스토퍼 놀란",

    actors: [
      "킬리언 머피",
      "에밀리 블런트",
      "로버트 다우니 주니어"
    ],

    poster:
      "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg",

    ratings: {
      imdb: 8.2,
      naver: "없음",
      cine21: "없음",
      rottenTomatoes: "없음",
      letterboxd: 4.2
    },

    description:
      "원자폭탄 개발 프로젝트를 이끈 물리학자 J. 로버트 오펜하이머의 삶을 다룬 영화."
  },


  {
    id: 10,

    title: "서브스턴스",
    englishTitle: "The Substance",

    year: 2024,

    genre: [
      "공포",
      "SF",
      "스릴러"
    ],

    aliases: [
      "더 서브스턴스",
      "THE SUBSTANCE"
    ],

    director: "코랄리 파르자",

    actors: [
      "데미 무어",
      "마거릿 퀄리",
      "데니스 퀘이드"
    ],

    poster:
      "https://upload.wikimedia.org/wikipedia/en/7/76/The_Substance_%282024_film%29.jpg",

    ratings: {
      imdb: 7.3,
      naver: "없음",
      cine21: "없음",
      rottenTomatoes: "없음",
      letterboxd: 3.8
    },

    description:
      "새로운 자신을 만들어내는 정체불명의 물질을 둘러싸고 벌어지는 SF 스릴러 영화."
  }

];


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
   RATING SYSTEM
===================================================== */

/*
  모든 평점을 10점 만점으로 변환한다.

  IMDb
  10점 → 그대로

  NAVER
  10점 → 그대로

  CINE21
  5점 → ×2

  Letterboxd
  5점 → ×2

  Rotten Tomatoes
  100점 → ÷10
*/

const RATING_SCALES = {

  imdb: 10,

  naver: 10,

  cine21: 5,

  rottenTomatoes: 100,

  letterboxd: 5

};


/*
  평점 이름
*/

const RATING_NAMES = {

  imdb: "IMDb",

  naver: "NAVER",

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

    converted = number;

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

  중요:
  - 없음 제외
  - 각 사이트를 10점으로 변환
  - 실제 존재하는 평점만 평균
*/

function getOverallRating(movie) {

  const sites = [
    "imdb",
    "naver",
    "cine21",
    "rottenTomatoes",
    "letterboxd"
  ];


  const ratings = sites
    .map(site =>
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
      ) => total + value,
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
  () => {

    createGenreButtons();

    updateMovies();

    setupEvents();

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

        searchInput.value = "";

        currentSearch = "";

        clearSearch.classList.remove(
          "show"
        );

        updateMovies();

        searchInput.focus();

      }
    );

  }


  if (sortSelect) {

    sortSelect.addEventListener(
      "change",
      () => {

        currentSort =
          sortSelect.value;

        currentPage = 1;

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

  return String(text || "")
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(
      /[^\p{L}\p{N}]/gu,
      ""
    );

}


function handleSearch(event) {

  currentSearch =
    event.target.value.trim();


  currentPage = 1;


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


  /*
    기존 버튼이 있으면
    중복 생성 방지
  */

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


  /*
    전체 버튼이 없다면 생성
  */

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


  /*
    전체를 기본 활성화
  */

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


      currentPage = 1;


      updateMovies();

    }
  );

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


    case "naver":

      sorted.sort(
        (a, b) =>
          (
            getNormalizedRating(
              b,
              "naver"
            )
            ?? -1
          ) -
          (
            getNormalizedRating(
              a,
              "naver"
            )
            ?? -1
          )
      );

      break;


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


  currentPage = 1;


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


  movieGrid.innerHTML = "";


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


  card.innerHTML = `

    <div class="poster-wrapper">

      <img
        src="${escapeAttribute(movie.poster)}"
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
          src="${escapeAttribute(movie.poster)}"
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
              "NAVER",
              ratings.naver,
              "naver"
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


/*
  종합평점 표시
*/

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
   DEBUG / DATA CHECK
===================================================== */

/*
  개발 중 콘솔에서
  영화 데이터 상태를 확인할 수 있다.
*/

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
  getOverallRating(movies[0])

*/
