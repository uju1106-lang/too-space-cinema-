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
    
  },
  
  {
    id: 11,
    title: "양들의 침묵",
    englishTitle: "The Silence of the Lambs",
    year: 1991,
    genre: ["범죄", "스릴러", "공포", "드라마"],
    aliases: [
      "양들의 침묵",
      "THE SILENCE OF THE LAMBS",
      "SILENCE OF THE LAMBS"
    ],
    director: "조너선 드미",
    actors: [
      "조디 포스터",
      "앤서니 홉킨스",
      "스콧 글렌"
    ],
    poster:
      "https://en.wikipedia.org/wiki/Special:FilePath/The_Silence_of_the_Lambs_poster.jpg",
    ratings: {
      imdb: 8.6,
      cine21: "없음",
      rottenTomatoes: 95,
      letterboxd: "없음"
    },
    description:
      "FBI 수습 요원이 연쇄살인범을 추적하기 위해 수감된 한니발 렉터의 도움을 받는 범죄 스릴러."
  },

  {
    id: 12,
    title: "라이언 일병 구하기",
    englishTitle: "Saving Private Ryan",
    year: 1998,
    genre: ["전쟁", "드라마", "액션"],
    aliases: [
      "라이언 일병 구하기",
      "SAVING PRIVATE RYAN"
    ],
    director: "스티븐 스필버그",
    actors: [
      "톰 행크스",
      "맷 데이먼",
      "톰 시즈모어"
    ],
    poster:
      "https://en.wikipedia.org/wiki/Special:FilePath/Saving_Private_Ryan_poster.jpg",
    ratings: {
      imdb: 8.6,
      cine21: "없음",
      rottenTomatoes: 95,
      letterboxd: "없음"
    },
    description:
      "노르망디 상륙작전 이후 실종된 라이언 일병을 구하기 위해 한 부대가 임무를 수행하는 전쟁 영화."
  },

  {
    id: 13,
    title: "그린 마일",
    englishTitle: "The Green Mile",
    year: 1999,
    genre: ["드라마", "판타지", "범죄"],
    aliases: [
      "그린 마일",
      "THE GREEN MILE"
    ],
    director: "프랭크 다라본트",
    actors: [
      "톰 행크스",
      "마이클 클라크 덩컨",
      "데이비드 모스"
    ],
    poster:
      "https://en.wikipedia.org/wiki/Special:FilePath/The_Green_Mile_film_poster.jpg",
    ratings: {
      imdb: 8.6,
      cine21: "없음",
      rottenTomatoes: 94,
      letterboxd: "없음"
    },
    description:
      "교도소에서 근무하는 간수와 신비로운 능력을 가진 사형수의 이야기를 다룬 드라마."
  },

  {
    id: 14,
    title: "굿 윌 헌팅",
    englishTitle: "Good Will Hunting",
    year: 1997,
    genre: ["드라마", "로맨스"],
    aliases: [
      "굿 윌 헌팅",
      "GOOD WILL HUNTING"
    ],
    director: "구스 반 산트",
    actors: [
      "로빈 윌리엄스",
      "맷 데이먼",
      "벤 애플렉"
    ],
    poster:
      "https://en.wikipedia.org/wiki/Special:FilePath/Good_Will_Hunting_theatrical_poster.jpg",
    ratings: {
      imdb: 8.4,
      cine21: "없음",
      rottenTomatoes: 94,
      letterboxd: "없음"
    },
    description:
      "천재적인 수학적 재능을 가진 청년 윌 헌팅이 심리학자를 만나 자신의 삶을 돌아가는 과정을 그린 드라마."
  },

  {
    id: 15,
    title: "파이트 클럽",
    englishTitle: "Fight Club",
    year: 1999,
    genre: ["드라마", "스릴러"],
    aliases: [
      "파이트 클럽",
      "FIGHT CLUB"
    ],
    director: "데이비드 핀처",
    actors: [
      "브래드 피트",
      "에드워드 노턴",
      "헬레나 본햄 카터"
    ],
    poster:
      "https://en.wikipedia.org/wiki/Special:FilePath/Fight_Club_poster.jpg",
    ratings: {
      imdb: 8.8,
      cine21: "없음",
      rottenTomatoes: 96,
      letterboxd: "없음"
    },
    description:
      "평범한 회사원이 정체불명의 인물 타일러 더든을 만나면서 예상하지 못한 사건에 휘말리는 심리 드라마."
  },

  {
    id: 16,
    title: "아메리칸 뷰티",
    englishTitle: "American Beauty",
    year: 1999,
    genre: ["드라마", "코미디"],
    aliases: [
      "아메리칸 뷰티",
      "AMERICAN BEAUTY"
    ],
    director: "샘 멘데스",
    actors: [
      "케빈 스페이시",
      "아네트 베닝",
      "토라 버치"
    ],
    poster:
      "https://en.wikipedia.org/wiki/Special:FilePath/American_Beauty_1999_film_poster.jpg",
    ratings: {
      imdb: 8.3,
      cine21: "없음",
      rottenTomatoes: 93,
      letterboxd: "없음"
    },
    description:
      "교외의 평범한 가장이 자신의 삶과 가족을 다시 바라보기 시작하면서 벌어지는 이야기를 그린 드라마."
  },

  {
    id: 17,
    title: "시티 오브 갓",
    englishTitle: "City of God",
    year: 2002,
    genre: ["범죄", "드라마"],
    aliases: [
      "시티 오브 갓",
      "CITY OF GOD",
      "CIDADE DE DEUS"
    ],
    director: "페르난도 메이렐레스",
    actors: [
      "알렉상드르 호드리게스",
      "레안드로 피르미누",
      "세우 조르지"
    ],
    poster:
      "https://en.wikipedia.org/wiki/Special:FilePath/City_of_God_2002_film_poster.jpg",
    ratings: {
      imdb: 8.6,
      cine21: "없음",
      rottenTomatoes: 97,
      letterboxd: "없음"
    },
    description:
      "브라질 리우데자네이루의 빈민가에서 성장하는 두 소년의 서로 다른 삶을 그린 범죄 드라마."
  },

  {
    id: 18,
    title: "아멜리에",
    englishTitle: "Amélie",
    year: 2001,
    genre: ["로맨스", "코미디", "드라마"],
    aliases: [
      "아멜리에",
      "AMELIE",
      "LE FABULEUX DESTIN D'AMÉLIE POULAIN"
    ],
    director: "장피에르 주네",
    actors: [
      "오드리 토투",
      "마티외 카소비츠",
      "자멜 드부즈"
    ],
    poster:
      "https://en.wikipedia.org/wiki/Special:FilePath/Amelie_poster.jpg",
    ratings: {
      imdb: 8.3,
      cine21: "없음",
      rottenTomatoes: 95,
      letterboxd: "없음"
    },
    description:
      "파리에서 살아가는 젊은 여성이 주변 사람들의 삶에 작은 변화를 만들어가는 이야기를 그린 로맨틱 코미디."
  },

  {
    id: 19,
    title: "좋은 친구들",
    englishTitle: "Goodfellas",
    year: 1990,
    genre: ["범죄", "드라마"],
    aliases: [
      "좋은 친구들",
      "GOODFELLAS"
    ],
    director: "마틴 스코세이지",
    actors: [
      "로버트 드 니로",
      "레이 리오타",
      "조 페시"
    ],
    poster:
      "https://en.wikipedia.org/wiki/Special:FilePath/Goodfellas.jpg",
    ratings: {
      imdb: 8.7,
      cine21: "없음",
      rottenTomatoes: 97,
      letterboxd: "없음"
    },
    description:
      "마피아 조직에 들어간 한 남자의 성장과 몰락을 그린 범죄 드라마."
  },

  {
    id: 20,
    title: "택시 드라이버",
    englishTitle: "Taxi Driver",
    year: 1976,
    genre: ["범죄", "드라마", "스릴러"],
    aliases: [
      "택시 드라이버",
      "TAXI DRIVER"
    ],
    director: "마틴 스코세이지",
    actors: [
      "로버트 드 니로",
      "조디 포스터",
      "시빌 셰퍼드"
    ],
    poster:
      "https://en.wikipedia.org/wiki/Special:FilePath/Taxi_Driver_movie.jpg",
    ratings: {
      imdb: 8.2,
      cine21: "없음",
      rottenTomatoes: 93,
      letterboxd: "없음"
    },
    description:
      "뉴욕에서 택시기사로 일하는 한 남자의 고립과 심리적 변화를 그린 영화."
  },

  {
    id: 21,
    title: "프레스티지",
    englishTitle: "The Prestige",
    year: 2006,
    genre: ["미스터리", "드라마", "SF", "스릴러"],
    aliases: [
      "프레스티지",
      "THE PRESTIGE"
    ],
    director: "크리스토퍼 놀란",
    actors: [
      "휴 잭맨",
      "크리스찬 베일",
      "마이클 케인",
      "스칼렛 요한슨"
    ],
    poster:
      "https://en.wikipedia.org/wiki/Special:FilePath/The_Prestige_poster.jpg",
    ratings: {
      imdb: 8.5,
      cine21: "없음",
      rottenTomatoes: 92,
      letterboxd: "없음"
    },
    description:
      "두 마술사가 최고의 마술사가 되기 위해 경쟁하면서 벌어지는 미스터리 드라마."
  },

  {
    id: 22,
    title: "메멘토",
    englishTitle: "Memento",
    year: 2000,
    genre: ["미스터리", "스릴러", "드라마"],
    aliases: [
      "메멘토",
      "MEMENTO"
    ],
    director: "크리스토퍼 놀란",
    actors: [
      "가이 피어스",
      "캐리 앤 모스",
      "조 판톨리아노"
    ],
    poster:
      "https://en.wikipedia.org/wiki/Special:FilePath/Memento_poster.jpg",
    ratings: {
      imdb: 8.4,
      cine21: "없음",
      rottenTomatoes: 94,
      letterboxd: "없음"
    },
    description:
      "새로운 기억을 오래 유지하지 못하는 남자가 아내의 죽음에 대한 진실을 추적하는 미스터리 영화."
  },

  {
    id: 23,
    title: "조디악",
    englishTitle: "Zodiac",
    year: 2007,
    genre: ["범죄", "미스터리", "스릴러", "드라마"],
    aliases: [
      "조디악",
      "ZODIAC"
    ],
    director: "데이비드 핀처",
    actors: [
      "제이크 질렌할",
      "마크 러팔로",
      "로버트 다우니 주니어"
    ],
    poster:
      "https://en.wikipedia.org/wiki/Special:FilePath/Zodiac_%282007_film%29.jpg",
    ratings: {
      imdb: 7.7,
      cine21: "없음",
      rottenTomatoes: 78,
      letterboxd: "없음"
    },
    description:
      "미국에서 발생한 미해결 연쇄살인 사건의 범인을 추적하는 사람들의 집착과 수사를 다룬 영화."
  },

  {
    id: 24,
    title: "프리즈너스",
    englishTitle: "Prisoners",
    year: 2013,
    genre: ["범죄", "드라마", "미스터리", "스릴러"],
    aliases: [
      "프리즈너스",
      "PRISONERS"
    ],
    director: "드니 빌뇌브",
    actors: [
      "휴 잭맨",
      "제이크 질렌할",
      "비올라 데이비스"
    ],
    poster:
      "https://en.wikipedia.org/wiki/Special:FilePath/Prisoners_2013_film_poster.jpg",
    ratings: {
      imdb: 8.2,
      cine21: "없음",
      rottenTomatoes: 87,
      letterboxd: "없음"
    },
    description:
      "두 아이가 사라진 사건을 중심으로 부모와 경찰의 수사를 그린 범죄 스릴러."
  },

  {
    id: 25,
    title: "나를 찾아줘",
    englishTitle: "Gone Girl",
    year: 2014,
    genre: ["미스터리", "스릴러", "드라마"],
    aliases: [
      "나를 찾아줘",
      "GONE GIRL"
    ],
    director: "데이비드 핀처",
    actors: [
      "벤 애플렉",
      "로자먼드 파이크",
      "닐 패트릭 해리스"
    ],
    poster:
      "https://en.wikipedia.org/wiki/Special:FilePath/Gone_Girl_Poster.jpg",
    ratings: {
      imdb: 8.1,
      cine21: "없음",
      rottenTomatoes: 87,
      letterboxd: "없음"
    },
    description:
      "결혼기념일에 사라진 아내와 실종 사건의 유력한 용의자가 된 남편을 둘러싼 미스터리 스릴러."
  },

  {
    id: 26,
    title: "컨택트",
    englishTitle: "Arrival",
    year: 2016,
    genre: ["SF", "드라마", "미스터리"],
    aliases: [
      "컨택트",
      "ARRIVAL"
    ],
    director: "드니 빌뇌브",
    actors: [
      "에이미 아담스",
      "제러미 레너",
      "포레스트 휘터커"
    ],
    poster:
      "https://en.wikipedia.org/wiki/Special:FilePath/Arrival%2C_Movie_Poster.jpg",
    ratings: {
      imdb: 7.9,
      cine21: "없음",
      rottenTomatoes: 83,
      letterboxd: "없음"
    },
    description:
      "지구에 나타난 외계 우주선과 소통하기 위해 언어학자가 연구에 참여하면서 벌어지는 SF 영화."
  },

  {
    id: 27,
    title: "블레이드 러너 2049",
    englishTitle: "Blade Runner 2049",
    year: 2017,
    genre: ["SF", "미스터리", "드라마"],
    aliases: [
      "블레이드 러너 2049",
      "BLADE RUNNER 2049"
    ],
    director: "드니 빌뇌브",
    actors: [
      "라이언 고슬링",
      "해리슨 포드",
      "아나 데 아르마스"
    ],
    poster:
      "https://en.wikipedia.org/wiki/Special:FilePath/Blade_Runner_2049.jpg",
    ratings: {
      imdb: 8.1,
      cine21: "없음",
      rottenTomatoes: 88,
      letterboxd: "없음"
    },
    description:
      "새로운 블레이드 러너가 오래전 사라진 전직 블레이드 러너의 흔적을 찾으며 사회의 비밀에 접근하는 SF 영화."
  },

  {
    id: 28,
    title: "듄: 파트 2",
    englishTitle: "Dune: Part Two",
    year: 2024,
    genre: ["SF", "액션", "어드벤처", "드라마"],
    aliases: [
      "듄 파트 2",
      "듄: 파트 2",
      "DUNE PART TWO",
      "DUNE: PART TWO"
    ],
    director: "드니 빌뇌브",
    actors: [
      "티모시 샬라메",
      "젠데이아",
      "레베카 퍼거슨",
      "오스틴 버틀러"
    ],
    poster:
      "https://en.wikipedia.org/wiki/Special:FilePath/Dune_Part_Two_poster.jpeg",
    ratings: {
      imdb: 8.6,
      cine21: "없음",
      rottenTomatoes: 95,
      letterboxd: "없음"
    },
    description:
      "폴 아트레이데스가 프레멘과 함께 자신의 운명과 복수를 향해 나아가는 SF 대작."
  },

  {
    id: 29,
    title: "유주얼 서스펙트",
    englishTitle: "The Usual Suspects",
    year: 1995,
    genre: ["범죄", "미스터리", "스릴러"],
    aliases: [
      "유주얼 서스펙트",
      "THE USUAL SUSPECTS"
    ],
    director: "브라이언 싱어",
    actors: [
      "케빈 스페이시",
      "가브리엘 번",
      "베니치오 델 토로"
    ],
    poster:
      "https://en.wikipedia.org/wiki/Special:FilePath/The_Usual_Suspects_poster.jpg",
    ratings: {
      imdb: 8.5,
      cine21: "없음",
      rottenTomatoes: 96,
      letterboxd: "없음"
    },
    description:
      "항구에서 벌어진 사건의 유일한 생존자가 사건의 전말을 이야기하면서 진실을 둘러싼 미스터리가 펼쳐지는 영화."
  },

  {
    id: 30,
    title: "더 헌트",
    englishTitle: "The Hunt",
    year: 2012,
    genre: ["드라마", "스릴러"],
    aliases: [
      "더 헌트",
      "THE HUNT",
      "JAGTEN"
    ],
    director: "토마스 빈터베르그",
    actors: [
      "매즈 미켈슨",
      "토마스 보 라르센",
      "아니카 베데르코프"
    ],
    poster:
      "https://en.wikipedia.org/wiki/Special:FilePath/The_Hunt_2012_film.jpg",
    ratings: {
      imdb: 8.3,
      cine21: "없음",
      rottenTomatoes: 93,
      letterboxd: "없음"
    },
    description:
      "작은 거짓말로 인해 한 남자의 평범했던 삶이 무너지는 과정을 그린 덴마크 드라마."
  },

  {
    id: 31,
    title: "7인의 사무라이",
    englishTitle: "Seven Samurai",
    year: 1954,
    genre: ["액션", "드라마"],
    aliases: [
      "7인의 사무라이",
      "칠인의 사무라이",
      "SEVEN SAMURAI",
      "SHICHININ NO SAMURAI"
    ],
    director: "구로사와 아키라",
    actors: [
      "미후네 도시로",
      "시무라 다카시",
      "이나바 요시로"
    ],
    poster:
      "https://en.wikipedia.org/wiki/Special:FilePath/Seven_Samurai_poster.jpg",
    ratings: {
      imdb: 8.6,
      cine21: "없음",
      rottenTomatoes: "없음",
      letterboxd: "없음"
    },
    description:
      "도적들의 습격에 맞서기 위해 마을 사람들이 일곱 명의 사무라이를 고용하면서 벌어지는 이야기."
  },

  {
    id: 32,
    title: "뻐꾸기 둥지 위로 날아간 새",
    englishTitle: "One Flew Over the Cuckoo's Nest",
    year: 1975,
    genre: ["드라마"],
    aliases: [
      "뻐꾸기 둥지 위로 날아간 새",
      "ONE FLEW OVER THE CUCKOO'S NEST"
    ],
    director: "밀로스 포먼",
    actors: [
      "잭 니콜슨",
      "루이즈 플레처",
      "윌 샘슨"
    ],
    poster:
      "https://en.wikipedia.org/wiki/Special:FilePath/One_Flew_Over_the_Cuckoo%27s_Nest_poster.jpg",
    ratings: {
      imdb: 8.6,
      cine21: "없음",
      rottenTomatoes: "없음",
      letterboxd: "없음"
    },
    description:
      "정신병원에 들어간 한 남자가 병원의 규율과 권위에 맞서면서 벌어지는 드라마."
  },

  {
    id: 33,
    title: "샤이닝",
    englishTitle: "The Shining",
    year: 1980,
    genre: ["공포", "미스터리", "드라마"],
    aliases: [
      "샤이닝",
      "THE SHINING"
    ],
    director: "스탠리 큐브릭",
    actors: [
      "잭 니콜슨",
      "셸리 듀발",
      "대니 로이드"
    ],
    poster:
      "https://en.wikipedia.org/wiki/Special:FilePath/The_Shining_%281980%29.jpg",
    ratings: {
      imdb: 8.4,
      cine21: "없음",
      rottenTomatoes: "없음",
      letterboxd: "없음"
    },
    description:
      "겨울 동안 고립된 호텔에서 작가 가족에게 벌어지는 초자연적인 사건을 그린 공포 영화."
  },

  {
    id: 34,
    title: "싸이코",
    englishTitle: "Psycho",
    year: 1960,
    genre: ["공포", "미스터리", "스릴러"],
    aliases: [
      "싸이코",
      "사이코",
      "PSYCHO"
    ],
    director: "알프레드 히치콕",
    actors: [
      "앤서니 퍼킨스",
      "자넷 리",
      "베라 마일스"
    ],
    poster:
      "https://en.wikipedia.org/wiki/Special:FilePath/Psycho_%281960%29.jpg",
    ratings: {
      imdb: 8.5,
      cine21: "없음",
      rottenTomatoes: "없음",
      letterboxd: "없음"
    },
    description:
      "한 여성이 외딴 모텔에 머물면서 예상하지 못한 사건에 휘말리는 고전 스릴러."
  },

  {
    id: 35,
    title: "이창",
    englishTitle: "Rear Window",
    year: 1954,
    genre: ["미스터리", "스릴러", "로맨스"],
    aliases: [
      "이창",
      "REAR WINDOW"
    ],
    director: "알프레드 히치콕",
    actors: [
      "제임스 스튜어트",
      "그레이스 켈리",
      "델마 리터"
    ],
    poster:
      "https://en.wikipedia.org/wiki/Special:FilePath/Rear_Window_film_poster.jpg",
    ratings: {
      imdb: 8.5,
      cine21: "없음",
      rottenTomatoes: "없음",
      letterboxd: "없음"
    },
    description:
      "다리를 다쳐 집에 머물게 된 사진작가가 이웃을 관찰하다가 의심스러운 사건을 발견하는 미스터리 영화."
  },

  {
    id: 36,
    title: "현기증",
    englishTitle: "Vertigo",
    year: 1958,
    genre: ["미스터리", "로맨스", "스릴러"],
    aliases: [
      "현기증",
      "VERTIGO"
    ],
    director: "알프레드 히치콕",
    actors: [
      "제임스 스튜어트",
      "킴 노박",
      "바버라 벨 게데스"
    ],
    poster:
      "https://en.wikipedia.org/wiki/Special:FilePath/Vertigo_%281958_film%29.jpg",
    ratings: {
      imdb: 8.3,
      cine21: "없음",
      rottenTomatoes: "없음",
      letterboxd: "없음"
    },
    description:
      "고소공포증을 가진 전직 형사가 한 여성의 행동을 조사하면서 점점 복잡한 사건에 빠져드는 영화."
  },

  {
    id: 37,
    title: "지옥의 묵시록",
    englishTitle: "Apocalypse Now",
    year: 1979,
    genre: ["전쟁", "드라마"],
    aliases: [
      "지옥의 묵시록",
      "APOCALYPSE NOW"
    ],
    director: "프랜시스 포드 코폴라",
    actors: [
      "마틴 신",
      "말론 브란도",
      "로버트 듀발"
    ],
    poster:
      "https://en.wikipedia.org/wiki/Special:FilePath/Apocalypse_Now_poster.jpg",
    ratings: {
      imdb: 8.4,
      cine21: "없음",
      rottenTomatoes: "없음",
      letterboxd: "없음"
    },
    description:
      "베트남 전쟁을 배경으로 한 장교가 강을 따라 올라가면서 한 인물을 찾아가는 전쟁 드라마."
  },

  {
    id: 38,
    title: "2001 스페이스 오디세이",
    englishTitle: "2001: A Space Odyssey",
    year: 1968,
    genre: ["SF", "드라마", "미스터리"],
    aliases: [
      "2001 스페이스 오디세이",
      "2001: 스페이스 오디세이",
      "2001 A SPACE ODYSSEY"
    ],
    director: "스탠리 큐브릭",
    actors: [
      "키어 둘리",
      "게리 록우드",
      "윌리엄 실베스터"
    ],
    poster:
      "https://en.wikipedia.org/wiki/Special:FilePath/2001_A_Space_Odyssey_%281968%29_poster.jpg",
    ratings: {
      imdb: 8.1,
      cine21: "없음",
      rottenTomatoes: "없음",
      letterboxd: "없음"
    },
    description:
      "인류의 기원과 우주 탐사를 둘러싼 거대한 미스터리를 그린 SF 영화."
  },

  {
    id: 39,
    title: "옛날 옛적 서부에서",
    englishTitle: "Once Upon a Time in the West",
    year: 1968,
    genre: ["서부극", "드라마"],
    aliases: [
      "옛날 옛적 서부에서",
      "원스 어폰 어 타임 인 더 웨스트",
      "ONCE UPON A TIME IN THE WEST"
    ],
    director: "세르조 레오네",
    actors: [
      "클라우디아 카르디날레",
      "헨리 폰다",
      "찰스 브론슨"
    ],
    poster:
      "https://en.wikipedia.org/wiki/Special:FilePath/Once_Upon_a_Time_in_the_West.jpg",
    ratings: {
      imdb: 8.5,
      cine21: "없음",
      rottenTomatoes: "없음",
      letterboxd: "없음"
    },
    description:
      "미국 서부 개척시대를 배경으로 서로 다른 목적을 가진 인물들이 충돌하는 서부극."
  },

  {
    id: 40,
    title: "석양의 무법자",
    englishTitle: "The Good, the Bad and the Ugly",
    year: 1966,
    genre: ["서부극", "어드벤처"],
    aliases: [
      "석양의 무법자",
      "THE GOOD, THE BAD AND THE UGLY",
      "IL BUONO, IL BRUTTO, IL CATTIVO"
    ],
    director: "세르조 레오네",
    actors: [
      "클린트 이스트우드",
      "리 반 클리프",
      "엘리 월라크"
    ],
    poster:
      "https://en.wikipedia.org/wiki/Special:FilePath/The_Good,_the_Bad_and_the_Ugly.jpg",
    ratings: {
      imdb: 8.8,
      cine21: "없음",
      rottenTomatoes: "없음",
      letterboxd: "없음"
    },
    description:
      "남북전쟁을 배경으로 서로 다른 목적을 가진 세 명의 인물이 숨겨진 금을 찾아 나서는 서부극."
  }
};
