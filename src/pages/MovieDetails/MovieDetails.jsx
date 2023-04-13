import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

import Main from "components/Main";

import { searchMoviesDetails } from "components/Api";

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    searchMoviesDetails(movieId)
      .then((movie) => {
        setMovieDetails(movie.data);
        console.log(movie.data);
      })
      .catch(() => {
        console.log("error");
      });
  }, [movieId]);

  const img = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`;

  return (
    <Main>
      <div>
        <h2>{movieDetails.title}</h2>
        <img src={img} alt="Poster" />

        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast" type="button">
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" type="button">
              reviews
            </Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </Main>
  );
};

export default MovieDetails;
