import axios from 'axios';

const API_KEY = 'abb31a7bed98d036dc34aaa5b39687ea';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchMovies() {
  const response = await axios('trending/movie/day', {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
}

export async function fetchMovieFullInfo(id) {
  const response = await axios(`/movie/${id}`, {
    params: {
      api_key: API_KEY,
      append_to_response: 'videos',
    },
  });
  return response.data;
}

export async function fetchMovieCast(id) {
  const response = await axios(`/movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
}

export async function fetchMovieReviews(id) {
  const response = await axios(`/movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
}

export async function fetchMoviesSearch(query) {
  const response = await axios('/search/movie', {
    params: {
      api_key: API_KEY,
      query,
    },
  });
  return response.data.results;
}
