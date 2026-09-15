// ==========================================
// 1. 전역 상태 및 설정 (State & Config)
// ==========================================
let currentMovies = [];
let currentGenre = 'ALL';
let currentSort = 'title-asc';
let currentSearch = '';
let selectedMovie = null;

// 평점 환산 기준 (10점 만점 기준)
const RATING_SCALES = {
    imdb: 10,
    cine21: 10,
    rottenTomatoes: 100, // 100% -> 10점 만점 (÷10)
    letterboxd: 5        // 5점 만점 -> 10점 만점 (×2)
};

// ==========================================
// 2. 헬퍼 및 유틸리티 함수 (Utility Functions)
// ==========================================

// HTML 특수문자 이스케이프 (XSS 방지)
function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// 영화 데이터 내 장르 배열 추출 (문자열/배열 모두 지원)
function getGenreArray(movie) {
    if (!movie.genre) return [];
    if (Array.isArray(movie.genre)) return movie.genre;
    return movie.genre.split(',').map(g => g.trim());
}

// 영화 데이터 내 출연진 배열 추출 (cast / actors 모두 지원)
function getCastArray(movie) {
    const cast = movie.cast || movie.actors || [];
    if (Array.isArray(cast)) return cast;
    return String(cast).split(',').map(c => c.trim());
}

// 평점 정규화 (10점 만점 기준 계산)
function normalizeRating(source, score) {
    const numericScore = parseFloat(score);
    if (isNaN(numericScore)) return 0;

    const lowerSource = source.toLowerCase();
    if (lowerSource.includes('rottentomatoes') || lowerSource.includes('rotten')) {
        return numericScore / 10;
    } else if (lowerSource.includes('letterboxd')) {
        return numericScore * 2;
    }
    return numericScore;
}

// 종합 평균 평점 계산
function calculateAverageRating(ratings) {
    if (!ratings || Object.keys(ratings).length === 0) return 0;

    let totalNormalized = 0;
    let count = 0;

    for (const [source, score] of Object.entries(ratings)) {
        totalNormalized += normalizeRating(source, score);
        count++;
    }

    return count > 0 ? (totalNormalized / count).toFixed(1) : 0;
}

// ==========================================
// 3. 포스터 캐시 & 위키피디아 API
// ==========================================
function getPosterCache(title) {
    try {
        const cache = localStorage.getItem(`poster_${title}`);
        return cache ? JSON.parse(cache) : null;
    } catch (e) {
        return null;
    }
}

function savePosterCache(title, url) {
    try {
        localStorage.setItem(`poster_${title}`, JSON.stringify({ url, timestamp: Date.now() }));
    } catch (e) {
        console.warn('포스터 캐시 저장 실패:', e);
    }
}

