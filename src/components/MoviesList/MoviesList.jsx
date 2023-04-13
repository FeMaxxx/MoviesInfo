import {
  Movies,
  MovieItem,
  MovieLink,
  Poster,
  NotFoundPoster,
  MovieTitle,
} from "./MoviesList.styled";

const MoviesList = ({ movies }) => {
  return (
    <Movies>
      {movies.map((movie) => {
        const { id, poster_path } = movie;
        const img = `https://image.tmdb.org/t/p/w500/${poster_path}`;
        const linkTo = `/movies/${id}`;

        return (
          <MovieItem key={id}>
            <MovieLink to={linkTo} type="button">
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
