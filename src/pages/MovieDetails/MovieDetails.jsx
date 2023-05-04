import { useEffect } from "react";
import { useParams, Outlet, useNavigate, useLocation } from "react-router-dom";
import { Suspense } from "react";
import Loader from "components/Loader";
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
import { useDispatch } from "react-redux";
import { searchMoviesDetails } from "redux/movies/operations";
import { useMovies } from "hooks/useMovies";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const locationString = location.state?.from ?? "/movies";
  const navigate = useNavigate();
  const { movieId } = useParams();

  const { movieDetails, loading } = useMovies();
  const img = `https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    dispatch(searchMoviesDetails(movieId));
  }, [dispatch, movieId]);

  const goBack = () => {
    navigate(locationString, { replace: true });
  };

  return (
    <>
      {loading && <Loader />}

      <Main>
        {movieDetails && !loading && (
          <>
            <TitleBox>
              <Title>{movieDetails.title}</Title>
            </TitleBox>

            <Details>
              <BackButton onClick={goBack} type="button">
                <BackButtonIcon />
              </BackButton>

              <PosterBox>
                {movieDetails.poster_path ? (
                  <Poster src={img} alt="Poster" />
                ) : (
                  <NotFoundPoster />
                )}
              </PosterBox>

              <AllMovieInfo movieDetails={movieDetails} />
            </Details>

            <AdditionalInfo locationString={locationString} />
          </>
        )}

        <Suspense fallback={<SuspenseBox />}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

export default MovieDetails;
