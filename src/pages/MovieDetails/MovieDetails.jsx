import { useState, useEffect } from "react";
import { useParams, Outlet, useNavigate, useLocation } from "react-router-dom";
import { Suspense } from "react";
import { searchMoviesDetails } from "Api";

import Main from "components/Main";
import AdditionalInfo from "components/AdditionalInfo";
import AllMovieInfo from "components/AllMovieInfo";
import SuspenseBox from "components/SuspenseBox";

import {
  TitleBox,
  Title,
  Details,
  BackButton,
  BackButtonIcon,
  PosterBox,
  Poster,
  NotFoundPoster,
} from "./MovieDetails.styled";

const MovieDetails = () => {
  const location = useLocation();
  const locationString = location.state?.from ?? "/movies";
  const navigate = useNavigate();
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState([]);
  const img = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`;

  useEffect(() => {
    searchMoviesDetails(movieId)
      .then((movie) => {
        setMovieDetails(movie.data);
      })
      .catch(() => {
        console.log("error");
      });
  }, [movieId]);

  const goBack = () => {
    navigate(locationString, { replace: true });
  };

  const { title, poster_path } = movieDetails;

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

        <AllMovieInfo movieDetails={movieDetails} />
      </Details>

      <AdditionalInfo locationString={locationString} />

      <Suspense fallback={<SuspenseBox />}>
        <Outlet />
      </Suspense>
    </Main>
  );
};

export default MovieDetails;
