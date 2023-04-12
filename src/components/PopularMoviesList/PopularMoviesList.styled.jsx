import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const MoviesList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

const MovieItem = styled.li`
  width: calc((1214px - 90px) / 4);
  text-align: center;
  border: 1px solid #ffffff;

  box-shadow: 0px 10px 2px 2px var(--primary-color);

  transition: transform var(--animation), box-shadow var(--animation);

  &:hover {
    transform: translateY(10px);
    box-shadow: none;
  }
`;

const MovieLink = styled(Link)`
  display: block;

  height: 100%;
`;

const Poster = styled.img`
  width: 100%;
`;

const MovieTitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
  font-size: 16px;
  height: 60px;
`;

export { MoviesList, MovieItem, MovieLink, Poster, MovieTitle };
