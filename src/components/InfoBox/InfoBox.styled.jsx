import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  font-size: 16px;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export { Container };
