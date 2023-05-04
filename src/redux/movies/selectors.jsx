export const selectSearchMovies = (state) => state.movies.searchMovies;
export const selectPopularMovies = (state) => state.movies.popularMovies;
export const selectMoviesByDay = (state) => state.movies.moviesByDay;
export const selectMoviesByWeek = (state) => state.movies.moviesByWeek;
export const selectLoading = (state) => state.movies.loading;
export const selectChangeFilterLoading = (state) =>
  state.movies.changeFilterLoading;
export const selectError = (state) => state.movies.error;
export const selectTotalPages = (state) => state.movies.totalPages;
export const selectPage = (state) => state.movies.page;
export const selectScrollPosition = (state) => state.movies.scrollPosition;
export const selectMovieDetails = (state) => state.movies.movieDetails;
