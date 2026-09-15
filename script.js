// 전역 상태
let currentMovies = [];
let currentGenre = 'ALL';
let currentSort = 'title-asc';
let currentSearch = '';
let selectedMovie = null;

function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function getGenreArray(movie) {
    if (!movie.genre) return [];
    if (Array.isArray(movie.genre)) return movie.genre;
    return movie.genre.split(',').map(g => g.trim());
}

function getCastArray(movie) {
    const cast = movie.cast || movie.actors || [];
    if (Array.isArray(cast)) return cast;
    return String(cast).split(',').map(c => c.trim());
}

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

        if (imageUrl) savePosterCache(englishTitle, imageUrl);
        return imageUrl;
    } catch (error) {
        console.error('위키피디아 포스터 로드 실패:', error);
        return null;
    }
}

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

    if (currentGenre !== 'ALL') {
        result = result.filter(movie => getGenreArray(movie).includes(currentGenre));
    }

    if (currentSearch) {
        result = result.filter(movie => movieMatchesSearch(movie, currentSearch));
    }

    result.sort((a, b) => {
        const ratingA = parseFloat(calculateAverageRating(a.ratings));
        const ratingB = parseFloat(calculateAverageRating(b.ratings));

        switch (currentSort) {
            case 'title-asc': return a.title.localeCompare(b.title, 'ko');
            case 'title-desc': return b.title.localeCompare(a.title, 'ko');
            case 'year-asc': return a.year - b.year;
            case 'year-desc': return b.year - a.year;
            case 'rating-desc': return ratingB - ratingA;
            case 'rating-asc': return ratingA - ratingB;
            default: return 0;
        }
    });

    return result;
}

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

    document.getElementById('modalTitle').textContent = movie.title || '';
    document.getElementById('modalTitleEn').textContent = movie.englishTitle || movie.titleEn || '';
    document.getElementById('modalYear').textContent = movie.year || '';
    document.getElementById('modalDirector').textContent = movie.director || '정보 없음';
    document.getElementById('modalCast').textContent = getCastArray(movie).join(', ') || '정보 없음';
    document.getElementById('modalPlot').textContent = movie.description || movie.plot || '줄거리 정보가 없습니다.';
    document.getElementById('modalAvgRating').textContent = avgRating;
    document.getElementById('modalRatingsList').innerHTML = ratingsHtml;

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

function initCinemaApp(moviesData) {
    if (!moviesData) return;
    currentMovies = moviesData;

    renderGenreButtons();
    renderMovies();

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value;
            renderMovies();
        });
    }

    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderMovies();
        });
    }

    const modalCloseBtn = document.getElementById('modalCloseBtn');
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

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

// 페이지 로드 시 앱 초기화
document.addEventListener('DOMContentLoaded', () => {
    if (typeof movies !== 'undefined') {
        initCinemaApp(movies);
    } else {
        console.error('data.js 파일에서 movies 데이터를 찾을 수 없습니다.');
    }
});
