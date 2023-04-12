import styled from "@emotion/styled";
import { BsArrowUpCircle } from "react-icons/bs";

const Main = styled.main`
  position: relative;
  padding: 40px 40px;

  min-height: 70vh;
`;

const Title = styled.h1`
  margin-bottom: 30px;

  text-align: center;
  font-size: 36px;
`;

const LoadMoreBtn = styled.button`
  margin-top: 80px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  width: 120px;
  height: 50px;
  background: none;
  border: 3px solid #ffffff;
  border-radius: 50%;
  box-shadow: 0px 7px 0px 2px var(--primary-color);

  font-size: 16px;
  font-weight: 700;

  transition: transform var(--animation), box-shadow var(--animation);

  &:hover {
    transform: translateY(7px);
    box-shadow: none;
  }
`;

const UpBtn = styled.button`
  position: absolute;
  right: 120px;
  bottom: 0px;

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

const UpBtnIcon = styled(BsArrowUpCircle)`
  width: 32px;
  height: 32px;
  color: var(--primary-color);
`;

export { Main, Title, LoadMoreBtn, UpBtn, UpBtnIcon };
