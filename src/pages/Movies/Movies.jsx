import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMoviesByName } from "redux/movies/operations";

import Main from "components/Main";
import SearchForm from "components/SearchForm";
import Idle from "components/Idle";
import ErrorMessage from "components/ErrorMessage";
import PopularMoviesList from "components/MoviesList";
import Loader from "components/Loader/Loader";
import LoadMoreBtn from "components/LoadMoreBtn";
import UpButton from "components/UpButton";
import { useMovies } from "hooks/useMovies";
import { useDispatch } from "react-redux";
import {
  setSearchMovies,
  setPopularMovies,
  setPage,
} from "redux/movies/moviesSlice";

const Movies = () => {
  const { searchMovies, loading, error, totalPages, page } = useMovies();
  const dispatch = useDispatch();

  const [movieName, setMovieName] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get("query");

  useEffect(() => {
    if (params) {
      setMovieName(params);
    }

    return () => {
      dispatch(setPopularMovies([]));
    };
  }, [dispatch, params]);

  useEffect(() => {
    if (!movieName || searchMovies.length > 0) return;

    dispatch(searchMoviesByName({ name: movieName, page }));
  }, [dispatch, movieName, page, searchMovies]);

  const onSubmit = (e) => {
    const name = e.movieName.toLowerCase().trim();

    if (name === movieName || name === "") return;
    setSearchParams(name !== "" ? { query: name } : {});
    dispatch(setSearchMovies([]));
    dispatch(setPage(1));
    setMovieName(name);
  };

  useEffect(() => {
    const scrollLocal = localStorage.getItem("scroll");

    window.scrollTo({ top: scrollLocal, behavior: "instant" });
  }, []);

  const handleLoadMoreButton = () => {
    dispatch(setPage(page + 1));

    dispatch(searchMoviesByName({ name: movieName, page }));
  };

  return (
    <Main>
      <SearchForm onSubmit={onSubmit} />

      {searchMovies && <PopularMoviesList movies={searchMovies} />}

      {searchMovies.length === 0 && !loading && !error && <Idle />}

      {error && <ErrorMessage message={"Sorry, we didn't find any movie"} />}

      {loading && <Loader />}

      {searchMovies.length > 0 && totalPages > page && !loading && (
        <LoadMoreBtn onClick={handleLoadMoreButton} />
      )}

      {searchMovies.length > 0 && <UpButton />}
    </Main>
  );
};

export default Movies;
