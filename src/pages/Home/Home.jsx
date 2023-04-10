import { Link } from "react-router-dom";

import { Main } from "./Home.styled";

const Home = ({ movies, getMoviesId }) => {
  const movieDetails = (e) => {
    getMoviesId(e.currentTarget.id);
  };

  return (
    <Main>
      <h2>Trending movies</h2>
      <ul>
        <li>
          <button>By week</button>
        </li>
        <li>
          <button>By dey</button>
        </li>
      </ul>
      <ul>
        {movies.map((movie) => {
          const { id } = movie;
          const img = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
          const linkTo = `/movies/${id}`;

          return (
            <li key={id}>
              <Link to={linkTo} onClick={movieDetails} id={id} type="button">
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </Main>
  );
};

export default Home;
