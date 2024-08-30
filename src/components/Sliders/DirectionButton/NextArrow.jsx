import "./DirectionButton.css";
import { GrNext } from "react-icons/gr";
import PropTypes from "prop-types";
const NextArrow = ({ style, onClick }) => {
  return (
    <div className={"nextBtn"} style={{ ...style }} onClick={onClick}>
      <GrNext />
    </div>
  );
};
NextArrow.propTypes = {
  style: PropTypes.object,
  onClick: PropTypes.func,
};
export default NextArrow;
