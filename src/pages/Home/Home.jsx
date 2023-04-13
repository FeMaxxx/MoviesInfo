import { useState, useEffect } from "react";
import Main from "components/Main";
import Loader from "components/Loader/Loader";
import FilterButtons from "components/FilterButtons";
import MoviesList from "components/MoviesList";
import ErrorMessage from "components/ErrorMessage";
import LoadMoreBtn from "components/LoadMoreBtn";
import UpButton from "components/UpButton/UpButton";

import { Title } from "./Home.styled";

import { searchPopularMovies } from "components/Api";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [moviesByDay, setMoviesByDay] = useState([]);
  const [moviesByWeek, setMoviesByWeek] = useState([]);

  const [filter, setFilter] = useState("week");
  const [status, setStatus] = useState("loading");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(2);
  const [scrollPosition, setScrollPosition] = useState(0);

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
    searchPopularMovies("week", 1)
      .then((movies) => {
        setMoviesByWeek(movies.data.results);
        setPopularMovies(movies.data.results);
        setStatus("good");
      })
      .catch(() => {
        setMoviesByWeek([]);
        setPopularMovies([]);
        setStatus("error");
      });

    searchPopularMovies("day", 1)
      .then((movies) => {
        setMoviesByDay(movies.data.results);
        setStatus("good");
      })
      .catch(() => {
        setMoviesByDay([]);
        setStatus("error");
      });
  }, []);

  useEffect(() => {
    if (page === 1) return;

    searchPopularMovies(filter, page)
      .then((movies) => {
        setTotalPages(movies.data.total_pages);
        setPopularMovies((prevState) => [...prevState, ...movies.data.results]);
        setStatus("good");
      })
      .catch(() => {
        setStatus("error");
      });
  }, [filter, page]);

  useEffect(() => {
    const setScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", setScroll);

    return () => {
      window.removeEventListener("scroll", setScroll);
    };
  }, []);

  const handleBtnFilter = (e) => {
    if (e.target.hasAttribute("data-btn-week")) {
      setFilter("week");

      setPopularMovies(moviesByWeek);
    } else {
      setFilter("day");

      setPopularMovies(moviesByDay);
    }

    setPage(1);
  };

  const handleLoadMoreButton = () => {
    setPage(page + 1);
    setStatus("loading");
  };

  return (
    <Main>
      <Title>Trending movies</Title>

      <FilterButtons handleBtnFilter={handleBtnFilter} />

      {popularMovies && <MoviesList movies={popularMovies} />}

      {status === "error" && <ErrorMessage />}

      {status === "loading" && <Loader />}

      {status === "good" && totalPages > page && (
        <LoadMoreBtn onClick={handleLoadMoreButton} />
      )}

      {scrollPosition >= 500 && <UpButton />}
    </Main>
  );
};

export default Home;
