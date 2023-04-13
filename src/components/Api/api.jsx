import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.params = {
  api_key: "eabf3be64fad896cb931bdc5f8933714",
};

const searchPopularMovies = async (filter, page) => {
  const response = await axios.get(`trending/movie/${filter}`, {
    params: {
      page,
    },
  });

  return response;
};

const searchMoviesDetails = async (id) => {
  const response = await axios.get(`movie/${id}`);

  return response;
};

const searchMoviesByName = async (name, page) => {
  const response = await axios.get("search/movie", {
    params: {
      query: name,
      page,
    },
  });

  return response;
};

const searchCast = async (id) => {
  const response = await axios.get(`movie/${id}/credits`);

  return response;
};

const searchReviews = async (id) => {
  const response = await axios.get(`movie/${id}/reviews`);

  return response;
};

export {
  searchPopularMovies,
  searchMoviesDetails,
  searchMoviesByName,
  searchCast,
  searchReviews,
};
