import PropTypes from "prop-types";
const ProductColorName = ({ color }) => {
  return (
    <>
      <span>Màu sắc: </span>
      <span className="font-bold">{color}</span>
    </>
  );
};
ProductColorName.propTypes = {
  color: PropTypes.string,
};
export default ProductColorName;
