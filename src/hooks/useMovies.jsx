import { useSelector } from "react-redux";
import {
  selectSearchMovies,
  selectPopularMovies,
  selectMoviesByDay,
  selectMoviesByWeek,
  selectLoading,
  selectChangeFilterLoading,
  selectError,
  selectTotalPages,
  selectPage,
  selectScrollPosition,
  selectMovieDetails,
} from "redux/movies/selectors";

export const useMovies = () => {
  return {
    searchMovies: useSelector(selectSearchMovies),
    popularMovies: useSelector(selectPopularMovies),
    moviesByDay: useSelector(selectMoviesByDay),
    moviesByWeek: useSelector(selectMoviesByWeek),
    loading: useSelector(selectLoading),
    changeFilterLoading: useSelector(selectChangeFilterLoading),
    error: useSelector(selectError),
    totalPages: useSelector(selectTotalPages),
    page: useSelector(selectPage),
    scrollPosition: useSelector(selectScrollPosition),
    movieDetails: useSelector(selectMovieDetails),
  };
};
