import styled from "@emotion/styled";
import { TbMoodSearch } from "react-icons/tb";
import { BsKeyboard } from "react-icons/bs";
import { RiMovieLine } from "react-icons/ri";

const IdleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  margin-top: 130px;
`;

const Icon = styled(TbMoodSearch)`
  width: 150px;
  height: 150px;
  color: var(--primary-color);
`;

const Keyboard = styled(BsKeyboard)`
  width: 150px;
  height: 150px;
  color: var(--primary-color);
`;

const FilmReel = styled(RiMovieLine)`
  width: 150px;
  height: 150px;
  color: var(--primary-color);
`;

export { IdleContainer, Icon, Keyboard, FilmReel };
