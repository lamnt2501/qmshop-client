import "./StyleImageCard.css";
import PropTypes from "prop-types";

const StyleImageCard = ({ data }) => {
  const { image } = data;
  return (
    <div className="StyleImageCard mx-2 rounded-md overflow-hidden">
      <div className="StyleImageCardContent hover:brightness-90 overflow-hidden">
        <img src={image} />
      </div>
    </div>
  );
};
StyleImageCard.propTypes = {
  data: PropTypes.object,
};
export default StyleImageCard;
