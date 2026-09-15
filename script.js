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
    IMDb: 10,
    CINE21: 10,
    'Rotten Tomatoes': 100, // 100% -> 10점 만점으로 환산 (÷10)
    Letterboxd: 5          // 5점 만점 -> 10점 만점으로 환산 (×2)
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

// 평점 정규화 (10점 만점 기준 계산)
function normalizeRating(source, score) {
    const numericScore = parseFloat(score);
    if (isNaN(numericScore)) return 0;

    switch (source) {
        case 'Rotten Tomatoes':
            return numericScore / 10;
        case 'Letterboxd':
            return numericScore * 2;
        default:
            return numericScore;
    }
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
    const titleEn = (movie.titleEn || '').toLowerCase();
    const aliases = (movie.aliases || []).join(' ').toLowerCase();
    const director = (movie.director || '').toLowerCase();
    const cast = (movie.cast || []).join(' ').toLowerCase();
    const genres = (movie.genre || []).join(' ').toLowerCase();

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
        result = result.filter(movie => movie.genre && movie.genre.includes(currentGenre));
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
    const genresHtml = (movie.genre || []).map(g => `<span class="genre-tag">${escapeHtml(g)}</span>`).join('');

    const defaultImage = 'https://via.placeholder.com/300x450?text=No+Image';
    const posterSrc = movie.posterUrl || defaultImage;

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

    // 이미지 로드 실패 시 위키피디아 대체 포스터 시도
    const imgElement = card.querySelector('.poster-img');
    imgElement.onerror = async () => {
        if (movie.titleEn) {
            const wikiPoster = await fetchWikipediaPoster(movie.titleEn);
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
        if (Array.isArray(m.genre)) {
            m.genre.forEach(g => genresSet.add(g));
        }
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
                <span class="site-name">${escapeHtml(site)}</span>
                <span class="site-score">${escapeHtml(String(score))}</span>
            </div>
        `).join('');
    }

    document.getElementById('modalTitle').textContent = movie.title || '';
    document.getElementById('modalTitleEn').textContent = movie.titleEn || '';
    document.getElementById('modalYear').textContent = movie.year || '';
    document.getElementById('modalDirector').textContent = movie.director || '정보 없음';
    document.getElementById('modalCast').textContent = (movie.cast || []).join(', ') || '정보 없음';
    document.getElementById('modalPlot').textContent = movie.plot || '줄거리 정보가 없습니다.';
    document.getElementById('modalAvgRating').textContent = avgRating;
    document.getElementById('modalRatingsList').innerHTML = ratingsHtml;

    const modalPoster = document.getElementById('modalPoster');
    if (modalPoster) {
        modalPoster.src = movie.posterUrl || 'https://via.placeholder.com/300x450?text=No+Image';
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
window.debugDuplicateMovies = () => {
    const titles = currentMovies.map(m => m.title);
    const duplicates = titles.filter((t, i) => titles.indexOf(t) !== i);
    console.log('중복된 제목:', duplicates);
};
window.debugMovieIds = () => {
    const ids = currentMovies.map(m => m.id);
    console.log('등록된 모든 ID:', ids);
};
window.debugAll = () => {
    console.log('--- 데이터 검증 결과 ---');
    console.log(validateMovieData(currentMovies));
};

// ==========================================
// 8. 통계 반환 및 초기화 (통계/상태 내보내기)
// ==========================================

/**
 * 잘렸던 부분 보완: 현재 영화 목록의 통계 정보를 반환합니다.
 */
window.getMovieStats = function() {
    const totalCount = currentMovies.length;
    if (totalCount === 0) {
        return {
            totalMovies: 0,
            averageRating: 0,
            genresCount: 0,
            oldestYear: null,
            newestYear: null
        };
    }

    let totalAvgRating = 0;
    const genres = new Set();
    let oldestYear = Infinity;
    let newestYear = -Infinity;

    currentMovies.forEach(movie => {
        totalAvgRating += parseFloat(calculateAverageRating(movie.ratings));

        if (Array.isArray(movie.genre)) {
            movie.genre.forEach(g => genres.add(g));
        }

        if (movie.year < oldestYear) oldestYear = movie.year;
        if (movie.year > newestYear) newestYear = movie.year;
    });

    return {
        totalMovies: totalCount,
        averageRating: (totalAvgRating / totalCount).toFixed(2),
        genresCount: genres.size,
        genresList: Array.from(genres),
        oldestYear: oldestYear === Infinity ? null : oldestYear,
        newestYear: newestYear === -Infinity ? null : newestYear
    };
};

/**
 * 앱 초기화 함수
 */
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

    // 검색창 입력 이벤트
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value;
            renderMovies();
        });
    }

    // 정렬 선택 이벤트
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderMovies();
        });
    }

    // 모달 닫기 버튼 이벤트
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    // 모달 배경 클릭 시 닫기
    const modal = document.getElementById('movieModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // ESC 키 입력 시 모달 닫기
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

// 전역 진입점 등록
window.initCinemaApp = initCinemaApp;
