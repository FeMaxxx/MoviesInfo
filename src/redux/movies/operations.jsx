import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.params = {
  api_key: "eabf3be64fad896cb931bdc5f8933714",
};
axios.defaults.headers = {
  "Cache-Control": "max-age=600",
};

export const searchPopularMovies = createAsyncThunk(
  "movies/trending",
  async ({ filter, page }, thunkAPI) => {
    try {
      const res = await axios.get(`trending/movie/${filter}`, {
        params: {
          page,
        },
      });

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const searchPopularMoviesByDay = createAsyncThunk(
  "movies/trendingDay",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`trending/movie/day`, {
        params: {
          page: 1,
        },
      });

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const searchPopularMoviesByWeek = createAsyncThunk(
  "movies/trendingWeek",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`trending/movie/week`, {
        params: {
          page: 1,
        },
      });

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const searchMoviesDetails = createAsyncThunk(
  "movies/details",
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`movie/${id}`);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const searchMoviesByName = createAsyncThunk(
  "movies/search",
  async ({ name, page }, thunkAPI) => {
    try {
      const res = await axios.get("search/movie", {
        params: {
          query: name,
          page,
        },
      });

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
