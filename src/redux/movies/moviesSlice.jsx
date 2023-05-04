import { createSlice } from "@reduxjs/toolkit";
import {
  searchPopularMovies,
  searchPopularMoviesByDay,
  searchPopularMoviesByWeek,
  searchMoviesDetails,
  searchMoviesByName,
} from "./operations";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    searchMovies: [],
    popularMovies: [],
    moviesByDay: [],
    moviesByWeek: [],
    movieDetails: null,
    loading: false,
    changeFilterLoading: false,
    error: false,
    totalPages: 0,
    page: 1,
  },
  reducers: {
    setSearchMovies(state, action) {
      state.searchMovies = action.payload;
    },
    setPopularMovies(state, action) {
      state.popularMovies = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(searchPopularMovies.fulfilled, (state, action) => {
        state.popularMovies = [
          ...state.popularMovies,
          ...action.payload.results,
        ];
        state.loading = false;
        state.error = false;
        state.totalPages = action.payload.total_pages;
      })
      .addCase(searchPopularMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchPopularMovies.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(searchPopularMoviesByDay.fulfilled, (state, action) => {
        state.popularMovies = action.payload.results;
        state.moviesByDay = action.payload.results;
        state.changeFilterLoading = false;
        state.loading = false;
        state.error = false;
        state.totalPages = action.payload.total_pages;
      })
      .addCase(searchPopularMoviesByDay.pending, (state) => {
        state.changeFilterLoading = true;
        state.loading = true;
      })
      .addCase(searchPopularMoviesByDay.rejected, (state) => {
        state.error = true;
        state.changeFilterLoading = false;
        state.loading = false;
        state.totalPages = 0;
      })
      .addCase(searchPopularMoviesByWeek.fulfilled, (state, action) => {
        state.popularMovies = action.payload.results;
        state.moviesByWeek = action.payload.results;
        state.changeFilterLoading = false;
        state.loading = false;
        state.error = false;
        state.totalPages = action.payload.total_pages;
      })
      .addCase(searchPopularMoviesByWeek.pending, (state) => {
        state.changeFilterLoading = true;
        state.loading = true;
      })
      .addCase(searchPopularMoviesByWeek.rejected, (state) => {
        state.error = true;
        state.changeFilterLoading = false;
        state.loading = false;
        state.totalPages = 0;
      })
      .addCase(searchMoviesDetails.fulfilled, (state, action) => {
        state.movieDetails = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(searchMoviesDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchMoviesDetails.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(searchMoviesByName.fulfilled, (state, action) => {
        state.searchMovies = [...state.searchMovies, ...action.payload.results];
        state.loading = false;
        state.error = false;
        state.totalPages = action.payload.total_pages;
      })
      .addCase(searchMoviesByName.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchMoviesByName.rejected, (state) => {
        state.error = true;
        state.loading = false;
        state.totalPages = 0;
      }),
});

export const { setSearchMovies, setPopularMovies, setPage } =
  moviesSlice.actions;
