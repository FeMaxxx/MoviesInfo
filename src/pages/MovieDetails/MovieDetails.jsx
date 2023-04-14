import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Main from "components/Main";
import InfoBox from "components/InfoBox";

import {
  TitleBox,
  Title,
  Details,
  BackButton,
  BackButtonIcon,
  PosterBox,
  Poster,
  NotFoundPoster,
  AllInfo,
  Info,
  Genres,
  NotFoundIcon,
  Overview,
} from "./MovieDetails.styled";

import { searchMoviesDetails } from "components/Api";

const MovieDetails = () => {
  const location = useLocation();
  const locationString = location.state?.from ?? "/movies";

  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState([]);
  const img = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`;

  useEffect(() => {
    searchMoviesDetails(movieId)
      .then((movie) => {
        console.log(movie.data);
        setMovieDetails(movie.data);
      })
      .catch(() => {
        console.log("error");
      });
  }, [movieId]);

  const goBack = () => {
    navigate(locationString, { replace: true });
  };

  const {
    title,
    poster_path,
    vote_average,
    tagline,
    release_date,
    genres,
    runtime,
    overview,
  } = movieDetails;

  return (
    <Main>
      <TitleBox>
        <Title>{title}</Title>
      </TitleBox>

      <Details>
        <BackButton onClick={goBack} type="button">
          <BackButtonIcon />
        </BackButton>

        <PosterBox>
          {poster_path ? <Poster src={img} alt="Poster" /> : <NotFoundPoster />}
        </PosterBox>

        <AllInfo>
          <InfoBox>
            <h3>Vote average:</h3>
            {vote_average ? <Info>{vote_average}</Info> : <NotFoundIcon />}
          </InfoBox>

          <InfoBox>
            <h3>Tagline:</h3>
            {tagline ? <Info>{tagline}</Info> : <NotFoundIcon />}
          </InfoBox>

          <InfoBox>
            <h3>Release date:</h3>
            {release_date ? <Info>{release_date}</Info> : <NotFoundIcon />}
          </InfoBox>

          <InfoBox>
            <h3>Genres:</h3>
            {genres && genres.length !== 0 ? (
              <Genres>
                {genres.map((genre, index) => {
                  return (
                    <li key={index}>
                      <Info>{genre.name}</Info>
                    </li>
                  );
                })}
              </Genres>
            ) : (
              <NotFoundIcon />
            )}
          </InfoBox>

          <InfoBox>
            <h3>Runtime:</h3>
            {runtime ? <Info>{runtime} min.</Info> : <NotFoundIcon />}
          </InfoBox>

          <InfoBox>
            <h3>Overview:</h3>
            {overview ? <Overview>{overview}</Overview> : <NotFoundIcon />}
          </InfoBox>
        </AllInfo>
      </Details>

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
      <Outlet />
    </Main>
  );
};

export default MovieDetails;
