import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Suspense } from "react";
import SuspenseBox from "components/SuspenseBox";
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
  const location = useLocation();

  useEffect(() => {
    const homeBtn = document.querySelector("[data-home]");
    const moviesBtn = document.querySelector("[data-movies]");

    if (location.pathname === "/") {
      homeBtn.classList.add("active-page");
    } else if (location.pathname === "/movies") {
      moviesBtn.classList.add("active-page");
    } else {
      homeBtn.classList.remove("active-page");
      moviesBtn.classList.remove("active-page");
    }
  }, [location.pathname]);

  const dropButton = (e) => {
    if (e.currentTarget.classList.contains("active-page")) {
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
          <Links onClick={dropButton} to="/" end data-home>
            Home
          </Links>

          <HeaderLogo>
            <Link to="/">
              <h1>Movies.Info</h1>
            </Link>
          </HeaderLogo>

          <Links onClick={dropButton} to="/movies" data-movies>
            Movies
          </Links>
        </Nav>
      </Header>

      <Suspense fallback={<SuspenseBox />}>
        <Outlet />
      </Suspense>

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
