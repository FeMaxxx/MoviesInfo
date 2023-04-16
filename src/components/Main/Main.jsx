import PropTypes from "prop-types";
import { MainContainer } from "./Main.styled";

const Main = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Main;

Main.propTypes = {
  children: PropTypes.any.isRequired,
};
