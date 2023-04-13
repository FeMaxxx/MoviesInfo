import styled from "@emotion/styled";
import { TbMoodSearch } from "react-icons/tb";

const IdleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 130px;
`;

const Icon = styled(TbMoodSearch)`
  width: 150px;
  height: 150px;
  color: var(--primary-color);
`;

export { IdleContainer, Icon };
