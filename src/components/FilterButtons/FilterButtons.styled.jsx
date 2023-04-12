import styled from "@emotion/styled";

const ButtonsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-bottom: 50px;
`;

const Buttons = styled.button`
  width: 80px;
  height: 40px;
  background: none;
  border: 3px solid #ffffff;
  border-radius: 50%;
  box-shadow: 0px 7px 0px 2px var(--primary-color);

  font-size: 14px;
  font-weight: 700;

  transition: transform var(--animation), box-shadow var(--animation);

  &:hover {
    transform: translateY(7px);
    box-shadow: none;
  }
`;

export { ButtonsList, Buttons };
