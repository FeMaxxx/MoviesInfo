import { format } from "date-fns";
import {
  AllInfo,
  InfoBox,
  Info,
  Genres,
  NotFoundIcon,
  Overview,
} from "./AllMovieInfo.styled";

const AllMovieInfo = ({ movieDetails }) => {
  const { vote_average, tagline, release_date, genres, runtime, overview } =
    movieDetails;

  let date = null;
  if (release_date) {
    date = format(new Date(release_date), "dd MMMM yyyy");
  }

  return (
    <AllInfo>
      <InfoBox>
        <h3>Vote average:</h3>
        {vote_average ? (
          <Info>{vote_average.toFixed(1)}</Info>
        ) : (
          <NotFoundIcon />
        )}
      </InfoBox>

      <InfoBox>
        <h3>Tagline:</h3>
        {tagline ? <Info>{tagline}</Info> : <NotFoundIcon />}
      </InfoBox>

      <InfoBox>
        <h3>Release date:</h3>
        {date ? <Info>{date}</Info> : <NotFoundIcon />}
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
  );
};

export default AllMovieInfo;
