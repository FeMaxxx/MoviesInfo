import { useState, useEffect } from "react";

import Main from "components/Main";
import Loader from "components/Loader/Loader";
import FilterButtons from "components/FilterButtons";
import MoviesList from "components/MoviesList";
import ErrorMessage from "components/ErrorMessage";
import LoadMoreBtn from "components/LoadMoreBtn";
import UpButton from "components/UpButton/UpButton";
import { useMovies } from "hooks/useMovies";
import { Title } from "./Home.styled";

import {
  searchPopularMovies,
  searchPopularMoviesByDay,
  searchPopularMoviesByWeek,
} from "redux/movies/operations";
import { useDispatch } from "react-redux";
import {
  setPopularMovies,
  setPage,
  setSearchMovies,
} from "redux/movies/moviesSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");

  const {
    popularMovies,
    moviesByDay,
    moviesByWeek,
    loading,
    changeFilterLoading,
    error,
    totalPages,
    page,
  } = useMovies();

  useEffect(() => {
    const filterLocal = localStorage.getItem("filter");

    if (filterLocal) {
      setFilter(filterLocal);
    } else {
      setFilter("week");
    }

    return () => {
      dispatch(setSearchMovies([]));
    };
  }, [dispatch]);

  useEffect(() => {
    if (popularMovies.length > 0 || filter === "") return;

    if (filter === "week") {
      dispatch(searchPopularMoviesByWeek());
    } else if (filter === "day") {
      dispatch(searchPopularMoviesByDay());
    }
  }, [dispatch, filter, popularMovies.length]);

  useEffect(() => {
    const weekBtn = document.querySelector("[data-btn-week]");
    const dayBtn = document.querySelector("[data-btn-day]");

    if (filter === "week") {
      weekBtn.classList.add("active-btn");
      weekBtn.setAttribute("disabled", "");

      dayBtn.classList.remove("active-btn");
      dayBtn.removeAttribute("disabled");
    } else {
      dayBtn.classList.add("active-btn");
      dayBtn.setAttribute("disabled", "");

      weekBtn.classList.remove("active-btn");
      weekBtn.removeAttribute("disabled");
    }
  }, [filter]);

  useEffect(() => {
    const scrollLocal = localStorage.getItem("scroll");

    window.scrollTo({ top: scrollLocal, behavior: "instant" });
  }, []);

  const handleBtnFilter = (e) => {
    if (e.target.hasAttribute("data-btn-week")) {
      setFilter("week");
      localStorage.setItem("filter", "week");

      if (moviesByWeek.length > 0) {
        dispatch(setPopularMovies(moviesByWeek));
        return;
      } else if (moviesByWeek.length === 0) {
        dispatch(searchPopularMoviesByWeek());
        return;
      }
    } else {
      setFilter("day");
      localStorage.setItem("filter", "day");

      if (moviesByDay.length > 0) {
        dispatch(setPopularMovies(moviesByDay));
        return;
      } else if (moviesByDay.length === 0) {
        dispatch(searchPopularMoviesByDay());
        return;
      }
    }

    dispatch(setPage(1));
  };

  const handleLoadMoreButton = () => {
    dispatch(setPage(page + 1));

    dispatch(searchPopularMovies({ filter, page: page + 1 }));
  };

  return (
    <Main>
      <Title>Trending movies</Title>

      <FilterButtons handleBtnFilter={handleBtnFilter} />

      {popularMovies && !changeFilterLoading && (
        <MoviesList movies={popularMovies} />
      )}

      {error && <ErrorMessage message={"Sorry, we didn't find any movie"} />}

      {loading && <Loader />}

      {popularMovies && totalPages > page && !loading && (
        <LoadMoreBtn onClick={handleLoadMoreButton} />
      )}

      {popularMovies.length > 0 && <UpButton />}
    </Main>
  );
};

export default Home;
