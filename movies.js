const movies = [
  {
    id: 1,
    title: "12명의 성난 사람들",
    englishTitle: "12 Angry Men",
    year: 1957,
    genre: ["드라마"],
    aliases: [
      "12명의 성난 사람들",
      "12 Angry Men",
      "Twelve Angry Men"
    ],
    director: "시드니 루멧",
    actors: [
      "헨리 폰다",
      "리 J. 콥",
      "에드 베글리",
      "E.G. 마셜"
    ],
    poster:
      "https://image.tmdb.org/t/p/w500/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
    ratings: {
      imdb: 9.0,
      cine21: 9.11,
      rottenTomatoes: 97,
      letterboxd: 4.6
    },
    description:
      "한 배심원의 문제 제기를 계기로 사건의 진실을 다시 살펴보게 되는 법정 드라마."
  },

  {
    id: 2,
    title: "세븐",
    englishTitle: "Se7en",
    year: 1995,
    genre: ["범죄", "미스터리", "스릴러"],
    aliases: [
      "세븐",
      "Se7en",
      "Seven"
    ],
    director: "데이비드 핀처",
    actors: [
      "브래드 피트",
      "모건 프리먼",
      "기네스 팰트로",
      "케빈 스페이시"
    ],
    poster:
      "https://image.tmdb.org/t/p/w500/191nKfP0ehp3uIvWqgPbFmI4lv9.jpg",
    ratings: {
      imdb: 8.6,
      cine21: 8.54,
      rottenTomatoes: 95,
      letterboxd: 4.3
    },
    description:
      "두 형사가 연쇄적으로 발생하는 사건을 추적하며 범인의 정체에 접근하는 범죄 스릴러."
  },

  {
    id: 3,
    title: "레옹",
    englishTitle: "Léon: The Professional",
    year: 1994,
    genre: ["액션", "범죄", "드라마"],
    aliases: [
      "레옹",
      "Léon: The Professional",
      "Leon",
      "The Professional"
    ],
    director: "뤽 베송",
    actors: [
      "장 르노",
      "나탈리 포트만",
      "게리 올드만",
      "대니 아이엘로"
    ],
    poster:
      "https://image.tmdb.org/t/p/w500/yI6X2cCM5YPJtxMhUd3dPGqDAhw.jpg",
    ratings: {
      imdb: 8.5,
      cine21: 8.63,
      rottenTomatoes: 95,
      letterboxd: 4.0
    },
    description:
      "고독한 청부업자와 한 소녀의 만남을 중심으로 펼쳐지는 액션 드라마."
  },

  {
    id: 4,
    title: "피아니스트",
    englishTitle: "The Pianist",
    year: 2002,
    genre: ["드라마", "전쟁", "역사"],
    aliases: [
      "피아니스트",
      "The Pianist"
    ],
    director: "로만 폴란스키",
    actors: [
      "애드리언 브로디",
      "토마스 크레취만",
      "프랭크 핀레이",
      "에밀리아 폭스"
    ],
    poster:
      "https://image.tmdb.org/t/p/w500/2hFvxCCWrTmCYwfy7yum0GKRi3Y.jpg",
    ratings: {
      imdb: 8.5,
      cine21: 7.95,
      rottenTomatoes: 96,
      letterboxd: 4.4
    },
    description:
      "전쟁 속에서 살아남기 위해 고군분투하는 피아니스트의 삶을 그린 역사 드라마."
  },

  {
    id: 5,
    title: "소셜 네트워크",
    englishTitle: "The Social Network",
    year: 2010,
    genre: ["드라마", "전기"],
    aliases: [
      "소셜 네트워크",
      "The Social Network",
      "Social Network"
    ],
    director: "데이비드 핀처",
    actors: [
      "제시 아이젠버그",
      "앤드루 가필드",
      "저스틴 팀버레이크",
      "아미 해머"
    ],
    poster:
      "https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
    ratings: {
      imdb: 7.8,
      cine21: 8.02,
      rottenTomatoes: 87,
      letterboxd: 4.0
    },
    description:
      "세계적인 소셜 네트워크 서비스의 탄생과 그 과정에서 벌어진 갈등을 그린 드라마."
  },

  {
    id: 6,
    title: "노인을 위한 나라는 없다",
    englishTitle: "No Country for Old Men",
    year: 2007,
    genre: ["범죄", "드라마", "스릴러"],
    aliases: [
      "노인을 위한 나라는 없다",
      "No Country for Old Men"
    ],
    director: "코엔 형제",
    actors: [
      "토미 리 존스",
      "하비에르 바르뎀",
      "조시 브롤린",
      "우디 해럴슨"
    ],
    poster:
      "https://image.tmdb.org/t/p/w500/6d5XOczc226jECq0LIX0siKtgHR.jpg",
    ratings: {
      imdb: 8.2,
      cine21: 8.51,
      rottenTomatoes: 86,
      letterboxd: 4.1
    },
    description:
      "우연히 거액의 돈을 발견한 남자를 중심으로 추적과 긴장이 이어지는 범죄 스릴러."
  },

  {
    id: 7,
    title: "블랙 스완",
    englishTitle: "Black Swan",
    year: 2010,
    genre: ["드라마", "스릴러", "미스터리"],
    aliases: [
      "블랙 스완",
      "Black Swan"
    ],
    director: "대런 아로노프스키",
    actors: [
      "나탈리 포트만",
      "밀라 쿠니스",
      "뱅상 카셀",
      "위노나 라이더"
    ],
    poster:
      "https://image.tmdb.org/t/p/w500/PgK9d0vegvPCx92b7c15sk4x8h.jpg",
    ratings: {
      imdb: 8.0,
      cine21: 8.54,
      rottenTomatoes: 84,
      letterboxd: 4.0
    },
    description:
      "완벽한 무대를 준비하는 발레리나가 경쟁과 압박을 겪으며 변화하는 과정을 그린 심리 드라마."
  },

  {
    id: 8,
    title: "그녀",
    englishTitle: "Her",
    year: 2013,
    genre: ["SF", "로맨스", "드라마"],
    aliases: [
      "그녀",
      "Her"
    ],
    director: "스파이크 존즈",
    actors: [
      "호아킨 피닉스",
      "스칼릿 조핸슨",
      "에이미 애덤스",
      "루니 마라"
    ],
    poster:
      "https://image.tmdb.org/t/p/w500/eCOtqtfvn7mxGl6nfmq4b1exJRc.jpg",
    ratings: {
      imdb: 8.0,
      cine21: 8.10,
      rottenTomatoes: 82,
      letterboxd: 4.0
    },
    description:
      "인공지능 운영체제와 인간의 관계를 통해 사랑과 인간관계의 의미를 탐구하는 SF 드라마."
  },

  {
    id: 9,
    title: "더 울프 오브 월 스트리트",
    englishTitle: "The Wolf of Wall Street",
    year: 2013,
    genre: ["범죄", "드라마", "코미디"],
    aliases: [
      "더 울프 오브 월 스트리트",
      "The Wolf of Wall Street",
      "Wolf of Wall Street"
    ],
    director: "마틴 스코세이지",
    actors: [
      "레오나르도 디카프리오",
      "조나 힐",
      "마고 로비",
      "매튜 매커너히"
    ],
    poster:
      "https://image.tmdb.org/t/p/w500/kW9LmvYHAaS9iA0tHmZVq8hQYoq.jpg",
    ratings: {
      imdb: 8.2,
      cine21: 7.59,
      rottenTomatoes: 83,
      letterboxd: 4.0
    },
    description:
      "월스트리트에서 성공을 거둔 한 인물의 성장과 몰락을 그린 범죄 드라마."
  },

  {
    id: 10,
    title: "라따뚜이",
    englishTitle: "Ratatouille",
    year: 2007,
    genre: ["애니메이션", "코미디", "가족"],
    aliases: [
      "라따뚜이",
      "Ratatouille"
    ],
    director: "브래드 버드",
    actors: [
      "패튼 오스왈트",
      "이안 홈",
      "루 로마노",
      "피터 오툴"
    ],
    poster:
      "https://image.tmdb.org/t/p/w500/t3vaWRPSf6WjDSamIkKDs1iQWna.jpg",
    ratings: {
      imdb: 8.1,
      cine21: 8.28,
      rottenTomatoes: 87,
      letterboxd: 4.1
    },
    description:
      "요리에 대한 꿈을 가진 생쥐가 요리사와 함께 자신의 꿈을 이루어가는 애니메이션."
  }
];
