import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { searchCast } from "components/Api";

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    searchCast(movieId)
      .then((cast) => {
        console.log(cast.data.cast);
        setActors(cast.data.cast);
      })
      .catch(() => {
        console.log("error");
      });
  }, [movieId]);

  return (
    <div>
      <ul>
        {actors.map((el) => {
          const img = `https://image.tmdb.org/t/p/w500/${el.profile_path}`;

          return (
            <li key={el.id}>
              <img src={img} alt="" />
              <p>{el.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
