import styled from "@emotion/styled";
import { BsArrowLeftCircle } from "react-icons/bs";
import { AiOutlineFileImage } from "react-icons/ai";

const TitleBox = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 50px;
  min-height: 55px;
`;

const Title = styled.h2`
  padding: 10px;
  border: 2px solid #fff;
  border-radius: 25%;
  box-shadow: 0px 5px 0px 2px var(--primary-color);

  font-size: 26px;
  font-weight: 700;
`;

const Details = styled.div`
  display: flex;

  margin-bottom: 50px;
`;

const BackButton = styled.button`
  position: absolute;
  left: 40px;
  top: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;

  background: none;
  border: 3px solid #ffffff;
  border-radius: 50%;
  box-shadow: 0px 5px 0px 2px var(--primary-color),
    inset 0px 0px 0px 6px var(--primary-color);

  transition: transform var(--animation), box-shadow var(--animation);

  &:hover {
    transform: translateY(5px);
    box-shadow: none;
  }
`;

const BackButtonIcon = styled(BsArrowLeftCircle)`
  width: 32px;
  height: 32px;
  color: var(--primary-color);
`;

const PosterBox = styled.div`
  display: flex;
  flex-shrink: 0;
  border: 1px solid #fff;

  width: 300px;
  height: 450px;
`;

const Poster = styled.img`
  width: 100%;
  height: 100%;
`;

const NotFoundPoster = styled(AiOutlineFileImage)`
  height: 100%;
  width: 100%;
  color: var(--primary-color);
`;

export {
  TitleBox,
  Title,
  Details,
  BackButton,
  BackButtonIcon,
  PosterBox,
  Poster,
  NotFoundPoster,
};
