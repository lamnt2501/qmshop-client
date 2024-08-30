import PropTypes from "prop-types";
const ProductStatus = ({ selectColor, selectSize, quantity }) => {
  return (
    <>
      <span>Tình trạng : </span>
      <span className="font-medium">
        {selectColor !== "" && selectSize !== "" ? (
          quantity > 0 ? (
            <span className="text-blue-700">Còn hàng ({quantity})</span>
          ) : (
            <span className="text-red-500">Hết hàng</span>
          )
        ) : undefined}
      </span>
    </>
  );
};
ProductStatus.propTypes = {
  selectColor: PropTypes.string,
  selectSize: PropTypes.string,
  quantity: PropTypes.number,
};
export default ProductStatus;
