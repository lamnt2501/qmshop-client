import React from "react";
import "./SlickSlide.css";
import clsx from "clsx";

const SlickSlide = (prop) => {
  const { children, className, style, onClick } = prop;

  const slickClassName = clsx(className, "slick");
  return (
    <div className={slickClassName} style={style} onClick={onClick}>
      {children + 1}
    </div>
  );
};

export default SlickSlide;
