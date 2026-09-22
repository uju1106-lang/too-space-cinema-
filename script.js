/* =========================================================
   Too Space Cinema - script.js
   최종 통합본
   ========================================================= */


/* =========================================================
   기본 설정
   ========================================================= */

const POSTER_CACHE_KEY = "too-space-cinema-posters-v2";

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
   화면 표시 설정
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
   HTML 이스케이프
   ========================================================= */

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


/* =========================================================
   영화 장르 처리
   ========================================================= */

function getMovieGenres(movie) {
  if (Array.isArray(movie?.genre)) {
    return movie.genre
      .map(item => String(item).trim())
      .filter(Boolean);
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
    Rotten Tomatoes
    데이터에는 87처럼 입력
    화면에는 87% 표시
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

    const parsed = JSON.parse(cached);

    if (
      !parsed ||
      typeof parsed !== "object"
    ) {
      return {};
    }

    return parsed;

  } catch (error) {
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
  } catch (error) {
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
   영화 제목 정리
   ========================================================= */

function cleanMovieTitle(title) {
  return String(title || "")
    .replace(/\s+/g, " ")
    .trim();
}


/* =========================================================
   Wikipedia API 검색
   =========================================================

   기존 방식:
   영어 제목 페이지를 바로 열어서 thumbnail 사용

   문제:
   같은 이름의 음식/인물/다른 문서가 잡힐 수 있음.

   새로운 방식:
   1. 영어 제목 + film + 연도로 검색
   2. 검색 결과의 문서 제목 확인
   3. 영화 관련 문서인지 확인
   4. thumbnail/original 이미지 확인
   5. 조건이 맞지 않으면 포스터를 사용하지 않음
   ========================================================= */

async function searchWikipediaMovie(movie) {
  if (!movie) {
    return null;
  }

  const englishTitle =
    cleanMovieTitle(movie.englishTitle);

  const koreanTitle =
    cleanMovieTitle(movie.title);

  const year =
    Number(movie.year || 0);

  if (!englishTitle && !koreanTitle) {
    return null;
  }

  /*
    영어 제목을 우선 사용.
    "(film)"을 넣어 음식/인물/책 등의 동명 문서를 피함.
  */

  const queries = [];

  if (englishTitle) {
    if (year) {
      queries.push(
        `"${englishTitle}" film ${year}`
      );
    }

    queries.push(
      `"${englishTitle}" film`
    );

    queries.push(
      `${englishTitle} film`
    );
  }

  if (koreanTitle) {
    if (year) {
      queries.push(
        `"${koreanTitle}" 영화 ${year}`
      );
    }

    queries.push(
      `"${koreanTitle}" 영화`
    );
  }

  for (const query of queries) {
    try {
      const apiUrl =
        "https://en.wikipedia.org/w/api.php" +
        "?action=query" +
        "&generator=search" +
        "&gsrnamespace=0" +
        "&gsrlimit=8" +
        "&prop=pageimages|extracts|info" +
        "&exintro=true" +
        "&explaintext=true" +
        "&inprop=url" +
        "&piprop=thumbnail|original" +
        "&pithumbsize=600" +
        "&format=json" +
        "&origin=*" +
        "&gsrsearch=" +
        encodeURIComponent(query);

      const response =
        await fetch(apiUrl);

      if (!response.ok) {
        continue;
      }

      const data =
        await response.json();

      const pages =
        data?.query?.pages;

      if (!pages) {
        continue;
      }

      const candidates =
        Object.values(pages);

      /*
        후보를 하나씩 검사한다.
        첫 번째 사진이라고 무조건 사용하지 않는다.
      */

      for (const page of candidates) {
        if (!page) {
          continue;
        }

        const pageTitle =
          String(page.title || "");

        const extract =
          String(page.extract || "").toLowerCase();

        const thumbnail =
          page.thumbnail?.source || "";

        const original =
          page.original?.source || "";

        const imageUrl =
          original || thumbnail;

        if (!imageUrl) {
          continue;
        }

        /*
          영화 관련 문서인지 확인
        */

        const titleLower =
          pageTitle.toLowerCase();

        const englishLower =
          englishTitle.toLowerCase();

        const koreanLower =
          koreanTitle.toLowerCase();

        const titleMatchesEnglish =
          englishLower &&
          (
            titleLower === englishLower ||
            titleLower.includes(
              englishLower
            )
          );

        const titleMatchesKorean =
          koreanLower &&
          (
            pageTitle === koreanTitle ||
            pageTitle.includes(koreanTitle)
          );

        /*
          "(film)" 문서이면 매우 높은 신뢰도.
        */

        const isFilmPage =
          titleLower.includes("(film)") ||
          titleLower.includes("(movie)");

        /*
          설명에 영화 관련 표현이 있는지 확인
        */

        const looksLikeMovie =
          extract.includes("film") ||
          extract.includes("movie") ||
          extract.includes("american") ||
          extract.includes("south korean") ||
          extract.includes("british") ||
          extract.includes("french") ||
          extract.includes("japanese") ||
          extract.includes("korean");

        /*
          제목이 전혀 관계없는 경우 제외
        */

        if (
          !titleMatchesEnglish &&
          !titleMatchesKorean
        ) {
          continue;
        }

        /*
          음식/인물/동물 등의 동명이인 문서 방지
        */

        if (
          !isFilmPage &&
          !looksLikeMovie
        ) {
          continue;
        }

        /*
          개봉연도가 검색 결과 설명에 명확하게 있으면
          더 높은 신뢰도로 인정한다.

          단, Wikipedia 설명에 연도가 없을 수도 있으므로
          연도 불일치만으로 무조건 제외하지는 않는다.
        */

        if (year > 0) {
          const yearText =
            String(year);

          const previousYear =
            String(year - 1);

          const nextYear =
            String(year + 1);

          const hasCorrectYear =
            extract.includes(yearText) ||
            extract.includes(previousYear) ||
            extract.includes(nextYear);

          /*
            제목이 정확한 "(film)" 문서라면
            설명에 연도가 없어도 허용.
          */

          if (
            !hasCorrectYear &&
            !isFilmPage
          ) {
            continue;
          }
        }

        return {
          url: imageUrl,
          pageTitle: pageTitle
        };
      }

    } catch (error) {
      console.warn(
        `Wikipedia 포스터 검색 오류: ${movie.title}`,
        error
      );
    }
  }

  return null;
}


/* =========================================================
   포스터 가져오기
   ========================================================= */

async function fetchMoviePoster(movie) {
  if (!movie) {
    return "";
  }

  /*
    movies.js에 직접 poster URL이 있다면
    그것을 가장 우선 사용한다.
  */

  if (
    isValidPosterUrl(movie.poster)
  ) {
    return movie.poster;
  }

  /*
    Wikipedia 검색
  */

  const result =
    await searchWikipediaMovie(movie);

  if (
    result &&
    isValidPosterUrl(result.url)
  ) {
    return result.url;
  }

  /*
    확실하지 않으면 빈 값.
    엉뚱한 사진을 보여주는 것보다
    포스터 없음이 안전하다.
  */

  return "";
}


/* =========================================================
   현재 표시 영화의 포스터 처리
   ========================================================= */

async function resolveVisiblePosters() {
  if (
    typeof movies === "undefined" ||
    !Array.isArray(movies)
  ) {
    return;
  }

  const visibleMovies =
    currentMovies.slice(
      0,
      displayCount
    );

  const cache =
    getPosterCache();

  let cacheChanged = false;

  /*
    한 번에 너무 많은 요청을 보내지 않도록
    순차적으로 처리한다.
  */

  for (const movie of visibleMovies) {

    /*
      이미 movies.js에 직접 포스터가 있으면 사용
    */

    if (
      isValidPosterUrl(movie.poster)
    ) {
      cache[movie.id] =
        movie.poster;

      continue;
    }

    /*
      캐시가 있으면 사용
    */

    if (
      cache[movie.id] &&
      isValidPosterUrl(cache[movie.id])
    ) {
      movie.poster =
        cache[movie.id];

      continue;
    }

    /*
      포스터를 찾는다.
    */

    const poster =
      await fetchMoviePoster(movie);

    if (poster) {
      movie.poster =
        poster;

      cache[movie.id] =
        poster;

      cacheChanged = true;
    }

    /*
      한 영화씩 처리한 뒤 화면을 다시 갱신하지 않는다.
      현재 카드의 이미지만 직접 넣는다.
    */

    updatePosterImage(
      movie
    );
  }

  if (cacheChanged) {
    savePosterCache(cache);
  }
}


/* =========================================================
   포스터 이미지 업데이트
   ========================================================= */

function updatePosterImage(movie) {
  if (!movieGrid || !movie) {
    return;
  }

  const card =
    movieGrid.querySelector(
      `.movie-card[data-movie-id="${CSS.escape(String(movie.id))}"]`
    );

  if (!card) {
    return;
  }

  const wrapper =
    card.querySelector(
      ".poster-wrapper"
    );

  if (!wrapper) {
    return;
  }

  if (
    !isValidPosterUrl(movie.poster)
  ) {
    return;
  }

  const existingImage =
    wrapper.querySelector("img");

  if (existingImage) {
    return;
  }

  /*
    기존 POSTER 문구 제거
  */

  wrapper.innerHTML = "";

  const image =
    document.createElement("img");

  image.src =
    movie.poster;

  image.alt =
    `${movie.title || "영화"} 포스터`;

  image.loading =
    "lazy";

  image.decoding =
    "async";

  image.onerror = () => {
    /*
      잘못된 이미지가 확인되면
      캐시에서도 제거한다.
    */

    const cache =
      getPosterCache();

    delete cache[movie.id];

    savePosterCache(cache);

    movie.poster = "";

    wrapper.innerHTML = `
      <span>POSTER</span>
    `;
  };

  wrapper.appendChild(
    image
  );

  /*
    카드의 평점 오버레이를 다시 붙인다.
  */

  const overlay =
    document.createElement("div");

  overlay.className =
    "poster-overlay";

  const rating =
    formatOverallRating(
      movie.ratings
    );

  overlay.innerHTML = `
    <div class="poster-rating">
      ★ ${escapeHtml(rating)}
    </div>
  `;

  wrapper.appendChild(
    overlay
  );
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
    String(movie.id);


  /* -------------------------------------------------------
     포스터
     ------------------------------------------------------- */

  const posterWrapper =
    document.createElement(
      "div"
    );

  posterWrapper.className =
    "poster-wrapper";


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

    image.decoding =
      "async";

    image.onerror = () => {
      /*
        잘못된 포스터가 뜨면 즉시 제거
      */

      const cache =
        getPosterCache();

      delete cache[movie.id];

      savePosterCache(cache);

      movie.poster = "";

      posterWrapper.innerHTML = `
        <span>POSTER</span>
      `;
    };

    posterWrapper.appendChild(
      image
    );

  } else {

    posterWrapper.innerHTML = `
      <span>POSTER</span>
    `;
  }


  /* -------------------------------------------------------
     포스터 평점
     ------------------------------------------------------- */

  const posterOverlay =
    document.createElement(
      "div"
    );

  posterOverlay.className =
    "poster-overlay";

  const overall =
    formatOverallRating(
      movie.ratings
    );

  posterOverlay.innerHTML = `
    <div class="poster-rating">
      ★ ${escapeHtml(overall)}
    </div>
  `;

  posterWrapper.appendChild(
    posterOverlay
  );


  /* -------------------------------------------------------
     영화 정보
     ------------------------------------------------------- */

  const info =
    document.createElement(
      "div"
    );

  info.className =
    "movie-info";


  /* 제목 */

  const title =
    document.createElement(
      "h3"
    );

  title.className =
    "movie-title";

  title.textContent =
    movie.title ||
    "제목 없음";


  /* 영어 제목 */

  const englishTitle =
    document.createElement(
      "p"
    );

  englishTitle.className =
    "movie-original";

  englishTitle.textContent =
    movie.englishTitle ||
    "";


  /* 연도 + 장르 */

  const meta =
    document.createElement(
      "div"
    );

  meta.className =
    "movie-meta";

  const genres =
    getMovieGenres(movie);

  meta.textContent =
    [
      movie.year || "",
      ...genres
    ]
      .filter(Boolean)
      .join(" · ");


  /* 종합 평점 */

  const score =
    document.createElement(
      "div"
    );

  score.className =
    "movie-score";

  score.innerHTML = `
    <span>종합 평점</span>
    <strong>
      ${escapeHtml(
        formatOverallRating(
          movie.ratings
        )
      )}
    </strong>
    <span>/ 10</span>
  `;


  info.appendChild(
    title
  );

  if (movie.englishTitle) {
    info.appendChild(
      englishTitle
    );
  }

  info.appendChild(
    meta
  );

  info.appendChild(
    score
  );


  card.appendChild(
    posterWrapper
  );

  card.appendChild(
    info
  );


  /* -------------------------------------------------------
     클릭 → 상세정보
     ------------------------------------------------------- */

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

    if (loadMoreButton) {
      loadMoreButton.classList.add(
        "hidden"
      );
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

      loadMoreButton.classList.remove(
        "hidden"
      );

      loadMoreButton.textContent =
        `더 많은 영화 보기 (${visibleMovies.length}/${movieList.length})`;

    } else {

      loadMoreButton.classList.add(
        "hidden"
      );

    }
  }


  /*
    카드가 만들어진 후
    표시된 영화의 포스터를 확인
  */

  setTimeout(
    () => {
      resolveVisiblePosters();
    },
    0
  );
}


