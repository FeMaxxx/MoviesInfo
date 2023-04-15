import { Container, Title, ButtonList, Button } from "./AdditionalInfo.styled";

const AdditionalInfo = ({ locationString }) => {
  return (
    <Container>
      <Title>Additional information</Title>

      <ButtonList>
        <li>
          <Button state={{ from: locationString }} to="cast" type="button">
            Show cast
          </Button>
        </li>
        <li>
          <Button state={{ from: locationString }} to="crew" type="button">
            Show cast
          </Button>
        </li>
        <li>
          <Button state={{ from: locationString }} to="reviews" type="button">
            Show reviews
          </Button>
        </li>
      </ButtonList>
    </Container>
  );
};

export default AdditionalInfo;
