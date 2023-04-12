import { Link, Outlet } from "react-router-dom";
import {
  Container,
  Border,
  Header,
  Nav,
  Links,
  HeaderLogo,
  Footer,
  FooterLogo,
} from "./SharedLayout.styled";

const SharedLayout = () => {
  const dropButton = (e) => {
    if (e.currentTarget.classList.contains("active")) {
      const button = e.currentTarget;
      button.classList.add("drop");

      setTimeout(() => {
        button.classList.remove("drop");
      }, 1000);
    }
  };

  return (
    <Container>
      <Border></Border>
      <Header>
        <Nav>
          <Links onClick={dropButton} to="/" end>
            Home
          </Links>

          <HeaderLogo>
            <Link to="/">
              <h1>Movies.Info</h1>
            </Link>
          </HeaderLogo>

          <Links onClick={dropButton} to="/movies">
            Movies
          </Links>
        </Nav>
      </Header>
      <Outlet />
      <Footer>
        <FooterLogo>
          <Link to="/">
            <h1>Movies.Info</h1>
          </Link>
        </FooterLogo>
      </Footer>
      <Border></Border>
    </Container>
  );
};

export default SharedLayout;
