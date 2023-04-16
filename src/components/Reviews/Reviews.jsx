import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { searchReviews } from "Api";
import ErrorMessage from "components/ErrorMessage/ErrorMessage";

import Loader from "components/Loader/Loader";

import {
  Container,
  ReviewsList,
  Item,
  Author,
  DateText,
  Review,
  LoaderBox,
} from "./Reviews.styled";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    setStatus("loading");

    searchReviews(movieId)
      .then((rev) => {
        if (rev.data.results.length !== 0) {
          setReviews(rev.data.results);
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

      {reviews && (
        <ReviewsList>
          {reviews.map((review) => {
            const date = format(new Date(review.created_at), "dd MMMM yyyy");

            return (
              <Item key={review.id}>
                <Author>{review.author}</Author>
                <DateText>{date}</DateText>
                <Review>{review.content}</Review>
              </Item>
            );
          })}
        </ReviewsList>
      )}

      {status === "error" && (
        <ErrorMessage message={"Sorry, we didn't find this information"} />
      )}
    </Container>
  );
};

export default Reviews;
