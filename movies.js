const movies = [
  {
    id: 1,
    title: "대부",
    englishTitle: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    genre: ["범죄", "드라마"],
    aliases: ["대부", "The Godfather", "Godfather"],
    actors: ["말론 브란도", "알 파치노", "제임스 칸", "로버트 듀발"],
    description: "마피아 가문의 권력과 가족을 그린 범죄 드라마.",
    poster: "",
    ratings: {
      imdb: 9.2,
      cine21: 8.67,
      rottenTomatoes: 97,
      letterboxd: 4.5
    }
  },

  {
    id: 2,
    title: "대부 2",
    englishTitle: "The Godfather Part II",
    year: 1974,
    director: "Francis Ford Coppola",
    genre: ["범죄", "드라마"],
    aliases: ["대부2", "대부 2", "The Godfather Part II", "Godfather Part II"],
    actors: ["알 파치노", "로버트 드 니로", "로버트 듀발", "다이앤 키튼"],
    description: "마이클 코를레오네의 현재와 젊은 비토 코를레오네의 과거를 교차해 그린 작품.",
    poster: "",
    ratings: {
      imdb: 9.0,
      cine21: 9.25,
      rottenTomatoes: 96,
      letterboxd: 4.5
    }
  },

  {
    id: 3,
    title: "쇼생크 탈출",
    englishTitle: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    genre: ["드라마"],
    aliases: ["쇼생크탈출", "The Shawshank Redemption", "Shawshank"],
    actors: ["팀 로빈스", "모건 프리먼", "밥 건튼", "윌리엄 새들러"],
    description: "억울하게 수감된 앤디와 교도소에서 만난 레드의 우정을 그린 드라마.",
    poster: "",
    ratings: {
      imdb: 9.3,
      cine21: "없음",
      rottenTomatoes: 89,
      letterboxd: 4.6
    }
  },

  {
    id: 4,
    title: "다크 나이트",
    englishTitle: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    genre: ["액션", "범죄", "드라마"],
    aliases: ["다크나이트", "The Dark Knight", "Dark Knight"],
    actors: ["크리스찬 베일", "히스 레저", "아론 에크하트", "마이클 케인"],
    description: "배트맨과 조커의 대립을 중심으로 펼쳐지는 범죄 액션 드라마.",
    poster: "",
    ratings: {
      imdb: 9.1,
      cine21: 8.56,
      rottenTomatoes: 94,
      letterboxd: 4.4
    }
  },

  {
    id: 5,
    title: "펄프 픽션",
    englishTitle: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    genre: ["범죄", "드라마", "코미디"],
    aliases: ["펄프픽션", "Pulp Fiction"],
    actors: ["존 트라볼타", "사무엘 L. 잭슨", "우마 서먼", "브루스 윌리스"],
    description: "서로 얽히고설킨 인물들의 이야기를 독특한 시간 구조로 풀어낸 범죄 영화.",
    poster: "",
    ratings: {
      imdb: 8.8,
      cine21: "없음",
      rottenTomatoes: 92,
      letterboxd: 4.3
    }
  },

  {
    id: 6,
    title: "반지의 제왕: 왕의 귀환",
    englishTitle: "The Lord of the Rings: The Return of the King",
    year: 2003,
    director: "Peter Jackson",
    genre: ["판타지", "모험", "드라마"],
    aliases: [
      "왕의 귀환",
      "왕의귀환",
      "반지의제왕 왕의귀환",
      "The Return of the King",
      "Return of the King"
    ],
    actors: ["일라이저 우드", "비고 모텐슨", "이안 맥켈런", "숀 애스틴"],
    description: "절대반지를 파괴하기 위한 마지막 여정을 그린 반지의 제왕 3부작의 마지막 작품.",
    poster: "",
    ratings: {
      imdb: 9.0,
      cine21: 8.33,
      rottenTomatoes: 94,
      letterboxd: 4.4
    }
  },

  {
    id: 7,
    title: "반지의 제왕: 두 개의 탑",
    englishTitle: "The Lord of the Rings: The Two Towers",
    year: 2002,
    director: "Peter Jackson",
    genre: ["판타지", "모험", "드라마"],
    aliases: [
      "두 개의 탑",
      "두개의탑",
      "반지의제왕 두개의탑",
      "The Two Towers"
    ],
    actors: ["일라이저 우드", "비고 모텐슨", "이안 맥켈런", "올랜도 블룸"],
    description: "사우론의 위협에 맞서 각자의 길을 걷게 된 인물들의 이야기를 그린 두 번째 작품.",
    poster: "",
    ratings: {
      imdb: 8.8,
      cine21: 7.67,
      rottenTomatoes: 95,
      letterboxd: 4.3
    }
  },

  {
    id: 8,
    title: "반지의 제왕: 반지 원정대",
    englishTitle: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    director: "Peter Jackson",
    genre: ["판타지", "모험", "드라마"],
    aliases: [
      "반지 원정대",
      "반지원정대",
      "반지의제왕 반지원정대",
      "The Fellowship of the Ring",
      "Fellowship"
    ],
    actors: ["일라이저 우드", "이안 맥켈런", "비고 모텐슨", "숀 애스틴"],
    description: "절대반지를 파괴하기 위해 결성된 원정대의 여정을 그린 첫 번째 작품.",
    poster: "",
    ratings: {
      imdb: 8.9,
      cine21: "없음",
      rottenTomatoes: 91,
      letterboxd: 4.3
    }
  },

  {
    id: 9,
    title: "포레스트 검프",
    englishTitle: "Forrest Gump",
    year: 1994,
    director: "Robert Zemeckis",
    genre: ["드라마", "코미디", "로맨스"],
    aliases: ["포레스트검프", "Forrest Gump"],
    actors: ["톰 행크스", "로빈 라이트", "게리 시니스", "샐리 필드"],
    description: "포레스트 검프라는 한 남자의 삶을 통해 미국 현대사의 여러 순간을 그린 드라마.",
    poster: "",
    ratings: {
      imdb: 8.8,
      cine21: "없음",
      rottenTomatoes: 75,
      letterboxd: 4.1
    }
  },

  {
    id: 10,
    title: "인셉션",
    englishTitle: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    genre: ["액션", "SF", "스릴러"],
    aliases: ["인셉션", "Inception"],
    actors: ["레오나르도 디카프리오", "조셉 고든 레빗", "엘리엇 페이지", "톰 하디"],
    description: "꿈속에 들어가 생각을 훔치거나 심는 기술을 둘러싼 SF 스릴러.",
    poster: "",
    ratings: {
      imdb: 8.8,
      cine21: 7.75,
      rottenTomatoes: 86,
      letterboxd: 4.3
    },
      {
    id: 11,
    title: "매트릭스",
    englishTitle: "The Matrix",
    year: 1999,
    genre: ["액션", "SF"],
    aliases: [
      "매트릭스",
      "The Matrix",
      "Matrix"
    ],
    director: "Lana Wachowski, Lilly Wachowski",
    actors: [
      "키아누 리브스",
      "로렌스 피시번",
      "캐리 앤 모스",
      "휴고 위빙"
    ],
    poster: "",
    ratings: {
      imdb: 8.7,
      cine21: 7.67,
      rottenTomatoes: 83,
      letterboxd: 4.2
    },
    description: "인간이 가상현실 속에서 살아가고 있다는 사실을 알게 된 해커의 이야기."
  },

  {
    id: 12,
    title: "기생충",
    englishTitle: "Parasite",
    year: 2019,
    genre: ["드라마", "스릴러"],
    aliases: [
      "기생충",
      "Parasite",
      "Gisaengchung"
    ],
    director: "Bong Joon Ho",
    actors: [
      "송강호",
      "이선균",
      "조여정",
      "최우식",
      "박소담"
    ],
    poster: "",
    ratings: {
      imdb: 8.5,
      cine21: 9.09,
      rottenTomatoes: 99,
      letterboxd: 4.5
    },
    description: "서로 다른 계층의 두 가족이 만나면서 벌어지는 이야기를 그린 작품."
  },

  {
    id: 13,
    title: "파이트 클럽",
    englishTitle: "Fight Club",
    year: 1999,
    genre: ["드라마", "스릴러", "범죄"],
    aliases: [
      "파이트클럽",
      "Fight Club"
    ],
    director: "David Fincher",
    actors: [
      "브래드 피트",
      "에드워드 노튼",
      "헬레나 본햄 카터"
    ],
    poster: "",
    ratings: {
      imdb: 8.8,
      cine21: 6.33,
      rottenTomatoes: 81,
      letterboxd: 4.2
    },
    description: "평범한 삶에 공허함을 느끼던 남자가 새로운 인물을 만나면서 벌어지는 심리 드라마."
  },

  {
    id: 14,
    title: "쉰들러 리스트",
    englishTitle: "Schindler's List",
    year: 1993,
    genre: ["드라마", "전쟁", "역사"],
    aliases: [
      "쉰들러리스트",
      "쉰들러 리스트",
      "Schindler's List"
    ],
    director: "Steven Spielberg",
    actors: [
      "리암 니슨",
      "랄프 파인즈",
      "벤 킹슬리"
    ],
    poster: "",
    ratings: {
      imdb: 9.0,
      cine21: "없음",
      rottenTomatoes: 98,
      letterboxd: 4.4
    },
    description: "제2차 세계대전 당시 오스카 쉰들러의 이야기를 그린 역사 드라마."
  },

  {
    id: 15,
    title: "좋은 친구들",
    englishTitle: "Goodfellas",
    year: 1990,
    genre: ["범죄", "드라마"],
    aliases: [
      "좋은 친구들",
      "Goodfellas",
      "굿펠라스"
    ],
    director: "Martin Scorsese",
    actors: [
      "로버트 드 니로",
      "레이 리오타",
      "조 페시"
    ],
    poster: "",
    ratings: {
      imdb: 8.7,
      cine21: "없음",
      rottenTomatoes: 95,
      letterboxd: 4.4
    },
    description: "마피아 조직에 들어간 한 남자의 삶과 몰락을 그린 범죄 영화."
  },

  {
    id: 16,
    title: "양들의 침묵",
    englishTitle: "The Silence of the Lambs",
    year: 1991,
    genre: ["범죄", "스릴러", "공포"],
    aliases: [
      "양들의침묵",
      "The Silence of the Lambs",
      "Silence of the Lambs"
    ],
    director: "Jonathan Demme",
    actors: [
      "조디 포스터",
      "앤서니 홉킨스",
      "스콧 글렌"
    ],
    poster: "",
    ratings: {
      imdb: 8.6,
      cine21: "없음",
      rottenTomatoes: 95,
      letterboxd: 4.2
    },
    description: "FBI 수습 요원이 연쇄범죄 사건을 해결하기 위해 수감된 범죄자와 대화하는 이야기."
  },

  {
    id: 17,
    title: "굿 윌 헌팅",
    englishTitle: "Good Will Hunting",
    year: 1997,
    genre: ["드라마"],
    aliases: [
      "굿윌헌팅",
      "Good Will Hunting"
    ],
    director: "Gus Van Sant",
    actors: [
      "맷 데이먼",
      "로빈 윌리엄스",
      "벤 애플렉",
      "미니 드라이버"
    ],
    poster: "",
    ratings: {
      imdb: 8.4,
      cine21: "없음",
      rottenTomatoes: 97,
      letterboxd: 4.2
    },
    description: "천재적인 재능을 가진 청년이 심리학자를 만나 자신의 삶을 변화시켜 나가는 이야기."
  },

  {
    id: 18,
    title: "그린 마일",
    englishTitle: "The Green Mile",
    year: 1999,
    genre: ["드라마", "판타지"],
    aliases: [
      "그린마일",
      "The Green Mile",
      "Green Mile"
    ],
    director: "Frank Darabont",
    actors: [
      "톰 행크스",
      "마이클 클라크 덩컨",
      "데이비드 모스"
    ],
    poster: "",
    ratings: {
      imdb: 8.6,
      cine21: 6.33,
      rottenTomatoes: 78,
      letterboxd: 4.1
    },
    description: "교도소의 간수와 특별한 능력을 가진 사형수의 만남을 그린 드라마."
  },

  {
    id: 19,
    title: "프레스티지",
    englishTitle: "The Prestige",
    year: 2006,
    genre: ["드라마", "미스터리", "SF", "스릴러"],
    aliases: [
      "프레스티지",
      "The Prestige"
    ],
    director: "Christopher Nolan",
    actors: [
      "휴 잭맨",
      "크리스찬 베일",
      "마이클 케인",
      "스칼릿 조핸슨"
    ],
    poster: "",
    ratings: {
      imdb: 8.5,
      cine21: 6.00,
      rottenTomatoes: 77,
      letterboxd: 4.2
    },
    description: "서로 경쟁하는 두 마술사의 집착과 경쟁을 그린 미스터리 영화."
  },

  {
    id: 20,
    title: "트루먼 쇼",
    englishTitle: "The Truman Show",
    year: 1998,
    genre: ["드라마", "코미디", "SF"],
    aliases: [
      "트루먼쇼",
      "트루먼 쇼",
      "The Truman Show"
    ],
    director: "Peter Weir",
    actors: [
      "짐 캐리",
      "에드 해리스",
      "로라 리니"
    ],
    poster: "",
    ratings: {
      imdb: 8.2,
      cine21: 7.50,
      rottenTomatoes: 94,
      letterboxd: 4.1
    },
    description: "자신의 삶 전체가 거대한 방송 프로그램이었다는 사실을 깨닫게 되는 한 남자의 이야기."
  }
  };
