import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { AiOutlineFileImage } from "react-icons/ai";

const Movies = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

const MovieItem = styled.li`
  position: relative;
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

const Date = styled.div`
  position: absolute;
  width: 80px;
  top: 0px;
  left: 0px;
  font-size: 14px;
  border-right: 1px solid #fff;
  border-bottom: 1px solid #fff;
  background-color: var(--primary-bg-color);
`;

const MovieLink = styled(Link)`
  display: block;
  height: 100%;
`;

const Poster = styled.img`
  width: 100%;
  height: 418.5px;
`;

const NotFoundPoster = styled(AiOutlineFileImage)`
  height: 418.5px;
  width: 100%;
  color: var(--primary-color);
`;

const MovieTitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
  font-size: 16px;
  height: 60px;
`;

export {
  Movies,
  MovieItem,
  Date,
  MovieLink,
  Poster,
  NotFoundPoster,
  MovieTitle,
};
