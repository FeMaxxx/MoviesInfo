import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { searchMoviesByName } from "components/Api";

const Movies = () => {
  const { register, handleSubmit } = useForm();
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState(null);

  useEffect(() => {
    if (!movieName) return;

    searchMoviesByName(movieName)
      .then((movies) => {
        setMovies(movies.data.results);
        console.log(movies.data.results);
      })
      .catch(() => {
        console.log("error");
      });
  }, [movieName]);

  const onSubmit = (e) => {
    setMovieName(e.movieName);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input {...register("movieName")} type="text"></input>;
        </label>

        <button type="submit">search</button>
      </form>

      {movies.length > 0 ? (
        <ul>
          {movies.map((movie) => {
            const { id } = movie;
            const linkTo = `/movies/${id}`;
            return (
              <li key={id}>
                <Link to={linkTo} type="button">
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>sorry</p>
      )}
    </>
  );
};

export default Movies;
