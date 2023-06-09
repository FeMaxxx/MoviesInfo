import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  max-width: 1300px;

  border-right: 3px solid var(--primary-color);
  border-left: 3px solid var(--primary-color);

  box-shadow: inset 0px 0px 40px 2px var(--primary-color);
`;

const Border = styled.div`
  border-top: 3px solid var(--primary-color);
`;

const Header = styled.header``;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 40px 0px;
`;

const Links = styled(NavLink)`
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;

  border: 3px solid #ffffff;
  border-radius: 50%;
  box-shadow: 0px 10px 0px 2px var(--primary-color);

  transition: transform var(--animation), box-shadow var(--animation);

  &:first-of-type {
    margin-right: 125px;
    text-align: start;
  }
  &:last-child {
    margin-left: 125px;
    text-align: end;
  }

  &:hover {
    box-shadow: none;
    transform: translateY(10px);
  }
`;

const HeaderLogo = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0px;
  width: 250px;
  padding-top: 15px;
  padding-bottom: 25px;

  font-family: "TiltPrism";
  background-color: var(--primary-bg-color);
  box-shadow: 0px 5px 60px 2px var(--primary-color);

  border: 3px solid var(--primary-color);
  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
  border-top: none;
`;

const Footer = styled.footer`
  height: 100px;
`;

const FooterLogo = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  bottom: 0px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 250px;
  padding-top: 25px;
  padding-bottom: 15px;

  font-family: "TiltPrism";
  background-color: var(--primary-bg-color);
  box-shadow: 0px 5px 60px 2px var(--primary-color);

  border: 3px solid var(--primary-color);
  border-top-left-radius: 30%;
  border-top-right-radius: 30%;
  border-bottom: none;
`;

export {
  Container,
  Border,
  Header,
  Nav,
  Links,
  HeaderLogo,
  Footer,
  FooterLogo,
};
