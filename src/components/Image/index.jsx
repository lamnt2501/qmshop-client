import React from "react";
import "./Image.css";
import clsx from "clsx";

const Image = (prop) => {
  const { animation } = prop;
  const { image, name } = prop.data;

  return (
    <div
      className={clsx("image w-full h-full overflow-hidden", {
        imageAnimation: animation,
      })}
    >
      <img
        className="imgLoading block h-full w-full object-cover object-center max-w-full"
        src={image}
        alt={name}
        draggable="false"
      />
    </div>
  );
};

export default Image;
