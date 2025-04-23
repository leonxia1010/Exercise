const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=';
const main = document.getElementById('main');

async function initializeMovies() {
  const movies = await getAllMovies(API_URL);
  console.log(movies);
  renderMovieList(movies);
}

async function getAllMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.results);
  return data.results;
}

async function searchMovies(url, search_value) {
  const res = await fetch(`${url}"${search_value}"`);
  const data = await res.json();
  return data.results;
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const searchValue = e.target.elements['search'].value;
  const movies = await searchMovies(SEARCH_API, searchValue);
  if (movies.length === 0) {
    main.innerHTML = 'No found movie.';
    return;
  }
  renderMovieList(movies);
});

const data_demo = [
  {
    adult: false,
    backdrop_path: '/fTrQsdMS2MUw00RnzH0r3JWHhts.jpg',
    genre_ids: [28, 80, 53],
    id: 1197306,
    original_language: 'en',
    original_title: 'A Working Man',
    overview:
      "Levon Cade left behind a decorated military career in the black ops to live a simple life working construction. But when his boss's daughter, who is like family to him, is taken by human traffickers, his search to bring her home uncovers a world of corruption far greater than he ever could have imagined.",
    popularity: 1086.1895,
    poster_path: '/xUkUZ8eOnrOnnJAfusZUqKYZiDu.jpg',
    release_date: '2025-03-26',
    title: 'A Working Man',
    video: false,
    vote_average: 6.33,
    vote_count: 386,
  },
  {
    adult: false,
    backdrop_path: '/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg',
    genre_ids: [10751, 35, 12, 14],
    id: 950387,
    original_language: 'en',
    original_title: 'A Minecraft Movie',
    overview:
      "Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld: a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a magical quest with an unexpected, expert crafter, Steve.",
    popularity: 543.1977,
    poster_path: '/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg',
    release_date: '2025-03-31',
    title: 'A Minecraft Movie',
    video: false,
    vote_average: 6.169,
    vote_count: 685,
  },
  {
    adult: false,
    backdrop_path: '/op3qmNhvwEvyT7UFyPbIfQmKriB.jpg',
    genre_ids: [14, 12, 28],
    id: 324544,
    original_language: 'en',
    original_title: 'In the Lost Lands',
    overview:
      'A queen sends the powerful and feared sorceress Gray Alys to the ghostly wilderness of the Lost Lands in search of a magical power, where she and her guide, the drifter Boyce, must outwit and outfight both man and demon.',
    popularity: 546.4711,
    poster_path: '/t6HJH3gXtUqVinyFKWi7Bjh73TM.jpg',
    release_date: '2025-02-27',
    title: 'In the Lost Lands',
    video: false,
    vote_average: 6.326,
    vote_count: 256,
  },
  {
    adult: false,
    backdrop_path: '/jhL4eTpccoZSVehhcR8DKLSBHZy.jpg',
    genre_ids: [28, 53, 878],
    id: 822119,
    original_language: 'en',
    original_title: 'Captain America: Brave New World',
    overview:
      'After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident. He must discover the reason behind a nefarious global plot before the true mastermind has the entire world seeing red.',
    popularity: 376.8807,
    poster_path: '/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg',
    release_date: '2025-02-12',
    title: 'Captain America: Brave New World',
    video: false,
    vote_average: 6.141,
    vote_count: 1588,
  },
  {
    adult: false,
    backdrop_path: '/k32XKMjmXMGeydykD32jfER3BVI.jpg',
    genre_ids: [28, 9648, 18],
    id: 1045938,
    original_language: 'en',
    original_title: 'G20',
    overview:
      'After the G20 Summit is overtaken by terrorists, President Danielle Sutton must bring all her statecraft and military experience to defend her family and her fellow leaders.',
    popularity: 337.4409,
    poster_path: '/wv6oWAleCJZUk5htrGg413t3GCy.jpg',
    release_date: '2025-04-09',
    title: 'G20',
    video: false,
    vote_average: 6.668,
    vote_count: 348,
  },
  {
    adult: false,
    backdrop_path: '/sNx1A3822kEbqeUxvo5A08o4N7o.jpg',
    genre_ids: [28, 35, 53],
    id: 1195506,
    original_language: 'en',
    original_title: 'Novocaine',
    overview:
      'When the girl of his dreams is kidnapped, everyman Nate turns his inability to feel pain into an unexpected strength in his fight to get her back.',
    popularity: 307.4463,
    poster_path: '/xmMHGz9dVRaMY6rRAlEX4W0Wdhm.jpg',
    release_date: '2025-03-12',
    title: 'Novocaine',
    video: false,
    vote_average: 6.861,
    vote_count: 557,
  },
  {
    adult: false,
    backdrop_path: '/zksO4lVnRKRoaSYzh2EDn2Z3Pel.jpg',
    genre_ids: [37, 28],
    id: 1293286,
    original_language: 'en',
    original_title: 'Gunslingers',
    overview:
      'When the most wanted man in America surfaces in a small Kentucky town, his violent history -- and a blood-thirsty mob seeking vengeance and a king’s ransom -- soon follow. As brothers face off against one another and bullets tear the town to shreds, this lightning-fast gunslinger makes his enemies pay the ultimate price for their greed.',
    popularity: 292.2274,
    poster_path: '/O7REXWPANWXvX2jhQydHjAq2DV.jpg',
    release_date: '2025-04-11',
    title: 'Gunslingers',
    video: false,
    vote_average: 6.758,
    vote_count: 33,
  },
  {
    adult: false,
    backdrop_path: '/3lEV4CoKoeT2cZ4fbKEJugZcw6Z.jpg',
    genre_ids: [27, 9648],
    id: 1244944,
    original_language: 'en',
    original_title: 'The Woman in the Yard',
    overview:
      "In the aftermath of her husband's death, widow Ramona's struggle to raise her two kids is hindered by the arrival of a mysterious woman with supernatural abilities.",
    popularity: 262.5169,
    poster_path: '/n0WS2TsNcS6dtaZKzxipyO7LuCJ.jpg',
    release_date: '2025-03-27',
    title: 'The Woman in the Yard',
    video: false,
    vote_average: 6,
    vote_count: 89,
  },
  {
    adult: false,
    backdrop_path: '/nAxGnGHOsfzufThz20zgmRwKur3.jpg',
    genre_ids: [27, 28, 53],
    id: 1233413,
    original_language: 'en',
    original_title: 'Sinners',
    overview:
      'Trying to leave their troubled lives behind, twin brothers return to their hometown to start again, only to discover that an even greater evil is waiting to welcome them back.',
    popularity: 266.5366,
    poster_path: '/fWPgbnt2LSqkQ6cdQc0SZN9CpLm.jpg',
    release_date: '2025-04-16',
    title: 'Sinners',
    video: false,
    vote_average: 7.429,
    vote_count: 247,
  },
  {
    adult: false,
    backdrop_path: '/pulJ1iY7GVeppMRipiR7ZGDW7EW.jpg',
    genre_ids: [18],
    id: 615,
    original_language: 'en',
    original_title: 'The Passion of the Christ',
    overview:
      "A graphic portrayal of the last twelve hours of Jesus of Nazareth's life.",
    popularity: 165.1957,
    poster_path: '/v9f9MMrq2nGQrN7cHnQRmEq9lSE.jpg',
    release_date: '2004-02-25',
    title: 'The Passion of the Christ',
    video: false,
    vote_average: 7.519,
    vote_count: 4807,
  },
  {
    adult: false,
    backdrop_path: '/zo8CIjJ2nfNOevqNajwMRO6Hwka.jpg',
    genre_ids: [16, 12, 10751, 35],
    id: 1241982,
    original_language: 'en',
    original_title: 'Moana 2',
    overview:
      "After receiving an unexpected call from her wayfinding ancestors, Moana journeys alongside Maui and a new crew to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.",
    popularity: 168.0407,
    poster_path: '/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg',
    release_date: '2024-11-21',
    title: 'Moana 2',
    video: false,
    vote_average: 7.083,
    vote_count: 2263,
  },
  {
    adult: false,
    backdrop_path: '/cJCW78MZsyyXBKHo4V25WctK00V.jpg',
    genre_ids: [27, 28, 14],
    id: 1312833,
    original_language: 'en',
    original_title: "A Knight's War",
    overview:
      'A fearless knight braves a deadly realm to save the Chosen One’s soul. Facing witches, demons, and brutal foes, he discovers her return could ignite chaos and doom humanity.',
    popularity: 153.5549,
    poster_path: '/janjdSMrTRGtPrI1p9uOX66jv7x.jpg',
    release_date: '2025-02-07',
    title: "A Knight's War",
    video: false,
    vote_average: 5.433,
    vote_count: 15,
  },
  {
    adult: false,
    backdrop_path: '/wmqpE7p2dUCEgCnovuovoNXaCXr.jpg',
    genre_ids: [27, 14, 53, 9648, 28],
    id: 1353117,
    original_language: 'en',
    original_title: 'Home Sweet Home: Rebirth',
    overview:
      'When a city is overrun with a demonically-possessed crowd, a cop must find the source of evil to save his family.',
    popularity: 150.5279,
    poster_path: '/9rCBCm9cyI4JfLEhx3EncyncMR3.jpg',
    release_date: '2025-03-20',
    title: 'Home Sweet Home: Rebirth',
    video: false,
    vote_average: 6.869,
    vote_count: 42,
  },
  {
    adult: false,
    backdrop_path: '/1w8kutrRucTd3wlYyu5QlUDMiG1.jpg',
    genre_ids: [12, 10751, 16],
    id: 762509,
    original_language: 'en',
    original_title: 'Mufasa: The Lion King',
    overview:
      'Mufasa, a cub lost and alone, meets a sympathetic lion named Taka, the heir to a royal bloodline. The chance meeting sets in motion an expansive journey of a group of misfits searching for their destiny.',
    popularity: 160.3211,
    poster_path: '/lurEK87kukWNaHd0zYnsi3yzJrs.jpg',
    release_date: '2024-12-18',
    title: 'Mufasa: The Lion King',
    video: false,
    vote_average: 7.418,
    vote_count: 2002,
  },
  {
    adult: false,
    backdrop_path: '/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg',
    genre_ids: [28, 878, 35, 10751],
    id: 939243,
    original_language: 'en',
    original_title: 'Sonic the Hedgehog 3',
    overview:
      'Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.',
    popularity: 157.3273,
    poster_path: '/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg',
    release_date: '2024-12-19',
    title: 'Sonic the Hedgehog 3',
    video: false,
    vote_average: 7.733,
    vote_count: 2451,
  },
  {
    adult: false,
    backdrop_path: '/gsQJOfeW45KLiQeEIsom94QPQwb.jpg',
    genre_ids: [28, 53],
    id: 1125899,
    original_language: 'en',
    original_title: 'Cleaner',
    overview:
      "When a group of radical activists take over an energy company's annual gala, seizing 300 hostages, an ex-soldier turned window cleaner suspended 50 storeys up on the outside of the building must save those trapped inside, including her younger brother.",
    popularity: 143.0193,
    poster_path: '/mwzDApMZAGeYCEVjhegKvCzDX0W.jpg',
    release_date: '2025-02-19',
    title: 'Cleaner',
    video: false,
    vote_average: 6.601,
    vote_count: 222,
  },
  {
    adult: false,
    backdrop_path: '/hNA73rnG4PjSwgojaC2gbO1f8Rt.jpg',
    genre_ids: [878, 35, 12],
    id: 696506,
    original_language: 'en',
    original_title: 'Mickey 17',
    overview:
      'Unlikely hero Mickey Barnes finds himself in the extraordinary circumstance of working for an employer who demands the ultimate commitment to the job… to die, for a living.',
    popularity: 129.3073,
    poster_path: '/edKpE9B5qN3e559OuMCLZdW1iBZ.jpg',
    release_date: '2025-02-28',
    title: 'Mickey 17',
    video: false,
    vote_average: 6.9,
    vote_count: 1689,
  },
  {
    adult: false,
    backdrop_path: '/ibF5XVxTzf1ayzZrmiJqgeQ39Qk.jpg',
    genre_ids: [28, 10752],
    id: 1373723,
    original_language: 'en',
    original_title: 'The Codes of War',
    overview:
      'War stories about family, ethics and honor include the true story of two U.S. Marines who in a span of six seconds, must stand their ground to stop a suicide truck bomb, a Navy Corpsman who attempts to hold on to his humanity, and a WW2 soldier who gets separated from his squad and is forced to re-evaluate his code.',
    popularity: 153.8959,
    poster_path: '/oXeiQAfRK90pxxhP5iKPXQqAIN1.jpg',
    release_date: '2025-03-20',
    title: 'The Codes of War',
    video: false,
    vote_average: 6.2,
    vote_count: 59,
  },
  {
    adult: false,
    backdrop_path: '/vNUwK5P42m81uG57kKI1WxSZwIQ.jpg',
    genre_ids: [35, 10749],
    id: 1403735,
    original_language: 'te',
    original_title: 'లైలా',
    overview:
      'Sonu Model, a renowned beautician from the old city, is forced to disguise himself as Laila, leading to a series of comedic, romantic, and action-packed events. Chaos ensues in this hilarious laugh riot',
    popularity: 126.3749,
    poster_path: '/l4gsNxFPGpzbq0D6QK1a8vO1lBz.jpg',
    release_date: '2025-02-14',
    title: 'Laila',
    video: false,
    vote_average: 5.5,
    vote_count: 2,
  },
  {
    adult: false,
    backdrop_path: '/is9bmV6uYXu7LjZGJczxrjJDlv8.jpg',
    genre_ids: [28, 12],
    id: 1229730,
    original_language: 'fr',
    original_title: 'Carjackers',
    overview:
      "By day, they're invisible—valets, hostesses, and bartenders at a luxury hotel. By night, they're the Carjackers, a crew of skilled drivers who track and rob wealthy clients on the road. As they plan their ultimate heist, the hotel director hires a ruthless hitman, to stop them at all costs. With danger closing in, can Nora, Zoe, Steve, and Prestance pull off their biggest score yet?",
    popularity: 132.4692,
    poster_path: '/wbkPMTz2vVai7Ujyp0ag7AM9SrO.jpg',
    release_date: '2025-03-27',
    title: 'Carjackers',
    video: false,
    vote_average: 6.135,
    vote_count: 155,
  },
];
function renderMovieList(movies) {
  main.innerHTML = '';
  movies.forEach((movie) => {
    const { title, overview, poster_path, vote_average } = movie;
    const posterLink = `${IMG_PATH}${poster_path}`;

    const movieEl = document.createElement('div');
    movieEl.className = 'movie';
    movieEl.innerHTML = `
  <img src="${posterLink}" alt="Poster of ${title}">
  <div class='profile'>
    <div class='title'>${title}</div>
    <div class='rate'>${vote_average.toFixed(2)}</div>
    <div class='overview'>
      <h3>Overview</p>
      <p>${overview}</p>
    </div>
  </div>
  `;
    main.appendChild(movieEl);
    movieEl.addEventListener('mouseover', (e) =>
      e.currentTarget.classList.add('active')
    );
    movieEl.addEventListener('mouseleave', (e) =>
      e.currentTarget.classList.remove('active')
    );
  });
}

initializeMovies();
