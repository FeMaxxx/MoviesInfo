import { UpBtn, UpBtnIcon } from "./UpButton.styled";

const handleUpBtn = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const UpButton = () => {
  return (
    <UpBtn onClick={handleUpBtn} type="button">
      <UpBtnIcon />
    </UpBtn>
  );
};

export default UpButton;
