import styled from "@emotion/styled";
import { FaSadTear } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 70vh;
`;

const Title = styled.h1`
  font-size: 50px;
  text-shadow: 2px 3px var(--primary-color);
`;

const Icon = styled(FaSadTear)`
  width: 130px;
  height: 130px;
  color: var(--primary-color);
`;

export { Container, Title, Icon };
