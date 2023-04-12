import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { searchReviews } from "components/Api";

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    searchReviews(movieId)
      .then((rev) => {
        console.log(rev.data.results);
        setReviews(rev.data.results);
      })
      .catch(() => {
        console.log("error");
      });
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => {
            return (
              <li key={review.id}>
                <h4>{review.author}</h4>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>opps</p>
      )}
    </div>
  );
};

export default Reviews;
