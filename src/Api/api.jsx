import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.params = {
  api_key: "eabf3be64fad896cb931bdc5f8933714",
};

const searchCastAndCrew = async (id) => {
  const response = await axios.get(`movie/${id}/credits`);

  return response;
};

const searchReviews = async (id) => {
  const response = await axios.get(`movie/${id}/reviews`);

  return response;
};

export { searchCastAndCrew, searchReviews };
