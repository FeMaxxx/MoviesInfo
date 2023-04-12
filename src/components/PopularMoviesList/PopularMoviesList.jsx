import {
  MoviesList,
  MovieItem,
  MovieLink,
  Poster,
  MovieTitle,
} from "./PopularMoviesList.styled";

const PopularMoviesList = ({ popularMovies }) => {
  return (
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
  );
};

export default PopularMoviesList;
