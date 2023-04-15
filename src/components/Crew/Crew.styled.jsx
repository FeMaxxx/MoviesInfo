import styled from "@emotion/styled";
import { FcManager } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";

const Container = styled.div``;

const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  gap: 20px;
`;

const Item = styled.li`
  padding-bottom: 10px;
  text-align: center;
  width: calc((1214px - 100px) / 6);
  min-height: 330px;

  border: 1px solid #fff;
`;

const Img = styled.img`
  width: 100%;
`;

const Name = styled.h4`
  margin-top: 5px;
  margin-bottom: 5px;
  padding-right: 10px;
  padding-left: 10px;

  font-size: 16px;
`;

const Character = styled.p`
  padding-right: 10px;
  padding-left: 10px;

  font-size: 14px;
  font-weight: 400;
`;

const NotFoundManPhoto = styled(FcManager)`
  height: 275px;
  width: 100%;
`;

const NotFoundWomanPhoto = styled(FcBusinesswoman)`
  height: 275px;
  width: 100%;
`;

const LoaderBox = styled.div`
  padding-bottom: 60vh;
`;

export {
  Container,
  CastList,
  Item,
  Img,
  Name,
  Character,
  NotFoundManPhoto,
  NotFoundWomanPhoto,
  LoaderBox,
};
