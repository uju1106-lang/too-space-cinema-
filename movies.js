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
    }
  }
];
