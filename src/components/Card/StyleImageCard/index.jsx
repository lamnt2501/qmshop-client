import React from "react";
import "./StyleImageCard.css";

const StyleImageCard = ({ data }) => {
  const { id, image } = data;
  return (
    <div className="StyleImageCard mx-2 rounded-md overflow-hidden">
      <div className="StyleImageCardContent hover:brightness-90 overflow-hidden">
        <img src={image} />
      </div>
    </div>
  );
};

export default StyleImageCard;
