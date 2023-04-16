import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchCastAndCrew } from "Api";
import Loader from "components/Loader";
import ErrorMessage from "components/ErrorMessage";

import {
  Container,
  CastList,
  Item,
  Img,
  Name,
  Character,
  NotFoundManPhoto,
  NotFoundWomanPhoto,
  LoaderBox,
} from "./Cast.styled";

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    setStatus("loading");

    searchCastAndCrew(movieId)
      .then((cast) => {
        console.log(cast.data);
        if (cast.data.cast.length !== 0) {
          setActors(cast.data.cast);
          setStatus("good");
        } else {
          setStatus("error");
        }
      })
      .catch(() => {
        setStatus("error");
      });
  }, [movieId]);

  return (
    <Container>
      {status === "loading" && (
        <LoaderBox>
          <Loader />
        </LoaderBox>
      )}

      {actors && (
        <CastList>
          {actors.map((el) => {
            const img = `https://image.tmdb.org/t/p/w500/${el.profile_path}`;

            return (
              <Item key={el.id}>
                {el.profile_path && <Img src={img} alt="Piple" />}
                {el.gender === 2 && !el.profile_path && <NotFoundManPhoto />}
                {el.gender === 1 && !el.profile_path && <NotFoundWomanPhoto />}
                {el.gender === 0 && !el.profile_path && <NotFoundManPhoto />}

                <Name>{el.name}</Name>
                <Character>{el.character}</Character>
              </Item>
            );
          })}
        </CastList>
      )}

      {status === "error" && (
        <ErrorMessage message={"Sorry, we didn't find this information"} />
      )}
    </Container>
  );
};

export default Cast;
