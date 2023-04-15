import styled from "@emotion/styled";
import { FaSadTear } from "react-icons/fa";

const ErrorContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
  text-align: center;
`;

const Title = styled.h3`
  margin-bottom: 50px;
  font-size: 40px;
  text-shadow: 2px 3px var(--primary-color);
`;

const Icon = styled(FaSadTear)`
  width: 130px;
  height: 130px;
  color: var(--primary-color);
`;

export { ErrorContainer, Title, Icon };
