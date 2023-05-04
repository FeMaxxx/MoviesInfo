import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import {
  Movies,
  MovieItem,
  Date,
  MovieLink,
  Poster,
  NotFoundPoster,
  MovieTitle,
} from "./MoviesList.styled";

const MoviesList = ({ movies }) => {
  const location = useLocation();
  const locationString = `${location.pathname}${location.search}`;

  const setScroll = () => {
    localStorage.setItem("scroll", window.scrollY);
  };

  return (
    <Movies>
      {movies.map((movie, index) => {
        const { id, poster_path } = movie;
        const img = `https://image.tmdb.org/t/p/w500/${poster_path}`;
        const linkTo = `/movies/${id}`;

        return (
          <MovieItem key={index}>
            <MovieLink
              onClick={setScroll}
              to={linkTo}
              state={{ from: locationString }}
              type="button"
            >
              <Date>{movie.release_date}</Date>
              {poster_path ? (
                <Poster src={img} alt="MoviePoster" loading="lazy" />
              ) : (
                <NotFoundPoster />
              )}
              <MovieTitle>{movie.title}</MovieTitle>
            </MovieLink>
          </MovieItem>
        );
      })}
    </Movies>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
