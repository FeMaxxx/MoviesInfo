import axios from "axios";

const searchPopularMoviesByDay = async (page) => {
  const baceURL = "https://api.themoviedb.org/3/trending/movie/day";
  const config = {
    params: {
      api_key: "eabf3be64fad896cb931bdc5f8933714",
      page,
    },
  };

  const response = await axios.get(baceURL, config);

  return response;
};

const searchMoviesDetails = async (id) => {
  const baceURL = `https://api.themoviedb.org/3/movie/${id}`;
  const config = {
    params: {
      api_key: "eabf3be64fad896cb931bdc5f8933714",
    },
  };

  const response = await axios.get(baceURL, config);

  return response;
};

export { searchPopularMoviesByDay, searchMoviesDetails };
