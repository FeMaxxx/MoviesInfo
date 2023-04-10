import { Link, Outlet } from "react-router-dom";
import {
  Container,
  Border,
  Header,
  Nav,
  Links,
  GG,
} from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <Container>
      <Border></Border>
      <Header>
        <Nav>
          <Links to="/" end>
            Home
          </Links>
          <GG>
            <Link to="/">
              <h1>MoviesFinder</h1>
            </Link>
          </GG>
          <Links to="/movies">Movies</Links>
        </Nav>
      </Header>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
