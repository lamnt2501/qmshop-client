import React from "react";

const ProductColorName = ({color}) => {
  return (
    <>
      <span>Màu sắc: </span>
      <span className="font-bold">{color}</span>
    </>
  );
};

export default ProductColorName;
