import { useState, useEffect, useRef } from "react";
import Loader from "components/Loader/Loader";

import {
  Main,
  Title,
  ButtonsList,
  Buttons,
  MoviesList,
  MovieItem,
  MovieLink,
  Poster,
  MovieTitle,
  LoadMoreBtn,
} from "./Home.styled";

import { searchPopularMovies } from "components/Api";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [filter, setFilter] = useState("week");
  const [status, setStatus] = useState("loading");
  const [page, setPage] = useState(1);
  const ref = useRef(false);

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
    setStatus("loading");
    searchPopularMovies(filter, page)
      .then((movies) => {
        console.log(movies.data.results);

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
    } else {
      setFilter("day");
    }

    ref.current = false;
    setPopularMovies([]);
    setPage(1);
  };

  const handleLoadMoreButton = () => {
    setPage(page + 1);
  };

  return (
    <Main>
      <Title>Trending movies</Title>
      <ButtonsList>
        <li>
          <Buttons onClick={handleBtnFilter} data-btn-week>
            By week
          </Buttons>
        </li>
        <li>
          <Buttons onClick={handleBtnFilter} data-btn-day>
            By dey
          </Buttons>
        </li>
      </ButtonsList>

      {status === "loading" && <Loader />}

      {popularMovies && (
        <>
          <MoviesList>
            {popularMovies.map((movie) => {
              const { id } = movie;
              const img = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
              const linkTo = `/movies/${id}`;

              return (
                <MovieItem key={id}>
                  <MovieLink to={linkTo} type="button">
                    <Poster src={img} alt="MoviePoster" />
                    <MovieTitle>{movie.title}</MovieTitle>
                  </MovieLink>
                </MovieItem>
              );
            })}
          </MoviesList>
          <LoadMoreBtn onClick={handleLoadMoreButton} type="button">
            Load more
          </LoadMoreBtn>
        </>
      )}
    </Main>
  );
};

export default Home;
