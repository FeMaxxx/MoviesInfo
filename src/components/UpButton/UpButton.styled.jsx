import styled from "@emotion/styled";
import { BsArrowUpCircle } from "react-icons/bs";

const UpBtn = styled.button`
  position: absolute;
  right: 70px;
  bottom: -50px;

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

export { UpBtn, UpBtnIcon };
