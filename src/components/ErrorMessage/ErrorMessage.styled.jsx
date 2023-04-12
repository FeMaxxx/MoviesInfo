import styled from "@emotion/styled";
import { FaSadTear } from "react-icons/fa";

const ErrorContainer = styled.div`
  margin-top: 100px;
  text-align: center;
`;

const Title = styled.h3`
  margin-bottom: 50px;
  font-size: 50px;
  text-shadow: 2px 3px var(--primary-color);
`;

const Icon = styled(FaSadTear)`
  width: 150px;
  height: 150px;
  color: var(--primary-color);
`;

export { ErrorContainer, Title, Icon };
