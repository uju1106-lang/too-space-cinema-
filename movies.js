const movies = [
  {
    id: 1,
    title: "대부",
    englishTitle: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    genre: "Crime, Drama"
  },
  {
    id: 2,
    title: "대부 2",
    englishTitle: "The Godfather Part II",
    year: 1974,
    director: "Francis Ford Coppola",
    genre: "Crime, Drama"
  },
  {
    id: 3,
    title: "쇼생크 탈출",
    englishTitle: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    genre: "Drama"
  },
  {
    id: 4,
    title: "다크 나이트",
    englishTitle: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    genre: "Action, Crime, Drama"
  },
  {
    id: 5,
    title: "펄프 픽션",
    englishTitle: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    genre: "Crime, Drama"
  },
  {
    id: 6,
    title: "반지의 제왕: 왕의 귀환",
    englishTitle: "The Lord of the Rings: The Return of the King",
    year: 2003,
    director: "Peter Jackson",
    genre: "Adventure, Fantasy, Drama"
  },
  {
    id: 7,
    title: "반지의 제왕: 두 개의 탑",
    englishTitle: "The Lord of the Rings: The Two Towers",
    year: 2002,
    director: "Peter Jackson",
    genre: "Adventure, Fantasy, Drama"
  },
  {
    id: 8,
    title: "반지의 제왕: 반지 원정대",
    englishTitle: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    director: "Peter Jackson",
    genre: "Adventure, Fantasy, Drama"
  },
  {
    id: 9,
    title: "포레스트 검프",
    englishTitle: "Forrest Gump",
    year: 1994,
    director: "Robert Zemeckis",
    genre: "Drama, Romance"
  },
  {
    id: 10,
    title: "인셉션",
    englishTitle: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    genre: "Action, Sci-Fi, Thriller"
  },
  {
    id: 11,
    title: "매트릭스",
    englishTitle: "The Matrix",
    year: 1999,
    director: "The Wachowskis",
    genre: "Action, Sci-Fi"
  },
  {
    id: 12,
    title: "인터스텔라",
    englishTitle: "Interstellar",
    year: 2014,
    director: "Christopher Nolan",
    genre: "Adventure, Drama, Sci-Fi"
  },
  {
    id: 13,
    title: "기생충",
    englishTitle: "Parasite",
    year: 2019,
    director: "Bong Joon-ho",
    genre: "Drama, Thriller"
  },
  {
    id: 14,
    title: "어벤져스: 엔드게임",
    englishTitle: "Avengers: Endgame",
    year: 2019,
    director: "Anthony Russo, Joe Russo",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 15,
    title: "어벤져스: 인피니티 워",
    englishTitle: "Avengers: Infinity War",
    year: 2018,
    director: "Anthony Russo, Joe Russo",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 16,
    title: "토이 스토리",
    englishTitle: "Toy Story",
    year: 1995,
    director: "John Lasseter",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 17,
    title: "토이 스토리 2",
    englishTitle: "Toy Story 2",
    year: 1999,
    director: "John Lasseter, Ash Brannon, Lee Unkrich",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 18,
    title: "토이 스토리 3",
    englishTitle: "Toy Story 3",
    year: 2010,
    director: "Lee Unkrich",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 19,
    title: "토이 스토리 4",
    englishTitle: "Toy Story 4",
    year: 2019,
    director: "Josh Cooley",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 20,
    title: "업",
    englishTitle: "Up",
    year: 2009,
    director: "Pete Docter, Bob Peterson",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 21,
    title: "월-E",
    englishTitle: "WALL-E",
    year: 2008,
    director: "Andrew Stanton",
    genre: "Animation, Adventure, Sci-Fi"
  },
  {
    id: 22,
    title: "라따뚜이",
    englishTitle: "Ratatouille",
    year: 2007,
    director: "Brad Bird",
    genre: "Animation, Comedy, Family"
  },
  {
    id: 23,
    title: "인사이드 아웃",
    englishTitle: "Inside Out",
    year: 2015,
    director: "Pete Docter",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 24,
    title: "코코",
    englishTitle: "Coco",
    year: 2017,
    director: "Lee Unkrich",
    genre: "Animation, Adventure, Fantasy"
  },
  {
    id: 25,
    title: "니모를 찾아서",
    englishTitle: "Finding Nemo",
    year: 2003,
    director: "Andrew Stanton",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 26,
    title: "인크레더블",
    englishTitle: "The Incredibles",
    year: 2004,
    director: "Brad Bird",
    genre: "Animation, Action, Adventure"
  },
  {
    id: 27,
    title: "인크레더블 2",
    englishTitle: "Incredibles 2",
    year: 2018,
    director: "Brad Bird",
    genre: "Animation, Action, Adventure"
  },
  {
    id: 28,
    title: "몬스터 주식회사",
    englishTitle: "Monsters, Inc.",
    year: 2001,
    director: "Pete Docter",
    genre: "Animation, Comedy, Family"
  },
  {
    id: 29,
    title: "몬스터 대학교",
    englishTitle: "Monsters University",
    year: 2013,
    director: "Dan Scanlon",
    genre: "Animation, Comedy, Family"
  },
  {
    id: 30,
    title: "겨울왕국",
    englishTitle: "Frozen",
    year: 2013,
    director: "Chris Buck, Jennifer Lee",
    genre: "Animation, Adventure, Fantasy"
  },
  {
    id: 31,
    title: "겨울왕국 2",
    englishTitle: "Frozen II",
    year: 2019,
    director: "Chris Buck, Jennifer Lee",
    genre: "Animation, Adventure, Fantasy"
  },
  {
    id: 32,
    title: "라이온 킹",
    englishTitle: "The Lion King",
    year: 1994,
    director: "Roger Allers, Rob Minkoff",
    genre: "Animation, Adventure, Drama"
  },
  {
    id: 33,
    title: "미녀와 야수",
    englishTitle: "Beauty and the Beast",
    year: 1991,
    director: "Gary Trousdale, Kirk Wise",
    genre: "Animation, Family, Fantasy"
  },
  {
    id: 34,
    title: "알라딘",
    englishTitle: "Aladdin",
    year: 1992,
    director: "Ron Clements, John Musker",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 35,
    title: "뮬란",
    englishTitle: "Mulan",
    year: 1998,
    director: "Tony Bancroft, Barry Cook",
    genre: "Animation, Adventure, Drama"
  },
  {
    id: 36,
    title: "모아나",
    englishTitle: "Moana",
    year: 2016,
    director: "Ron Clements, John Musker",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 37,
    title: "주토피아",
    englishTitle: "Zootopia",
    year: 2016,
    director: "Byron Howard, Rich Moore",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 38,
    title: "빅 히어로",
    englishTitle: "Big Hero 6",
    year: 2014,
    director: "Don Hall, Chris Williams",
    genre: "Animation, Action, Adventure"
  },
  {
    id: 39,
    title: "스파이더맨: 뉴 유니버스",
    englishTitle: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
    genre: "Animation, Action, Adventure"
  },
  {
    id: 40,
    title: "스파이더맨: 어크로스 더 유니버스",
    englishTitle: "Spider-Man: Across the Spider-Verse",
    year: 2023,
    director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
    genre: "Animation, Action, Adventure"
  },

  {
    id: 41,
    title: "타이타닉",
    englishTitle: "Titanic",
    year: 1997,
    director: "James Cameron",
    genre: "Drama, Romance"
  },
  {
    id: 42,
    title: "아바타",
    englishTitle: "Avatar",
    year: 2009,
    director: "James Cameron",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 43,
    title: "아바타: 물의 길",
    englishTitle: "Avatar: The Way of Water",
    year: 2022,
    director: "James Cameron",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 44,
    title: "터미네이터",
    englishTitle: "The Terminator",
    year: 1984,
    director: "James Cameron",
    genre: "Action, Sci-Fi"
  },
  {
    id: 45,
    title: "터미네이터 2: 심판의 날",
    englishTitle: "Terminator 2: Judgment Day",
    year: 1991,
    director: "James Cameron",
    genre: "Action, Sci-Fi"
  },
  {
    id: 46,
    title: "에일리언",
    englishTitle: "Alien",
    year: 1979,
    director: "Ridley Scott",
    genre: "Horror, Sci-Fi"
  },
  {
    id: 47,
    title: "에일리언 2",
    englishTitle: "Aliens",
    year: 1986,
    director: "James Cameron",
    genre: "Action, Horror, Sci-Fi"
  },
  {
    id: 48,
    title: "블레이드 러너",
    englishTitle: "Blade Runner",
    year: 1982,
    director: "Ridley Scott",
    genre: "Sci-Fi, Thriller"
  },
  {
    id: 49,
    title: "글래디에이터",
    englishTitle: "Gladiator",
    year: 2000,
    director: "Ridley Scott",
    genre: "Action, Drama"
  },
  {
    id: 50,
    title: "마션",
    englishTitle: "The Martian",
    year: 2015,
    director: "Ridley Scott",
    genre: "Adventure, Drama, Sci-Fi"
  },
  {
    id: 51,
    title: "덩케르크",
    englishTitle: "Dunkirk",
    year: 2017,
    director: "Christopher Nolan",
    genre: "Action, Drama, War"
  },
  {
    id: 52,
    title: "테넷",
    englishTitle: "Tenet",
    year: 2020,
    director: "Christopher Nolan",
    genre: "Action, Sci-Fi, Thriller"
  },
  {
    id: 53,
    title: "다크 나이트 라이즈",
    englishTitle: "The Dark Knight Rises",
    year: 2012,
    director: "Christopher Nolan",
    genre: "Action, Crime, Drama"
  },
  {
    id: 54,
    title: "배트맨 비긴즈",
    englishTitle: "Batman Begins",
    year: 2005,
    director: "Christopher Nolan",
    genre: "Action, Crime, Drama"
  },
  {
    id: 55,
    title: "메멘토",
    englishTitle: "Memento",
    year: 2000,
    director: "Christopher Nolan",
    genre: "Mystery, Thriller"
  },
  {
    id: 56,
    title: "프레스티지",
    englishTitle: "The Prestige",
    year: 2006,
    director: "Christopher Nolan",
    genre: "Drama, Mystery, Sci-Fi"
  },
  {
    id: 57,
    title: "오펜하이머",
    englishTitle: "Oppenheimer",
    year: 2023,
    director: "Christopher Nolan",
    genre: "Biography, Drama, History"
  },
  {
    id: 58,
    title: "킬러들의 쇼핑몰",
    englishTitle: "The Killer's Shopping List",
    year: 2024,
    director: "Various",
    genre: "Action, Thriller"
  },
  {
    id: 59,
    title: "저수지의 개들",
    englishTitle: "Reservoir Dogs",
    year: 1992,
    director: "Quentin Tarantino",
    genre: "Crime, Thriller"
  },
  {
    id: 60,
    title: "재키 브라운",
    englishTitle: "Jackie Brown",
    year: 1997,
    director: "Quentin Tarantino",
    genre: "Crime, Drama"
  },
  {
    id: 61,
    title: "킬 빌",
    englishTitle: "Kill Bill: Vol. 1",
    year: 2003,
    director: "Quentin Tarantino",
    genre: "Action, Crime, Thriller"
  },
  {
    id: 62,
    title: "킬 빌 2",
    englishTitle: "Kill Bill: Vol. 2",
    year: 2004,
    director: "Quentin Tarantino",
    genre: "Action, Crime, Thriller"
  },
  {
    id: 63,
    title: "바스터즈: 거친 녀석들",
    englishTitle: "Inglourious Basterds",
    year: 2009,
    director: "Quentin Tarantino",
    genre: "Drama, War"
  },
  {
    id: 64,
    title: "장고: 분노의 추적자",
    englishTitle: "Django Unchained",
    year: 2012,
    director: "Quentin Tarantino",
    genre: "Drama, Western"
  },
  {
    id: 65,
    title: "헤이트풀 8",
    englishTitle: "The Hateful Eight",
    year: 2015,
    director: "Quentin Tarantino",
    genre: "Crime, Drama, Western"
  },
  {
    id: 66,
    title: "원스 어폰 어 타임 인 할리우드",
    englishTitle: "Once Upon a Time... in Hollywood",
    year: 2019,
    director: "Quentin Tarantino",
    genre: "Comedy, Drama"
  },
  {
    id: 67,
    title: "좋은 친구들",
    englishTitle: "Goodfellas",
    year: 1990,
    director: "Martin Scorsese",
    genre: "Crime, Drama"
  },
  {
    id: 68,
    title: "택시 드라이버",
    englishTitle: "Taxi Driver",
    year: 1976,
    director: "Martin Scorsese",
    genre: "Crime, Drama"
  },
  {
    id: 69,
    title: "성난 황소",
    englishTitle: "Raging Bull",
    year: 1980,
    director: "Martin Scorsese",
    genre: "Biography, Drama, Sport"
  },
  {
    id: 70,
    title: "셔터 아일랜드",
    englishTitle: "Shutter Island",
    year: 2010,
    director: "Martin Scorsese",
    genre: "Mystery, Thriller"
  },
  {
    id: 71,
    title: "디파티드",
    englishTitle: "The Departed",
    year: 2006,
    director: "Martin Scorsese",
    genre: "Crime, Drama, Thriller"
  },
  {
    id: 72,
    title: "더 울프 오브 월 스트리트",
    englishTitle: "The Wolf of Wall Street",
    year: 2013,
    director: "Martin Scorsese",
    genre: "Biography, Comedy, Crime"
  },
  {
    id: 73,
    title: "아이리시맨",
    englishTitle: "The Irishman",
    year: 2019,
    director: "Martin Scorsese",
    genre: "Biography, Crime, Drama"
  },
  {
    id: 74,
    title: "카지노",
    englishTitle: "Casino",
    year: 1995,
    director: "Martin Scorsese",
    genre: "Crime, Drama"
  },
  {
    id: 75,
    title: "시민 케인",
    englishTitle: "Citizen Kane",
    year: 1941,
    director: "Orson Welles",
    genre: "Drama, Mystery"
  },
  {
    id: 76,
    title: "카사블랑카",
    englishTitle: "Casablanca",
    year: 1942,
    director: "Michael Curtiz",
    genre: "Drama, Romance, War"
  },
  {
    id: 77,
    title: "12인의 성난 사람들",
    englishTitle: "12 Angry Men",
    year: 1957,
    director: "Sidney Lumet",
    genre: "Drama"
  },
  {
    id: 78,
    title: "7인의 사무라이",
    englishTitle: "Seven Samurai",
    year: 1954,
    director: "Akira Kurosawa",
    genre: "Action, Drama"
  },
  {
    id: 79,
    title: "라쇼몽",
    englishTitle: "Rashomon",
    year: 1950,
    director: "Akira Kurosawa",
    genre: "Crime, Drama, Mystery"
  },
  {
    id: 80,
    title: "이키루",
    englishTitle: "Ikiru",
    year: 1952,
    director: "Akira Kurosawa",
    genre: "Drama"
  },

  {
    id: 81,
    title: "2001 스페이스 오디세이",
    englishTitle: "2001: A Space Odyssey",
    year: 1968,
    director: "Stanley Kubrick",
    genre: "Adventure, Sci-Fi"
  },
  {
    id: 82,
    title: "시계태엽 오렌지",
    englishTitle: "A Clockwork Orange",
    year: 1971,
    director: "Stanley Kubrick",
    genre: "Crime, Sci-Fi"
  },
  {
    id: 83,
    title: "샤이닝",
    englishTitle: "The Shining",
    year: 1980,
    director: "Stanley Kubrick",
    genre: "Drama, Horror"
  },
  {
    id: 84,
    title: "풀 메탈 자켓",
    englishTitle: "Full Metal Jacket",
    year: 1987,
    director: "Stanley Kubrick",
    genre: "Drama, War"
  },
  {
    id: 85,
    title: "닥터 스트레인지러브",
    englishTitle: "Dr. Strangelove",
    year: 1964,
    director: "Stanley Kubrick",
    genre: "Comedy, War"
  },
  {
    id: 86,
    title: "파이트 클럽",
    englishTitle: "Fight Club",
    year: 1999,
    director: "David Fincher",
    genre: "Drama"
  },
  {
    id: 87,
    title: "세븐",
    englishTitle: "Se7en",
    year: 1995,
    director: "David Fincher",
    genre: "Crime, Mystery, Thriller"
  },
  {
    id: 88,
    title: "조디악",
    englishTitle: "Zodiac",
    year: 2007,
    director: "David Fincher",
    genre: "Crime, Drama, Mystery"
  },
  {
    id: 89,
    title: "소셜 네트워크",
    englishTitle: "The Social Network",
    year: 2010,
    director: "David Fincher",
    genre: "Biography, Drama"
  },
  {
    id: 90,
    title: "나를 찾아줘",
    englishTitle: "Gone Girl",
    year: 2014,
    director: "David Fincher",
    genre: "Drama, Mystery, Thriller"
  },
  {
    id: 91,
    title: "벤자민 버튼의 시간은 거꾸로 간다",
    englishTitle: "The Curious Case of Benjamin Button",
    year: 2008,
    director: "David Fincher",
    genre: "Drama, Fantasy, Romance"
  },
  {
    id: 92,
    title: "아메리칸 뷰티",
    englishTitle: "American Beauty",
    year: 1999,
    director: "Sam Mendes",
    genre: "Drama"
  },
  {
    id: 93,
    title: "1917",
    englishTitle: "1917",
    year: 2019,
    director: "Sam Mendes",
    genre: "Drama, War"
  },
  {
    id: 94,
    title: "로드 투 퍼디션",
    englishTitle: "Road to Perdition",
    year: 2002,
    director: "Sam Mendes",
    genre: "Crime, Drama"
  },
  {
    id: 95,
    title: "아메리칸 사이코",
    englishTitle: "American Psycho",
    year: 2000,
    director: "Mary Harron",
    genre: "Crime, Drama, Thriller"
  },
  {
    id: 96,
    title: "레옹",
    englishTitle: "Léon: The Professional",
    year: 1994,
    director: "Luc Besson",
    genre: "Action, Crime, Drama"
  },
  {
    id: 97,
    title: "제5원소",
    englishTitle: "The Fifth Element",
    year: 1997,
    director: "Luc Besson",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 98,
    title: "그랑블루",
    englishTitle: "The Big Blue",
    year: 1988,
    director: "Luc Besson",
    genre: "Adventure, Drama"
  },
  {
    id: 99,
    title: "시네마 천국",
    englishTitle: "Cinema Paradiso",
    year: 1988,
    director: "Giuseppe Tornatore",
    genre: "Drama, Romance"
  },
  {
    id: 100,
    title: "인생은 아름다워",
    englishTitle: "Life Is Beautiful",
    year: 1997,
    director: "Roberto Benigni",
    genre: "Comedy, Drama, Romance"
  },

  {
    id: 101,
    title: "센과 치히로의 행방불명",
    englishTitle: "Spirited Away",
    year: 2001,
    director: "Hayao Miyazaki",
    genre: "Animation, Adventure, Fantasy"
  },
  {
    id: 102,
    title: "하울의 움직이는 성",
    englishTitle: "Howl's Moving Castle",
    year: 2004,
    director: "Hayao Miyazaki",
    genre: "Animation, Adventure, Fantasy"
  },
  {
    id: 103,
    title: "이웃집 토토로",
    englishTitle: "My Neighbor Totoro",
    year: 1988,
    director: "Hayao Miyazaki",
    genre: "Animation, Family, Fantasy"
  },
  {
    id: 104,
    title: "모노노케 히메",
    englishTitle: "Princess Mononoke",
    year: 1997,
    director: "Hayao Miyazaki",
    genre: "Animation, Adventure, Fantasy"
  },
  {
    id: 105,
    title: "벼랑 위의 포뇨",
    englishTitle: "Ponyo",
    year: 2008,
    director: "Hayao Miyazaki",
    genre: "Animation, Adventure, Fantasy"
  },
  {
    id: 106,
    title: "바람이 분다",
    englishTitle: "The Wind Rises",
    year: 2013,
    director: "Hayao Miyazaki",
    genre: "Animation, Biography, Drama"
  },
  {
    id: 107,
    title: "너의 이름은.",
    englishTitle: "Your Name.",
    year: 2016,
    director: "Makoto Shinkai",
    genre: "Animation, Drama, Fantasy"
  },
  {
    id: 108,
    title: "날씨의 아이",
    englishTitle: "Weathering with You",
    year: 2019,
    director: "Makoto Shinkai",
    genre: "Animation, Drama, Fantasy"
  },
  {
    id: 109,
    title: "스즈메의 문단속",
    englishTitle: "Suzume",
    year: 2022,
    director: "Makoto Shinkai",
    genre: "Animation, Adventure, Fantasy"
  },
  {
    id: 110,
    title: "아키라",
    englishTitle: "Akira",
    year: 1988,
    director: "Katsuhiro Otomo",
    genre: "Animation, Action, Sci-Fi"
  },
  {
    id: 111,
    title: "공각기동대",
    englishTitle: "Ghost in the Shell",
    year: 1995,
    director: "Mamoru Oshii",
    genre: "Animation, Action, Sci-Fi"
  },
  {
    id: 112,
    title: "퍼펙트 블루",
    englishTitle: "Perfect Blue",
    year: 1997,
    director: "Satoshi Kon",
    genre: "Animation, Mystery, Thriller"
  },
  {
    id: 113,
    title: "시간을 달리는 소녀",
    englishTitle: "The Girl Who Leapt Through Time",
    year: 2006,
    director: "Mamoru Hosoda",
    genre: "Animation, Drama, Sci-Fi"
  },
  {
    id: 114,
    title: "늑대아이",
    englishTitle: "Wolf Children",
    year: 2012,
    director: "Mamoru Hosoda",
    genre: "Animation, Drama, Fantasy"
  },
  {
    id: 115,
    title: "목소리의 형태",
    englishTitle: "A Silent Voice",
    year: 2016,
    director: "Naoko Yamada",
    genre: "Animation, Drama"
  },
  {
    id: 116,
    title: "철도원",
    englishTitle: "Poppoya",
    year: 1999,
    director: "Yoji Yamada",
    genre: "Drama"
  },
  {
    id: 117,
    title: "올드보이",
    englishTitle: "Oldboy",
    year: 2003,
    director: "Park Chan-wook",
    genre: "Action, Drama, Mystery"
  },
  {
    id: 118,
    title: "아가씨",
    englishTitle: "The Handmaiden",
    year: 2016,
    director: "Park Chan-wook",
    genre: "Drama, Romance, Thriller"
  },
  {
    id: 119,
    title: "헤어질 결심",
    englishTitle: "Decision to Leave",
    year: 2022,
    director: "Park Chan-wook",
    genre: "Crime, Drama, Mystery"
  },
  {
    id: 120,
    title: "복수는 나의 것",
    englishTitle: "Sympathy for Mr. Vengeance",
    year: 2002,
    director: "Park Chan-wook",
    genre: "Crime, Drama, Thriller"
  },

  {
    id: 121,
    title: "살인의 추억",
    englishTitle: "Memories of Murder",
    year: 2003,
    director: "Bong Joon-ho",
    genre: "Crime, Drama, Mystery"
  },
  {
    id: 122,
    title: "마더",
    englishTitle: "Mother",
    year: 2009,
    director: "Bong Joon-ho",
    genre: "Crime, Drama, Mystery"
  },
  {
    id: 123,
    title: "괴물",
    englishTitle: "The Host",
    year: 2006,
    director: "Bong Joon-ho",
    genre: "Action, Drama, Horror"
  },
  {
    id: 124,
    title: "설국열차",
    englishTitle: "Snowpiercer",
    year: 2013,
    director: "Bong Joon-ho",
    genre: "Action, Drama, Sci-Fi"
  },
  {
    id: 125,
    title: "옥자",
    englishTitle: "Okja",
    year: 2017,
    director: "Bong Joon-ho",
    genre: "Action, Adventure, Drama"
  },
  {
    id: 126,
    title: "버닝",
    englishTitle: "Burning",
    year: 2018,
    director: "Lee Chang-dong",
    genre: "Drama, Mystery"
  },
  {
    id: 127,
    title: "밀양",
    englishTitle: "Secret Sunshine",
    year: 2007,
    director: "Lee Chang-dong",
    genre: "Drama"
  },
  {
    id: 128,
    title: "박하사탕",
    englishTitle: "Peppermint Candy",
    year: 1999,
    director: "Lee Chang-dong",
    genre: "Drama"
  },
  {
    id: 129,
    title: "시",
    englishTitle: "Poetry",
    year: 2010,
    director: "Lee Chang-dong",
    genre: "Drama"
  },
  {
    id: 130,
    title: "택시운전사",
    englishTitle: "A Taxi Driver",
    year: 2017,
    director: "Jang Hoon",
    genre: "Drama, History"
  },
  {
    id: 131,
    title: "변호인",
    englishTitle: "The Attorney",
    year: 2013,
    director: "Yang Woo-seok",
    genre: "Drama"
  },
  {
    id: 132,
    title: "국제시장",
    englishTitle: "Ode to My Father",
    year: 2014,
    director: "Yoon Je-kyoon",
    genre: "Drama"
  },
  {
    id: 133,
    title: "범죄도시",
    englishTitle: "The Outlaws",
    year: 2017,
    director: "Kang Yoon-sung",
    genre: "Action, Crime"
  },
  {
    id: 134,
    title: "범죄도시 2",
    englishTitle: "The Roundup",
    year: 2022,
    director: "Lee Sang-yong",
    genre: "Action, Crime"
  },
  {
    id: 135,
    title: "범죄도시 3",
    englishTitle: "The Roundup: No Way Out",
    year: 2023,
    director: "Lee Sang-yong",
    genre: "Action, Crime"
  },
  {
    id: 136,
    title: "범죄도시 4",
    englishTitle: "The Roundup: Punishment",
    year: 2024,
    director: "Heo Myung-haeng",
    genre: "Action, Crime"
  },
  {
    id: 137,
    title: "곡성",
    englishTitle: "The Wailing",
    year: 2016,
    director: "Na Hong-jin",
    genre: "Drama, Horror, Mystery"
  },
  {
    id: 138,
    title: "추격자",
    englishTitle: "The Chaser",
    year: 2008,
    director: "Na Hong-jin",
    genre: "Crime, Thriller"
  },
  {
    id: 139,
    title: "황해",
    englishTitle: "The Yellow Sea",
    year: 2010,
    director: "Na Hong-jin",
    genre: "Action, Crime, Thriller"
  },
  {
    id: 140,
    title: "신세계",
    englishTitle: "New World",
    year: 2013,
    director: "Park Hoon-jung",
    genre: "Crime, Drama, Thriller"
  },

  {
    id: 141,
    title: "기억의 밤",
    englishTitle: "Forgotten",
    year: 2017,
    director: "Jang Hang-jun",
    genre: "Mystery, Thriller"
  },
  {
    id: 142,
    title: "끝까지 간다",
    englishTitle: "A Hard Day",
    year: 2014,
    director: "Kim Seong-hun",
    genre: "Action, Crime, Thriller"
  },
  {
    id: 143,
    title: "악인전",
    englishTitle: "The Gangster, the Cop, the Devil",
    year: 2019,
    director: "Lee Won-tae",
    genre: "Action, Crime"
  },
  {
    id: 144,
    title: "베테랑",
    englishTitle: "Veteran",
    year: 2015,
    director: "Ryoo Seung-wan",
    genre: "Action, Comedy, Crime"
  },
  {
    id: 145,
    title: "부산행",
    englishTitle: "Train to Busan",
    year: 2016,
    director: "Yeon Sang-ho",
    genre: "Action, Horror, Thriller"
  },
  {
    id: 146,
    title: "반도",
    englishTitle: "Peninsula",
    year: 2020,
    director: "Yeon Sang-ho",
    genre: "Action, Horror, Thriller"
  },
  {
    id: 147,
    title: "서울의 봄",
    englishTitle: "12.12: The Day",
    year: 2023,
    director: "Kim Sung-soo",
    genre: "Drama, History"
  },
  {
    id: 148,
    title: "파묘",
    englishTitle: "Exhuma",
    year: 2024,
    director: "Jang Jae-hyun",
    genre: "Horror, Mystery, Thriller"
  },
  {
    id: 149,
    title: "콘크리트 유토피아",
    englishTitle: "Concrete Utopia",
    year: 2023,
    director: "Um Tae-hwa",
    genre: "Drama, Thriller"
  },
  {
    id: 150,
    title: "남산의 부장들",
    englishTitle: "The Man Standing Next",
    year: 2020,
    director: "Woo Min-ho",
    genre: "Drama, History, Thriller"
  },

  {
    id: 151,
    title: "쇼생크 탈출",
    englishTitle: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    genre: "Drama"
  },
  {
    id: 152,
    title: "그린 마일",
    englishTitle: "The Green Mile",
    year: 1999,
    director: "Frank Darabont",
    genre: "Crime, Drama, Fantasy"
  },
  {
    id: 153,
    title: "포레스트 검프",
    englishTitle: "Forrest Gump",
    year: 1994,
    director: "Robert Zemeckis",
    genre: "Drama, Romance"
  },
  {
    id: 154,
    title: "캐스트 어웨이",
    englishTitle: "Cast Away",
    year: 2000,
    director: "Robert Zemeckis",
    genre: "Adventure, Drama"
  },
  {
    id: 155,
    title: "백 투 더 퓨처",
    englishTitle: "Back to the Future",
    year: 1985,
    director: "Robert Zemeckis",
    genre: "Adventure, Comedy, Sci-Fi"
  },
  {
    id: 156,
    title: "백 투 더 퓨처 2",
    englishTitle: "Back to the Future Part II",
    year: 1989,
    director: "Robert Zemeckis",
    genre: "Adventure, Comedy, Sci-Fi"
  },
  {
    id: 157,
    title: "백 투 더 퓨처 3",
    englishTitle: "Back to the Future Part III",
    year: 1990,
    director: "Robert Zemeckis",
    genre: "Adventure, Comedy, Sci-Fi"
  },
  {
    id: 158,
    title: "캐리비안의 해적: 블랙펄의 저주",
    englishTitle: "Pirates of the Caribbean: The Curse of the Black Pearl",
    year: 2003,
    director: "Gore Verbinski",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 159,
    title: "캐리비안의 해적: 망자의 함",
    englishTitle: "Pirates of the Caribbean: Dead Man's Chest",
    year: 2006,
    director: "Gore Verbinski",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 160,
    title: "캐리비안의 해적: 세상의 끝에서",
    englishTitle: "Pirates of the Caribbean: At World's End",
    year: 2007,
    director: "Gore Verbinski",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 161,
    title: "해리 포터와 마법사의 돌",
    englishTitle: "Harry Potter and the Sorcerer's Stone",
    year: 2001,
    director: "Chris Columbus",
    genre: "Adventure, Fantasy"
  },
  {
    id: 162,
    title: "해리 포터와 비밀의 방",
    englishTitle: "Harry Potter and the Chamber of Secrets",
    year: 2002,
    director: "Chris Columbus",
    genre: "Adventure, Fantasy"
  },
  {
    id: 163,
    title: "해리 포터와 아즈카반의 죄수",
    englishTitle: "Harry Potter and the Prisoner of Azkaban",
    year: 2004,
    director: "Alfonso Cuarón",
    genre: "Adventure, Fantasy"
  },
  {
    id: 164,
    title: "해리 포터와 불의 잔",
    englishTitle: "Harry Potter and the Goblet of Fire",
    year: 2005,
    director: "Mike Newell",
    genre: "Adventure, Fantasy"
  },
  {
    id: 165,
    title: "해리 포터와 불사조 기사단",
    englishTitle: "Harry Potter and the Order of the Phoenix",
    year: 2007,
    director: "David Yates",
    genre: "Adventure, Fantasy"
  },
  {
    id: 166,
    title: "해리 포터와 혼혈 왕자",
    englishTitle: "Harry Potter and the Half-Blood Prince",
    year: 2009,
    director: "David Yates",
    genre: "Adventure, Fantasy"
  },
  {
    id: 167,
    title: "해리 포터와 죽음의 성물 1",
    englishTitle: "Harry Potter and the Deathly Hallows: Part 1",
    year: 2010,
    director: "David Yates",
    genre: "Adventure, Fantasy"
  },
  {
    id: 168,
    title: "해리 포터와 죽음의 성물 2",
    englishTitle: "Harry Potter and the Deathly Hallows: Part 2",
    year: 2011,
    director: "David Yates",
    genre: "Adventure, Fantasy"
  },
  {
    id: 169,
    title: "스타워즈",
    englishTitle: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    director: "George Lucas",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 170,
    title: "스타워즈: 제국의 역습",
    englishTitle: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
    director: "Irvin Kershner",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 171,
    title: "스타워즈: 제다이의 귀환",
    englishTitle: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
    director: "Richard Marquand",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 172,
    title: "스타워즈: 보이지 않는 위험",
    englishTitle: "Star Wars: Episode I - The Phantom Menace",
    year: 1999,
    director: "George Lucas",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 173,
    title: "스타워즈: 클론의 습격",
    englishTitle: "Star Wars: Episode II - Attack of the Clones",
    year: 2002,
    director: "George Lucas",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 174,
    title: "스타워즈: 시스의 복수",
    englishTitle: "Star Wars: Episode III - Revenge of the Sith",
    year: 2005,
    director: "George Lucas",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 175,
    title: "매드 맥스: 분노의 도로",
    englishTitle: "Mad Max: Fury Road",
    year: 2015,
    director: "George Miller",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 176,
    title: "매드 맥스 2",
    englishTitle: "Mad Max 2",
    year: 1981,
    director: "George Miller",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 177,
    title: "터미네이터: 다크 페이트",
    englishTitle: "Terminator: Dark Fate",
    year: 2019,
    director: "Tim Miller",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 178,
    title: "쥬라기 공원",
    englishTitle: "Jurassic Park",
    year: 1993,
    director: "Steven Spielberg",
    genre: "Adventure, Sci-Fi, Thriller"
  },
  {
    id: 179,
    title: "쥬라기 공원 2: 잃어버린 세계",
    englishTitle: "The Lost World: Jurassic Park",
    year: 1997,
    director: "Steven Spielberg",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 180,
    title: "죠스",
    englishTitle: "Jaws",
    year: 1975,
    director: "Steven Spielberg",
    genre: "Adventure, Thriller"
  },

  {
    id: 181,
    title: "쉰들러 리스트",
    englishTitle: "Schindler's List",
    year: 1993,
    director: "Steven Spielberg",
    genre: "Biography, Drama, History"
  },
  {
    id: 182,
    title: "라이언 일병 구하기",
    englishTitle: "Saving Private Ryan",
    year: 1998,
    director: "Steven Spielberg",
    genre: "Drama, War"
  },
  {
    id: 183,
    title: "캐치 미 이프 유 캔",
    englishTitle: "Catch Me If You Can",
    year: 2002,
    director: "Steven Spielberg",
    genre: "Biography, Crime, Drama"
  },
  {
    id: 184,
    title: "마이너리티 리포트",
    englishTitle: "Minority Report",
    year: 2002,
    director: "Steven Spielberg",
    genre: "Action, Crime, Sci-Fi"
  },
  {
    id: 185,
    title: "레디 플레이어 원",
    englishTitle: "Ready Player One",
    year: 2018,
    director: "Steven Spielberg",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 186,
    title: "인디아나 존스: 레이더스",
    englishTitle: "Raiders of the Lost Ark",
    year: 1981,
    director: "Steven Spielberg",
    genre: "Action, Adventure"
  },
  {
    id: 187,
    title: "인디아나 존스와 최후의 성전",
    englishTitle: "Indiana Jones and the Last Crusade",
    year: 1989,
    director: "Steven Spielberg",
    genre: "Action, Adventure"
  },
  {
    id: 188,
    title: "에이리언: 커버넌트",
    englishTitle: "Alien: Covenant",
    year: 2017,
    director: "Ridley Scott",
    genre: "Horror, Sci-Fi, Thriller"
  },
  {
    id: 189,
    title: "프로메테우스",
    englishTitle: "Prometheus",
    year: 2012,
    director: "Ridley Scott",
    genre: "Adventure, Mystery, Sci-Fi"
  },
  {
    id: 190,
    title: "킹덤 오브 헤븐",
    englishTitle: "Kingdom of Heaven",
    year: 2005,
    director: "Ridley Scott",
    genre: "Action, Adventure, Drama"
  },
  {
    id: 191,
    title: "블랙 호크 다운",
    englishTitle: "Black Hawk Down",
    year: 2001,
    director: "Ridley Scott",
    genre: "Action, Drama, History"
  },
  {
    id: 192,
    title: "덴젤 워싱턴의 영화",
    englishTitle: "Training Day",
    year: 2001,
    director: "Antoine Fuqua",
    genre: "Crime, Drama, Thriller"
  },
  {
    id: 193,
    title: "매트릭스 리로디드",
    englishTitle: "The Matrix Reloaded",
    year: 2003,
    director: "The Wachowskis",
    genre: "Action, Sci-Fi"
  },
  {
    id: 194,
    title: "매트릭스 레볼루션",
    englishTitle: "The Matrix Revolutions",
    year: 2003,
    director: "The Wachowskis",
    genre: "Action, Sci-Fi"
  },
  {
    id: 195,
    title: "존 윅",
    englishTitle: "John Wick",
    year: 2014,
    director: "Chad Stahelski",
    genre: "Action, Thriller"
  },
  {
    id: 196,
    title: "존 윅: 리로드",
    englishTitle: "John Wick: Chapter 2",
    year: 2017,
    director: "Chad Stahelski",
    genre: "Action, Thriller"
  },
  {
    id: 197,
    title: "존 윅 3: 파라벨룸",
    englishTitle: "John Wick: Chapter 3 - Parabellum",
    year: 2019,
    director: "Chad Stahelski",
    genre: "Action, Thriller"
  },
  {
    id: 198,
    title: "존 윅 4",
    englishTitle: "John Wick: Chapter 4",
    year: 2023,
    director: "Chad Stahelski",
    genre: "Action, Thriller"
  },
  {
    id: 199,
    title: "미션 임파서블",
    englishTitle: "Mission: Impossible",
    year: 1996,
    director: "Brian De Palma",
    genre: "Action, Adventure, Thriller"
  },
  {
    id: 200,
    title: "미션 임파서블: 폴아웃",
    englishTitle: "Mission: Impossible - Fallout",
    year: 2018,
    director: "Christopher McQuarrie",
    genre: "Action, Adventure, Thriller"
  }
  const movies = [
  {
    id: 1,
    title: "대부",
    englishTitle: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    genre: "Crime, Drama"
  },
  {
    id: 2,
    title: "대부 2",
    englishTitle: "The Godfather Part II",
    year: 1974,
    director: "Francis Ford Coppola",
    genre: "Crime, Drama"
  },
  {
    id: 3,
    title: "쇼생크 탈출",
    englishTitle: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    genre: "Drama"
  },
  {
    id: 4,
    title: "다크 나이트",
    englishTitle: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    genre: "Action, Crime, Drama"
  },
  {
    id: 5,
    title: "펄프 픽션",
    englishTitle: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    genre: "Crime, Drama"
  },
  {
    id: 6,
    title: "반지의 제왕: 왕의 귀환",
    englishTitle: "The Lord of the Rings: The Return of the King",
    year: 2003,
    director: "Peter Jackson",
    genre: "Adventure, Fantasy, Drama"
  },
  {
    id: 7,
    title: "반지의 제왕: 두 개의 탑",
    englishTitle: "The Lord of the Rings: The Two Towers",
    year: 2002,
    director: "Peter Jackson",
    genre: "Adventure, Fantasy, Drama"
  },
  {
    id: 8,
    title: "반지의 제왕: 반지 원정대",
    englishTitle: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    director: "Peter Jackson",
    genre: "Adventure, Fantasy, Drama"
  },
  {
    id: 9,
    title: "포레스트 검프",
    englishTitle: "Forrest Gump",
    year: 1994,
    director: "Robert Zemeckis",
    genre: "Drama, Romance"
  },
  {
    id: 10,
    title: "인셉션",
    englishTitle: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    genre: "Action, Sci-Fi, Thriller"
  },
  {
    id: 11,
    title: "매트릭스",
    englishTitle: "The Matrix",
    year: 1999,
    director: "The Wachowskis",
    genre: "Action, Sci-Fi"
  },
  {
    id: 12,
    title: "인터스텔라",
    englishTitle: "Interstellar",
    year: 2014,
    director: "Christopher Nolan",
    genre: "Adventure, Drama, Sci-Fi"
  },
  {
    id: 13,
    title: "기생충",
    englishTitle: "Parasite",
    year: 2019,
    director: "Bong Joon-ho",
    genre: "Drama, Thriller"
  },
  {
    id: 14,
    title: "어벤져스: 엔드게임",
    englishTitle: "Avengers: Endgame",
    year: 2019,
    director: "Anthony Russo, Joe Russo",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 15,
    title: "어벤져스: 인피니티 워",
    englishTitle: "Avengers: Infinity War",
    year: 2018,
    director: "Anthony Russo, Joe Russo",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 16,
    title: "토이 스토리",
    englishTitle: "Toy Story",
    year: 1995,
    director: "John Lasseter",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 17,
    title: "토이 스토리 2",
    englishTitle: "Toy Story 2",
    year: 1999,
    director: "John Lasseter, Ash Brannon, Lee Unkrich",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 18,
    title: "토이 스토리 3",
    englishTitle: "Toy Story 3",
    year: 2010,
    director: "Lee Unkrich",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 19,
    title: "토이 스토리 4",
    englishTitle: "Toy Story 4",
    year: 2019,
    director: "Josh Cooley",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 20,
    title: "업",
    englishTitle: "Up",
    year: 2009,
    director: "Pete Docter, Bob Peterson",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 21,
    title: "월-E",
    englishTitle: "WALL-E",
    year: 2008,
    director: "Andrew Stanton",
    genre: "Animation, Adventure, Sci-Fi"
  },
  {
    id: 22,
    title: "라따뚜이",
    englishTitle: "Ratatouille",
    year: 2007,
    director: "Brad Bird",
    genre: "Animation, Comedy, Family"
  },
  {
    id: 23,
    title: "인사이드 아웃",
    englishTitle: "Inside Out",
    year: 2015,
    director: "Pete Docter",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 24,
    title: "코코",
    englishTitle: "Coco",
    year: 2017,
    director: "Lee Unkrich",
    genre: "Animation, Adventure, Fantasy"
  },
  {
    id: 25,
    title: "니모를 찾아서",
    englishTitle: "Finding Nemo",
    year: 2003,
    director: "Andrew Stanton",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 26,
    title: "인크레더블",
    englishTitle: "The Incredibles",
    year: 2004,
    director: "Brad Bird",
    genre: "Animation, Action, Adventure"
  },
  {
    id: 27,
    title: "인크레더블 2",
    englishTitle: "Incredibles 2",
    year: 2018,
    director: "Brad Bird",
    genre: "Animation, Action, Adventure"
  },
  {
    id: 28,
    title: "몬스터 주식회사",
    englishTitle: "Monsters, Inc.",
    year: 2001,
    director: "Pete Docter",
    genre: "Animation, Comedy, Family"
  },
  {
    id: 29,
    title: "몬스터 대학교",
    englishTitle: "Monsters University",
    year: 2013,
    director: "Dan Scanlon",
    genre: "Animation, Comedy, Family"
  },
  {
    id: 30,
    title: "겨울왕국",
    englishTitle: "Frozen",
    year: 2013,
    director: "Chris Buck, Jennifer Lee",
    genre: "Animation, Adventure, Fantasy"
  },
  {
    id: 31,
    title: "겨울왕국 2",
    englishTitle: "Frozen II",
    year: 2019,
    director: "Chris Buck, Jennifer Lee",
    genre: "Animation, Adventure, Fantasy"
  },
  {
    id: 32,
    title: "라이온 킹",
    englishTitle: "The Lion King",
    year: 1994,
    director: "Roger Allers, Rob Minkoff",
    genre: "Animation, Adventure, Drama"
  },
  {
    id: 33,
    title: "미녀와 야수",
    englishTitle: "Beauty and the Beast",
    year: 1991,
    director: "Gary Trousdale, Kirk Wise",
    genre: "Animation, Family, Fantasy"
  },
  {
    id: 34,
    title: "알라딘",
    englishTitle: "Aladdin",
    year: 1992,
    director: "Ron Clements, John Musker",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 35,
    title: "뮬란",
    englishTitle: "Mulan",
    year: 1998,
    director: "Tony Bancroft, Barry Cook",
    genre: "Animation, Adventure, Drama"
  },
  {
    id: 36,
    title: "모아나",
    englishTitle: "Moana",
    year: 2016,
    director: "Ron Clements, John Musker",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 37,
    title: "주토피아",
    englishTitle: "Zootopia",
    year: 2016,
    director: "Byron Howard, Rich Moore",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 38,
    title: "빅 히어로",
    englishTitle: "Big Hero 6",
    year: 2014,
    director: "Don Hall, Chris Williams",
    genre: "Animation, Action, Adventure"
  },
  {
    id: 39,
    title: "스파이더맨: 뉴 유니버스",
    englishTitle: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
    genre: "Animation, Action, Adventure"
  },
  {
    id: 40,
    title: "스파이더맨: 어크로스 더 유니버스",
    englishTitle: "Spider-Man: Across the Spider-Verse",
    year: 2023,
    director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
    genre: "Animation, Action, Adventure"
  },

  {
    id: 41,
    title: "타이타닉",
    englishTitle: "Titanic",
    year: 1997,
    director: "James Cameron",
    genre: "Drama, Romance"
  },
  {
    id: 42,
    title: "아바타",
    englishTitle: "Avatar",
    year: 2009,
    director: "James Cameron",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 43,
    title: "아바타: 물의 길",
    englishTitle: "Avatar: The Way of Water",
    year: 2022,
    director: "James Cameron",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 44,
    title: "터미네이터",
    englishTitle: "The Terminator",
    year: 1984,
    director: "James Cameron",
    genre: "Action, Sci-Fi"
  },
  {
    id: 45,
    title: "터미네이터 2: 심판의 날",
    englishTitle: "Terminator 2: Judgment Day",
    year: 1991,
    director: "James Cameron",
    genre: "Action, Sci-Fi"
  },
  {
    id: 46,
    title: "에일리언",
    englishTitle: "Alien",
    year: 1979,
    director: "Ridley Scott",
    genre: "Horror, Sci-Fi"
  },
  {
    id: 47,
    title: "에일리언 2",
    englishTitle: "Aliens",
    year: 1986,
    director: "James Cameron",
    genre: "Action, Horror, Sci-Fi"
  },
  {
    id: 48,
    title: "블레이드 러너",
    englishTitle: "Blade Runner",
    year: 1982,
    director: "Ridley Scott",
    genre: "Sci-Fi, Thriller"
  },
  {
    id: 49,
    title: "글래디에이터",
    englishTitle: "Gladiator",
    year: 2000,
    director: "Ridley Scott",
    genre: "Action, Drama"
  },
  {
    id: 50,
    title: "마션",
    englishTitle: "The Martian",
    year: 2015,
    director: "Ridley Scott",
    genre: "Adventure, Drama, Sci-Fi"
  },
  {
    id: 51,
    title: "덩케르크",
    englishTitle: "Dunkirk",
    year: 2017,
    director: "Christopher Nolan",
    genre: "Action, Drama, War"
  },
  {
    id: 52,
    title: "테넷",
    englishTitle: "Tenet",
    year: 2020,
    director: "Christopher Nolan",
    genre: "Action, Sci-Fi, Thriller"
  },
  {
    id: 53,
    title: "다크 나이트 라이즈",
    englishTitle: "The Dark Knight Rises",
    year: 2012,
    director: "Christopher Nolan",
    genre: "Action, Crime, Drama"
  },
  {
    id: 54,
    title: "배트맨 비긴즈",
    englishTitle: "Batman Begins",
    year: 2005,
    director: "Christopher Nolan",
    genre: "Action, Crime, Drama"
  },
  {
    id: 55,
    title: "메멘토",
    englishTitle: "Memento",
    year: 2000,
    director: "Christopher Nolan",
    genre: "Mystery, Thriller"
  },
  {
    id: 56,
    title: "프레스티지",
    englishTitle: "The Prestige",
    year: 2006,
    director: "Christopher Nolan",
    genre: "Drama, Mystery, Sci-Fi"
  },
  {
    id: 57,
    title: "오펜하이머",
    englishTitle: "Oppenheimer",
    year: 2023,
    director: "Christopher Nolan",
    genre: "Biography, Drama, History"
  },
  {
    id: 58,
    title: "킬러들의 쇼핑몰",
    englishTitle: "The Killer's Shopping List",
    year: 2024,
    director: "Various",
    genre: "Action, Thriller"
  },
  {
    id: 59,
    title: "저수지의 개들",
    englishTitle: "Reservoir Dogs",
    year: 1992,
    director: "Quentin Tarantino",
    genre: "Crime, Thriller"
  },
  {
    id: 60,
    title: "재키 브라운",
    englishTitle: "Jackie Brown",
    year: 1997,
    director: "Quentin Tarantino",
    genre: "Crime, Drama"
  },
  {
    id: 61,
    title: "킬 빌",
    englishTitle: "Kill Bill: Vol. 1",
    year: 2003,
    director: "Quentin Tarantino",
    genre: "Action, Crime, Thriller"
  },
  {
    id: 62,
    title: "킬 빌 2",
    englishTitle: "Kill Bill: Vol. 2",
    year: 2004,
    director: "Quentin Tarantino",
    genre: "Action, Crime, Thriller"
  },
  {
    id: 63,
    title: "바스터즈: 거친 녀석들",
    englishTitle: "Inglourious Basterds",
    year: 2009,
    director: "Quentin Tarantino",
    genre: "Drama, War"
  },
  {
    id: 64,
    title: "장고: 분노의 추적자",
    englishTitle: "Django Unchained",
    year: 2012,
    director: "Quentin Tarantino",
    genre: "Drama, Western"
  },
  {
    id: 65,
    title: "헤이트풀 8",
    englishTitle: "The Hateful Eight",
    year: 2015,
    director: "Quentin Tarantino",
    genre: "Crime, Drama, Western"
  },
  {
    id: 66,
    title: "원스 어폰 어 타임 인 할리우드",
    englishTitle: "Once Upon a Time... in Hollywood",
    year: 2019,
    director: "Quentin Tarantino",
    genre: "Comedy, Drama"
  },
  {
    id: 67,
    title: "좋은 친구들",
    englishTitle: "Goodfellas",
    year: 1990,
    director: "Martin Scorsese",
    genre: "Crime, Drama"
  },
  {
    id: 68,
    title: "택시 드라이버",
    englishTitle: "Taxi Driver",
    year: 1976,
    director: "Martin Scorsese",
    genre: "Crime, Drama"
  },
  {
    id: 69,
    title: "성난 황소",
    englishTitle: "Raging Bull",
    year: 1980,
    director: "Martin Scorsese",
    genre: "Biography, Drama, Sport"
  },
  {
    id: 70,
    title: "셔터 아일랜드",
    englishTitle: "Shutter Island",
    year: 2010,
    director: "Martin Scorsese",
    genre: "Mystery, Thriller"
  },
  {
    id: 71,
    title: "디파티드",
    englishTitle: "The Departed",
    year: 2006,
    director: "Martin Scorsese",
    genre: "Crime, Drama, Thriller"
  },
  {
    id: 72,
    title: "더 울프 오브 월 스트리트",
    englishTitle: "The Wolf of Wall Street",
    year: 2013,
    director: "Martin Scorsese",
    genre: "Biography, Comedy, Crime"
  },
  {
    id: 73,
    title: "아이리시맨",
    englishTitle: "The Irishman",
    year: 2019,
    director: "Martin Scorsese",
    genre: "Biography, Crime, Drama"
  },
  {
    id: 74,
    title: "카지노",
    englishTitle: "Casino",
    year: 1995,
    director: "Martin Scorsese",
    genre: "Crime, Drama"
  },
  {
    id: 75,
    title: "시민 케인",
    englishTitle: "Citizen Kane",
    year: 1941,
    director: "Orson Welles",
    genre: "Drama, Mystery"
  },
  {
    id: 76,
    title: "카사블랑카",
    englishTitle: "Casablanca",
    year: 1942,
    director: "Michael Curtiz",
    genre: "Drama, Romance, War"
  },
  {
    id: 77,
    title: "12인의 성난 사람들",
    englishTitle: "12 Angry Men",
    year: 1957,
    director: "Sidney Lumet",
    genre: "Drama"
  },
  {
    id: 78,
    title: "7인의 사무라이",
    englishTitle: "Seven Samurai",
    year: 1954,
    director: "Akira Kurosawa",
    genre: "Action, Drama"
  },
  {
    id: 79,
    title: "라쇼몽",
    englishTitle: "Rashomon",
    year: 1950,
    director: "Akira Kurosawa",
    genre: "Crime, Drama, Mystery"
  },
  {
    id: 80,
    title: "이키루",
    englishTitle: "Ikiru",
    year: 1952,
    director: "Akira Kurosawa",
    genre: "Drama"
  },

  {
    id: 81,
    title: "2001 스페이스 오디세이",
    englishTitle: "2001: A Space Odyssey",
    year: 1968,
    director: "Stanley Kubrick",
    genre: "Adventure, Sci-Fi"
  },
  {
    id: 82,
    title: "시계태엽 오렌지",
    englishTitle: "A Clockwork Orange",
    year: 1971,
    director: "Stanley Kubrick",
    genre: "Crime, Sci-Fi"
  },
  {
    id: 83,
    title: "샤이닝",
    englishTitle: "The Shining",
    year: 1980,
    director: "Stanley Kubrick",
    genre: "Drama, Horror"
  },
  {
    id: 84,
    title: "풀 메탈 자켓",
    englishTitle: "Full Metal Jacket",
    year: 1987,
    director: "Stanley Kubrick",
    genre: "Drama, War"
  },
  {
    id: 85,
    title: "닥터 스트레인지러브",
    englishTitle: "Dr. Strangelove",
    year: 1964,
    director: "Stanley Kubrick",
    genre: "Comedy, War"
  },
  {
    id: 86,
    title: "파이트 클럽",
    englishTitle: "Fight Club",
    year: 1999,
    director: "David Fincher",
    genre: "Drama"
  },
  {
    id: 87,
    title: "세븐",
    englishTitle: "Se7en",
    year: 1995,
    director: "David Fincher",
    genre: "Crime, Mystery, Thriller"
  },
  {
    id: 88,
    title: "조디악",
    englishTitle: "Zodiac",
    year: 2007,
    director: "David Fincher",
    genre: "Crime, Drama, Mystery"
  },
  {
    id: 89,
    title: "소셜 네트워크",
    englishTitle: "The Social Network",
    year: 2010,
    director: "David Fincher",
    genre: "Biography, Drama"
  },
  {
    id: 90,
    title: "나를 찾아줘",
    englishTitle: "Gone Girl",
    year: 2014,
    director: "David Fincher",
    genre: "Drama, Mystery, Thriller"
  },
  {
    id: 91,
    title: "벤자민 버튼의 시간은 거꾸로 간다",
    englishTitle: "The Curious Case of Benjamin Button",
    year: 2008,
    director: "David Fincher",
    genre: "Drama, Fantasy, Romance"
  },
  {
    id: 92,
    title: "아메리칸 뷰티",
    englishTitle: "American Beauty",
    year: 1999,
    director: "Sam Mendes",
    genre: "Drama"
  },
  {
    id: 93,
    title: "1917",
    englishTitle: "1917",
    year: 2019,
    director: "Sam Mendes",
    genre: "Drama, War"
  },
  {
    id: 94,
    title: "로드 투 퍼디션",
    englishTitle: "Road to Perdition",
    year: 2002,
    director: "Sam Mendes",
    genre: "Crime, Drama"
  },
  {
    id: 95,
    title: "아메리칸 사이코",
    englishTitle: "American Psycho",
    year: 2000,
    director: "Mary Harron",
    genre: "Crime, Drama, Thriller"
  },
  {
    id: 96,
    title: "레옹",
    englishTitle: "Léon: The Professional",
    year: 1994,
    director: "Luc Besson",
    genre: "Action, Crime, Drama"
  },
  {
    id: 97,
    title: "제5원소",
    englishTitle: "The Fifth Element",
    year: 1997,
    director: "Luc Besson",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 98,
    title: "그랑블루",
    englishTitle: "The Big Blue",
    year: 1988,
    director: "Luc Besson",
    genre: "Adventure, Drama"
  },
  {
    id: 99,
    title: "시네마 천국",
    englishTitle: "Cinema Paradiso",
    year: 1988,
    director: "Giuseppe Tornatore",
    genre: "Drama, Romance"
  },
  {
    id: 100,
    title: "인생은 아름다워",
    englishTitle: "Life Is Beautiful",
    year: 1997,
    director: "Roberto Benigni",
    genre: "Comedy, Drama, Romance"
  },

  {
    id: 101,
    title: "센과 치히로의 행방불명",
    englishTitle: "Spirited Away",
    year: 2001,
    director: "Hayao Miyazaki",
    genre: "Animation, Adventure, Fantasy"
  },
  {
    id: 102,
    title: "하울의 움직이는 성",
    englishTitle: "Howl's Moving Castle",
    year: 2004,
    director: "Hayao Miyazaki",
    genre: "Animation, Adventure, Fantasy"
  },
  {
    id: 103,
    title: "이웃집 토토로",
    englishTitle: "My Neighbor Totoro",
    year: 1988,
    director: "Hayao Miyazaki",
    genre: "Animation, Family, Fantasy"
  },
  {
    id: 104,
    title: "모노노케 히메",
    englishTitle: "Princess Mononoke",
    year: 1997,
    director: "Hayao Miyazaki",
    genre: "Animation, Adventure, Fantasy"
  },
  {
    id: 105,
    title: "벼랑 위의 포뇨",
    englishTitle: "Ponyo",
    year: 2008,
    director: "Hayao Miyazaki",
    genre: "Animation, Adventure, Fantasy"
  },
  {
    id: 106,
    title: "바람이 분다",
    englishTitle: "The Wind Rises",
    year: 2013,
    director: "Hayao Miyazaki",
    genre: "Animation, Biography, Drama"
  },
  {
    id: 107,
    title: "너의 이름은.",
    englishTitle: "Your Name.",
    year: 2016,
    director: "Makoto Shinkai",
    genre: "Animation, Drama, Fantasy"
  },
  {
    id: 108,
    title: "날씨의 아이",
    englishTitle: "Weathering with You",
    year: 2019,
    director: "Makoto Shinkai",
    genre: "Animation, Drama, Fantasy"
  },
  {
    id: 109,
    title: "스즈메의 문단속",
    englishTitle: "Suzume",
    year: 2022,
    director: "Makoto Shinkai",
    genre: "Animation, Adventure, Fantasy"
  },
  {
    id: 110,
    title: "아키라",
    englishTitle: "Akira",
    year: 1988,
    director: "Katsuhiro Otomo",
    genre: "Animation, Action, Sci-Fi"
  },
  {
    id: 111,
    title: "공각기동대",
    englishTitle: "Ghost in the Shell",
    year: 1995,
    director: "Mamoru Oshii",
    genre: "Animation, Action, Sci-Fi"
  },
  {
    id: 112,
    title: "퍼펙트 블루",
    englishTitle: "Perfect Blue",
    year: 1997,
    director: "Satoshi Kon",
    genre: "Animation, Mystery, Thriller"
  },
  {
    id: 113,
    title: "시간을 달리는 소녀",
    englishTitle: "The Girl Who Leapt Through Time",
    year: 2006,
    director: "Mamoru Hosoda",
    genre: "Animation, Drama, Sci-Fi"
  },
  {
    id: 114,
    title: "늑대아이",
    englishTitle: "Wolf Children",
    year: 2012,
    director: "Mamoru Hosoda",
    genre: "Animation, Drama, Fantasy"
  },
  {
    id: 115,
    title: "목소리의 형태",
    englishTitle: "A Silent Voice",
    year: 2016,
    director: "Naoko Yamada",
    genre: "Animation, Drama"
  },
  {
    id: 116,
    title: "철도원",
    englishTitle: "Poppoya",
    year: 1999,
    director: "Yoji Yamada",
    genre: "Drama"
  },
  {
    id: 117,
    title: "올드보이",
    englishTitle: "Oldboy",
    year: 2003,
    director: "Park Chan-wook",
    genre: "Action, Drama, Mystery"
  },
  {
    id: 118,
    title: "아가씨",
    englishTitle: "The Handmaiden",
    year: 2016,
    director: "Park Chan-wook",
    genre: "Drama, Romance, Thriller"
  },
  {
    id: 119,
    title: "헤어질 결심",
    englishTitle: "Decision to Leave",
    year: 2022,
    director: "Park Chan-wook",
    genre: "Crime, Drama, Mystery"
  },
  {
    id: 120,
    title: "복수는 나의 것",
    englishTitle: "Sympathy for Mr. Vengeance",
    year: 2002,
    director: "Park Chan-wook",
    genre: "Crime, Drama, Thriller"
  },

  {
    id: 121,
    title: "살인의 추억",
    englishTitle: "Memories of Murder",
    year: 2003,
    director: "Bong Joon-ho",
    genre: "Crime, Drama, Mystery"
  },
  {
    id: 122,
    title: "마더",
    englishTitle: "Mother",
    year: 2009,
    director: "Bong Joon-ho",
    genre: "Crime, Drama, Mystery"
  },
  {
    id: 123,
    title: "괴물",
    englishTitle: "The Host",
    year: 2006,
    director: "Bong Joon-ho",
    genre: "Action, Drama, Horror"
  },
  {
    id: 124,
    title: "설국열차",
    englishTitle: "Snowpiercer",
    year: 2013,
    director: "Bong Joon-ho",
    genre: "Action, Drama, Sci-Fi"
  },
  {
    id: 125,
    title: "옥자",
    englishTitle: "Okja",
    year: 2017,
    director: "Bong Joon-ho",
    genre: "Action, Adventure, Drama"
  },
  {
    id: 126,
    title: "버닝",
    englishTitle: "Burning",
    year: 2018,
    director: "Lee Chang-dong",
    genre: "Drama, Mystery"
  },
  {
    id: 127,
    title: "밀양",
    englishTitle: "Secret Sunshine",
    year: 2007,
    director: "Lee Chang-dong",
    genre: "Drama"
  },
  {
    id: 128,
    title: "박하사탕",
    englishTitle: "Peppermint Candy",
    year: 1999,
    director: "Lee Chang-dong",
    genre: "Drama"
  },
  {
    id: 129,
    title: "시",
    englishTitle: "Poetry",
    year: 2010,
    director: "Lee Chang-dong",
    genre: "Drama"
  },
  {
    id: 130,
    title: "택시운전사",
    englishTitle: "A Taxi Driver",
    year: 2017,
    director: "Jang Hoon",
    genre: "Drama, History"
  },
  {
    id: 131,
    title: "변호인",
    englishTitle: "The Attorney",
    year: 2013,
    director: "Yang Woo-seok",
    genre: "Drama"
  },
  {
    id: 132,
    title: "국제시장",
    englishTitle: "Ode to My Father",
    year: 2014,
    director: "Yoon Je-kyoon",
    genre: "Drama"
  },
  {
    id: 133,
    title: "범죄도시",
    englishTitle: "The Outlaws",
    year: 2017,
    director: "Kang Yoon-sung",
    genre: "Action, Crime"
  },
  {
    id: 134,
    title: "범죄도시 2",
    englishTitle: "The Roundup",
    year: 2022,
    director: "Lee Sang-yong",
    genre: "Action, Crime"
  },
  {
    id: 135,
    title: "범죄도시 3",
    englishTitle: "The Roundup: No Way Out",
    year: 2023,
    director: "Lee Sang-yong",
    genre: "Action, Crime"
  },
  {
    id: 136,
    title: "범죄도시 4",
    englishTitle: "The Roundup: Punishment",
    year: 2024,
    director: "Heo Myung-haeng",
    genre: "Action, Crime"
  },
  {
    id: 137,
    title: "곡성",
    englishTitle: "The Wailing",
    year: 2016,
    director: "Na Hong-jin",
    genre: "Drama, Horror, Mystery"
  },
  {
    id: 138,
    title: "추격자",
    englishTitle: "The Chaser",
    year: 2008,
    director: "Na Hong-jin",
    genre: "Crime, Thriller"
  },
  {
    id: 139,
    title: "황해",
    englishTitle: "The Yellow Sea",
    year: 2010,
    director: "Na Hong-jin",
    genre: "Action, Crime, Thriller"
  },
  {
    id: 140,
    title: "신세계",
    englishTitle: "New World",
    year: 2013,
    director: "Park Hoon-jung",
    genre: "Crime, Drama, Thriller"
  },

  {
    id: 141,
    title: "기억의 밤",
    englishTitle: "Forgotten",
    year: 2017,
    director: "Jang Hang-jun",
    genre: "Mystery, Thriller"
  },
  {
    id: 142,
    title: "끝까지 간다",
    englishTitle: "A Hard Day",
    year: 2014,
    director: "Kim Seong-hun",
    genre: "Action, Crime, Thriller"
  },
  {
    id: 143,
    title: "악인전",
    englishTitle: "The Gangster, the Cop, the Devil",
    year: 2019,
    director: "Lee Won-tae",
    genre: "Action, Crime"
  },
  {
    id: 144,
    title: "베테랑",
    englishTitle: "Veteran",
    year: 2015,
    director: "Ryoo Seung-wan",
    genre: "Action, Comedy, Crime"
  },
  {
    id: 145,
    title: "부산행",
    englishTitle: "Train to Busan",
    year: 2016,
    director: "Yeon Sang-ho",
    genre: "Action, Horror, Thriller"
  },
  {
    id: 146,
    title: "반도",
    englishTitle: "Peninsula",
    year: 2020,
    director: "Yeon Sang-ho",
    genre: "Action, Horror, Thriller"
  },
  {
    id: 147,
    title: "서울의 봄",
    englishTitle: "12.12: The Day",
    year: 2023,
    director: "Kim Sung-soo",
    genre: "Drama, History"
  },
  {
    id: 148,
    title: "파묘",
    englishTitle: "Exhuma",
    year: 2024,
    director: "Jang Jae-hyun",
    genre: "Horror, Mystery, Thriller"
  },
  {
    id: 149,
    title: "콘크리트 유토피아",
    englishTitle: "Concrete Utopia",
    year: 2023,
    director: "Um Tae-hwa",
    genre: "Drama, Thriller"
  },
  {
    id: 150,
    title: "남산의 부장들",
    englishTitle: "The Man Standing Next",
    year: 2020,
    director: "Woo Min-ho",
    genre: "Drama, History, Thriller"
  },

  {
    id: 151,
    title: "쇼생크 탈출",
    englishTitle: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    genre: "Drama"
  },
  {
    id: 152,
    title: "그린 마일",
    englishTitle: "The Green Mile",
    year: 1999,
    director: "Frank Darabont",
    genre: "Crime, Drama, Fantasy"
  },
  {
    id: 153,
    title: "포레스트 검프",
    englishTitle: "Forrest Gump",
    year: 1994,
    director: "Robert Zemeckis",
    genre: "Drama, Romance"
  },
  {
    id: 154,
    title: "캐스트 어웨이",
    englishTitle: "Cast Away",
    year: 2000,
    director: "Robert Zemeckis",
    genre: "Adventure, Drama"
  },
  {
    id: 155,
    title: "백 투 더 퓨처",
    englishTitle: "Back to the Future",
    year: 1985,
    director: "Robert Zemeckis",
    genre: "Adventure, Comedy, Sci-Fi"
  },
  {
    id: 156,
    title: "백 투 더 퓨처 2",
    englishTitle: "Back to the Future Part II",
    year: 1989,
    director: "Robert Zemeckis",
    genre: "Adventure, Comedy, Sci-Fi"
  },
  {
    id: 157,
    title: "백 투 더 퓨처 3",
    englishTitle: "Back to the Future Part III",
    year: 1990,
    director: "Robert Zemeckis",
    genre: "Adventure, Comedy, Sci-Fi"
  },
  {
    id: 158,
    title: "캐리비안의 해적: 블랙펄의 저주",
    englishTitle: "Pirates of the Caribbean: The Curse of the Black Pearl",
    year: 2003,
    director: "Gore Verbinski",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 159,
    title: "캐리비안의 해적: 망자의 함",
    englishTitle: "Pirates of the Caribbean: Dead Man's Chest",
    year: 2006,
    director: "Gore Verbinski",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 160,
    title: "캐리비안의 해적: 세상의 끝에서",
    englishTitle: "Pirates of the Caribbean: At World's End",
    year: 2007,
    director: "Gore Verbinski",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 161,
    title: "해리 포터와 마법사의 돌",
    englishTitle: "Harry Potter and the Sorcerer's Stone",
    year: 2001,
    director: "Chris Columbus",
    genre: "Adventure, Fantasy"
  },
  {
    id: 162,
    title: "해리 포터와 비밀의 방",
    englishTitle: "Harry Potter and the Chamber of Secrets",
    year: 2002,
    director: "Chris Columbus",
    genre: "Adventure, Fantasy"
  },
  {
    id: 163,
    title: "해리 포터와 아즈카반의 죄수",
    englishTitle: "Harry Potter and the Prisoner of Azkaban",
    year: 2004,
    director: "Alfonso Cuarón",
    genre: "Adventure, Fantasy"
  },
  {
    id: 164,
    title: "해리 포터와 불의 잔",
    englishTitle: "Harry Potter and the Goblet of Fire",
    year: 2005,
    director: "Mike Newell",
    genre: "Adventure, Fantasy"
  },
  {
    id: 165,
    title: "해리 포터와 불사조 기사단",
    englishTitle: "Harry Potter and the Order of the Phoenix",
    year: 2007,
    director: "David Yates",
    genre: "Adventure, Fantasy"
  },
  {
    id: 166,
    title: "해리 포터와 혼혈 왕자",
    englishTitle: "Harry Potter and the Half-Blood Prince",
    year: 2009,
    director: "David Yates",
    genre: "Adventure, Fantasy"
  },
  {
    id: 167,
    title: "해리 포터와 죽음의 성물 1",
    englishTitle: "Harry Potter and the Deathly Hallows: Part 1",
    year: 2010,
    director: "David Yates",
    genre: "Adventure, Fantasy"
  },
  {
    id: 168,
    title: "해리 포터와 죽음의 성물 2",
    englishTitle: "Harry Potter and the Deathly Hallows: Part 2",
    year: 2011,
    director: "David Yates",
    genre: "Adventure, Fantasy"
  },
  {
    id: 169,
    title: "스타워즈",
    englishTitle: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    director: "George Lucas",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 170,
    title: "스타워즈: 제국의 역습",
    englishTitle: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
    director: "Irvin Kershner",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 171,
    title: "스타워즈: 제다이의 귀환",
    englishTitle: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
    director: "Richard Marquand",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 172,
    title: "스타워즈: 보이지 않는 위험",
    englishTitle: "Star Wars: Episode I - The Phantom Menace",
    year: 1999,
    director: "George Lucas",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 173,
    title: "스타워즈: 클론의 습격",
    englishTitle: "Star Wars: Episode II - Attack of the Clones",
    year: 2002,
    director: "George Lucas",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 174,
    title: "스타워즈: 시스의 복수",
    englishTitle: "Star Wars: Episode III - Revenge of the Sith",
    year: 2005,
    director: "George Lucas",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 175,
    title: "매드 맥스: 분노의 도로",
    englishTitle: "Mad Max: Fury Road",
    year: 2015,
    director: "George Miller",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 176,
    title: "매드 맥스 2",
    englishTitle: "Mad Max 2",
    year: 1981,
    director: "George Miller",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 177,
    title: "터미네이터: 다크 페이트",
    englishTitle: "Terminator: Dark Fate",
    year: 2019,
    director: "Tim Miller",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 178,
    title: "쥬라기 공원",
    englishTitle: "Jurassic Park",
    year: 1993,
    director: "Steven Spielberg",
    genre: "Adventure, Sci-Fi, Thriller"
  },
  {
    id: 179,
    title: "쥬라기 공원 2: 잃어버린 세계",
    englishTitle: "The Lost World: Jurassic Park",
    year: 1997,
    director: "Steven Spielberg",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 180,
    title: "죠스",
    englishTitle: "Jaws",
    year: 1975,
    director: "Steven Spielberg",
    genre: "Adventure, Thriller"
  },

  {
    id: 181,
    title: "쉰들러 리스트",
    englishTitle: "Schindler's List",
    year: 1993,
    director: "Steven Spielberg",
    genre: "Biography, Drama, History"
  },
  {
    id: 182,
    title: "라이언 일병 구하기",
    englishTitle: "Saving Private Ryan",
    year: 1998,
    director: "Steven Spielberg",
    genre: "Drama, War"
  },
  {
    id: 183,
    title: "캐치 미 이프 유 캔",
    englishTitle: "Catch Me If You Can",
    year: 2002,
    director: "Steven Spielberg",
    genre: "Biography, Crime, Drama"
  },
  {
    id: 184,
    title: "마이너리티 리포트",
    englishTitle: "Minority Report",
    year: 2002,
    director: "Steven Spielberg",
    genre: "Action, Crime, Sci-Fi"
  },
  {
    id: 185,
    title: "레디 플레이어 원",
    englishTitle: "Ready Player One",
    year: 2018,
    director: "Steven Spielberg",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 186,
    title: "인디아나 존스: 레이더스",
    englishTitle: "Raiders of the Lost Ark",
    year: 1981,
    director: "Steven Spielberg",
    genre: "Action, Adventure"
  },
  {
    id: 187,
    title: "인디아나 존스와 최후의 성전",
    englishTitle: "Indiana Jones and the Last Crusade",
    year: 1989,
    director: "Steven Spielberg",
    genre: "Action, Adventure"
  },
  {
    id: 188,
    title: "에이리언: 커버넌트",
    englishTitle: "Alien: Covenant",
    year: 2017,
    director: "Ridley Scott",
    genre: "Horror, Sci-Fi, Thriller"
  },
  {
    id: 189,
    title: "프로메테우스",
    englishTitle: "Prometheus",
    year: 2012,
    director: "Ridley Scott",
    genre: "Adventure, Mystery, Sci-Fi"
  },
  {
    id: 190,
    title: "킹덤 오브 헤븐",
    englishTitle: "Kingdom of Heaven",
    year: 2005,
    director: "Ridley Scott",
    genre: "Action, Adventure, Drama"
  },
  {
    id: 191,
    title: "블랙 호크 다운",
    englishTitle: "Black Hawk Down",
    year: 2001,
    director: "Ridley Scott",
    genre: "Action, Drama, History"
  },
  {
    id: 192,
    title: "덴젤 워싱턴의 영화",
    englishTitle: "Training Day",
    year: 2001,
    director: "Antoine Fuqua",
    genre: "Crime, Drama, Thriller"
  },
  {
    id: 193,
    title: "매트릭스 리로디드",
    englishTitle: "The Matrix Reloaded",
    year: 2003,
    director: "The Wachowskis",
    genre: "Action, Sci-Fi"
  },
  {
    id: 194,
    title: "매트릭스 레볼루션",
    englishTitle: "The Matrix Revolutions",
    year: 2003,
    director: "The Wachowskis",
    genre: "Action, Sci-Fi"
  },
  {
    id: 195,
    title: "존 윅",
    englishTitle: "John Wick",
    year: 2014,
    director: "Chad Stahelski",
    genre: "Action, Thriller"
  },
  {
    id: 196,
    title: "존 윅: 리로드",
    englishTitle: "John Wick: Chapter 2",
    year: 2017,
    director: "Chad Stahelski",
    genre: "Action, Thriller"
  },
  {
    id: 197,
    title: "존 윅 3: 파라벨룸",
    englishTitle: "John Wick: Chapter 3 - Parabellum",
    year: 2019,
    director: "Chad Stahelski",
    genre: "Action, Thriller"
  },
  {
    id: 198,
    title: "존 윅 4",
    englishTitle: "John Wick: Chapter 4",
    year: 2023,
    director: "Chad Stahelski",
    genre: "Action, Thriller"
  },
  {
    id: 199,
    title: "미션 임파서블",
    englishTitle: "Mission: Impossible",
    year: 1996,
    director: "Brian De Palma",
    genre: "Action, Adventure, Thriller"
  },
  {
    id: 200,
    title: "미션 임파서블: 폴아웃",
    englishTitle: "Mission: Impossible - Fallout",
    year: 2018,
    director: "Christopher McQuarrie",
    genre: "Action, Adventure, Thriller"
  },
  {
    id: 201,
    title: "시민 케인",
    englishTitle: "Citizen Kane",
    year: 1941,
    director: "Orson Welles",
    genre: "Drama, Mystery"
  },
  {
    id: 202,
    title: "현기증",
    englishTitle: "Vertigo",
    year: 1958,
    director: "Alfred Hitchcock",
    genre: "Mystery, Romance, Thriller"
  },
  {
    id: 203,
    title: "싸이코",
    englishTitle: "Psycho",
    year: 1960,
    director: "Alfred Hitchcock",
    genre: "Horror, Mystery, Thriller"
  },
  {
    id: 204,
    title: "이창",
    englishTitle: "Rear Window",
    year: 1954,
    director: "Alfred Hitchcock",
    genre: "Mystery, Thriller"
  },
  {
    id: 205,
    title: "북북서로 진로를 돌려라",
    englishTitle: "North by Northwest",
    year: 1959,
    director: "Alfred Hitchcock",
    genre: "Action, Adventure, Mystery"
  },
  {
    id: 206,
    title: "새",
    englishTitle: "The Birds",
    year: 1963,
    director: "Alfred Hitchcock",
    genre: "Horror, Mystery, Thriller"
  },
  {
    id: 207,
    title: "다이얼 M을 돌려라",
    englishTitle: "Dial M for Murder",
    year: 1954,
    director: "Alfred Hitchcock",
    genre: "Crime, Mystery, Thriller"
  },
  {
    id: 208,
    title: "레베카",
    englishTitle: "Rebecca",
    year: 1940,
    director: "Alfred Hitchcock",
    genre: "Drama, Mystery, Romance"
  },
  {
    id: 209,
    title: "오명",
    englishTitle: "Notorious",
    year: 1946,
    director: "Alfred Hitchcock",
    genre: "Drama, Romance, Thriller"
  },
  {
    id: 210,
    title: "현금에 손대지 마라",
    englishTitle: "Bob le Flambeur",
    year: 1956,
    director: "Jean-Pierre Melville",
    genre: "Crime, Drama"
  },

  {
    id: 211,
    title: "400번의 구타",
    englishTitle: "The 400 Blows",
    year: 1959,
    director: "François Truffaut",
    genre: "Crime, Drama"
  },
  {
    id: 212,
    title: "줄 앤 짐",
    englishTitle: "Jules and Jim",
    year: 1962,
    director: "François Truffaut",
    genre: "Drama, Romance"
  },
  {
    id: 213,
    title: "사형대의 엘리베이터",
    englishTitle: "Elevator to the Gallows",
    year: 1958,
    director: "Louis Malle",
    genre: "Crime, Thriller"
  },
  {
    id: 214,
    title: "히로시마 내 사랑",
    englishTitle: "Hiroshima Mon Amour",
    year: 1959,
    director: "Alain Resnais",
    genre: "Drama, Romance"
  },
  {
    id: 215,
    title: "네 멋대로 해라",
    englishTitle: "Breathless",
    year: 1960,
    director: "Jean-Luc Godard",
    genre: "Crime, Drama, Romance"
  },
  {
    id: 216,
    title: "경멸",
    englishTitle: "Contempt",
    year: 1963,
    director: "Jean-Luc Godard",
    genre: "Drama"
  },
  {
    id: 217,
    title: "400번의 구타",
    englishTitle: "The 400 Blows",
    year: 1959,
    director: "François Truffaut",
    genre: "Drama"
  },
  {
    id: 218,
    title: "8과 2분의 1",
    englishTitle: "8½",
    year: 1963,
    director: "Federico Fellini",
    genre: "Drama"
  },
  {
    id: 219,
    title: "달콤한 인생",
    englishTitle: "La Dolce Vita",
    year: 1960,
    director: "Federico Fellini",
    genre: "Drama"
  },
  {
    id: 220,
    title: "길",
    englishTitle: "La Strada",
    year: 1954,
    director: "Federico Fellini",
    genre: "Drama"
  },

  {
    id: 221,
    title: "자전거 도둑",
    englishTitle: "Bicycle Thieves",
    year: 1948,
    director: "Vittorio De Sica",
    genre: "Drama"
  },
  {
    id: 222,
    title: "움베르토 D",
    englishTitle: "Umberto D.",
    year: 1952,
    director: "Vittorio De Sica",
    genre: "Drama"
  },
  {
    id: 223,
    title: "무방비 도시",
    englishTitle: "Rome, Open City",
    year: 1945,
    director: "Roberto Rossellini",
    genre: "Drama, War"
  },
  {
    id: 224,
    title: "독일 영년",
    englishTitle: "Germany Year Zero",
    year: 1948,
    director: "Roberto Rossellini",
    genre: "Drama, War"
  },
  {
    id: 225,
    title: "제3의 사나이",
    englishTitle: "The Third Man",
    year: 1949,
    director: "Carol Reed",
    genre: "Film-Noir, Mystery, Thriller"
  },
  {
    id: 226,
    title: "선셋 대로",
    englishTitle: "Sunset Boulevard",
    year: 1950,
    director: "Billy Wilder",
    genre: "Drama, Film-Noir"
  },
  {
    id: 227,
    title: "이중 배상",
    englishTitle: "Double Indemnity",
    year: 1944,
    director: "Billy Wilder",
    genre: "Crime, Film-Noir"
  },
  {
    id: 228,
    title: "뜨거운 것이 좋아",
    englishTitle: "Some Like It Hot",
    year: 1959,
    director: "Billy Wilder",
    genre: "Comedy, Romance"
  },
  {
    id: 229,
    title: "아파트 열쇠를 빌려드립니다",
    englishTitle: "The Apartment",
    year: 1960,
    director: "Billy Wilder",
    genre: "Comedy, Drama, Romance"
  },
  {
    id: 230,
    title: "제7의 봉인",
    englishTitle: "The Seventh Seal",
    year: 1957,
    director: "Ingmar Bergman",
    genre: "Drama, Fantasy"
  },

  {
    id: 231,
    title: "산딸기",
    englishTitle: "Wild Strawberries",
    year: 1957,
    director: "Ingmar Bergman",
    genre: "Drama"
  },
  {
    id: 232,
    title: "페르소나",
    englishTitle: "Persona",
    year: 1966,
    director: "Ingmar Bergman",
    genre: "Drama, Thriller"
  },
  {
    id: 233,
    title: "화니와 알렉산더",
    englishTitle: "Fanny and Alexander",
    year: 1982,
    director: "Ingmar Bergman",
    genre: "Drama"
  },
  {
    id: 234,
    title: "희생",
    englishTitle: "The Sacrifice",
    year: 1986,
    director: "Andrei Tarkovsky",
    genre: "Drama"
  },
  {
    id: 235,
    title: "안드레이 루블료프",
    englishTitle: "Andrei Rublev",
    year: 1966,
    director: "Andrei Tarkovsky",
    genre: "Biography, Drama, History"
  },
  {
    id: 236,
    title: "솔라리스",
    englishTitle: "Solaris",
    year: 1972,
    director: "Andrei Tarkovsky",
    genre: "Drama, Mystery, Sci-Fi"
  },
  {
    id: 237,
    title: "스토커",
    englishTitle: "Stalker",
    year: 1979,
    director: "Andrei Tarkovsky",
    genre: "Drama, Sci-Fi"
  },
  {
    id: 238,
    title: "거울",
    englishTitle: "Mirror",
    year: 1975,
    director: "Andrei Tarkovsky",
    genre: "Drama"
  },
  {
    id: 239,
    title: "2001년 우주여행",
    englishTitle: "2001: A Space Odyssey",
    year: 1968,
    director: "Stanley Kubrick",
    genre: "Adventure, Sci-Fi"
  },
  {
    id: 240,
    title: "배리 린든",
    englishTitle: "Barry Lyndon",
    year: 1975,
    director: "Stanley Kubrick",
    genre: "Adventure, Drama, History"
  },

  {
    id: 241,
    title: "아라비아의 로렌스",
    englishTitle: "Lawrence of Arabia",
    year: 1962,
    director: "David Lean",
    genre: "Adventure, Biography, Drama"
  },
  {
    id: 242,
    title: "닥터 지바고",
    englishTitle: "Doctor Zhivago",
    year: 1965,
    director: "David Lean",
    genre: "Drama, Romance, War"
  },
  {
    id: 243,
    title: "콰이강의 다리",
    englishTitle: "The Bridge on the River Kwai",
    year: 1957,
    director: "David Lean",
    genre: "Adventure, Drama, War"
  },
  {
    id: 244,
    title: "위대한 유산",
    englishTitle: "Great Expectations",
    year: 1946,
    director: "David Lean",
    genre: "Drama, Romance"
  },
  {
    id: 245,
    title: "말타의 매",
    englishTitle: "The Maltese Falcon",
    year: 1941,
    director: "John Huston",
    genre: "Crime, Film-Noir, Mystery"
  },
  {
    id: 246,
    title: "시에라 마드레의 보물",
    englishTitle: "The Treasure of the Sierra Madre",
    year: 1948,
    director: "John Huston",
    genre: "Adventure, Drama, Western"
  },
  {
    id: 247,
    title: "아프리카의 여왕",
    englishTitle: "The African Queen",
    year: 1951,
    director: "John Huston",
    genre: "Adventure, Drama, Romance"
  },
  {
    id: 248,
    title: "차이나타운",
    englishTitle: "Chinatown",
    year: 1974,
    director: "Roman Polanski",
    genre: "Drama, Mystery, Thriller"
  },
  {
    id: 249,
    title: "악마의 씨",
    englishTitle: "Rosemary's Baby",
    year: 1968,
    director: "Roman Polanski",
    genre: "Drama, Horror"
  },
  {
    id: 250,
    title: "피아니스트",
    englishTitle: "The Pianist",
    year: 2002,
    director: "Roman Polanski",
    genre: "Biography, Drama, War"
  },

  {
    id: 251,
    title: "대부 3",
    englishTitle: "The Godfather Part III",
    year: 1990,
    director: "Francis Ford Coppola",
    genre: "Crime, Drama"
  },
  {
    id: 252,
    title: "지옥의 묵시록",
    englishTitle: "Apocalypse Now",
    year: 1979,
    director: "Francis Ford Coppola",
    genre: "Drama, War"
  },
  {
    id: 253,
    title: "컨버세이션",
    englishTitle: "The Conversation",
    year: 1974,
    director: "Francis Ford Coppola",
    genre: "Drama, Mystery, Thriller"
  },
  {
    id: 254,
    title: "블루 벨벳",
    englishTitle: "Blue Velvet",
    year: 1986,
    director: "David Lynch",
    genre: "Drama, Mystery, Thriller"
  },
  {
    id: 255,
    title: "멀홀랜드 드라이브",
    englishTitle: "Mulholland Drive",
    year: 2001,
    director: "David Lynch",
    genre: "Drama, Mystery, Thriller"
  },
  {
    id: 256,
    title: "이레이저헤드",
    englishTitle: "Eraserhead",
    year: 1977,
    director: "David Lynch",
    genre: "Horror, Sci-Fi"
  },
  {
    id: 257,
    title: "미드나잇 카우보이",
    englishTitle: "Midnight Cowboy",
    year: 1969,
    director: "John Schlesinger",
    genre: "Drama"
  },
  {
    id: 258,
    title: "이지 라이더",
    englishTitle: "Easy Rider",
    year: 1969,
    director: "Dennis Hopper",
    genre: "Drama"
  },
  {
    id: 259,
    title: "졸업",
    englishTitle: "The Graduate",
    year: 1967,
    director: "Mike Nichols",
    genre: "Comedy, Drama, Romance"
  },
  {
    id: 260,
    title: "뻐꾸기 둥지 위로 날아간 새",
    englishTitle: "One Flew Over the Cuckoo's Nest",
    year: 1975,
    director: "Miloš Forman",
    genre: "Drama"
  },

  {
    id: 261,
    title: "아마데우스",
    englishTitle: "Amadeus",
    year: 1984,
    director: "Miloš Forman",
    genre: "Biography, Drama, Music"
  },
  {
    id: 262,
    title: "록키",
    englishTitle: "Rocky",
    year: 1976,
    director: "John G. Avildsen",
    genre: "Drama, Sport"
  },
  {
    id: 263,
    title: "록키 2",
    englishTitle: "Rocky II",
    year: 1979,
    director: "Sylvester Stallone",
    genre: "Drama, Sport"
  },
  {
    id: 264,
    title: "록키 3",
    englishTitle: "Rocky III",
    year: 1982,
    director: "Sylvester Stallone",
    genre: "Drama, Sport"
  },
  {
    id: 265,
    title: "록키 4",
    englishTitle: "Rocky IV",
    year: 1985,
    director: "Sylvester Stallone",
    genre: "Drama, Sport"
  },
  {
    id: 266,
    title: "록키 발보아",
    englishTitle: "Rocky Balboa",
    year: 2006,
    director: "Sylvester Stallone",
    genre: "Drama, Sport"
  },
  {
    id: 267,
    title: "크리드",
    englishTitle: "Creed",
    year: 2015,
    director: "Ryan Coogler",
    genre: "Drama, Sport"
  },
  {
    id: 268,
    title: "크리드 2",
    englishTitle: "Creed II",
    year: 2018,
    director: "Steven Caple Jr.",
    genre: "Drama, Sport"
  },
  {
    id: 269,
    title: "블레이드 러너 2049",
    englishTitle: "Blade Runner 2049",
    year: 2017,
    director: "Denis Villeneuve",
    genre: "Drama, Mystery, Sci-Fi"
  },
  {
    id: 270,
    title: "듄",
    englishTitle: "Dune",
    year: 2021,
    director: "Denis Villeneuve",
    genre: "Adventure, Drama, Sci-Fi"
  },

  {
    id: 271,
    title: "듄: 파트 2",
    englishTitle: "Dune: Part Two",
    year: 2024,
    director: "Denis Villeneuve",
    genre: "Action, Adventure, Drama"
  },
  {
    id: 272,
    title: "컨택트",
    englishTitle: "Arrival",
    year: 2016,
    director: "Denis Villeneuve",
    genre: "Drama, Sci-Fi"
  },
  {
    id: 273,
    title: "시카리오: 암살자의 도시",
    englishTitle: "Sicario",
    year: 2015,
    director: "Denis Villeneuve",
    genre: "Action, Crime, Drama"
  },
  {
    id: 274,
    title: "프리즈너스",
    englishTitle: "Prisoners",
    year: 2013,
    director: "Denis Villeneuve",
    genre: "Crime, Drama, Mystery"
  },
  {
    id: 275,
    title: "그을린 사랑",
    englishTitle: "Incendies",
    year: 2010,
    director: "Denis Villeneuve",
    genre: "Drama, Mystery, War"
  },
  {
    id: 276,
    title: "에브리씽 에브리웨어 올 앳 원스",
    englishTitle: "Everything Everywhere All at Once",
    year: 2022,
    director: "Daniel Kwan, Daniel Scheinert",
    genre: "Action, Adventure, Comedy"
  },
  {
    id: 277,
    title: "문라이트",
    englishTitle: "Moonlight",
    year: 2016,
    director: "Barry Jenkins",
    genre: "Drama"
  },
  {
    id: 278,
    title: "라라랜드",
    englishTitle: "La La Land",
    year: 2016,
    director: "Damien Chazelle",
    genre: "Comedy, Drama, Music"
  },
  {
    id: 279,
    title: "위플래쉬",
    englishTitle: "Whiplash",
    year: 2014,
    director: "Damien Chazelle",
    genre: "Drama, Music"
  },
  {
    id: 280,
    title: "퍼스트맨",
    englishTitle: "First Man",
    year: 2018,
    director: "Damien Chazelle",
    genre: "Biography, Drama, History"
  },

  {
    id: 281,
    title: "매트릭스",
    englishTitle: "The Matrix",
    year: 1999,
    director: "The Wachowskis",
    genre: "Action, Sci-Fi"
  },
  {
    id: 282,
    title: "다섯 번째 원소",
    englishTitle: "The Fifth Element",
    year: 1997,
    director: "Luc Besson",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 283,
    title: "맨 인 블랙",
    englishTitle: "Men in Black",
    year: 1997,
    director: "Barry Sonnenfeld",
    genre: "Action, Comedy, Sci-Fi"
  },
  {
    id: 284,
    title: "맨 인 블랙 2",
    englishTitle: "Men in Black II",
    year: 2002,
    director: "Barry Sonnenfeld",
    genre: "Action, Comedy, Sci-Fi"
  },
  {
    id: 285,
    title: "맨 인 블랙 3",
    englishTitle: "Men in Black 3",
    year: 2012,
    director: "Barry Sonnenfeld",
    genre: "Action, Comedy, Sci-Fi"
  },
  {
    id: 286,
    title: "혹성탈출",
    englishTitle: "Planet of the Apes",
    year: 1968,
    director: "Franklin J. Schaffner",
    genre: "Adventure, Sci-Fi"
  },
  {
    id: 287,
    title: "혹성탈출: 진화의 시작",
    englishTitle: "Rise of the Planet of the Apes",
    year: 2011,
    director: "Rupert Wyatt",
    genre: "Action, Drama, Sci-Fi"
  },
  {
    id: 288,
    title: "혹성탈출: 반격의 서막",
    englishTitle: "Dawn of the Planet of the Apes",
    year: 2014,
    director: "Matt Reeves",
    genre: "Action, Drama, Sci-Fi"
  },
  {
    id: 289,
    title: "혹성탈출: 종의 전쟁",
    englishTitle: "War for the Planet of the Apes",
    year: 2017,
    director: "Matt Reeves",
    genre: "Action, Drama, Sci-Fi"
  },
  {
    id: 290,
    title: "혹성탈출: 새로운 시대",
    englishTitle: "Kingdom of the Planet of the Apes",
    year: 2024,
    director: "Wes Ball",
    genre: "Action, Adventure, Sci-Fi"
  },

  {
    id: 291,
    title: "아이언맨",
    englishTitle: "Iron Man",
    year: 2008,
    director: "Jon Favreau",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 292,
    title: "아이언맨 2",
    englishTitle: "Iron Man 2",
    year: 2010,
    director: "Jon Favreau",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 293,
    title: "아이언맨 3",
    englishTitle: "Iron Man 3",
    year: 2013,
    director: "Shane Black",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 294,
    title: "캡틴 아메리카: 퍼스트 어벤져",
    englishTitle: "Captain America: The First Avenger",
    year: 2011,
    director: "Joe Johnston",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 295,
    title: "캡틴 아메리카: 윈터 솔져",
    englishTitle: "Captain America: The Winter Soldier",
    year: 2014,
    director: "Anthony Russo, Joe Russo",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 296,
    title: "캡틴 아메리카: 시빌 워",
    englishTitle: "Captain America: Civil War",
    year: 2016,
    director: "Anthony Russo, Joe Russo",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 297,
    title: "토르",
    englishTitle: "Thor",
    year: 2011,
    director: "Kenneth Branagh",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 298,
    title: "토르: 다크 월드",
    englishTitle: "Thor: The Dark World",
    year: 2013,
    director: "Alan Taylor",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 299,
    title: "토르: 라그나로크",
    englishTitle: "Thor: Ragnarok",
    year: 2017,
    director: "Taika Waititi",
    genre: "Action, Adventure, Comedy"
  },
  {
    id: 300,
    title: "토르: 러브 앤 썬더",
    englishTitle: "Thor: Love and Thunder",
    year: 2022,
    director: "Taika Waititi",
    genre: "Action, Adventure, Comedy"
  },

  {
    id: 301,
    title: "닥터 스트레인지",
    englishTitle: "Doctor Strange",
    year: 2016,
    director: "Scott Derrickson",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 302,
    title: "닥터 스트레인지: 대혼돈의 멀티버스",
    englishTitle: "Doctor Strange in the Multiverse of Madness",
    year: 2022,
    director: "Sam Raimi",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 303,
    title: "블랙 팬서",
    englishTitle: "Black Panther",
    year: 2018,
    director: "Ryan Coogler",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 304,
    title: "블랙 팬서: 와칸다 포에버",
    englishTitle: "Black Panther: Wakanda Forever",
    year: 2022,
    director: "Ryan Coogler",
    genre: "Action, Adventure, Drama"
  },
  {
    id: 305,
    title: "가디언즈 오브 갤럭시",
    englishTitle: "Guardians of the Galaxy",
    year: 2014,
    director: "James Gunn",
    genre: "Action, Adventure, Comedy"
  },
  {
    id: 306,
    title: "가디언즈 오브 갤럭시 VOL. 2",
    englishTitle: "Guardians of the Galaxy Vol. 2",
    year: 2017,
    director: "James Gunn",
    genre: "Action, Adventure, Comedy"
  },
  {
    id: 307,
    title: "가디언즈 오브 갤럭시 VOL. 3",
    englishTitle: "Guardians of the Galaxy Vol. 3",
    year: 2023,
    director: "James Gunn",
    genre: "Action, Adventure, Comedy"
  },
  {
    id: 308,
    title: "앤트맨",
    englishTitle: "Ant-Man",
    year: 2015,
    director: "Peyton Reed",
    genre: "Action, Adventure, Comedy"
  },
  {
    id: 309,
    title: "앤트맨과 와스프",
    englishTitle: "Ant-Man and the Wasp",
    year: 2018,
    director: "Peyton Reed",
    genre: "Action, Adventure, Comedy"
  },
  {
    id: 310,
    title: "앤트맨과 와스프: 퀀텀매니아",
    englishTitle: "Ant-Man and the Wasp: Quantumania",
    year: 2023,
    director: "Peyton Reed",
    genre: "Action, Adventure, Comedy"
  },

  {
    id: 311,
    title: "샹치와 텐 링즈의 전설",
    englishTitle: "Shang-Chi and the Legend of the Ten Rings",
    year: 2021,
    director: "Destin Daniel Cretton",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 312,
    title: "이터널스",
    englishTitle: "Eternals",
    year: 2021,
    director: "Chloé Zhao",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 313,
    title: "블랙 위도우",
    englishTitle: "Black Widow",
    year: 2021,
    director: "Cate Shortland",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 314,
    title: "스파이더맨: 홈커밍",
    englishTitle: "Spider-Man: Homecoming",
    year: 2017,
    director: "Jon Watts",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 315,
    title: "스파이더맨: 파 프롬 홈",
    englishTitle: "Spider-Man: Far From Home",
    year: 2019,
    director: "Jon Watts",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 316,
    title: "스파이더맨: 노 웨이 홈",
    englishTitle: "Spider-Man: No Way Home",
    year: 2021,
    director: "Jon Watts",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 317,
    title: "베놈",
    englishTitle: "Venom",
    year: 2018,
    director: "Ruben Fleischer",
    genre: "Action, Sci-Fi, Thriller"
  },
  {
    id: 318,
    title: "베놈 2: 렛 데어 비 카니지",
    englishTitle: "Venom: Let There Be Carnage",
    year: 2021,
    director: "Andy Serkis",
    genre: "Action, Sci-Fi, Thriller"
  },
  {
    id: 319,
    title: "로건",
    englishTitle: "Logan",
    year: 2017,
    director: "James Mangold",
    genre: "Action, Drama, Sci-Fi"
  },
  {
    id: 320,
    title: "엑스맨",
    englishTitle: "X-Men",
    year: 2000,
    director: "Bryan Singer",
    genre: "Action, Sci-Fi"
  },

  {
    id: 321,
    title: "엑스맨 2",
    englishTitle: "X2",
    year: 2003,
    director: "Bryan Singer",
    genre: "Action, Sci-Fi"
  },
  {
    id: 322,
    title: "엑스맨: 퍼스트 클래스",
    englishTitle: "X-Men: First Class",
    year: 2011,
    director: "Matthew Vaughn",
    genre: "Action, Sci-Fi"
  },
  {
    id: 323,
    title: "엑스맨: 데이즈 오브 퓨처 패스트",
    englishTitle: "X-Men: Days of Future Past",
    year: 2014,
    director: "Bryan Singer",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 324,
    title: "엑스맨: 아포칼립스",
    englishTitle: "X-Men: Apocalypse",
    year: 2016,
    director: "Bryan Singer",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 325,
    title: "데드풀",
    englishTitle: "Deadpool",
    year: 2016,
    director: "Tim Miller",
    genre: "Action, Comedy"
  },
  {
    id: 326,
    title: "데드풀 2",
    englishTitle: "Deadpool 2",
    year: 2018,
    director: "David Leitch",
    genre: "Action, Comedy"
  },
  {
    id: 327,
    title: "조커",
    englishTitle: "Joker",
    year: 2019,
    director: "Todd Phillips",
    genre: "Crime, Drama, Thriller"
  },
  {
    id: 328,
    title: "더 배트맨",
    englishTitle: "The Batman",
    year: 2022,
    director: "Matt Reeves",
    genre: "Crime, Drama, Mystery"
  },
  {
    id: 329,
    title: "배트맨",
    englishTitle: "Batman",
    year: 1989,
    director: "Tim Burton",
    genre: "Action, Adventure"
  },
  {
    id: 330,
    title: "배트맨 리턴즈",
    englishTitle: "Batman Returns",
    year: 1992,
    director: "Tim Burton",
    genre: "Action, Crime, Fantasy"
  },

  {
    id: 331,
    title: "맨 오브 스틸",
    englishTitle: "Man of Steel",
    year: 2013,
    director: "Zack Snyder",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 332,
    title: "배트맨 대 슈퍼맨: 저스티스의 시작",
    englishTitle: "Batman v Superman: Dawn of Justice",
    year: 2016,
    director: "Zack Snyder",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 333,
    title: "원더 우먼",
    englishTitle: "Wonder Woman",
    year: 2017,
    director: "Patty Jenkins",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 334,
    title: "아쿠아맨",
    englishTitle: "Aquaman",
    year: 2018,
    director: "James Wan",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 335,
    title: "샤잠!",
    englishTitle: "Shazam!",
    year: 2019,
    director: "David F. Sandberg",
    genre: "Action, Adventure, Comedy"
  },
  {
    id: 336,
    title: "더 수어사이드 스쿼드",
    englishTitle: "The Suicide Squad",
    year: 2021,
    director: "James Gunn",
    genre: "Action, Adventure, Comedy"
  },
  {
    id: 337,
    title: "콘스탄틴",
    englishTitle: "Constantine",
    year: 2005,
    director: "Francis Lawrence",
    genre: "Action, Fantasy, Horror"
  },
  {
    id: 338,
    title: "V 포 벤데타",
    englishTitle: "V for Vendetta",
    year: 2005,
    director: "James McTeigue",
    genre: "Action, Drama, Sci-Fi"
  },
  {
    id: 339,
    title: "왓치맨",
    englishTitle: "Watchmen",
    year: 2009,
    director: "Zack Snyder",
    genre: "Action, Drama, Mystery"
  },
  {
    id: 340,
    title: "300",
    englishTitle: "300",
    year: 2006,
    director: "Zack Snyder",
    genre: "Action, Drama"
  },

  {
    id: 341,
    title: "아메리칸 갱스터",
    englishTitle: "American Gangster",
    year: 2007,
    director: "Ridley Scott",
    genre: "Biography, Crime, Drama"
  },
  {
    id: 342,
    title: "블랙 레인",
    englishTitle: "Black Rain",
    year: 1989,
    director: "Ridley Scott",
    genre: "Action, Crime, Thriller"
  },
  {
    id: 343,
    title: "에너미",
    englishTitle: "Enemy",
    year: 2013,
    director: "Denis Villeneuve",
    genre: "Drama, Mystery, Thriller"
  },
  {
    id: 344,
    title: "그린 룸",
    englishTitle: "Green Room",
    year: 2015,
    director: "Jeremy Saulnier",
    genre: "Crime, Horror, Thriller"
  },
  {
    id: 345,
    title: "나이트크롤러",
    englishTitle: "Nightcrawler",
    year: 2014,
    director: "Dan Gilroy",
    genre: "Crime, Drama, Thriller"
  },
  {
    id: 346,
    title: "프리즈너스",
    englishTitle: "Prisoners",
    year: 2013,
    director: "Denis Villeneuve",
    genre: "Crime, Drama, Mystery"
  },
  {
    id: 347,
    title: "노인을 위한 나라는 없다",
    englishTitle: "No Country for Old Men",
    year: 2007,
    director: "Joel Coen, Ethan Coen",
    genre: "Crime, Drama, Thriller"
  },
  {
    id: 348,
    title: "파고",
    englishTitle: "Fargo",
    year: 1996,
    director: "Joel Coen, Ethan Coen",
    genre: "Crime, Drama, Thriller"
  },
  {
    id: 349,
    title: "빅 레보스키",
    englishTitle: "The Big Lebowski",
    year: 1998,
    director: "Joel Coen, Ethan Coen",
    genre: "Comedy, Crime"
  },
  {
    id: 350,
    title: "밀러스 크로싱",
    englishTitle: "Miller's Crossing",
    year: 1990,
    director: "Joel Coen, Ethan Coen",
    genre: "Crime, Drama, Thriller"
  },

  {
    id: 351,
    title: "인사이드 르윈",
    englishTitle: "Inside Llewyn Davis",
    year: 2013,
    director: "Joel Coen, Ethan Coen",
    genre: "Drama, Music"
  },
  {
    id: 352,
    title: "트루먼 쇼",
    englishTitle: "The Truman Show",
    year: 1998,
    director: "Peter Weir",
    genre: "Comedy, Drama, Sci-Fi"
  },
  {
    id: 353,
    title: "죽은 시인의 사회",
    englishTitle: "Dead Poets Society",
    year: 1989,
    director: "Peter Weir",
    genre: "Comedy, Drama"
  },
  {
    id: 354,
    title: "가위손",
    englishTitle: "Edward Scissorhands",
    year: 1990,
    director: "Tim Burton",
    genre: "Drama, Fantasy, Romance"
  },
  {
    id: 355,
    title: "빅 피쉬",
    englishTitle: "Big Fish",
    year: 2003,
    director: "Tim Burton",
    genre: "Adventure, Drama, Fantasy"
  },
  {
    id: 356,
    title: "유령 신부",
    englishTitle: "Corpse Bride",
    year: 2005,
    director: "Tim Burton, Mike Johnson",
    genre: "Animation, Fantasy, Romance"
  },
  {
    id: 357,
    title: "크리스마스 악몽",
    englishTitle: "The Nightmare Before Christmas",
    year: 1993,
    director: "Henry Selick",
    genre: "Animation, Fantasy, Musical"
  },
  {
    id: 358,
    title: "찰리와 초콜릿 공장",
    englishTitle: "Charlie and the Chocolate Factory",
    year: 2005,
    director: "Tim Burton",
    genre: "Adventure, Comedy, Family"
  },
  {
    id: 359,
    title: "스위니 토드: 어느 잔혹한 이발사 이야기",
    englishTitle: "Sweeney Todd: The Demon Barber of Fleet Street",
    year: 2007,
    director: "Tim Burton",
    genre: "Drama, Horror, Musical"
  },
  {
    id: 360,
    title: "가위손",
    englishTitle: "Edward Scissorhands",
    year: 1990,
    director: "Tim Burton",
    genre: "Drama, Fantasy, Romance"
  },

  {
    id: 361,
    title: "어느 멋진 날",
    englishTitle: "A Beautiful Mind",
    year: 2001,
    director: "Ron Howard",
    genre: "Biography, Drama"
  },
  {
    id: 362,
    title: "아폴로 13",
    englishTitle: "Apollo 13",
    year: 1995,
    director: "Ron Howard",
    genre: "Drama, History"
  },
  {
    id: 363,
    title: "러시: 더 라이벌",
    englishTitle: "Rush",
    year: 2013,
    director: "Ron Howard",
    genre: "Biography, Drama, Sport"
  },
  {
    id: 364,
    title: "뷰티풀 마인드",
    englishTitle: "A Beautiful Mind",
    year: 2001,
    director: "Ron Howard",
    genre: "Biography, Drama"
  },
  {
    id: 365,
    title: "다빈치 코드",
    englishTitle: "The Da Vinci Code",
    year: 2006,
    director: "Ron Howard",
    genre: "Mystery, Thriller"
  },
  {
    id: 366,
    title: "엔젤스 앤 데몬스",
    englishTitle: "Angels & Demons",
    year: 2009,
    director: "Ron Howard",
    genre: "Mystery, Thriller"
  },
  {
    id: 367,
    title: "포드 V 페라리",
    englishTitle: "Ford v Ferrari",
    year: 2019,
    director: "James Mangold",
    genre: "Action, Biography, Drama"
  },
  {
    id: 368,
    title: "아이덴티티",
    englishTitle: "Identity",
    year: 2003,
    director: "James Mangold",
    genre: "Mystery, Thriller"
  },
  {
    id: 369,
    title: "워크 더 라인",
    englishTitle: "Walk the Line",
    year: 2005,
    director: "James Mangold",
    genre: "Biography, Drama, Music"
  },
  {
    id: 370,
    title: "페라리",
    englishTitle: "Ferrari",
    year: 2023,
    director: "Michael Mann",
    genre: "Biography, Drama, Sport"
  },

  {
    id: 371,
    title: "히트",
    englishTitle: "Heat",
    year: 1995,
    director: "Michael Mann",
    genre: "Action, Crime, Drama"
  },
  {
    id: 372,
    title: "인사이더",
    englishTitle: "The Insider",
    year: 1999,
    director: "Michael Mann",
    genre: "Biography, Drama"
  },
  {
    id: 373,
    title: "콜래트럴",
    englishTitle: "Collateral",
    year: 2004,
    director: "Michael Mann",
    genre: "Crime, Drama, Thriller"
  },
  {
    id: 374,
    title: "퍼블릭 에너미",
    englishTitle: "Public Enemies",
    year: 2009,
    director: "Michael Mann",
    genre: "Biography, Crime, Drama"
  },
  {
    id: 375,
    title: "맨헌터",
    englishTitle: "Manhunter",
    year: 1986,
    director: "Michael Mann",
    genre: "Crime, Mystery, Thriller"
  },
  {
    id: 376,
    title: "스카페이스",
    englishTitle: "Scarface",
    year: 1983,
    director: "Brian De Palma",
    genre: "Crime, Drama"
  },
  {
    id: 377,
    title: "언터처블",
    englishTitle: "The Untouchables",
    year: 1987,
    director: "Brian De Palma",
    genre: "Crime, Drama, Thriller"
  },
  {
    id: 378,
    title: "캐리",
    englishTitle: "Carrie",
    year: 1976,
    director: "Brian De Palma",
    genre: "Drama, Horror"
  },
  {
    id: 379,
    title: "미션 임파서블 2",
    englishTitle: "Mission: Impossible II",
    year: 2000,
    director: "John Woo",
    genre: "Action, Adventure, Thriller"
  },
  {
    id: 380,
    title: "미션 임파서블 3",
    englishTitle: "Mission: Impossible III",
    year: 2006,
    director: "J.J. Abrams",
    genre: "Action, Adventure, Thriller"
  },

  {
    id: 381,
    title: "미션 임파서블: 고스트 프로토콜",
    englishTitle: "Mission: Impossible - Ghost Protocol",
    year: 2011,
    director: "Brad Bird",
    genre: "Action, Adventure, Thriller"
  },
  {
    id: 382,
    title: "미션 임파서블: 로그네이션",
    englishTitle: "Mission: Impossible - Rogue Nation",
    year: 2015,
    director: "Christopher McQuarrie",
    genre: "Action, Adventure, Thriller"
  },
  {
    id: 383,
    title: "미션 임파서블: 데드 레코닝",
    englishTitle: "Mission: Impossible - Dead Reckoning Part One",
    year: 2023,
    director: "Christopher McQuarrie",
    genre: "Action, Adventure, Thriller"
  },
  {
    id: 384,
    title: "007 카지노 로얄",
    englishTitle: "Casino Royale",
    year: 2006,
    director: "Martin Campbell",
    genre: "Action, Adventure, Thriller"
  },
  {
    id: 385,
    title: "007 스카이폴",
    englishTitle: "Skyfall",
    year: 2012,
    director: "Sam Mendes",
    genre: "Action, Adventure, Thriller"
  },
  {
    id: 386,
    title: "007 노 타임 투 다이",
    englishTitle: "No Time to Die",
    year: 2021,
    director: "Cary Joji Fukunaga",
    genre: "Action, Adventure, Thriller"
  },
  {
    id: 387,
    title: "본 아이덴티티",
    englishTitle: "The Bourne Identity",
    year: 2002,
    director: "Doug Liman",
    genre: "Action, Mystery, Thriller"
  },
  {
    id: 388,
    title: "본 슈프리머시",
    englishTitle: "The Bourne Supremacy",
    year: 2004,
    director: "Paul Greengrass",
    genre: "Action, Mystery, Thriller"
  },
  {
    id: 389,
    title: "본 얼티메이텀",
    englishTitle: "The Bourne Ultimatum",
    year: 2007,
    director: "Paul Greengrass",
    genre: "Action, Mystery, Thriller"
  },
  {
    id: 390,
    title: "본 레거시",
    englishTitle: "The Bourne Legacy",
    year: 2012,
    director: "Tony Gilroy",
    genre: "Action, Thriller"
  },

  {
    id: 391,
    title: "다이 하드",
    englishTitle: "Die Hard",
    year: 1988,
    director: "John McTiernan",
    genre: "Action, Thriller"
  },
  {
    id: 392,
    title: "다이 하드 2",
    englishTitle: "Die Hard 2",
    year: 1990,
    director: "Renny Harlin",
    genre: "Action, Thriller"
  },
  {
    id: 393,
    title: "다이 하드 3",
    englishTitle: "Die Hard with a Vengeance",
    year: 1995,
    director: "John McTiernan",
    genre: "Action, Thriller"
  },
  {
    id: 394,
    title: "스피드",
    englishTitle: "Speed",
    year: 1994,
    director: "Jan de Bont",
    genre: "Action, Thriller"
  },
  {
    id: 395,
    title: "더 록",
    englishTitle: "The Rock",
    year: 1996,
    director: "Michael Bay",
    genre: "Action, Adventure, Thriller"
  },
  {
    id: 396,
    title: "아마겟돈",
    englishTitle: "Armageddon",
    year: 1998,
    director: "Michael Bay",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 397,
    title: "트랜스포머",
    englishTitle: "Transformers",
    year: 2007,
    director: "Michael Bay",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 398,
    title: "트랜스포머: 패자의 역습",
    englishTitle: "Transformers: Revenge of the Fallen",
    year: 2009,
    director: "Michael Bay",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 399,
    title: "트랜스포머: 다크 오브 더 문",
    englishTitle: "Transformers: Dark of the Moon",
    year: 2011,
    director: "Michael Bay",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 400,
    title: "트랜스포머: 사라진 시대",
    englishTitle: "Transformers: Age of Extinction",
    year: 2014,
    director: "Michael Bay",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 401,
    title: "포레스트 검프",
    englishTitle: "Forrest Gump",
    year: 1994,
    director: "Robert Zemeckis",
    genre: "Drama, Romance"
  },
  {
    id: 402,
    title: "그린 마일",
    englishTitle: "The Green Mile",
    year: 1999,
    director: "Frank Darabont",
    genre: "Crime, Drama, Fantasy"
  },
  {
    id: 403,
    title: "캐치 미 이프 유 캔",
    englishTitle: "Catch Me If You Can",
    year: 2002,
    director: "Steven Spielberg",
    genre: "Biography, Crime, Drama"
  },
  {
    id: 404,
    title: "터미널",
    englishTitle: "The Terminal",
    year: 2004,
    director: "Steven Spielberg",
    genre: "Comedy, Drama, Romance"
  },
  {
    id: 405,
    title: "라이언 일병 구하기",
    englishTitle: "Saving Private Ryan",
    year: 1998,
    director: "Steven Spielberg",
    genre: "Drama, War"
  },
  {
    id: 406,
    title: "쉰들러 리스트",
    englishTitle: "Schindler's List",
    year: 1993,
    director: "Steven Spielberg",
    genre: "Biography, Drama, History"
  },
  {
    id: 407,
    title: "태양의 제국",
    englishTitle: "Empire of the Sun",
    year: 1987,
    director: "Steven Spielberg",
    genre: "Drama, War"
  },
  {
    id: 408,
    title: "컬러 퍼플",
    englishTitle: "The Color Purple",
    year: 1985,
    director: "Steven Spielberg",
    genre: "Drama"
  },
  {
    id: 409,
    title: "후크",
    englishTitle: "Hook",
    year: 1991,
    director: "Steven Spielberg",
    genre: "Adventure, Comedy, Fantasy"
  },
  {
    id: 410,
    title: "A.I.",
    englishTitle: "A.I. Artificial Intelligence",
    year: 2001,
    director: "Steven Spielberg",
    genre: "Drama, Sci-Fi"
  },

  {
    id: 411,
    title: "마이너리티 리포트",
    englishTitle: "Minority Report",
    year: 2002,
    director: "Steven Spielberg",
    genre: "Action, Crime, Sci-Fi"
  },
  {
    id: 412,
    title: "우주전쟁",
    englishTitle: "War of the Worlds",
    year: 2005,
    director: "Steven Spielberg",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 413,
    title: "링컨",
    englishTitle: "Lincoln",
    year: 2012,
    director: "Steven Spielberg",
    genre: "Biography, Drama, History"
  },
  {
    id: 414,
    title: "스파이 브릿지",
    englishTitle: "Bridge of Spies",
    year: 2015,
    director: "Steven Spielberg",
    genre: "Drama, History, Thriller"
  },
  {
    id: 415,
    title: "더 포스트",
    englishTitle: "The Post",
    year: 2017,
    director: "Steven Spielberg",
    genre: "Biography, Drama, History"
  },
  {
    id: 416,
    title: "웨스트 사이드 스토리",
    englishTitle: "West Side Story",
    year: 2021,
    director: "Steven Spielberg",
    genre: "Crime, Drama, Musical"
  },
  {
    id: 417,
    title: "파벨만스",
    englishTitle: "The Fabelmans",
    year: 2022,
    director: "Steven Spielberg",
    genre: "Drama"
  },
  {
    id: 418,
    title: "태양은 가득히",
    englishTitle: "Purple Noon",
    year: 1960,
    director: "René Clément",
    genre: "Crime, Drama, Thriller"
  },
  {
    id: 419,
    title: "리플리",
    englishTitle: "The Talented Mr. Ripley",
    year: 1999,
    director: "Anthony Minghella",
    genre: "Crime, Drama, Thriller"
  },
  {
    id: 420,
    title: "잉글리쉬 페이션트",
    englishTitle: "The English Patient",
    year: 1996,
    director: "Anthony Minghella",
    genre: "Drama, Romance, War"
  },

  {
    id: 421,
    title: "슬럼독 밀리어네어",
    englishTitle: "Slumdog Millionaire",
    year: 2008,
    director: "Danny Boyle",
    genre: "Drama, Romance"
  },
  {
    id: 422,
    title: "트레인스포팅",
    englishTitle: "Trainspotting",
    year: 1996,
    director: "Danny Boyle",
    genre: "Drama"
  },
  {
    id: 423,
    title: "28일 후",
    englishTitle: "28 Days Later",
    year: 2002,
    director: "Danny Boyle",
    genre: "Horror, Sci-Fi, Thriller"
  },
  {
    id: 424,
    title: "선샤인",
    englishTitle: "Sunshine",
    year: 2007,
    director: "Danny Boyle",
    genre: "Adventure, Sci-Fi, Thriller"
  },
  {
    id: 425,
    title: "127시간",
    englishTitle: "127 Hours",
    year: 2010,
    director: "Danny Boyle",
    genre: "Biography, Drama"
  },
  {
    id: 426,
    title: "스티브 잡스",
    englishTitle: "Steve Jobs",
    year: 2015,
    director: "Danny Boyle",
    genre: "Biography, Drama"
  },
  {
    id: 427,
    title: "더 레슬러",
    englishTitle: "The Wrestler",
    year: 2008,
    director: "Darren Aronofsky",
    genre: "Drama, Sport"
  },
  {
    id: 428,
    title: "블랙 스완",
    englishTitle: "Black Swan",
    year: 2010,
    director: "Darren Aronofsky",
    genre: "Drama, Thriller"
  },
  {
    id: 429,
    title: "레퀴엠",
    englishTitle: "Requiem for a Dream",
    year: 2000,
    director: "Darren Aronofsky",
    genre: "Drama"
  },
  {
    id: 430,
    title: "파이",
    englishTitle: "Pi",
    year: 1998,
    director: "Darren Aronofsky",
    genre: "Drama, Mystery, Sci-Fi"
  },

  {
    id: 431,
    title: "노아",
    englishTitle: "Noah",
    year: 2014,
    director: "Darren Aronofsky",
    genre: "Action, Adventure, Drama"
  },
  {
    id: 432,
    title: "마더!",
    englishTitle: "mother!",
    year: 2017,
    director: "Darren Aronofsky",
    genre: "Drama, Horror, Mystery"
  },
  {
    id: 433,
    title: "더 파이터",
    englishTitle: "The Fighter",
    year: 2010,
    director: "David O. Russell",
    genre: "Biography, Drama, Sport"
  },
  {
    id: 434,
    title: "실버라이닝 플레이북",
    englishTitle: "Silver Linings Playbook",
    year: 2012,
    director: "David O. Russell",
    genre: "Comedy, Drama, Romance"
  },
  {
    id: 435,
    title: "아메리칸 허슬",
    englishTitle: "American Hustle",
    year: 2013,
    director: "David O. Russell",
    genre: "Crime, Drama"
  },
  {
    id: 436,
    title: "조이",
    englishTitle: "Joy",
    year: 2015,
    director: "David O. Russell",
    genre: "Biography, Drama"
  },
  {
    id: 437,
    title: "쓰리 빌보드",
    englishTitle: "Three Billboards Outside Ebbing, Missouri",
    year: 2017,
    director: "Martin McDonagh",
    genre: "Crime, Drama"
  },
  {
    id: 438,
    title: "이니셰린의 밴시",
    englishTitle: "The Banshees of Inisherin",
    year: 2022,
    director: "Martin McDonagh",
    genre: "Comedy, Drama"
  },
  {
    id: 439,
    title: "킬러들의 도시",
    englishTitle: "In Bruges",
    year: 2008,
    director: "Martin McDonagh",
    genre: "Comedy, Crime, Drama"
  },
  {
    id: 440,
    title: "세븐 싸이코패스",
    englishTitle: "Seven Psychopaths",
    year: 2012,
    director: "Martin McDonagh",
    genre: "Comedy, Crime"
  },

  {
    id: 441,
    title: "그랜드 부다페스트 호텔",
    englishTitle: "The Grand Budapest Hotel",
    year: 2014,
    director: "Wes Anderson",
    genre: "Adventure, Comedy, Drama"
  },
  {
    id: 442,
    title: "문라이즈 킹덤",
    englishTitle: "Moonrise Kingdom",
    year: 2012,
    director: "Wes Anderson",
    genre: "Adventure, Comedy, Drama"
  },
  {
    id: 443,
    title: "로얄 테넌바움",
    englishTitle: "The Royal Tenenbaums",
    year: 2001,
    director: "Wes Anderson",
    genre: "Comedy, Drama"
  },
  {
    id: 444,
    title: "프렌치 디스패치",
    englishTitle: "The French Dispatch",
    year: 2021,
    director: "Wes Anderson",
    genre: "Comedy, Drama"
  },
  {
    id: 445,
    title: "애스터로이드 시티",
    englishTitle: "Asteroid City",
    year: 2023,
    director: "Wes Anderson",
    genre: "Comedy, Drama, Romance"
  },
  {
    id: 446,
    title: "판타스틱 Mr. 폭스",
    englishTitle: "Fantastic Mr. Fox",
    year: 2009,
    director: "Wes Anderson",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 447,
    title: "개들의 섬",
    englishTitle: "Isle of Dogs",
    year: 2018,
    director: "Wes Anderson",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 448,
    title: "맥스군 사랑에 빠지다",
    englishTitle: "Rushmore",
    year: 1998,
    director: "Wes Anderson",
    genre: "Comedy, Drama"
  },
  {
    id: 449,
    title: "스티브 지소와의 해저 생활",
    englishTitle: "The Life Aquatic with Steve Zissou",
    year: 2004,
    director: "Wes Anderson",
    genre: "Adventure, Comedy, Drama"
  },
  {
    id: 450,
    title: "다즐링 주식회사",
    englishTitle: "The Darjeeling Limited",
    year: 2007,
    director: "Wes Anderson",
    genre: "Adventure, Comedy, Drama"
  },

  {
    id: 451,
    title: "이터널 선샤인",
    englishTitle: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
    director: "Michel Gondry",
    genre: "Drama, Romance, Sci-Fi"
  },
  {
    id: 452,
    title: "무드 인디고",
    englishTitle: "Mood Indigo",
    year: 2013,
    director: "Michel Gondry",
    genre: "Comedy, Drama, Fantasy"
  },
  {
    id: 453,
    title: "존 말코비치 되기",
    englishTitle: "Being John Malkovich",
    year: 1999,
    director: "Spike Jonze",
    genre: "Comedy, Drama, Fantasy"
  },
  {
    id: 454,
    title: "그녀",
    englishTitle: "Her",
    year: 2013,
    director: "Spike Jonze",
    genre: "Drama, Romance, Sci-Fi"
  },
  {
    id: 455,
    title: "어댑테이션",
    englishTitle: "Adaptation.",
    year: 2002,
    director: "Spike Jonze",
    genre: "Comedy, Drama"
  },
  {
    id: 456,
    title: "잭애스: 더 무비",
    englishTitle: "Jackass: The Movie",
    year: 2002,
    director: "Jeff Tremaine",
    genre: "Comedy"
  },
  {
    id: 457,
    title: "소울",
    englishTitle: "Soul",
    year: 2020,
    director: "Pete Docter",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 458,
    title: "메이의 새빨간 비밀",
    englishTitle: "Turning Red",
    year: 2022,
    director: "Domee Shi",
    genre: "Animation, Comedy, Fantasy"
  },
  {
    id: 459,
    title: "엘리멘탈",
    englishTitle: "Elemental",
    year: 2023,
    director: "Peter Sohn",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 460,
    title: "루카",
    englishTitle: "Luca",
    year: 2021,
    director: "Enrico Casarosa",
    genre: "Animation, Adventure, Comedy"
  },

  {
    id: 461,
    title: "온워드: 단 하루의 기적",
    englishTitle: "Onward",
    year: 2020,
    director: "Dan Scanlon",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 462,
    title: "메리다와 마법의 숲",
    englishTitle: "Brave",
    year: 2012,
    director: "Mark Andrews, Brenda Chapman",
    genre: "Animation, Adventure, Fantasy"
  },
  {
    id: 463,
    title: "카",
    englishTitle: "Cars",
    year: 2006,
    director: "John Lasseter",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 464,
    title: "카 2",
    englishTitle: "Cars 2",
    year: 2011,
    director: "John Lasseter, Brad Lewis",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 465,
    title: "카 3: 새로운 도전",
    englishTitle: "Cars 3",
    year: 2017,
    director: "Brian Fee",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 466,
    title: "월레스와 그로밋: 거대 토끼의 저주",
    englishTitle: "Wallace & Gromit: The Curse of the Were-Rabbit",
    year: 2005,
    director: "Nick Park, Steve Box",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 467,
    title: "치킨 런",
    englishTitle: "Chicken Run",
    year: 2000,
    director: "Peter Lord, Nick Park",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 468,
    title: "쿠보와 전설의 악기",
    englishTitle: "Kubo and the Two Strings",
    year: 2016,
    director: "Travis Knight",
    genre: "Animation, Action, Adventure"
  },
  {
    id: 469,
    title: "코렐라인: 비밀의 문",
    englishTitle: "Coraline",
    year: 2009,
    director: "Henry Selick",
    genre: "Animation, Fantasy, Horror"
  },
  {
    id: 470,
    title: "파라노만",
    englishTitle: "ParaNorman",
    year: 2012,
    director: "Sam Fell, Chris Butler",
    genre: "Animation, Adventure, Comedy"
  },

  {
    id: 471,
    title: "슈렉",
    englishTitle: "Shrek",
    year: 2001,
    director: "Andrew Adamson, Vicky Jenson",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 472,
    title: "슈렉 2",
    englishTitle: "Shrek 2",
    year: 2004,
    director: "Andrew Adamson, Kelly Asbury, Conrad Vernon",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 473,
    title: "슈렉 3",
    englishTitle: "Shrek the Third",
    year: 2007,
    director: "Chris Miller, Raman Hui",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 474,
    title: "슈렉 포에버",
    englishTitle: "Shrek Forever After",
    year: 2010,
    director: "Mike Mitchell",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 475,
    title: "쿵푸팬더",
    englishTitle: "Kung Fu Panda",
    year: 2008,
    director: "Mark Osborne, John Stevenson",
    genre: "Animation, Action, Adventure"
  },
  {
    id: 476,
    title: "쿵푸팬더 2",
    englishTitle: "Kung Fu Panda 2",
    year: 2011,
    director: "Jennifer Yuh Nelson",
    genre: "Animation, Action, Adventure"
  },
  {
    id: 477,
    title: "쿵푸팬더 3",
    englishTitle: "Kung Fu Panda 3",
    year: 2016,
    director: "Jennifer Yuh Nelson, Alessandro Carloni",
    genre: "Animation, Action, Adventure"
  },
  {
    id: 478,
    title: "드래곤 길들이기",
    englishTitle: "How to Train Your Dragon",
    year: 2010,
    director: "Chris Sanders, Dean DeBlois",
    genre: "Animation, Action, Adventure"
  },
  {
    id: 479,
    title: "드래곤 길들이기 2",
    englishTitle: "How to Train Your Dragon 2",
    year: 2014,
    director: "Dean DeBlois",
    genre: "Animation, Action, Adventure"
  },
  {
    id: 480,
    title: "드래곤 길들이기 3",
    englishTitle: "How to Train Your Dragon: The Hidden World",
    year: 2019,
    director: "Dean DeBlois",
    genre: "Animation, Action, Adventure"
  },

  {
    id: 481,
    title: "마다가스카",
    englishTitle: "Madagascar",
    year: 2005,
    director: "Eric Darnell, Tom McGrath",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 482,
    title: "마다가스카 2",
    englishTitle: "Madagascar: Escape 2 Africa",
    year: 2008,
    director: "Eric Darnell, Tom McGrath",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 483,
    title: "마다가스카 3",
    englishTitle: "Madagascar 3: Europe's Most Wanted",
    year: 2012,
    director: "Eric Darnell, Conrad Vernon, Tom McGrath",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 484,
    title: "메가마인드",
    englishTitle: "Megamind",
    year: 2010,
    director: "Tom McGrath",
    genre: "Animation, Action, Comedy"
  },
  {
    id: 485,
    title: "보스 베이비",
    englishTitle: "The Boss Baby",
    year: 2017,
    director: "Tom McGrath",
    genre: "Animation, Comedy, Family"
  },
  {
    id: 486,
    title: "미니언즈",
    englishTitle: "Minions",
    year: 2015,
    director: "Kyle Balda, Pierre Coffin",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 487,
    title: "슈퍼배드",
    englishTitle: "Despicable Me",
    year: 2010,
    director: "Pierre Coffin, Chris Renaud",
    genre: "Animation, Comedy, Family"
  },
  {
    id: 488,
    title: "슈퍼배드 2",
    englishTitle: "Despicable Me 2",
    year: 2013,
    director: "Pierre Coffin, Chris Renaud",
    genre: "Animation, Comedy, Family"
  },
  {
    id: 489,
    title: "슈퍼배드 3",
    englishTitle: "Despicable Me 3",
    year: 2017,
    director: "Kyle Balda, Pierre Coffin, Eric Guillon",
    genre: "Animation, Comedy, Family"
  },
  {
    id: 490,
    title: "슈퍼배드 4",
    englishTitle: "Despicable Me 4",
    year: 2024,
    director: "Chris Renaud, Patrick Delage",
    genre: "Animation, Comedy, Family"
  },

  {
    id: 491,
    title: "몬스터 호텔",
    englishTitle: "Hotel Transylvania",
    year: 2012,
    director: "Genndy Tartakovsky",
    genre: "Animation, Comedy, Family"
  },
  {
    id: 492,
    title: "몬스터 호텔 2",
    englishTitle: "Hotel Transylvania 2",
    year: 2015,
    director: "Genndy Tartakovsky",
    genre: "Animation, Comedy, Family"
  },
  {
    id: 493,
    title: "몬스터 호텔 3",
    englishTitle: "Hotel Transylvania 3: Summer Vacation",
    year: 2018,
    director: "Genndy Tartakovsky",
    genre: "Animation, Comedy, Family"
  },
  {
    id: 494,
    title: "아이스 에이지",
    englishTitle: "Ice Age",
    year: 2002,
    director: "Chris Wedge",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 495,
    title: "아이스 에이지 2",
    englishTitle: "Ice Age: The Meltdown",
    year: 2006,
    director: "Carlos Saldanha",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 496,
    title: "아이스 에이지 3",
    englishTitle: "Ice Age: Dawn of the Dinosaurs",
    year: 2009,
    director: "Carlos Saldanha",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 497,
    title: "아이스 에이지 4",
    englishTitle: "Ice Age: Continental Drift",
    year: 2012,
    director: "Steve Martino, Mike Thurmeier",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 498,
    title: "아이스 에이지 5",
    englishTitle: "Ice Age: Collision Course",
    year: 2016,
    director: "Mike Thurmeier, Galen T. Chu",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 499,
    title: "리오",
    englishTitle: "Rio",
    year: 2011,
    director: "Carlos Saldanha",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 500,
    title: "리오 2",
    englishTitle: "Rio 2",
    year: 2014,
    director: "Carlos Saldanha",
    genre: "Animation, Adventure, Comedy"
  },

  {
    id: 501,
    title: "해피 피트",
    englishTitle: "Happy Feet",
    year: 2006,
    director: "George Miller",
    genre: "Animation, Comedy, Family"
  },
  {
    id: 502,
    title: "해피 피트 2",
    englishTitle: "Happy Feet Two",
    year: 2011,
    director: "George Miller",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 503,
    title: "니모를 찾아서",
    englishTitle: "Finding Nemo",
    year: 2003,
    director: "Andrew Stanton",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 504,
    title: "도리를 찾아서",
    englishTitle: "Finding Dory",
    year: 2016,
    director: "Andrew Stanton",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 505,
    title: "굿 다이노",
    englishTitle: "The Good Dinosaur",
    year: 2015,
    director: "Peter Sohn",
    genre: "Animation, Adventure, Drama"
  },
  {
    id: 506,
    title: "메리와 마녀의 꽃",
    englishTitle: "Mary and the Witch's Flower",
    year: 2017,
    director: "Hiromasa Yonebayashi",
    genre: "Animation, Adventure, Fantasy"
  },
  {
    id: 507,
    title: "마루 밑 아리에티",
    englishTitle: "The Secret World of Arrietty",
    year: 2010,
    director: "Hiromasa Yonebayashi",
    genre: "Animation, Adventure, Family"
  },
  {
    id: 508,
    title: "붉은 돼지",
    englishTitle: "Porco Rosso",
    year: 1992,
    director: "Hayao Miyazaki",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 509,
    title: "천공의 성 라퓨타",
    englishTitle: "Castle in the Sky",
    year: 1986,
    director: "Hayao Miyazaki",
    genre: "Animation, Adventure, Fantasy"
  },
  {
    id: 510,
    title: "바람계곡의 나우시카",
    englishTitle: "Nausicaä of the Valley of the Wind",
    year: 1984,
    director: "Hayao Miyazaki",
    genre: "Animation, Adventure, Fantasy"
  },

  {
    id: 511,
    title: "마녀 배달부 키키",
    englishTitle: "Kiki's Delivery Service",
    year: 1989,
    director: "Hayao Miyazaki",
    genre: "Animation, Adventure, Family"
  },
  {
    id: 512,
    title: "귀를 기울이면",
    englishTitle: "Whisper of the Heart",
    year: 1995,
    director: "Yoshifumi Kondō",
    genre: "Animation, Drama, Romance"
  },
  {
    id: 513,
    title: "고양이의 보은",
    englishTitle: "The Cat Returns",
    year: 2002,
    director: "Hiroyuki Morita",
    genre: "Animation, Adventure, Fantasy"
  },
  {
    id: 514,
    title: "폼포코 너구리 대작전",
    englishTitle: "Pom Poko",
    year: 1994,
    director: "Isao Takahata",
    genre: "Animation, Comedy, Fantasy"
  },
  {
    id: 515,
    title: "반딧불이의 묘",
    englishTitle: "Grave of the Fireflies",
    year: 1988,
    director: "Isao Takahata",
    genre: "Animation, Drama, War"
  },
  {
    id: 516,
    title: "추억은 방울방울",
    englishTitle: "Only Yesterday",
    year: 1991,
    director: "Isao Takahata",
    genre: "Animation, Drama, Romance"
  },
  {
    id: 517,
    title: "이웃집 야마다군",
    englishTitle: "My Neighbors the Yamadas",
    year: 1999,
    director: "Isao Takahata",
    genre: "Animation, Comedy, Family"
  },
  {
    id: 518,
    title: "가구야 공주 이야기",
    englishTitle: "The Tale of the Princess Kaguya",
    year: 2013,
    director: "Isao Takahata",
    genre: "Animation, Drama, Fantasy"
  },
  {
    id: 519,
    title: "너구리 폼포코",
    englishTitle: "Pom Poko",
    year: 1994,
    director: "Isao Takahata",
    genre: "Animation, Comedy, Fantasy"
  },
  {
    id: 520,
    title: "시간을 달리는 소녀",
    englishTitle: "The Girl Who Leapt Through Time",
    year: 2006,
    director: "Mamoru Hosoda",
    genre: "Animation, Drama, Sci-Fi"
  },

  {
    id: 521,
    title: "썸머 워즈",
    englishTitle: "Summer Wars",
    year: 2009,
    director: "Mamoru Hosoda",
    genre: "Animation, Action, Comedy"
  },
  {
    id: 522,
    title: "미래의 미라이",
    englishTitle: "Mirai",
    year: 2018,
    director: "Mamoru Hosoda",
    genre: "Animation, Adventure, Family"
  },
  {
    id: 523,
    title: "용과 주근깨 공주",
    englishTitle: "Belle",
    year: 2021,
    director: "Mamoru Hosoda",
    genre: "Animation, Drama, Sci-Fi"
  },
  {
    id: 524,
    title: "별을 쫓는 아이",
    englishTitle: "Children Who Chase Lost Voices",
    year: 2011,
    director: "Makoto Shinkai",
    genre: "Animation, Adventure, Drama"
  },
  {
    id: 525,
    title: "언어의 정원",
    englishTitle: "The Garden of Words",
    year: 2013,
    director: "Makoto Shinkai",
    genre: "Animation, Drama, Romance"
  },
  {
    id: 526,
    title: "구름의 저편, 약속의 장소",
    englishTitle: "The Place Promised in Our Early Days",
    year: 2004,
    director: "Makoto Shinkai",
    genre: "Animation, Drama, Sci-Fi"
  },
  {
    id: 527,
    title: "초속 5센티미터",
    englishTitle: "5 Centimeters per Second",
    year: 2007,
    director: "Makoto Shinkai",
    genre: "Animation, Drama, Romance"
  },
  {
    id: 528,
    title: "별의 목소리",
    englishTitle: "Voices of a Distant Star",
    year: 2002,
    director: "Makoto Shinkai",
    genre: "Animation, Drama, Sci-Fi"
  },
  {
    id: 529,
    title: "공각기동대: 이노센스",
    englishTitle: "Ghost in the Shell 2: Innocence",
    year: 2004,
    director: "Mamoru Oshii",
    genre: "Animation, Sci-Fi"
  },
  {
    id: 530,
    title: "패트레이버 2",
    englishTitle: "Patlabor 2: The Movie",
    year: 1993,
    director: "Mamoru Oshii",
    genre: "Animation, Action, Sci-Fi"
  },

  {
    id: 531,
    title: "천년여우",
    englishTitle: "Millennium Actress",
    year: 2001,
    director: "Satoshi Kon",
    genre: "Animation, Drama, Romance"
  },
  {
    id: 532,
    title: "도쿄 갓파더스",
    englishTitle: "Tokyo Godfathers",
    year: 2003,
    director: "Satoshi Kon",
    genre: "Animation, Comedy, Drama"
  },
  {
    id: 533,
    title: "파프리카",
    englishTitle: "Paprika",
    year: 2006,
    director: "Satoshi Kon",
    genre: "Animation, Mystery, Sci-Fi"
  },
  {
    id: 534,
    title: "메트로폴리스",
    englishTitle: "Metropolis",
    year: 2001,
    director: "Rintaro",
    genre: "Animation, Drama, Sci-Fi"
  },
  {
    id: 535,
    title: "시간을 달리는 소녀",
    englishTitle: "The Girl Who Leapt Through Time",
    year: 2006,
    director: "Mamoru Hosoda",
    genre: "Animation, Drama, Sci-Fi"
  },
  {
    id: 536,
    title: "썸머 워즈",
    englishTitle: "Summer Wars",
    year: 2009,
    director: "Mamoru Hosoda",
    genre: "Animation, Action, Comedy"
  },
  {
    id: 537,
    title: "늑대아이",
    englishTitle: "Wolf Children",
    year: 2012,
    director: "Mamoru Hosoda",
    genre: "Animation, Drama, Fantasy"
  },
  {
    id: 538,
    title: "목소리의 형태",
    englishTitle: "A Silent Voice",
    year: 2016,
    director: "Naoko Yamada",
    genre: "Animation, Drama"
  },
  {
    id: 539,
    title: "리즈와 파랑새",
    englishTitle: "Liz and the Blue Bird",
    year: 2018,
    director: "Naoko Yamada",
    genre: "Animation, Drama, Music"
  },
  {
    id: 540,
    title: "케이온! 극장판",
    englishTitle: "K-On! The Movie",
    year: 2011,
    director: "Naoko Yamada",
    genre: "Animation, Comedy, Music"
  },

  {
    id: 541,
    title: "하늘에서 음식이 내린다면",
    englishTitle: "Cloudy with a Chance of Meatballs",
    year: 2009,
    director: "Phil Lord, Christopher Miller",
    genre: "Animation, Comedy, Family"
  },
  {
    id: 542,
    title: "하늘에서 음식이 내린다면 2",
    englishTitle: "Cloudy with a Chance of Meatballs 2",
    year: 2013,
    director: "Cody Cameron, Kris Pearn",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 543,
    title: "21 점프 스트리트",
    englishTitle: "21 Jump Street",
    year: 2012,
    director: "Phil Lord, Christopher Miller",
    genre: "Action, Comedy, Crime"
  },
  {
    id: 544,
    title: "레고 무비",
    englishTitle: "The Lego Movie",
    year: 2014,
    director: "Phil Lord, Christopher Miller",
    genre: "Animation, Action, Adventure"
  },
  {
    id: 545,
    title: "레고 배트맨 무비",
    englishTitle: "The Lego Batman Movie",
    year: 2017,
    director: "Chris McKay",
    genre: "Animation, Action, Comedy"
  },
  {
    id: 546,
    title: "라푼젤",
    englishTitle: "Tangled",
    year: 2010,
    director: "Nathan Greno, Byron Howard",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 547,
    title: "공주와 개구리",
    englishTitle: "The Princess and the Frog",
    year: 2009,
    director: "Ron Clements, John Musker",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 548,
    title: "엔칸토: 마법의 세계",
    englishTitle: "Encanto",
    year: 2021,
    director: "Jared Bush, Byron Howard, Charise Castro Smith",
    genre: "Animation, Comedy, Family"
  },
  {
    id: 549,
    title: "라야와 마지막 드래곤",
    englishTitle: "Raya and the Last Dragon",
    year: 2021,
    director: "Don Hall, Carlos López Estrada",
    genre: "Animation, Action, Adventure"
  },
  {
    id: 550,
    title: "주먹왕 랄프",
    englishTitle: "Wreck-It Ralph",
    year: 2012,
    director: "Rich Moore",
    genre: "Animation, Adventure, Comedy"
  },

  {
    id: 551,
    title: "주먹왕 랄프 2: 인터넷 속으로",
    englishTitle: "Ralph Breaks the Internet",
    year: 2018,
    director: "Rich Moore, Phil Johnston",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 552,
    title: "빅 히어로",
    englishTitle: "Big Hero 6",
    year: 2014,
    director: "Don Hall, Chris Williams",
    genre: "Animation, Action, Adventure"
  },
  {
    id: 553,
    title: "아틀란티스: 잃어버린 제국",
    englishTitle: "Atlantis: The Lost Empire",
    year: 2001,
    director: "Gary Trousdale, Kirk Wise",
    genre: "Animation, Action, Adventure"
  },
  {
    id: 554,
    title: "보물성",
    englishTitle: "Treasure Planet",
    year: 2002,
    director: "Ron Clements, John Musker",
    genre: "Animation, Adventure, Sci-Fi"
  },
  {
    id: 555,
    title: "헤라클레스",
    englishTitle: "Hercules",
    year: 1997,
    director: "Ron Clements, John Musker",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 556,
    title: "타잔",
    englishTitle: "Tarzan",
    year: 1999,
    director: "Kevin Lima, Chris Buck",
    genre: "Animation, Adventure, Drama"
  },
  {
    id: 557,
    title: "노틀담의 꼽추",
    englishTitle: "The Hunchback of Notre Dame",
    year: 1996,
    director: "Gary Trousdale, Kirk Wise",
    genre: "Animation, Drama, Musical"
  },
  {
    id: 558,
    title: "포카혼타스",
    englishTitle: "Pocahontas",
    year: 1995,
    director: "Mike Gabriel, Eric Goldberg",
    genre: "Animation, Adventure, Drama"
  },
  {
    id: 559,
    title: "인어공주",
    englishTitle: "The Little Mermaid",
    year: 1989,
    director: "Ron Clements, John Musker",
    genre: "Animation, Family, Fantasy"
  },
  {
    id: 560,
    title: "잠자는 숲속의 미녀",
    englishTitle: "Sleeping Beauty",
    year: 1959,
    director: "Clyde Geronimi",
    genre: "Animation, Family, Fantasy"
  },

  {
    id: 561,
    title: "신데렐라",
    englishTitle: "Cinderella",
    year: 1950,
    director: "Clyde Geronimi, Wilfred Jackson, Hamilton Luske",
    genre: "Animation, Family, Fantasy"
  },
  {
    id: 562,
    title: "백설공주와 일곱 난쟁이",
    englishTitle: "Snow White and the Seven Dwarfs",
    year: 1937,
    director: "David Hand",
    genre: "Animation, Family, Fantasy"
  },
  {
    id: 563,
    title: "피노키오",
    englishTitle: "Pinocchio",
    year: 1940,
    director: "Norman Ferguson, T. Hee, Wilfred Jackson",
    genre: "Animation, Family, Fantasy"
  },
  {
    id: 564,
    title: "덤보",
    englishTitle: "Dumbo",
    year: 1941,
    director: "Ben Sharpsteen",
    genre: "Animation, Drama, Family"
  },
  {
    id: 565,
    title: "밤비",
    englishTitle: "Bambi",
    year: 1942,
    director: "James Algar, Samuel Armstrong",
    genre: "Animation, Drama, Family"
  },
  {
    id: 566,
    title: "피터 팬",
    englishTitle: "Peter Pan",
    year: 1953,
    director: "Clyde Geronimi, Wilfred Jackson, Hamilton Luske",
    genre: "Animation, Adventure, Fantasy"
  },
  {
    id: 567,
    title: "101마리 달마시안",
    englishTitle: "One Hundred and One Dalmatians",
    year: 1961,
    director: "Clyde Geronimi, Wolfgang Reitherman, Hamilton Luske",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 568,
    title: "정글북",
    englishTitle: "The Jungle Book",
    year: 1967,
    director: "Wolfgang Reitherman",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 569,
    title: "로빈 후드",
    englishTitle: "Robin Hood",
    year: 1973,
    director: "Wolfgang Reitherman",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 570,
    title: "곰돌이 푸",
    englishTitle: "The Many Adventures of Winnie the Pooh",
    year: 1977,
    director: "John Lounsbery, Wolfgang Reitherman",
    genre: "Animation, Adventure, Comedy"
  },

  {
    id: 571,
    title: "슈퍼맨",
    englishTitle: "Superman",
    year: 1978,
    director: "Richard Donner",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 572,
    title: "슈퍼맨 2",
    englishTitle: "Superman II",
    year: 1980,
    director: "Richard Lester, Richard Donner",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 573,
    title: "배트맨 포에버",
    englishTitle: "Batman Forever",
    year: 1995,
    director: "Joel Schumacher",
    genre: "Action, Adventure"
  },
  {
    id: 574,
    title: "배트맨과 로빈",
    englishTitle: "Batman & Robin",
    year: 1997,
    director: "Joel Schumacher",
    genre: "Action, Sci-Fi"
  },
  {
    id: 575,
    title: "헬보이",
    englishTitle: "Hellboy",
    year: 2004,
    director: "Guillermo del Toro",
    genre: "Action, Fantasy, Horror"
  },
  {
    id: 576,
    title: "헬보이 2: 골든 아미",
    englishTitle: "Hellboy II: The Golden Army",
    year: 2008,
    director: "Guillermo del Toro",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 577,
    title: "판의 미로",
    englishTitle: "Pan's Labyrinth",
    year: 2006,
    director: "Guillermo del Toro",
    genre: "Drama, Fantasy, War"
  },
  {
    id: 578,
    title: "셰이프 오브 워터",
    englishTitle: "The Shape of Water",
    year: 2017,
    director: "Guillermo del Toro",
    genre: "Drama, Fantasy, Romance"
  },
  {
    id: 579,
    title: "퍼시픽 림",
    englishTitle: "Pacific Rim",
    year: 2013,
    director: "Guillermo del Toro",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 580,
    title: "나이트메어 앨리",
    englishTitle: "Nightmare Alley",
    year: 2021,
    director: "Guillermo del Toro",
    genre: "Crime, Drama, Thriller"
  },

  {
    id: 581,
    title: "헬레이저",
    englishTitle: "Hellraiser",
    year: 1987,
    director: "Clive Barker",
    genre: "Horror"
  },
  {
    id: 582,
    title: "텍사스 전기톱 학살",
    englishTitle: "The Texas Chain Saw Massacre",
    year: 1974,
    director: "Tobe Hooper",
    genre: "Horror"
  },
  {
    id: 583,
    title: "할로윈",
    englishTitle: "Halloween",
    year: 1978,
    director: "John Carpenter",
    genre: "Horror, Thriller"
  },
  {
    id: 584,
    title: "더 씽",
    englishTitle: "The Thing",
    year: 1982,
    director: "John Carpenter",
    genre: "Horror, Mystery, Sci-Fi"
  },
  {
    id: 585,
    title: "이스케이프 프롬 뉴욕",
    englishTitle: "Escape from New York",
    year: 1981,
    director: "John Carpenter",
    genre: "Action, Sci-Fi"
  },
  {
    id: 586,
    title: "빅 트러블 인 리틀 차이나",
    englishTitle: "Big Trouble in Little China",
    year: 1986,
    director: "John Carpenter",
    genre: "Action, Adventure, Comedy"
  },
  {
    id: 587,
    title: "그들은 살아있다",
    englishTitle: "They Live",
    year: 1988,
    director: "John Carpenter",
    genre: "Action, Horror, Sci-Fi"
  },
  {
    id: 588,
    title: "13일의 금요일",
    englishTitle: "Friday the 13th",
    year: 1980,
    director: "Sean S. Cunningham",
    genre: "Horror, Mystery"
  },
  {
    id: 589,
    title: "나이트메어",
    englishTitle: "A Nightmare on Elm Street",
    year: 1984,
    director: "Wes Craven",
    genre: "Horror"
  },
  {
    id: 590,
    title: "스크림",
    englishTitle: "Scream",
    year: 1996,
    director: "Wes Craven",
    genre: "Horror, Mystery"
  },

  {
    id: 591,
    title: "링",
    englishTitle: "Ringu",
    year: 1998,
    director: "Hideo Nakata",
    genre: "Horror, Mystery"
  },
  {
    id: 592,
    title: "주온: 원혼의 부활",
    englishTitle: "Ju-On: The Grudge",
    year: 2002,
    director: "Takashi Shimizu",
    genre: "Horror, Mystery"
  },
  {
    id: 593,
    title: "검은 집",
    englishTitle: "Black House",
    year: 2007,
    director: "Shinji Somai",
    genre: "Horror, Thriller"
  },
  {
    id: 594,
    title: "컨저링",
    englishTitle: "The Conjuring",
    year: 2013,
    director: "James Wan",
    genre: "Horror, Mystery, Thriller"
  },
  {
    id: 595,
    title: "컨저링 2",
    englishTitle: "The Conjuring 2",
    year: 2016,
    director: "James Wan",
    genre: "Horror, Mystery, Thriller"
  },
  {
    id: 596,
    title: "인시디어스",
    englishTitle: "Insidious",
    year: 2010,
    director: "James Wan",
    genre: "Horror, Mystery, Thriller"
  },
  {
    id: 597,
    title: "인시디어스: 두번째 집",
    englishTitle: "Insidious: Chapter 2",
    year: 2013,
    director: "James Wan",
    genre: "Horror, Mystery, Thriller"
  },
  {
    id: 598,
    title: "겟 아웃",
    englishTitle: "Get Out",
    year: 2017,
    director: "Jordan Peele",
    genre: "Horror, Mystery, Thriller"
  },
  {
    id: 599,
    title: "어스",
    englishTitle: "Us",
    year: 2019,
    director: "Jordan Peele",
    genre: "Horror, Mystery, Thriller"
  },
  {
    id: 600,
    title: "놉",
    englishTitle: "Nope",
    year: 2022,
    director: "Jordan Peele",
    genre: "Horror, Mystery, Sci-Fi"
  },
  {
    id: 601,
    title: "다크 나이트",
    englishTitle: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    genre: "Action, Crime, Drama"
  },
  {
    id: 602,
    title: "인셉션",
    englishTitle: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    genre: "Action, Sci-Fi, Thriller"
  },
  {
    id: 603,
    title: "인터스텔라",
    englishTitle: "Interstellar",
    year: 2014,
    director: "Christopher Nolan",
    genre: "Adventure, Drama, Sci-Fi"
  },
  {
    id: 604,
    title: "덩케르크",
    englishTitle: "Dunkirk",
    year: 2017,
    director: "Christopher Nolan",
    genre: "Action, Drama, History"
  },
  {
    id: 605,
    title: "테넷",
    englishTitle: "Tenet",
    year: 2020,
    director: "Christopher Nolan",
    genre: "Action, Sci-Fi, Thriller"
  },
  {
    id: 606,
    title: "오펜하이머",
    englishTitle: "Oppenheimer",
    year: 2023,
    director: "Christopher Nolan",
    genre: "Biography, Drama, History"
  },
  {
    id: 607,
    title: "메멘토",
    englishTitle: "Memento",
    year: 2000,
    director: "Christopher Nolan",
    genre: "Mystery, Thriller"
  },
  {
    id: 608,
    title: "프레스티지",
    englishTitle: "The Prestige",
    year: 2006,
    director: "Christopher Nolan",
    genre: "Drama, Mystery, Sci-Fi"
  },
  {
    id: 609,
    title: "배트맨 비긴즈",
    englishTitle: "Batman Begins",
    year: 2005,
    director: "Christopher Nolan",
    genre: "Action, Crime, Drama"
  },
  {
    id: 610,
    title: "다크 나이트 라이즈",
    englishTitle: "The Dark Knight Rises",
    year: 2012,
    director: "Christopher Nolan",
    genre: "Action, Drama"
  },

  {
    id: 611,
    title: "가위손",
    englishTitle: "Edward Scissorhands",
    year: 1990,
    director: "Tim Burton",
    genre: "Drama, Fantasy, Romance"
  },
  {
    id: 612,
    title: "비틀쥬스",
    englishTitle: "Beetlejuice",
    year: 1988,
    director: "Tim Burton",
    genre: "Comedy, Fantasy"
  },
  {
    id: 613,
    title: "배트맨",
    englishTitle: "Batman",
    year: 1989,
    director: "Tim Burton",
    genre: "Action, Crime"
  },
  {
    id: 614,
    title: "배트맨 리턴즈",
    englishTitle: "Batman Returns",
    year: 1992,
    director: "Tim Burton",
    genre: "Action, Crime, Fantasy"
  },
  {
    id: 615,
    title: "슬리피 할로우",
    englishTitle: "Sleepy Hollow",
    year: 1999,
    director: "Tim Burton",
    genre: "Drama, Fantasy, Horror"
  },
  {
    id: 616,
    title: "찰리와 초콜릿 공장",
    englishTitle: "Charlie and the Chocolate Factory",
    year: 2005,
    director: "Tim Burton",
    genre: "Adventure, Comedy, Family"
  },
  {
    id: 617,
    title: "스위니 토드",
    englishTitle: "Sweeney Todd: The Demon Barber of Fleet Street",
    year: 2007,
    director: "Tim Burton",
    genre: "Drama, Horror, Musical"
  },
  {
    id: 618,
    title: "앨리스 인 원더랜드",
    englishTitle: "Alice in Wonderland",
    year: 2010,
    director: "Tim Burton",
    genre: "Adventure, Fantasy"
  },
  {
    id: 619,
    title: "빅 아이즈",
    englishTitle: "Big Eyes",
    year: 2014,
    director: "Tim Burton",
    genre: "Biography, Drama"
  },
  {
    id: 620,
    title: "프랑켄위니",
    englishTitle: "Frankenweenie",
    year: 2012,
    director: "Tim Burton",
    genre: "Animation, Comedy, Horror"
  },

  {
    id: 621,
    title: "파이트 클럽",
    englishTitle: "Fight Club",
    year: 1999,
    director: "David Fincher",
    genre: "Drama"
  },
  {
    id: 622,
    title: "세븐",
    englishTitle: "Se7en",
    year: 1995,
    director: "David Fincher",
    genre: "Crime, Drama, Mystery"
  },
  {
    id: 623,
    title: "조디악",
    englishTitle: "Zodiac",
    year: 2007,
    director: "David Fincher",
    genre: "Crime, Drama, Mystery"
  },
  {
    id: 624,
    title: "소셜 네트워크",
    englishTitle: "The Social Network",
    year: 2010,
    director: "David Fincher",
    genre: "Biography, Drama"
  },
  {
    id: 625,
    title: "밀레니엄: 여자를 증오한 남자들",
    englishTitle: "The Girl with the Dragon Tattoo",
    year: 2011,
    director: "David Fincher",
    genre: "Crime, Drama, Mystery"
  },
  {
    id: 626,
    title: "나를 찾아줘",
    englishTitle: "Gone Girl",
    year: 2014,
    director: "David Fincher",
    genre: "Drama, Mystery, Thriller"
  },
  {
    id: 627,
    title: "벤자민 버튼의 시간은 거꾸로 간다",
    englishTitle: "The Curious Case of Benjamin Button",
    year: 2008,
    director: "David Fincher",
    genre: "Drama, Fantasy, Romance"
  },
  {
    id: 628,
    title: "패닉 룸",
    englishTitle: "Panic Room",
    year: 2002,
    director: "David Fincher",
    genre: "Crime, Drama, Thriller"
  },
  {
    id: 629,
    title: "에일리언 3",
    englishTitle: "Alien 3",
    year: 1992,
    director: "David Fincher",
    genre: "Action, Horror, Sci-Fi"
  },
  {
    id: 630,
    title: "더 게임",
    englishTitle: "The Game",
    year: 1997,
    director: "David Fincher",
    genre: "Drama, Mystery, Thriller"
  },

  {
    id: 631,
    title: "스파이더맨",
    englishTitle: "Spider-Man",
    year: 2002,
    director: "Sam Raimi",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 632,
    title: "스파이더맨 2",
    englishTitle: "Spider-Man 2",
    year: 2004,
    director: "Sam Raimi",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 633,
    title: "스파이더맨 3",
    englishTitle: "Spider-Man 3",
    year: 2007,
    director: "Sam Raimi",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 634,
    title: "이블 데드",
    englishTitle: "The Evil Dead",
    year: 1981,
    director: "Sam Raimi",
    genre: "Horror"
  },
  {
    id: 635,
    title: "이블 데드 2",
    englishTitle: "Evil Dead II",
    year: 1987,
    director: "Sam Raimi",
    genre: "Comedy, Horror"
  },
  {
    id: 636,
    title: "다크맨",
    englishTitle: "Darkman",
    year: 1990,
    director: "Sam Raimi",
    genre: "Action, Sci-Fi, Thriller"
  },
  {
    id: 637,
    title: "드래그 미 투 헬",
    englishTitle: "Drag Me to Hell",
    year: 2009,
    director: "Sam Raimi",
    genre: "Horror"
  },
  {
    id: 638,
    title: "오즈 그레이트 앤드 파워풀",
    englishTitle: "Oz the Great and Powerful",
    year: 2013,
    director: "Sam Raimi",
    genre: "Adventure, Family, Fantasy"
  },
  {
    id: 639,
    title: "닥터 스트레인지: 대혼돈의 멀티버스",
    englishTitle: "Doctor Strange in the Multiverse of Madness",
    year: 2022,
    director: "Sam Raimi",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 640,
    title: "심플 플랜",
    englishTitle: "A Simple Plan",
    year: 1998,
    director: "Sam Raimi",
    genre: "Crime, Drama, Thriller"
  },

  {
    id: 641,
    title: "매드맥스",
    englishTitle: "Mad Max",
    year: 1979,
    director: "George Miller",
    genre: "Action, Sci-Fi"
  },
  {
    id: 642,
    title: "매드맥스 2",
    englishTitle: "Mad Max 2",
    year: 1981,
    director: "George Miller",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 643,
    title: "매드맥스 3",
    englishTitle: "Mad Max Beyond Thunderdome",
    year: 1985,
    director: "George Miller, George Ogilvie",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 644,
    title: "매드맥스: 분노의 도로",
    englishTitle: "Mad Max: Fury Road",
    year: 2015,
    director: "George Miller",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 645,
    title: "퓨리오사: 매드맥스 사가",
    englishTitle: "Furiosa: A Mad Max Saga",
    year: 2024,
    director: "George Miller",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 646,
    title: "꼬마 돼지 베이브",
    englishTitle: "Babe",
    year: 1995,
    director: "Chris Noonan",
    genre: "Comedy, Drama, Family"
  },
  {
    id: 647,
    title: "꼬마 돼지 베이브 2",
    englishTitle: "Babe: Pig in the City",
    year: 1998,
    director: "George Miller",
    genre: "Adventure, Comedy, Drama"
  },
  {
    id: 648,
    title: "해피 피트",
    englishTitle: "Happy Feet",
    year: 2006,
    director: "George Miller",
    genre: "Animation, Comedy, Family"
  },
  {
    id: 649,
    title: "해피 피트 2",
    englishTitle: "Happy Feet Two",
    year: 2011,
    director: "George Miller",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 650,
    title: "마녀와 야수",
    englishTitle: "The Witches",
    year: 1990,
    director: "Nicolas Roeg",
    genre: "Adventure, Comedy, Family"
  },

  {
    id: 651,
    title: "터미네이터",
    englishTitle: "The Terminator",
    year: 1984,
    director: "James Cameron",
    genre: "Action, Sci-Fi"
  },
  {
    id: 652,
    title: "터미네이터 2: 심판의 날",
    englishTitle: "Terminator 2: Judgment Day",
    year: 1991,
    director: "James Cameron",
    genre: "Action, Sci-Fi"
  },
  {
    id: 653,
    title: "에이리언",
    englishTitle: "Aliens",
    year: 1986,
    director: "James Cameron",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 654,
    title: "아바타",
    englishTitle: "Avatar",
    year: 2009,
    director: "James Cameron",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 655,
    title: "아바타: 물의 길",
    englishTitle: "Avatar: The Way of Water",
    year: 2022,
    director: "James Cameron",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 656,
    title: "타이타닉",
    englishTitle: "Titanic",
    year: 1997,
    director: "James Cameron",
    genre: "Drama, Romance"
  },
  {
    id: 657,
    title: "어비스",
    englishTitle: "The Abyss",
    year: 1989,
    director: "James Cameron",
    genre: "Adventure, Drama, Sci-Fi"
  },
  {
    id: 658,
    title: "트루 라이즈",
    englishTitle: "True Lies",
    year: 1994,
    director: "James Cameron",
    genre: "Action, Comedy, Thriller"
  },
  {
    id: 659,
    title: "피라냐 2",
    englishTitle: "Piranha II: The Spawning",
    year: 1982,
    director: "James Cameron",
    genre: "Horror, Sci-Fi"
  },
  {
    id: 660,
    title: "타이타닉 3D",
    englishTitle: "Titanic 3D",
    year: 2012,
    director: "James Cameron",
    genre: "Drama, Romance"
  },

  {
    id: 661,
    title: "쥬라기 공원",
    englishTitle: "Jurassic Park",
    year: 1993,
    director: "Steven Spielberg",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 662,
    title: "잃어버린 세계: 쥬라기 공원",
    englishTitle: "The Lost World: Jurassic Park",
    year: 1997,
    director: "Steven Spielberg",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 663,
    title: "쥬라기 공원 3",
    englishTitle: "Jurassic Park III",
    year: 2001,
    director: "Joe Johnston",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 664,
    title: "쥬라기 월드",
    englishTitle: "Jurassic World",
    year: 2015,
    director: "Colin Trevorrow",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 665,
    title: "쥬라기 월드: 폴른 킹덤",
    englishTitle: "Jurassic World: Fallen Kingdom",
    year: 2018,
    director: "J. A. Bayona",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 666,
    title: "쥬라기 월드: 도미니언",
    englishTitle: "Jurassic World Dominion",
    year: 2022,
    director: "Colin Trevorrow",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 667,
    title: "죠스",
    englishTitle: "Jaws",
    year: 1975,
    director: "Steven Spielberg",
    genre: "Adventure, Thriller"
  },
  {
    id: 668,
    title: "레이더스",
    englishTitle: "Raiders of the Lost Ark",
    year: 1981,
    director: "Steven Spielberg",
    genre: "Action, Adventure"
  },
  {
    id: 669,
    title: "인디아나 존스와 마궁의 사원",
    englishTitle: "Indiana Jones and the Temple of Doom",
    year: 1984,
    director: "Steven Spielberg",
    genre: "Action, Adventure"
  },
  {
    id: 670,
    title: "인디아나 존스와 최후의 성전",
    englishTitle: "Indiana Jones and the Last Crusade",
    year: 1989,
    director: "Steven Spielberg",
    genre: "Action, Adventure"
  },

  {
    id: 671,
    title: "인디아나 존스: 크리스탈 해골의 왕국",
    englishTitle: "Indiana Jones and the Kingdom of the Crystal Skull",
    year: 2008,
    director: "Steven Spielberg",
    genre: "Action, Adventure"
  },
  {
    id: 672,
    title: "인디아나 존스: 운명의 다이얼",
    englishTitle: "Indiana Jones and the Dial of Destiny",
    year: 2023,
    director: "James Mangold",
    genre: "Action, Adventure"
  },
  {
    id: 673,
    title: "백 투 더 퓨처",
    englishTitle: "Back to the Future",
    year: 1985,
    director: "Robert Zemeckis",
    genre: "Adventure, Comedy, Sci-Fi"
  },
  {
    id: 674,
    title: "백 투 더 퓨처 2",
    englishTitle: "Back to the Future Part II",
    year: 1989,
    director: "Robert Zemeckis",
    genre: "Adventure, Comedy, Sci-Fi"
  },
  {
    id: 675,
    title: "백 투 더 퓨처 3",
    englishTitle: "Back to the Future Part III",
    year: 1990,
    director: "Robert Zemeckis",
    genre: "Adventure, Comedy, Sci-Fi"
  },
  {
    id: 676,
    title: "콘택트",
    englishTitle: "Contact",
    year: 1997,
    director: "Robert Zemeckis",
    genre: "Drama, Mystery, Sci-Fi"
  },
  {
    id: 677,
    title: "캐스트 어웨이",
    englishTitle: "Cast Away",
    year: 2000,
    director: "Robert Zemeckis",
    genre: "Adventure, Drama"
  },
  {
    id: 678,
    title: "폴라 익스프레스",
    englishTitle: "The Polar Express",
    year: 2004,
    director: "Robert Zemeckis",
    genre: "Animation, Adventure, Family"
  },
  {
    id: 679,
    title: "베오울프",
    englishTitle: "Beowulf",
    year: 2007,
    director: "Robert Zemeckis",
    genre: "Animation, Action, Adventure"
  },
  {
    id: 680,
    title: "플라이트",
    englishTitle: "Flight",
    year: 2012,
    director: "Robert Zemeckis",
    genre: "Drama, Thriller"
  },

  {
    id: 681,
    title: "캐리비안의 해적: 블랙펄의 저주",
    englishTitle: "Pirates of the Caribbean: The Curse of the Black Pearl",
    year: 2003,
    director: "Gore Verbinski",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 682,
    title: "캐리비안의 해적: 망자의 함",
    englishTitle: "Pirates of the Caribbean: Dead Man's Chest",
    year: 2006,
    director: "Gore Verbinski",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 683,
    title: "캐리비안의 해적: 세상의 끝에서",
    englishTitle: "Pirates of the Caribbean: At World's End",
    year: 2007,
    director: "Gore Verbinski",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 684,
    title: "캐리비안의 해적: 낯선 조류",
    englishTitle: "Pirates of the Caribbean: On Stranger Tides",
    year: 2011,
    director: "Rob Marshall",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 685,
    title: "캐리비안의 해적: 죽은 자는 말이 없다",
    englishTitle: "Pirates of the Caribbean: Dead Men Tell No Tales",
    year: 2017,
    director: "Joachim Rønning, Espen Sandberg",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 686,
    title: "론 레인저",
    englishTitle: "The Lone Ranger",
    year: 2013,
    director: "Gore Verbinski",
    genre: "Action, Adventure, Western"
  },
  {
    id: 687,
    title: "랭고",
    englishTitle: "Rango",
    year: 2011,
    director: "Gore Verbinski",
    genre: "Animation, Adventure, Comedy"
  },
  {
    id: 688,
    title: "마우스 헌트",
    englishTitle: "MouseHunt",
    year: 1997,
    director: "Gore Verbinski",
    genre: "Comedy"
  },
  {
    id: 689,
    title: "웨더맨",
    englishTitle: "The Weather Man",
    year: 2005,
    director: "Gore Verbinski",
    genre: "Comedy, Drama"
  },
  {
    id: 690,
    title: "링",
    englishTitle: "The Ring",
    year: 2002,
    director: "Gore Verbinski",
    genre: "Horror, Mystery"
  },

  {
    id: 691,
    title: "록, 스탁 앤 투 스모킹 배럴즈",
    englishTitle: "Lock, Stock and Two Smoking Barrels",
    year: 1998,
    director: "Guy Ritchie",
    genre: "Action, Comedy, Crime"
  },
  {
    id: 692,
    title: "스내치",
    englishTitle: "Snatch",
    year: 2000,
    director: "Guy Ritchie",
    genre: "Comedy, Crime"
  },
  {
    id: 693,
    title: "셜록 홈즈",
    englishTitle: "Sherlock Holmes",
    year: 2009,
    director: "Guy Ritchie",
    genre: "Action, Adventure, Mystery"
  },
  {
    id: 694,
    title: "셜록 홈즈: 그림자 게임",
    englishTitle: "Sherlock Holmes: A Game of Shadows",
    year: 2011,
    director: "Guy Ritchie",
    genre: "Action, Adventure, Mystery"
  },
  {
    id: 695,
    title: "맨 프롬 UNCLE",
    englishTitle: "The Man from U.N.C.L.E.",
    year: 2015,
    director: "Guy Ritchie",
    genre: "Action, Adventure, Comedy"
  },
  {
    id: 696,
    title: "킹 아서: 제왕의 검",
    englishTitle: "King Arthur: Legend of the Sword",
    year: 2017,
    director: "Guy Ritchie",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 697,
    title: "알라딘",
    englishTitle: "Aladdin",
    year: 2019,
    director: "Guy Ritchie",
    genre: "Adventure, Comedy, Fantasy"
  },
  {
    id: 698,
    title: "젠틀맨",
    englishTitle: "The Gentlemen",
    year: 2019,
    director: "Guy Ritchie",
    genre: "Action, Comedy, Crime"
  },
  {
    id: 699,
    title: "캐시트럭",
    englishTitle: "Wrath of Man",
    year: 2021,
    director: "Guy Ritchie",
    genre: "Action, Thriller"
  },
  {
    id: 700,
    title: "리볼버",
    englishTitle: "Revolver",
    year: 2005,
    director: "Guy Ritchie",
    genre: "Crime, Drama, Mystery"
  },

  {
    id: 701,
    title: "킬 빌: 1부",
    englishTitle: "Kill Bill: Vol. 1",
    year: 2003,
    director: "Quentin Tarantino",
    genre: "Action, Crime, Thriller"
  },
  {
    id: 702,
    title: "킬 빌: 2부",
    englishTitle: "Kill Bill: Vol. 2",
    year: 2004,
    director: "Quentin Tarantino",
    genre: "Action, Crime, Thriller"
  },
  {
    id: 703,
    title: "저수지의 개들",
    englishTitle: "Reservoir Dogs",
    year: 1992,
    director: "Quentin Tarantino",
    genre: "Crime, Thriller"
  },
  {
    id: 704,
    title: "펄프 픽션",
    englishTitle: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    genre: "Crime, Drama"
  },
  {
    id: 705,
    title: "재키 브라운",
    englishTitle: "Jackie Brown",
    year: 1997,
    director: "Quentin Tarantino",
    genre: "Crime, Drama, Thriller"
  },
  {
    id: 706,
    title: "데스 프루프",
    englishTitle: "Death Proof",
    year: 2007,
    director: "Quentin Tarantino",
    genre: "Action, Thriller"
  },
  {
    id: 707,
    title: "바스터즈: 거친 녀석들",
    englishTitle: "Inglourious Basterds",
    year: 2009,
    director: "Quentin Tarantino",
    genre: "Adventure, Drama, War"
  },
  {
    id: 708,
    title: "장고: 분노의 추적자",
    englishTitle: "Django Unchained",
    year: 2012,
    director: "Quentin Tarantino",
    genre: "Drama, Western"
  },
  {
    id: 709,
    title: "헤이트풀 8",
    englishTitle: "The Hateful Eight",
    year: 2015,
    director: "Quentin Tarantino",
    genre: "Crime, Drama, Mystery"
  },
  {
    id: 710,
    title: "원스 어폰 어 타임 인 할리우드",
    englishTitle: "Once Upon a Time... in Hollywood",
    year: 2019,
    director: "Quentin Tarantino",
    genre: "Comedy, Drama"
  },

  {
    id: 711,
    title: "좋은 친구들",
    englishTitle: "Goodfellas",
    year: 1990,
    director: "Martin Scorsese",
    genre: "Biography, Crime, Drama"
  },
  {
    id: 712,
    title: "택시 드라이버",
    englishTitle: "Taxi Driver",
    year: 1976,
    director: "Martin Scorsese",
    genre: "Crime, Drama"
  },
  {
    id: 713,
    title: "성난 황소",
    englishTitle: "Raging Bull",
    year: 1980,
    director: "Martin Scorsese",
    genre: "Biography, Drama, Sport"
  },
  {
    id: 714,
    title: "카지노",
    englishTitle: "Casino",
    year: 1995,
    director: "Martin Scorsese",
    genre: "Crime, Drama"
  },
  {
    id: 715,
    title: "갱스 오브 뉴욕",
    englishTitle: "Gangs of New York",
    year: 2002,
    director: "Martin Scorsese",
    genre: "Crime, Drama, History"
  },
  {
    id: 716,
    title: "에비에이터",
    englishTitle: "The Aviator",
    year: 2004,
    director: "Martin Scorsese",
    genre: "Biography, Drama"
  },
  {
    id: 717,
    title: "디파티드",
    englishTitle: "The Departed",
    year: 2006,
    director: "Martin Scorsese",
    genre: "Crime, Drama, Thriller"
  },
  {
    id: 718,
    title: "셔터 아일랜드",
    englishTitle: "Shutter Island",
    year: 2010,
    director: "Martin Scorsese",
    genre: "Mystery, Thriller"
  },
  {
    id: 719,
    title: "휴고",
    englishTitle: "Hugo",
    year: 2011,
    director: "Martin Scorsese",
    genre: "Adventure, Drama, Family"
  },
  {
    id: 720,
    title: "더 울프 오브 월 스트리트",
    englishTitle: "The Wolf of Wall Street",
    year: 2013,
    director: "Martin Scorsese",
    genre: "Biography, Comedy, Crime"
  },

  {
    id: 721,
    title: "아이리시맨",
    englishTitle: "The Irishman",
    year: 2019,
    director: "Martin Scorsese",
    genre: "Biography, Crime, Drama"
  },
  {
    id: 722,
    title: "플라워 킬링 문",
    englishTitle: "Killers of the Flower Moon",
    year: 2023,
    director: "Martin Scorsese",
    genre: "Crime, Drama, History"
  },
  {
    id: 723,
    title: "컬러 오브 머니",
    englishTitle: "The Color of Money",
    year: 1986,
    director: "Martin Scorsese",
    genre: "Drama, Sport"
  },
  {
    id: 724,
    title: "케이프 피어",
    englishTitle: "Cape Fear",
    year: 1991,
    director: "Martin Scorsese",
    genre: "Crime, Thriller"
  },
  {
    id: 725,
    title: "코미디의 왕",
    englishTitle: "The King of Comedy",
    year: 1982,
    director: "Martin Scorsese",
    genre: "Comedy, Crime, Drama"
  },
  {
    id: 726,
    title: "비열한 거리",
    englishTitle: "Mean Streets",
    year: 1973,
    director: "Martin Scorsese",
    genre: "Crime, Drama"
  },
  {
    id: 727,
    title: "성난 사람들",
    englishTitle: "Boxcar Bertha",
    year: 1972,
    director: "Martin Scorsese",
    genre: "Crime, Drama"
  },
  {
    id: 728,
    title: "뉴욕 뉴욕",
    englishTitle: "New York, New York",
    year: 1977,
    director: "Martin Scorsese",
    genre: "Drama, Music, Musical"
  },
  {
    id: 729,
    title: "그리스도 최후의 유혹",
    englishTitle: "The Last Temptation of Christ",
    year: 1988,
    director: "Martin Scorsese",
    genre: "Drama"
  },
  {
    id: 730,
    title: "쿤둔",
    englishTitle: "Kundun",
    year: 1997,
    director: "Martin Scorsese",
    genre: "Biography, Drama, History"
  },

  {
    id: 731,
    title: "아메리칸 갱스터",
    englishTitle: "American Gangster",
    year: 2007,
    director: "Ridley Scott",
    genre: "Biography, Crime, Drama"
  },
  {
    id: 732,
    title: "블레이드 러너",
    englishTitle: "Blade Runner",
    year: 1982,
    director: "Ridley Scott",
    genre: "Action, Drama, Sci-Fi"
  },
  {
    id: 733,
    title: "블레이드 러너 2049",
    englishTitle: "Blade Runner 2049",
    year: 2017,
    director: "Denis Villeneuve",
    genre: "Action, Drama, Mystery"
  },
  {
    id: 734,
    title: "에이리언",
    englishTitle: "Alien",
    year: 1979,
    director: "Ridley Scott",
    genre: "Horror, Sci-Fi"
  },
  {
    id: 735,
    title: "글래디에이터",
    englishTitle: "Gladiator",
    year: 2000,
    director: "Ridley Scott",
    genre: "Action, Adventure, Drama"
  },
  {
    id: 736,
    title: "킹덤 오브 헤븐",
    englishTitle: "Kingdom of Heaven",
    year: 2005,
    director: "Ridley Scott",
    genre: "Action, Adventure, Drama"
  },
  {
    id: 737,
    title: "아메리칸 갱스터",
    englishTitle: "American Gangster",
    year: 2007,
    director: "Ridley Scott",
    genre: "Biography, Crime, Drama"
  },
  {
    id: 738,
    title: "프로메테우스",
    englishTitle: "Prometheus",
    year: 2012,
    director: "Ridley Scott",
    genre: "Adventure, Mystery, Sci-Fi"
  },
  {
    id: 739,
    title: "마션",
    englishTitle: "The Martian",
    year: 2015,
    director: "Ridley Scott",
    genre: "Adventure, Drama, Sci-Fi"
  },
  {
    id: 740,
    title: "올 더 머니",
    englishTitle: "All the Money in the World",
    year: 2017,
    director: "Ridley Scott",
    genre: "Biography, Crime, Drama"
  },

  {
    id: 741,
    title: "델마와 루이스",
    englishTitle: "Thelma & Louise",
    year: 1991,
    director: "Ridley Scott",
    genre: "Adventure, Crime, Drama"
  },
  {
    id: 742,
    title: "1492 콜럼버스",
    englishTitle: "1492: Conquest of Paradise",
    year: 1992,
    director: "Ridley Scott",
    genre: "Adventure, Biography, Drama"
  },
  {
    id: 743,
    title: "블랙 호크 다운",
    englishTitle: "Black Hawk Down",
    year: 2001,
    director: "Ridley Scott",
    genre: "Drama, History, War"
  },
  {
    id: 744,
    title: "로빈 후드",
    englishTitle: "Robin Hood",
    year: 2010,
    director: "Ridley Scott",
    genre: "Action, Adventure, Drama"
  },
  {
    id: 745,
    title: "카운슬러",
    englishTitle: "The Counselor",
    year: 2013,
    director: "Ridley Scott",
    genre: "Crime, Drama, Thriller"
  },
  {
    id: 746,
    title: "엑소더스: 신들과 왕들",
    englishTitle: "Exodus: Gods and Kings",
    year: 2014,
    director: "Ridley Scott",
    genre: "Action, Drama"
  },
  {
    id: 747,
    title: "하우스 오브 구찌",
    englishTitle: "House of Gucci",
    year: 2021,
    director: "Ridley Scott",
    genre: "Biography, Crime, Drama"
  },
  {
    id: 748,
    title: "나폴레옹",
    englishTitle: "Napoleon",
    year: 2023,
    director: "Ridley Scott",
    genre: "Action, Biography, Drama"
  },
  {
    id: 749,
    title: "카이로의 붉은 장미",
    englishTitle: "The Purple Rose of Cairo",
    year: 1985,
    director: "Woody Allen",
    genre: "Comedy, Fantasy, Romance"
  },
  {
    id: 750,
    title: "애니 홀",
    englishTitle: "Annie Hall",
    year: 1977,
    director: "Woody Allen",
    genre: "Comedy, Romance"
  },

  {
    id: 751,
    title: "맨해튼",
    englishTitle: "Manhattan",
    year: 1979,
    director: "Woody Allen",
    genre: "Comedy, Drama, Romance"
  },
  {
    id: 752,
    title: "한나와 그 자매들",
    englishTitle: "Hannah and Her Sisters",
    year: 1986,
    director: "Woody Allen",
    genre: "Comedy, Drama"
  },
  {
    id: 753,
    title: "범죄와 비행",
    englishTitle: "Crimes and Misdemeanors",
    year: 1989,
    director: "Woody Allen",
    genre: "Comedy, Drama"
  },
  {
    id: 754,
    title: "미드나잇 인 파리",
    englishTitle: "Midnight in Paris",
    year: 2011,
    director: "Woody Allen",
    genre: "Comedy, Fantasy, Romance"
  },
  {
    id: 755,
    title: "블루 재스민",
    englishTitle: "Blue Jasmine",
    year: 2013,
    director: "Woody Allen",
    genre: "Comedy, Drama"
  },
  {
    id: 756,
    title: "카페 소사이어티",
    englishTitle: "Café Society",
    year: 2016,
    director: "Woody Allen",
    genre: "Comedy, Drama, Romance"
  },
  {
    id: 757,
    title: "레이니 데이 인 뉴욕",
    englishTitle: "A Rainy Day in New York",
    year: 2019,
    director: "Woody Allen",
    genre: "Comedy, Romance"
  },
  {
    id: 758,
    title: "매치 포인트",
    englishTitle: "Match Point",
    year: 2005,
    director: "Woody Allen",
    genre: "Drama, Romance, Thriller"
  },
  {
    id: 759,
    title: "스쿠프",
    englishTitle: "Scoop",
    year: 2006,
    director: "Woody Allen",
    genre: "Comedy, Crime, Fantasy"
  },
  {
    id: 760,
    title: "내 남자의 아내도 좋아",
    englishTitle: "Vicky Cristina Barcelona",
    year: 2008,
    director: "Woody Allen",
    genre: "Comedy, Drama, Romance"
  },

  {
    id: 761,
    title: "아멜리에",
    englishTitle: "Amélie",
    year: 2001,
    director: "Jean-Pierre Jeunet",
    genre: "Comedy, Romance"
  },
  {
    id: 762,
    title: "델리카트슨 사람들",
    englishTitle: "Delicatessen",
    year: 1991,
    director: "Jean-Pierre Jeunet, Marc Caro",
    genre: "Comedy, Fantasy, Sci-Fi"
  },
  {
    id: 763,
    title: "잃어버린 아이들의 도시",
    englishTitle: "The City of Lost Children",
    year: 1995,
    director: "Marc Caro, Jean-Pierre Jeunet",
    genre: "Fantasy, Sci-Fi"
  },
  {
    id: 764,
    title: "에이리언 4",
    englishTitle: "Alien: Resurrection",
    year: 1997,
    director: "Jean-Pierre Jeunet",
    genre: "Action, Horror, Sci-Fi"
  },
  {
    id: 765,
    title: "믹막",
    englishTitle: "Micmacs",
    year: 2009,
    director: "Jean-Pierre Jeunet",
    genre: "Comedy, Crime"
  },
  {
    id: 766,
    title: "매니악스",
    englishTitle: "The City of Lost Children",
    year: 1995,
    director: "Marc Caro, Jean-Pierre Jeunet",
    genre: "Fantasy, Sci-Fi"
  },
  {
    id: 767,
    title: "빅 피쉬",
    englishTitle: "Big Fish",
    year: 2003,
    director: "Tim Burton",
    genre: "Adventure, Drama, Fantasy"
  },
  {
    id: 768,
    title: "프랭켄위니",
    englishTitle: "Frankenweenie",
    year: 2012,
    director: "Tim Burton",
    genre: "Animation, Comedy, Horror"
  },
  {
    id: 769,
    title: "화성 침공",
    englishTitle: "Mars Attacks!",
    year: 1996,
    director: "Tim Burton",
    genre: "Comedy, Sci-Fi"
  },
  {
    id: 770,
    title: "유령 신부",
    englishTitle: "Corpse Bride",
    year: 2005,
    director: "Tim Burton, Mike Johnson",
    genre: "Animation, Drama, Fantasy"
  },

  {
    id: 771,
    title: "아일랜드",
    englishTitle: "The Island",
    year: 2005,
    director: "Michael Bay",
    genre: "Action, Sci-Fi, Thriller"
  },
  {
    id: 772,
    title: "나쁜 녀석들",
    englishTitle: "Bad Boys",
    year: 1995,
    director: "Michael Bay",
    genre: "Action, Comedy, Crime"
  },
  {
    id: 773,
    title: "나쁜 녀석들 2",
    englishTitle: "Bad Boys II",
    year: 2003,
    director: "Michael Bay",
    genre: "Action, Comedy, Crime"
  },
  {
    id: 774,
    title: "트랜스포머",
    englishTitle: "Transformers",
    year: 2007,
    director: "Michael Bay",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 775,
    title: "트랜스포머: 패자의 역습",
    englishTitle: "Transformers: Revenge of the Fallen",
    year: 2009,
    director: "Michael Bay",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 776,
    title: "트랜스포머 3",
    englishTitle: "Transformers: Dark of the Moon",
    year: 2011,
    director: "Michael Bay",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 777,
    title: "트랜스포머: 사라진 시대",
    englishTitle: "Transformers: Age of Extinction",
    year: 2014,
    director: "Michael Bay",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 778,
    title: "트랜스포머: 최후의 기사",
    englishTitle: "Transformers: The Last Knight",
    year: 2017,
    director: "Michael Bay",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 779,
    title: "13시간",
    englishTitle: "13 Hours",
    year: 2016,
    director: "Michael Bay",
    genre: "Action, Drama, History"
  },
  {
    id: 780,
    title: "진주만",
    englishTitle: "Pearl Harbor",
    year: 2001,
    director: "Michael Bay",
    genre: "Action, Drama, History"
  },

  {
    id: 781,
    title: "맨 오브 스틸",
    englishTitle: "Man of Steel",
    year: 2013,
    director: "Zack Snyder",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 782,
    title: "300",
    englishTitle: "300",
    year: 2006,
    director: "Zack Snyder",
    genre: "Action, Drama"
  },
  {
    id: 783,
    title: "왓치맨",
    englishTitle: "Watchmen",
    year: 2009,
    director: "Zack Snyder",
    genre: "Action, Drama, Mystery"
  },
  {
    id: 784,
    title: "써커 펀치",
    englishTitle: "Sucker Punch",
    year: 2011,
    director: "Zack Snyder",
    genre: "Action, Fantasy"
  },
  {
    id: 785,
    title: "배트맨 대 슈퍼맨: 저스티스의 시작",
    englishTitle: "Batman v Superman: Dawn of Justice",
    year: 2016,
    director: "Zack Snyder",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    id: 786,
    title: "저스티스 리그",
    englishTitle: "Justice League",
    year: 2017,
    director: "Zack Snyder",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 787,
    title: "잭 스나이더의 저스티스 리그",
    englishTitle: "Zack Snyder's Justice League",
    year: 2021,
    director: "Zack Snyder",
    genre: "Action, Adventure, Fantasy"
  },
  {
    id: 788,
    title: "아미 오브 데드",
    englishTitle: "Army of the Dead",
    year: 2021,
    director: "Zack Snyder",
    genre: "Action, Horror, Thriller"
  },
  {
    id: 789,
    title: "레벨 문",
    englishTitle: "Rebel Moon",
    year: 2023,
    director: "Zack Snyder",
    genre: "Action, Adventure, Drama"
  },
  {
    id: 790,
    title: "레벨 문: 파트 2",
    englishTitle: "Rebel Moon – Part Two: The Scargiver",
    year: 2024,
    director: "Zack Snyder",
    genre: "Action, Adventure, Drama"
  },

  {
    id: 791,
    title: "엑스 마키나",
    englishTitle: "Ex Machina",
    year: 2014,
    director: "Alex Garland",
    genre: "Drama, Sci-Fi, Thriller"
  },
  {
    id: 792,
    title: "서던 리치: 소멸의 땅",
    englishTitle: "Annihilation",
    year: 2018,
    director: "Alex Garland",
    genre: "Adventure, Drama, Horror"
  },
  {
    id: 793,
    title: "멘",
    englishTitle: "Men",
    year: 2022,
    director: "Alex Garland",
    genre: "Drama, Horror, Sci-Fi"
  },
  {
    id: 794,
    title: "시빌 워: 분열의 시대",
    englishTitle: "Civil War",
    year: 2024,
    director: "Alex Garland",
    genre: "Action, Drama, Thriller"
  },
  {
    id: 795,
    title: "더 위치",
    englishTitle: "The Witch",
    year: 2015,
    director: "Robert Eggers",
    genre: "Drama, Horror, Mystery"
  },
  {
    id: 796,
    title: "라이트하우스",
    englishTitle: "The Lighthouse",
    year: 2019,
    director: "Robert Eggers",
    genre: "Drama, Fantasy, Horror"
  },
  {
    id: 797,
    title: "노스맨",
    englishTitle: "The Northman",
    year: 2022,
    director: "Robert Eggers",
    genre: "Action, Adventure, Drama"
  },
  {
    id: 798,
    title: "노스페라투",
    englishTitle: "Nosferatu",
    year: 2024,
    director: "Robert Eggers",
    genre: "Drama, Fantasy, Horror"
  },
  {
    id: 799,
    title: "유전",
    englishTitle: "Hereditary",
    year: 2018,
    director: "Ari Aster",
    genre: "Drama, Horror, Mystery"
  },
  {
    id: 800,
    title: "미드소마",
    englishTitle: "Midsommar",
    year: 2019,
    director: "Ari Aster",
    genre: "Drama, Horror, Mystery"
  }
];
