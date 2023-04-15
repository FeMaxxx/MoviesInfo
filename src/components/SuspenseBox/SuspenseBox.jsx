import Loader from "components/Loader";

import { Container } from "./SuspenseBox.styled";

const SuspenseBox = () => {
  return (
    <Container>
      <Loader />
    </Container>
  );
};

export default SuspenseBox;
