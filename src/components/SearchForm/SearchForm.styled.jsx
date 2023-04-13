import styled from "@emotion/styled";
import { IoSearchCircleOutline } from "react-icons/io5";

const Form = styled.form`
  display: flex;
  justify-content: center;

  margin-bottom: 50px;
`;

const Input = styled.input`
  cursor: text;
  margin-right: 20px;

  padding: 0px 15px;
  font-size: 18px;

  border: 3px solid #fff;
  border-radius: 25%;

  box-shadow: 0px 5px 0px 2px var(--primary-color);
  background: none;
  height: 45px;
  width: 200px;
`;

const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;

  background: none;
  border: 3px solid #ffffff;
  border-radius: 50%;
  box-shadow: 0px 5px 0px 2px var(--primary-color),
    inset 0px 0px 0px 6px var(--primary-color);

  transition: transform var(--animation), box-shadow var(--animation);

  &:hover {
    transform: translateY(5px);
    box-shadow: none;
  }
`;

const SearchIcon = styled(IoSearchCircleOutline)`
  display: block;
  color: var(--primary-color);
  width: 41px;
  height: 41px;
`;

export { Form, Input, SearchButton, SearchIcon };
