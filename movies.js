const movies = [
  {
    id: 1,
    title: "대부",
    englishTitle: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    genre: ["Crime", "Drama"]
  },
  {
    id: 2,
    title: "대부 2",
    englishTitle: "The Godfather Part II",
    year: 1974,
    director: "Francis Ford Coppola",
    genre: ["Crime", "Drama"]
  },
  {
    id: 3,
    title: "쇼생크 탈출",
    englishTitle: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    genre: ["Drama"]
  },
  {
    id: 4,
    title: "쉰들러 리스트",
    englishTitle: "Schindler's List",
    year: 1993,
    director: "Steven Spielberg",
    genre: ["Biography", "Drama", "History"]
  },
  {
    id: 5,
    title: "다크 나이트",
    englishTitle: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    genre: ["Action", "Crime", "Drama"]
  },
  {
    id: 6,
    title: "펄프 픽션",
    englishTitle: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    genre: ["Crime", "Drama"]
  },
  {
    id: 7,
    title: "반지의 제왕: 왕의 귀환",
    englishTitle: "The Lord of the Rings: The Return of the King",
    year: 2003,
    director: "Peter Jackson",
    genre: ["Action", "Adventure", "Drama"]
  },
  {
    id: 8,
    title: "반지의 제왕: 두 개의 탑",
    englishTitle: "The Lord of the Rings: The Two Towers",
    year: 2002,
    director: "Peter Jackson",
    genre: ["Action", "Adventure", "Drama"]
  },
  {
    id: 9,
    title: "반지의 제왕: 반지 원정대",
    englishTitle: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    director: "Peter Jackson",
    genre: ["Action", "Adventure", "Drama"]
  },
  {
    id: 10,
    title: "포레스트 검프",
    englishTitle: "Forrest Gump",
    year: 1994,
    director: "Robert Zemeckis",
    genre: ["Drama", "Romance"]
  },
  {
    id: 11,
    title: "인셉션",
    englishTitle: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    genre: ["Action", "Adventure", "Sci-Fi"]
  },
  {
    id: 12,
    title: "매트릭스",
    englishTitle: "The Matrix",
    year: 1999,
    director: "The Wachowskis",
    genre: ["Action", "Sci-Fi"]
  },
  {
    id: 13,
    title: "좋은 친구들",
    englishTitle: "Goodfellas",
    year: 1990,
    director: "Martin Scorsese",
    genre: ["Biography", "Crime", "Drama"]
  },
  {
    id: 14,
    title: "어벤져스: 엔드게임",
    englishTitle: "Avengers: Endgame",
    year: 2019,
    director: "Anthony Russo, Joe Russo",
    genre: ["Action", "Adventure", "Drama"]
  },
  {
    id: 15,
    title: "인터스텔라",
    englishTitle: "Interstellar",
    year: 2014,
    director: "Christopher Nolan",
    genre: ["Adventure", "Drama", "Sci-Fi"]
  },
  {
    id: 16,
    title: "기생충",
    englishTitle: "Parasite",
    year: 2019,
    director: "Bong Joon Ho",
    genre: ["Drama", "Thriller"]
  },
  {
    id: 17,
    title: "센과 치히로의 행방불명",
    englishTitle: "Spirited Away",
    year: 2001,
    director: "Hayao Miyazaki",
    genre: ["Animation", "Adventure", "Fantasy"]
  },
  {
    id: 18,
    title: "라이언 일병 구하기",
    englishTitle: "Saving Private Ryan",
    year: 1998,
    director: "Steven Spielberg",
    genre: ["Drama", "War"]
  },
  {
    id: 19,
    title: "시민 케인",
    englishTitle: "Citizen Kane",
    year: 1941,
    director: "Orson Welles",
    genre: ["Drama", "Mystery"]
  },
  {
    id: 20,
    title: "위플래쉬",
    englishTitle: "Whiplash",
    year: 2014,
    director: "Damien Chazelle",
    genre: ["Drama", "Music"]
  },
  {
    id: 21,
    title: "타이타닉",
    englishTitle: "Titanic",
    year: 1997,
    director: "James Cameron",
    genre: ["Drama", "Romance"]
  },
  {
    id: 22,
    title: "터미네이터 2: 심판의 날",
    englishTitle: "Terminator 2: Judgment Day",
    year: 1991,
    director: "James Cameron",
    genre: ["Action", "Sci-Fi"]
  },
  {
    id: 23,
    title: "백 투 더 퓨처",
    englishTitle: "Back to the Future",
    year: 1985,
    director: "Robert Zemeckis",
    genre: ["Adventure", "Comedy", "Sci-Fi"]
  },
  {
    id: 24,
    title: "에일리언",
    englishTitle: "Alien",
    year: 1979,
    director: "Ridley Scott",
    genre: ["Horror", "Sci-Fi"]
  },
  {
    id: 25,
    title: "에이리언 2",
    englishTitle: "Aliens",
    year: 1986,
    director: "James Cameron",
    genre: ["Action", "Adventure", "Sci-Fi"]
  },
  {
    id: 26,
    title: "글래디에이터",
    englishTitle: "Gladiator",
    year: 2000,
    director: "Ridley Scott",
    genre: ["Action", "Adventure", "Drama"]
  },
  {
    id: 27,
    title: "세븐",
    englishTitle: "Se7en",
    year: 1995,
    director: "David Fincher",
    genre: ["Crime", "Drama", "Mystery"]
  },
  {
    id: 28,
    title: "파이트 클럽",
    englishTitle: "Fight Club",
    year: 1999,
    director: "David Fincher",
    genre: ["Drama"]
  },
  {
    id: 29,
    title: "아메리칸 히스토리 X",
    englishTitle: "American History X",
    year: 1998,
    director: "Tony Kaye",
    genre: ["Crime", "Drama"]
  },
  {
    id: 30,
    title: "시계태엽 오렌지",
    englishTitle: "A Clockwork Orange",
    year: 1971,
    director: "Stanley Kubrick",
    genre: ["Crime", "Drama", "Sci-Fi"]
  },
  {
    id: 31,
    title: "샤이닝",
    englishTitle: "The Shining",
    year: 1980,
    director: "Stanley Kubrick",
    genre: ["Drama", "Horror"]
  },
  {
    id: 32,
    title: "2001 스페이스 오디세이",
    englishTitle: "2001: A Space Odyssey",
    year: 1968,
    director: "Stanley Kubrick",
    genre: ["Adventure", "Sci-Fi"]
  },
  {
    id: 33,
    title: "택시 드라이버",
    englishTitle: "Taxi Driver",
    year: 1976,
    director: "Martin Scorsese",
    genre: ["Crime", "Drama"]
  },
  {
    id: 34,
    title: "디파티드",
    englishTitle: "The Departed",
    year: 2006,
    director: "Martin Scorsese",
    genre: ["Crime", "Drama", "Thriller"]
  },
  {
    id: 35,
    title: "셔터 아일랜드",
    englishTitle: "Shutter Island",
    year: 2010,
    director: "Martin Scorsese",
    genre: ["Mystery", "Thriller"]
  },
  {
    id: 36,
    title: "레옹",
    englishTitle: "Léon: The Professional",
    year: 1994,
    director: "Luc Besson",
    genre: ["Action", "Crime", "Drama"]
  },
  {
    id: 37,
    title: "그랜드 부다페스트 호텔",
    englishTitle: "The Grand Budapest Hotel",
    year: 2014,
    director: "Wes Anderson",
    genre: ["Adventure", "Comedy", "Drama"]
  },
  {
    id: 38,
    title: "문라이즈 킹덤",
    englishTitle: "Moonrise Kingdom",
    year: 2012,
    director: "Wes Anderson",
    genre: ["Comedy", "Drama", "Romance"]
  },
  {
    id: 39,
    title: "라라랜드",
    englishTitle: "La La Land",
    year: 2016,
    director: "Damien Chazelle",
    genre: ["Comedy", "Drama", "Music"]
  },
  {
    id: 40,
    title: "그린 북",
    englishTitle: "Green Book",
    year: 2018,
    director: "Peter Farrelly",
    genre: ["Biography", "Comedy", "Drama"]
  },
  {
    id: 41,
    title: "쇼생크 탈출",
    englishTitle: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    genre: ["Drama"]
  },
  {
    id: 42,
    title: "죽은 시인의 사회",
    englishTitle: "Dead Poets Society",
    year: 1989,
    director: "Peter Weir",
    genre: ["Comedy", "Drama"]
  },
  {
    id: 43,
    title: "굿 윌 헌팅",
    englishTitle: "Good Will Hunting",
    year: 1997,
    director: "Gus Van Sant",
    genre: ["Drama", "Romance"]
  },
  {
    id: 44,
    title: "트루먼 쇼",
    englishTitle: "The Truman Show",
    year: 1998,
    director: "Peter Weir",
    genre: ["Comedy", "Drama", "Sci-Fi"]
  },
  {
    id: 45,
    title: "이터널 선샤인",
    englishTitle: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
    director: "Michel Gondry",
    genre: ["Drama", "Romance", "Sci-Fi"]
  },
  {
    id: 46,
    title: "헤어질 결심",
    englishTitle: "Decision to Leave",
    year: 2022,
    director: "Park Chan Wook",
    genre: ["Drama", "Mystery", "Romance"]
  },
  {
    id: 47,
    title: "올드보이",
    englishTitle: "Oldboy",
    year: 2003,
    director: "Park Chan Wook",
    genre: ["Action", "Drama", "Mystery"]
  },
  {
    id: 48,
    title: "살인의 추억",
    englishTitle: "Memories of Murder",
    year: 2003,
    director: "Bong Joon Ho",
    genre: ["Crime", "Drama", "Mystery"]
  },
  {
    id: 49,
    title: "마더",
    englishTitle: "Mother",
    year: 2009,
    director: "Bong Joon Ho",
    genre: ["Crime", "Drama", "Mystery"]
  },
  {
    id: 50,
    title: "버닝",
    englishTitle: "Burning",
    year: 2018,
    director: "Lee Chang Dong",
    genre: ["Drama", "Mystery"]
  },
  {
    id: 51,
    title: "곡성",
    englishTitle: "The Wailing",
    year: 2016,
    director: "Na Hong Jin",
    genre: ["Drama", "Horror", "Mystery"]
  },
  {
    id: 52,
    title: "아가씨",
    englishTitle: "The Handmaiden",
    year: 2016,
    director: "Park Chan Wook",
    genre: ["Drama", "Romance", "Thriller"]
  },
  {
    id: 53,
    title: "택시운전사",
    englishTitle: "A Taxi Driver",
    year: 2017,
    director: "Jang Hoon",
    genre: ["Drama", "History"]
  },
  {
    id: 54,
    title: "1987",
    englishTitle: "1987: When the Day Comes",
    year: 2017,
    director: "Jang Joon Hwan",
    genre: ["Drama", "History"]
  },
  {
    id: 55,
    title: "변호인",
    englishTitle: "The Attorney",
    year: 2013,
    director: "Yang Woo Seok",
    genre: ["Drama"]
  },
  {
    id: 56,
    title: "부산행",
    englishTitle: "Train to Busan",
    year: 2016,
    director: "Yeon Sang Ho",
    genre: ["Action", "Horror", "Thriller"]
  },
  {
    id: 57,
    title: "신세계",
    englishTitle: "New World",
    year: 2013,
    director: "Park Hoon Jung",
    genre: ["Crime", "Drama", "Thriller"]
  },
  {
    id: 58,
    title: "끝까지 간다",
    englishTitle: "A Hard Day",
    year: 2014,
    director: "Kim Seong Hun",
    genre: ["Action", "Crime", "Thriller"]
  },
  {
    id: 59,
    title: "악인전",
    englishTitle: "The Gangster, the Cop, the Devil",
    year: 2019,
    director: "Lee Won Tae",
    genre: ["Action", "Crime", "Thriller"]
  },
  {
    id: 60,
    title: "베테랑",
    englishTitle: "Veteran",
    year: 2015,
    director: "Ryoo Seung Wan",
    genre: ["Action", "Crime", "Comedy"]
  },
  {
    id: 61,
    title: "인디아나 존스: 레이더스",
    englishTitle: "Raiders of the Lost Ark",
    year: 1981,
    director: "Steven Spielberg",
    genre: ["Action", "Adventure"]
  },
  {
    id: 62,
    title: "쥬라기 공원",
    englishTitle: "Jurassic Park",
    year: 1993,
    director: "Steven Spielberg",
    genre: ["Adventure", "Sci-Fi", "Thriller"]
  },
  {
    id: 63,
    title: "죠스",
    englishTitle: "Jaws",
    year: 1975,
    director: "Steven Spielberg",
    genre: ["Adventure", "Thriller"]
  },
  {
    id: 64,
    title: "E.T.",
    englishTitle: "E.T. the Extra-Terrestrial",
    year: 1982,
    director: "Steven Spielberg",
    genre: ["Family", "Sci-Fi"]
  },
  {
    id: 65,
    title: "캐치 미 이프 유 캔",
    englishTitle: "Catch Me If You Can",
    year: 2002,
    director: "Steven Spielberg",
    genre: ["Biography", "Crime", "Drama"]
  },
  {
    id: 66,
    title: "캐리비안의 해적: 블랙펄의 저주",
    englishTitle: "Pirates of the Caribbean: The Curse of the Black Pearl",
    year: 2003,
    director: "Gore Verbinski",
    genre: ["Action", "Adventure", "Fantasy"]
  },
  {
    id: 67,
    title: "해리 포터와 마법사의 돌",
    englishTitle: "Harry Potter and the Sorcerer's Stone",
    year: 2001,
    director: "Chris Columbus",
    genre: ["Adventure", "Family", "Fantasy"]
  },
  {
    id: 68,
    title: "해리 포터와 비밀의 방",
    englishTitle: "Harry Potter and the Chamber of Secrets",
    year: 2002,
    director: "Chris Columbus",
    genre: ["Adventure", "Family", "Fantasy"]
  },
  {
    id: 69,
    title: "해리 포터와 아즈카반의 죄수",
    englishTitle: "Harry Potter and the Prisoner of Azkaban",
    year: 2004,
    director: "Alfonso Cuarón",
    genre: ["Adventure", "Family", "Fantasy"]
  },
  {
    id: 70,
    title: "해리 포터와 불의 잔",
    englishTitle: "Harry Potter and the Goblet of Fire",
    year: 2005,
    director: "Mike Newell",
    genre: ["Adventure", "Family", "Fantasy"]
  },
  {
    id: 71,
    title: "스타워즈",
    englishTitle: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    director: "George Lucas",
    genre: ["Action", "Adventure", "Fantasy"]
  },
  {
    id: 72,
    title: "제국의 역습",
    englishTitle: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
    director: "Irvin Kershner",
    genre: ["Action", "Adventure", "Fantasy"]
  },
  {
    id: 73,
    title: "제다이의 귀환",
    englishTitle: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
    director: "Richard Marquand",
    genre: ["Action", "Adventure", "Fantasy"]
  },
  {
    id: 74,
    title: "어벤져스",
    englishTitle: "The Avengers",
    year: 2012,
    director: "Joss Whedon",
    genre: ["Action", "Adventure", "Sci-Fi"]
  },
  {
    id: 75,
    title: "아이언맨",
    englishTitle: "Iron Man",
    year: 2008,
    director: "Jon Favreau",
    genre: ["Action", "Adventure", "Sci-Fi"]
  },
  {
    id: 76,
    title: "캡틴 아메리카: 윈터 솔져",
    englishTitle: "Captain America: The Winter Soldier",
    year: 2014,
    director: "Anthony Russo, Joe Russo",
    genre: ["Action", "Adventure", "Sci-Fi"]
  },
  {
    id: 77,
    title: "토르: 라그나로크",
    englishTitle: "Thor: Ragnarok",
    year: 2017,
    director: "Taika Waititi",
    genre: ["Action", "Adventure", "Comedy"]
  },
  {
    id: 78,
    title: "가디언즈 오브 갤럭시",
    englishTitle: "Guardians of the Galaxy",
    year: 2014,
    director: "James Gunn",
    genre: ["Action", "Adventure", "Comedy"]
  },
  {
    id: 79,
    title: "스파이더맨: 뉴 유니버스",
    englishTitle: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
    genre: ["Animation", "Action", "Adventure"]
  },
  {
    id: 80,
    title: "토이 스토리",
    englishTitle: "Toy Story",
    year: 1995,
    director: "John Lasseter",
    genre: ["Animation", "Adventure", "Comedy"]
  },
  {
    id: 81,
    title: "토이 스토리 2",
    englishTitle: "Toy Story 2",
    year: 1999,
    director: "John Lasseter, Ash Brannon, Lee Unkrich",
    genre: ["Animation", "Adventure", "Comedy"]
  },
  {
    id: 82,
    title: "업",
    englishTitle: "Up",
    year: 2009,
    director: "Pete Docter, Bob Peterson",
    genre: ["Animation", "Adventure", "Comedy"]
  },
  {
    id: 83,
    title: "월-E",
    englishTitle: "WALL-E",
    year: 2008,
    director: "Andrew Stanton",
    genre: ["Animation", "Adventure", "Sci-Fi"]
  },
  {
    id: 84,
    title: "인사이드 아웃",
    englishTitle: "Inside Out",
    year: 2015,
    director: "Pete Docter",
    genre: ["Animation", "Adventure", "Comedy"]
  },
  {
    id: 85,
    title: "코코",
    englishTitle: "Coco",
    year: 2017,
    director: "Lee Unkrich, Adrian Molina",
    genre: ["Animation", "Adventure", "Family"]
  },
  {
    id: 86,
    title: "모노노케 히메",
    englishTitle: "Princess Mononoke",
    year: 1997,
    director: "Hayao Miyazaki",
    genre: ["Animation", "Adventure", "Fantasy"]
  },
  {
    id: 87,
    title: "하울의 움직이는 성",
    englishTitle: "Howl's Moving Castle",
    year: 2004,
    director: "Hayao Miyazaki",
    genre: ["Animation", "Adventure", "Fantasy"]
  },
  {
    id: 88,
    title: "이웃집 토토로",
    englishTitle: "My Neighbor Totoro",
    year: 1988,
    director: "Hayao Miyazaki",
    genre: ["Animation", "Family", "Fantasy"]
  },
  {
    id: 89,
    title: "마녀 배달부 키키",
    englishTitle: "Kiki's Delivery Service",
    year: 1989,
    director: "Hayao Miyazaki",
    genre: ["Animation", "Adventure", "Family"]
  },
  {
    id: 90,
    title: "더 울프 오브 월 스트리트",
    englishTitle: "The Wolf of Wall Street",
    year: 2013,
    director: "Martin Scorsese",
    genre: ["Biography", "Comedy", "Crime"]
  },
  {
    id: 91,
    title: "소셜 네트워크",
    englishTitle: "The Social Network",
    year: 2010,
    director: "David Fincher",
    genre: ["Biography", "Drama"]
  },
  {
    id: 92,
    title: "그린 마일",
    englishTitle: "The Green Mile",
    year: 1999,
    director: "Frank Darabont",
    genre: ["Crime", "Drama", "Fantasy"]
  },
  {
    id: 93,
    title: "라이프 이즈 뷰티풀",
    englishTitle: "Life Is Beautiful",
    year: 1997,
    director: "Roberto Benigni",
    genre: ["Comedy", "Drama", "Romance"]
  },
  {
    id: 94,
    title: "시네마 천국",
    englishTitle: "Cinema Paradiso",
    year: 1988,
    director: "Giuseppe Tornatore",
    genre: ["Drama", "Romance"]
  },
  {
    id: 95,
    title: "피아니스트",
    englishTitle: "The Pianist",
    year: 2002,
    director: "Roman Polanski",
    genre: ["Biography", "Drama", "Music"]
  },
  {
    id: 96,
    title: "디 아더스",
    englishTitle: "The Others",
    year: 2001,
    director: "Alejandro Amenábar",
    genre: ["Drama", "Horror", "Mystery"]
  },
  {
    id: 97,
    title: "프레스티지",
    englishTitle: "The Prestige",
    year: 2006,
    director: "Christopher Nolan",
    genre: ["Drama", "Mystery", "Sci-Fi"]
  },
  {
    id: 98,
    title: "메멘토",
    englishTitle: "Memento",
    year: 2000,
    director: "Christopher Nolan",
    genre: ["Mystery", "Thriller"]
  },
  {
    id: 99,
    title: "덩케르크",
    englishTitle: "Dunkirk",
    year: 2017,
    director: "Christopher Nolan",
    genre: ["Action", "Drama", "History"]
  },
  {
    id: 100,
    title: "오펜하이머",
    englishTitle: "Oppenheimer",
    year: 2023,
    director: "Christopher Nolan",
    genre: ["Biography", "Drama", "History"]
  }
];
