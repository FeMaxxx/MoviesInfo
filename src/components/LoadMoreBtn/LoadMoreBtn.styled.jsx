import styled from "@emotion/styled";

const Button = styled.button`
  margin-top: 80px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  width: 120px;
  height: 50px;
  background: none;
  border: 3px solid #ffffff;
  border-radius: 50%;
  box-shadow: 0px 7px 0px 2px var(--primary-color);

  font-size: 16px;
  font-weight: 700;

  transition: transform var(--animation), box-shadow var(--animation);

  &:hover {
    transform: translateY(7px);
    box-shadow: none;
  }
`;

export { Button };
