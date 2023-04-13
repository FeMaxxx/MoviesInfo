import { useState, useEffect } from "react";
import { searchMoviesByName } from "components/Api";
import { useSearchParams } from "react-router-dom";

import Main from "components/Main";
import SearchForm from "components/SearchForm";
import Idle from "components/Idle";
import ErrorMessage from "components/ErrorMessage";
import PopularMoviesList from "components/MoviesList";
import Loader from "components/Loader/Loader";
import LoadMoreBtn from "components/LoadMoreBtn";
import UpButton from "components/UpButton";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState(null);
  const [status, setStatus] = useState("idle");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get("query");

  useEffect(() => {
    if (params) {
      setMovieName(params);
      setStatus("loading");
    }
  }, [params]);

  useEffect(() => {
    if (!movieName) return;

    searchMoviesByName(movieName, page)
      .then((movies) => {
        setMovies((prevState) => [...prevState, ...movies.data.results]);
        setTotalPages(movies.data.total_pages);
        if (movies.data.results.length) {
          setStatus("good");
        } else {
          setStatus("error");
        }
      })
      .catch(() => {
        setStatus("error");
      });
  }, [movieName, page]);

  useEffect(() => {
    const setScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", setScroll);

    return () => {
      window.removeEventListener("scroll", setScroll);
    };
  }, []);

  const onSubmit = (e) => {
    const name = e.movieName.toLowerCase().trim();

    if (name === movieName || name === "") return;
    setSearchParams(name !== "" ? { query: name } : {});
    setStatus("loading");
    setMovies([]);
    setPage(1);
    setMovieName(name);
  };

  const handleLoadMoreButton = () => {
    setPage(page + 1);
    setStatus("loading");
  };

  return (
    <Main>
      <SearchForm onSubmit={onSubmit} />

      {movies && <PopularMoviesList movies={movies} />}

      {status === "idle" && <Idle />}

      {status === "error" && <ErrorMessage />}

      {status === "loading" && <Loader />}

      {status === "good" && totalPages > page && (
        <LoadMoreBtn onClick={handleLoadMoreButton} />
      )}

      {scrollPosition >= 500 && <UpButton />}
    </Main>
  );
};

export default Movies;