/* =========================================================
   장르 버튼 생성
   ========================================================= */

function createGenreButtons() {

  if (!genreButtons) {
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


  /* 전체 */

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


  /* 장르 */

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

function setCurrentGenre(genre) {

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


  /* -------------------------------------------------------
     정렬
     ------------------------------------------------------- */

  switch (currentSort) {

    /*
      인기순:
      별도 인기 데이터가 없으므로
      movies.js의 기본 순서를 유지
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
   영화 개수
   ========================================================= */

function updateMovieCount(count) {

  if (resultCount) {
    resultCount.textContent =
      String(count);
  }

  document
    .querySelectorAll(
      ".movie-count"
    )
    .forEach(
      element => {
        element.textContent =
          `${count}편`;
      }
    );
}


/* =========================================================
   검색창 버튼 표시
   ========================================================= */

function updateClearSearchButton() {

  if (!clearSearchButton) {
    return;
  }

  const hasText =
    Boolean(
      safeString(
        searchInput?.value
      )
    );

  clearSearchButton.classList.toggle(
    "show",
    hasText
  );
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

  updateClearSearchButton();

  displayCount =
    INITIAL_DISPLAY_COUNT;

  updateMovies();
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

      updateClearSearchButton();

      updateMovies();
    }
  );


  if (clearSearchButton) {

    clearSearchButton.addEventListener(
      "click",
      clearSearch
    );
  }

  updateClearSearchButton();
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
   필터 초기화
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


  updateClearSearchButton();


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
   평점 항목
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
    "rating-name";

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
   평점 영역
   ========================================================= */

function createRatingsElement(
  ratings
) {

  const section =
    document.createElement(
      "section"
    );

  section.className =
    "rating-section";


  const heading =
    document.createElement(
      "h3"
    );

  heading.textContent =
    "사이트별 평점";


  const list =
    document.createElement(
      "div"
    );

  list.className =
    "rating-list";


  Object.keys(
    RATING_SCALES
  ).forEach(
    site => {

      list.appendChild(
        createRatingItem(
          site,
          ratings
            ? ratings[site]
            : null
        )
      );

    }
  );


  section.appendChild(
    heading
  );

  section.appendChild(
    list
  );


  return section;
}


/* =========================================================
   상세 모달 열기
   ========================================================= */

function openModal(movie) {

  if (
    !movieModal ||
    !modalBody
  ) {
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
        <div>
          POSTER
        </div>
      `;


  /* 장르 */

  const genresHtml =
    genres
      .map(
        genre => `
          <span class="modal-tag">
            ${escapeHtml(
              genre
            )}
          </span>
        `
      )
      .join("");


  /* 별칭 */

  const aliasesText =
    aliases.length > 0
      ? aliases
          .map(
            alias =>
              escapeHtml(alias)
          )
          .join(", ")
      : "없음";


  /* 배우 */

  const actorsText =
    actors.length > 0
      ? actors
          .map(
            actor =>
              escapeHtml(actor)
          )
          .join(", ")
      : "없음";


  /* 모달 */

  modalBody.innerHTML = `
    <div class="modal-inner">

      <div class="modal-poster">
        ${posterHtml}
      </div>

      <div class="modal-info">

        <h2 class="modal-title">
          ${escapeHtml(
            movie.title ||
            "제목 없음"
          )}
        </h2>

        <p class="modal-original">
          ${escapeHtml(
            movie.englishTitle ||
            ""
          )}
        </p>

        <div class="modal-basic">

          <span class="modal-tag">
            ${escapeHtml(
              String(
                movie.year ||
                ""
              )
            )}
          </span>

          ${genresHtml}

        </div>

        <div class="movie-score">
          <span>종합 평점</span>

          <strong>
            ${escapeHtml(
              overall
            )}
          </strong>

          <span>/ 10</span>
        </div>

        <div class="modal-description">

          <p>
            <strong>감독</strong><br>
            ${escapeHtml(
              movie.director ||
              "없음"
            )}
          </p>

          <p>
            <strong>출연</strong><br>
            ${actorsText}
          </p>

          <p>
            <strong>별칭</strong><br>
            ${aliasesText}
          </p>

        </div>

        ${
          movie.description
            ? `
              <div class="modal-description">
                <h3>줄거리</h3>

                <p>
                  ${escapeHtml(
                    movie.description
                  )}
                </p>
              </div>
            `
            : ""
        }

        ${createRatingsHtml(
          movie.ratings
        )}

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
   평점 HTML
   ========================================================= */

function createRatingsHtml(
  ratings
) {

  const items =
    Object.keys(
      RATING_SCALES
    )
      .map(
        site => {

          const value =
            ratings
              ? ratings[site]
              : null;

          return `
            <div class="rating-item">

              <span class="rating-name">
                ${escapeHtml(
                  SITE_NAMES[site] ||
                  site
                )}
              </span>

              <strong class="rating-value">
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


  return `
    <section class="rating-section">

      <h3>
        사이트별 평점
      </h3>

      <div class="rating-list">
        ${items}
      </div>

    </section>
  `;
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
   이벤트 전체 설정
   ========================================================= */

function setupEvents() {

  setupSearchEvent();

  setupSortEvent();

  setupGenreEvent();

  setupLoadMoreEvent();

  setupResetEvent();


  if (modalClose) {

    modalClose.addEventListener(
      "click",
      closeModal
    );
  }


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
        event.key === "Escape"
      ) {
        closeModal();
      }

    }
  );
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

  return Number.isFinite(number)
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


  let valid = true;


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

        valid = false;
      }

    }
  );


  /* 중복 ID */

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

    valid = false;
  }


  /* 필수 데이터 */

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

function normalizeDuplicateText(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[’‘'"]/g, "");
}


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
        ...toArray(
          movie.aliases
        )
      ]
        .filter(Boolean)
        .map(
          normalizeDuplicateText
        );


      values.forEach(
        value => {

          if (
            !value
          ) {
            return;
          }

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

          } else {

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

  } else {

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
    return [];
  }

  const errors = [];

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

  } else {

    console.warn(
      "⚠️ ID 오류:",
      errors
    );
  }


  return errors;
}


/* =========================================================
   영화 정보 확인
   ========================================================= */

function debugMovies() {

  if (
    typeof movies === "undefined" ||
    !Array.isArray(movies)
  ) {
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
   영화 ID로 찾기
   ========================================================= */

function findMovieById(id) {

  if (
    typeof movies === "undefined" ||
    !Array.isArray(movies)
  ) {
    return null;
  }

  return (
    movies.find(
      movie =>
        Number(movie.id) ===
        Number(id)
    ) || null
  );
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
    normalizeDuplicateText(
      title
    );

  if (!keyword) {
    return null;
  }

  return (
    movies.find(
      movie => {

        const values = [
          movie.title,
          movie.englishTitle,
          ...toArray(
            movie.aliases
          )
        ];

        return values
          .filter(Boolean)
          .some(
            value =>
              normalizeDuplicateText(
                value
              ) === keyword
          );
      }
    ) || null
  );
}


/* =========================================================
   영화 상세 정보
   ========================================================= */

function getMovieDetails(movie) {

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
   장르별 영화
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
   감독별 영화
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
   배우별 영화
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
   영화 개수
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
   장르 목록
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
  () => {
    setCurrentGenre("전체");
  };

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
  () => {

    console.log(
      "🎬 Too Space Cinema 초기화 시작"
    );


    /*
      movies.js 확인
    */

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


    /*
      기본 화면
    */

    createGenreButtons();

    updateMovies();

    setupEvents();

    validateMovieData();

    openMovieFromUrl();


    /*
      기존에 잘못 저장되어 있던
      구버전 캐시는 사용하지 않는다.

      POSTER_CACHE_KEY가 v2이므로
      기존 v1 캐시는 자동으로 무시된다.
    */

    console.log(
      "🖼️ 새 포스터 검색 시스템 활성화"
    );


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
