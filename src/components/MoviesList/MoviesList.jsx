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

  return (
    <Movies>
      {movies.map((movie) => {
        const { id, poster_path } = movie;
        const img = `https://image.tmdb.org/t/p/w500/${poster_path}`;
        const linkTo = `/movies/${id}`;

        return (
          <MovieItem key={id}>
            <MovieLink
              to={linkTo}
              state={{ from: locationString }}
              type="button"
            >
              <Date>{movie.release_date}</Date>
              {poster_path ? (
                <Poster src={img} alt="MoviePoster" />
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
