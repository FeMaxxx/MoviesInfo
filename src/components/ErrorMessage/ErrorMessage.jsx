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
