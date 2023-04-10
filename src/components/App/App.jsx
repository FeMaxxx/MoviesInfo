import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import SharedLayout from "components/SharedLayout";
import Home from "pages/Home";
import Movies from "pages/Movies";
import MovieDetails from "pages/MovieDetails";
import Reviews from "components/Reviews";
import Cast from "components/Cast";

import { searchPopularMoviesByDay, searchMoviesDetails } from "components/Api";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieId, setMovieId] = useState(null);

  useEffect(() => {
    searchPopularMoviesByDay(1)
      .then((movies) => {
        setMovies(movies.data.results);
        console.log(movies.data.results);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  useEffect(() => {
    if (!movieId) return;

    searchMoviesDetails(movieId)
      .then((movie) => {
        setMovieDetails();
        console.log(movie);
      })
      .catch(() => {
        console.log("error");
      });
  }, [movieId]);

  const getMoviesId = (id) => {
    setMovieId(id);
  };

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={<Home movies={movies} getMoviesId={getMoviesId} />}
        />
        <Route path="/movies" element={<Movies />} />
        <Route
          path="movies/:movieId"
          element={<MovieDetails movieDetails={movieDetails} />}
        >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

export { App };
