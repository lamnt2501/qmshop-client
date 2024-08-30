import React from "react";
import "./DirectionButton.css";
import { GrNext } from "react-icons/gr";

const NextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div className={"nextBtn"} style={{ ...style }} onClick={onClick}>
      <GrNext />
    </div>
  );
};

export default NextArrow;
