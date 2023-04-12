import styled from "@emotion/styled";

import { Link } from "react-router-dom";

const Main = styled.main`
  padding: 40px 40px;

  min-height: 800px;
`;

const Title = styled.h1`
  margin-bottom: 30px;

  text-align: center;
  font-size: 30px;
`;

const ButtonsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 100px;
`;

const Buttons = styled.button`
  margin-bottom: 40px;
  width: 80px;
  height: 40px;
  background: none;
  border: 3px solid var(--primary-border-color);
  border-radius: 50%;
  box-shadow: 0px 7px 0px 2px var(--primary-border-color);

  font-size: 14px;
  font-weight: 700;

  transition: transform var(--animation), box-shadow var(--animation);

  &:hover {
    transform: translateY(7px);
    box-shadow: none;
  }
`;

const MoviesList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

const MovieItem = styled.li`
  width: calc((1214px - 90px) / 4);
  text-align: center;
  border: 1px solid var(--primary-border-color);

  box-shadow: 0px 10px 2px 2px var(--primary-border-color);

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

const LoadMoreBtn = styled.button`
  margin-top: 80px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  width: 120px;
  height: 50px;
  background: none;
  border: 3px solid var(--primary-border-color);
  border-radius: 50%;
  box-shadow: 0px 7px 0px 2px var(--primary-border-color);

  font-size: 16px;
  font-weight: 700;

  transition: transform var(--animation), box-shadow var(--animation);

  &:hover {
    transform: translateY(7px);
    box-shadow: none;
  }
`;

export {
  Main,
  Title,
  ButtonsList,
  Buttons,
  MoviesList,
  MovieItem,
  MovieLink,
  Poster,
  MovieTitle,
  LoadMoreBtn,
};
