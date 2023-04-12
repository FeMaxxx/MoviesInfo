import { useState, useEffect } from "react";
import Loader from "components/Loader/Loader";

import FilterButtons from "components/FilterButtons";
import PopularMoviesList from "components/PopularMoviesList";
import ErrorMessage from "components/ErrorMessage";

import { Main, Title, LoadMoreBtn, UpBtn, UpBtnIcon } from "./Home.styled";

import { searchPopularMovies } from "components/Api";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [moviesByDay, setMoviesByDay] = useState([]);
  const [moviesByWeek, setMoviesByWeek] = useState([]);

  const [filter, setFilter] = useState("week");
  const [status, setStatus] = useState("loading");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(2);

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
        console.log(movies.data);
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
        console.log(movies.data.results);
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
        console.log(movies.data);

        setTotalPages(movies.data.total_pages);
        setPopularMovies((prevState) => [...prevState, ...movies.data.results]);
        setStatus("good");
      })
      .catch(() => {
        console.log("error");
      });
  }, [filter, page]);

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

  const handleUpBtn = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Main>
      <Title>Trending movies</Title>
      <FilterButtons handleBtnFilter={handleBtnFilter} />

      {popularMovies && <PopularMoviesList popularMovies={popularMovies} />}

      {status === "error" && <ErrorMessage />}

      {status === "loading" && <Loader />}

      {status !== "loading" && status !== "error" && totalPages > page && (
        <>
          <LoadMoreBtn onClick={handleLoadMoreButton} type="button">
            Load more
          </LoadMoreBtn>
          <UpBtn onClick={handleUpBtn} type="button">
            <UpBtnIcon />
          </UpBtn>
        </>
      )}
    </Main>
  );
};

export default Home;
