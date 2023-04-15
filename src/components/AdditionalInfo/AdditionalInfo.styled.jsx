import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h3`
  margin-bottom: 15px;

  font-size: 22px;
`;

const ButtonList = styled.ul`
  display: flex;

  gap: 30px;
`;

const Button = styled(NavLink)`
  display: flex;
  padding: 5px;
  background: none;
  border: 3px solid #ffffff;
  border-radius: 25%;
  box-shadow: 0px 5px 0px 2px var(--primary-color);

  font-size: 14px;

  transition: transform var(--animation), box-shadow var(--animation);

  &:hover {
    transform: translateY(5px);
    box-shadow: none;
  }

  &.active {
    transform: translateY(5px);
    box-shadow: none !important;
    cursor: default;
  }
`;

export { Container, Title, ButtonList, Button };
