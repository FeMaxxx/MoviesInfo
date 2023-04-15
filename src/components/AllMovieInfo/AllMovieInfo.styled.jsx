import styled from "@emotion/styled";
import { MdOutlineSearchOff } from "react-icons/md";

const AllInfo = styled.div`
  margin-left: 40px;

  width: 100%;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  font-size: 16px;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

const Info = styled.p`
  padding: 6px;
  border: 2px solid #fff;
  border-radius: 25%;

  box-shadow: 0px 0px 8px 1px var(--primary-color);
`;

const Overview = styled.p`
  max-width: 500px;
  padding: 10px;
  border: 2px solid #fff;
  border-radius: 5%;

  box-shadow: 0px 0px 8px 1px var(--primary-color);
`;

const Genres = styled.ul`
  display: flex;
  gap: 20px;
`;

const NotFoundIcon = styled(MdOutlineSearchOff)`
  border: 2px solid #fff;
  border-radius: 25%;
  padding: 5px;
  box-shadow: 0px 0px 8px 1px var(--primary-color);
  width: 38px;
  height: 38px;
  color: var(--primary-color);
`;

export { AllInfo, InfoBox, Info, Genres, NotFoundIcon, Overview };
