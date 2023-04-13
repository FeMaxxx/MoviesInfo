import { Button } from "./LoadMoreBtn.styled";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <Button onClick={onClick} type="button">
      <span>Load more</span>
    </Button>
  );
};

export default LoadMoreBtn;
