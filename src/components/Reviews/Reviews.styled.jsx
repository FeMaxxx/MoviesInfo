import styled from "@emotion/styled";

const Container = styled.div``;

const ReviewsList = styled.ul``;

const Item = styled.li`
  &:not(:last-child) {
    padding-bottom: 10px;
    border-bottom: 2px solid var(--primary-color);
    margin-bottom: 10px;
  }
`;

const Author = styled.h4`
  margin-bottom: 5px;

  font-size: 18px;
  text-decoration: underline;
  text-decoration-color: var(--primary-color);
`;

const DateText = styled.p`
  margin-bottom: 5px;

  font-size: 16px;
  font-weight: 400;
`;

const Review = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

const LoaderBox = styled.div`
  padding-bottom: 50vh;
`;

export { Container, ReviewsList, Item, Author, DateText, Review, LoaderBox };
