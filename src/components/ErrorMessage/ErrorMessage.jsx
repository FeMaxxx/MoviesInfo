import { ErrorContainer, Title, Icon } from "./ErrorMessage.styled";

const ErrorMessage = () => {
  return (
    <ErrorContainer>
      <Title>Sorry, we didn't find any movie</Title>
      <Icon />
    </ErrorContainer>
  );
};

export default ErrorMessage;
