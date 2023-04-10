import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1200px;
  border: 3px solid var(--primary-border-color);
  border-top: none;
`;

const Border = styled.div`
  border-top: 3px solid var(--primary-border-color);
`;

const Header = styled.header``;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 30px 0px;
`;

const Links = styled(NavLink)`
  width: 180px;

  &:first-of-type {
    text-align: start;
  }
  &:last-child {
    text-align: end;
  }

  &.active {
    border: 1px solid blue;
  }
`;

const GG = styled.div`
  background-color: var(--primary-bg-color);
  position: absolute;
  top: 0px;
  display: flex;
  flex-direction: column;
  width: 250px;
  align-items: center;
  padding: 20px 10px;

  border: 3px solid var(--primary-border-color);
  border-top: none;

  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
`;

export { Container, Border, Header, Nav, Links, GG };
