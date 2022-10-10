const API_KEY = "3a5dff13eb5663c0800c091be3a9f848";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

async function searchMovie(search) {
  let results = [];
  results = await basicFetch(
    `/search/movie?api_key=${API_KEY}&query=${search}`
  );
  return results;
}

async function allAction() {
  let info = [];
  for (let i = 1; i <= 12; i++) {
    let actionRow = await basicFetch(
      `/discover/movie?language=pt-BR&api_key=${API_KEY}&with_genres=28&page=${i}`
    );
    info.push(actionRow);
  }
  return info;
}

async function getMovieInfo(movieId, type) {
  let info = [];
  if (movieId) {
    switch (type) {
      case "movie":
        info = await basicFetch(
          `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`
        );
        break;
      case "tv":
        info = await basicFetch(
          `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`
        );
        break;
      default:
        info = null;
        break;
    }
  }
  return info;
}

async function getHomeList() {
  return [
    {
      slug: "originals",
      title: "Originais da Netflix",
      items: await basicFetch(
        `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "trending",
      title: "Recomendados para você",
      items: await basicFetch(
        `/trending/movie/week?language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "toprated",
      title: "Em alta",
      items: await basicFetch(
        `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "action",
      title: "Ação",
      items: await basicFetch(
        `/discover/movie?language=pt-BR&api_key=${API_KEY}&with_genres=28`
      ),
    },
    {
      slug: "comedy",
      title: "Comedia",
      items: await basicFetch(
        `/discover/movie?language=pt-BR&api_key=${API_KEY}&with_genres=35`
      ),
    },
    {
      slug: "horror",
      title: "Terror",
      items: await basicFetch(
        `/discover/movie?language=pt-BR&api_key=${API_KEY}&with_genres=27`
      ),
    },
    {
      slug: "romance",
      title: "Romance",
      items: await basicFetch(
        `/discover/movie?language=pt-BR&api_key=${API_KEY}&with_genres=10749`
      ),
    },
    {
      slug: "documentary",
      title: "Documentarios",
      items: await basicFetch(
        `/discover/movie?language=pt-BR&api_key=${API_KEY}&with_genres=99`
      ),
    },
  ];
}

export {getHomeList, getMovieInfo, searchMovie, allAction};
