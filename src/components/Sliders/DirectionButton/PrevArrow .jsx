import React from "react";
import "./DirectionButton.css";
import { GrPrevious } from "react-icons/gr";

const PrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div className={"prevBtn"} style={{ ...style }} onClick={onClick}>
      <GrPrevious />
    </div>
  );
};

export default PrevArrow;
