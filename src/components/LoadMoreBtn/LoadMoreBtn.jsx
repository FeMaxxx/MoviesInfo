import { Button } from "./LoadMoreBtn.styled";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <Button onClick={onClick} type="button">
      Load more
    </Button>
  );
};

export default LoadMoreBtn;