async function fetchWikipediaPoster(englishTitle) {
    if (!englishTitle) return null;

    const cached = getPosterCache(englishTitle);
    if (cached) return cached.url;

    try {
        const formattedTitle = encodeURIComponent(englishTitle.replace(/ /g, '_'));
        const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${formattedTitle}`);
        if (!response.ok) return null;

        const data = await response.json();
        const imageUrl = data.thumbnail ? data.thumbnail.source : null;

        if (imageUrl) {
            savePosterCache(englishTitle, imageUrl);
        }
        return imageUrl;
    } catch (error) {
        console.error('위키피디아 포스터 로드 실패:', error);
        return null;
    }
}

// ==========================================
// 4. 검색, 필터링 및 정렬 (Filtering & Sorting)
// ==========================================
function movieMatchesSearch(movie, keyword) {
    if (!keyword) return true;
    const cleanKeyword = keyword.trim().toLowerCase();

    const titleKo = (movie.title || '').toLowerCase();
    const titleEn = (movie.englishTitle || movie.titleEn || '').toLowerCase();
    const aliases = (movie.aliases || []).join(' ').toLowerCase();
    const director = (movie.director || '').toLowerCase();
    const cast = getCastArray(movie).join(' ').toLowerCase();
    const genres = getGenreArray(movie).join(' ').toLowerCase();

    return titleKo.includes(cleanKeyword) ||
           titleEn.includes(cleanKeyword) ||
           aliases.includes(cleanKeyword) ||
           director.includes(cleanKeyword) ||
           cast.includes(cleanKeyword) ||
           genres.includes(cleanKeyword);
}

function filterAndSortMovies() {
    let result = [...currentMovies];

    // 장르 필터
    if (currentGenre !== 'ALL') {
        result = result.filter(movie => getGenreArray(movie).includes(currentGenre));
    }

    // 검색어 필터
    if (currentSearch) {
        result = result.filter(movie => movieMatchesSearch(movie, currentSearch));
    }

    // 정렬
    result.sort((a, b) => {
        const ratingA = parseFloat(calculateAverageRating(a.ratings));
        const ratingB = parseFloat(calculateAverageRating(b.ratings));

        switch (currentSort) {
            case 'title-asc':
                return a.title.localeCompare(b.title, 'ko');
            case 'title-desc':
                return b.title.localeCompare(a.title, 'ko');
            case 'year-asc':
                return a.year - b.year;
            case 'year-desc':
                return b.year - a.year;
            case 'rating-desc':
                return ratingB - ratingA;
            case 'rating-asc':
                return ratingA - ratingB;
            default:
                return 0;
        }
    });

    return result;
}

// ==========================================
// 5. DOM 렌더링 (UI Rendering)
// ==========================================
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.dataset.id = movie.id;

    const avgRating = calculateAverageRating(movie.ratings);
    const genresList = getGenreArray(movie);
    const genresHtml = genresList.map(g => `<span class="genre-tag">${escapeHtml(g)}</span>`).join('');

    const defaultImage = 'https://via.placeholder.com/300x450?text=No+Image';
    const posterSrc = movie.posterUrl || movie.poster || defaultImage;

    card.innerHTML = `
        <div class="poster-wrapper">
            <img class="poster-img" src="${escapeHtml(posterSrc)}" alt="${escapeHtml(movie.title)}" loading="lazy" />
            <div class="rating-badge">★ ${avgRating}</div>
        </div>
        <div class="movie-info">
            <h3 class="movie-title">${escapeHtml(movie.title)}</h3>
            <p class="movie-year">${movie.year}</p>
            <div class="movie-genres">${genresHtml}</div>
        </div>
    `;

    const imgElement = card.querySelector('.poster-img');
    
    // 포스터가 없거나 이미지 경로 에러 시 위키피디아 자동 검색
    const englishTitle = movie.englishTitle || movie.titleEn;
    if ((!movie.posterUrl && !movie.poster) && englishTitle) {
        fetchWikipediaPoster(englishTitle).then(wikiPoster => {
            if (wikiPoster) imgElement.src = wikiPoster;
        });
    }

    imgElement.onerror = async () => {
        if (englishTitle) {
            const wikiPoster = await fetchWikipediaPoster(englishTitle);
            if (wikiPoster) {
                imgElement.src = wikiPoster;
                return;
            }
        }
        imgElement.src = defaultImage;
    };

    card.addEventListener('click', () => openModal(movie));
    return card;
}

function renderMovies() {
    const container = document.getElementById('movieGrid');
    if (!container) return;

    container.innerHTML = '';
    const filteredMovies = filterAndSortMovies();

    if (filteredMovies.length === 0) {
        container.innerHTML = `<div class="no-results"><p>검색 결과가 없습니다.</p></div>`;
        return;
    }

    const fragment = document.createDocumentFragment();
    filteredMovies.forEach(movie => {
        fragment.appendChild(createMovieCard(movie));
    });
    container.appendChild(fragment);
}

function renderGenreButtons() {
    const container = document.getElementById('genreButtons');
    if (!container) return;

    const genresSet = new Set(['ALL']);
    currentMovies.forEach(m => {
        getGenreArray(m).forEach(g => genresSet.add(g));
    });

    container.innerHTML = '';
    genresSet.forEach(genre => {
        const btn = document.createElement('button');
        btn.className = `genre-btn ${genre === currentGenre ? 'active' : ''}`;
        btn.textContent = genre === 'ALL' ? '전체' : genre;
        btn.addEventListener('click', () => {
            currentGenre = genre;
            document.querySelectorAll('.genre-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMovies();
        });
        container.appendChild(btn);
    });
}

// ==========================================
// 6. 모달 창 (Modal UI)
// ==========================================
function openModal(movie) {
    selectedMovie = movie;
    const modal = document.getElementById('movieModal');
    if (!modal) return;

    const avgRating = calculateAverageRating(movie.ratings);

    let ratingsHtml = '';
    if (movie.ratings) {
        ratingsHtml = Object.entries(movie.ratings).map(([site, score]) => `
            <div class="rating-item">
                <span class="site-name">${escapeHtml(site.toUpperCase())}</span>
                <span class="site-score">${escapeHtml(String(score))}</span>
            </div>
        `).join('');
    }

    const titleEl = document.getElementById('modalTitle');
    if (titleEl) titleEl.textContent = movie.title || '';

    const titleEnEl = document.getElementById('modalTitleEn');
    if (titleEnEl) titleEnEl.textContent = movie.englishTitle || movie.titleEn || '';

    const yearEl = document.getElementById('modalYear');
    if (yearEl) yearEl.textContent = movie.year || '';

    const directorEl = document.getElementById('modalDirector');
    if (directorEl) directorEl.textContent = movie.director || '정보 없음';

    const castEl = document.getElementById('modalCast');
    if (castEl) castEl.textContent = getCastArray(movie).join(', ') || '정보 없음';

    const plotEl = document.getElementById('modalPlot');
    if (plotEl) plotEl.textContent = movie.description || movie.plot || '줄거리 정보가 없습니다.';

    const avgRatingEl = document.getElementById('modalAvgRating');
    if (avgRatingEl) avgRatingEl.textContent = avgRating;

    const ratingsListEl = document.getElementById('modalRatingsList');
    if (ratingsListEl) ratingsListEl.innerHTML = ratingsHtml;

    const modalPoster = document.getElementById('modalPoster');
    if (modalPoster) {
        const defaultImage = 'https://via.placeholder.com/300x450?text=No+Image';
        modalPoster.src = movie.posterUrl || movie.poster || defaultImage;

        const englishTitle = movie.englishTitle || movie.titleEn;
        if ((!movie.posterUrl && !movie.poster) && englishTitle) {
            fetchWikipediaPoster(englishTitle).then(wikiPoster => {
                if (wikiPoster) modalPoster.src = wikiPoster;
            });
        }
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('movieModal');
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
    selectedMovie = null;
}

// ==========================================
// 7. 데이터 검증 및 디버깅 도구
// ==========================================
function validateMovieData(movies) {
    const errors = [];
    const ids = new Set();

    if (!Array.isArray(movies)) {
        return { valid: false, errors: ['영화 데이터가 배열 형태가 아닙니다.'] };
    }

    movies.forEach((movie, idx) => {
        if (!movie.id) errors.push(`[인덱스 ${idx}] ID 누락`);
        else if (ids.has(movie.id)) errors.push(`[ID: ${movie.id}] 중복 ID 발견`);
        else ids.add(movie.id);

        if (!movie.title) errors.push(`[ID: ${movie.id || idx}] 영화 제목 누락`);
        if (!movie.year) errors.push(`[ID: ${movie.id || idx}] 개봉연도 누락`);
    });

    return {
        valid: errors.length === 0,
        total: movies.length,
        errors
    };
}

// 디버깅 콘솔 함수들
window.debugMovies = () => console.table(currentMovies);
window.debugRatings = () => {
    currentMovies.forEach(m => {
        console.log(`${m.title}: 종합 평점 ${calculateAverageRating(m.ratings)}`, m.ratings);
    });
};

// ==========================================
// 8. 통계 반환 및 앱 초기화
// ==========================================
window.getMovieStats = function() {
    const totalCount = currentMovies.length;
    if (totalCount === 0) {
        return { totalMovies: 0, averageRating: 0, genresCount: 0 };
    }

    let totalAvgRating = 0;
    const genres = new Set();

    currentMovies.forEach(movie => {
        totalAvgRating += parseFloat(calculateAverageRating(movie.ratings));
        getGenreArray(movie).forEach(g => genres.add(g));
    });

    return {
        totalMovies: totalCount,
        averageRating: (totalAvgRating / totalCount).toFixed(2),
        genresCount: genres.size,
        genresList: Array.from(genres)
    };
};

function initCinemaApp(moviesData) {
    if (!moviesData) {
        console.error('영화 데이터를 불러오지 못했습니다.');
        return;
    }

    currentMovies = moviesData;

    // 데이터 검증
    const validation = validateMovieData(currentMovies);
    if (!validation.valid) {
        console.warn('영화 데이터 검증 경고:', validation.errors);
    }

    // UI 요소 및 이벤트 리스너 등록
    renderGenreButtons();
    renderMovies();

    // 검색창 이벤트
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value;
            renderMovies();
        });
    }

    // 정렬 이벤트
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderMovies();
        });
    }

    // 모달 이벤트
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    const modal = document.getElementById('movieModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

// 전역 진입점 등록
window.initCinemaApp = initCinemaApp;
