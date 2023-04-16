import PropTypes from "prop-types";
import { ButtonsList, Buttons } from "./FilterButtons.styled";

const FilterButtons = ({ handleBtnFilter }) => {
  return (
    <ButtonsList>
      <li>
        <Buttons onClick={handleBtnFilter} data-btn-week>
          By week
        </Buttons>
      </li>
      <li>
        <Buttons onClick={handleBtnFilter} data-btn-day>
          By dey
        </Buttons>
      </li>
    </ButtonsList>
  );
};

export default FilterButtons;

FilterButtons.propTypes = {
  handleBtnFilter: PropTypes.func.isRequired,
};
