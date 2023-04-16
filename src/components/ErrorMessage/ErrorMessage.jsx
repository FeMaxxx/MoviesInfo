import PropTypes from "prop-types";
import { ErrorContainer, Title, Icon } from "./ErrorMessage.styled";

const ErrorMessage = ({ message }) => {
  return (
    <ErrorContainer>
      <Title>{message}</Title>
      <Icon />
    </ErrorContainer>
  );
};

export default ErrorMessage;

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
