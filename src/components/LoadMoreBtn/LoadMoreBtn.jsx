import PropTypes from "prop-types";
import { Button } from "./LoadMoreBtn.styled";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <Button onClick={onClick} type="button">
      <span>Load more</span>
    </Button>
  );
};

export default LoadMoreBtn;

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
