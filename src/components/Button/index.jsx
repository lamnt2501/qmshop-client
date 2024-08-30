import React, { memo } from "react";
import clsx from "clsx";
import "./Button.css";

const Button = (prop) => {
  const { children, onClick, type, className, isFull } = prop;
  const { afterAnimation, black, white, sky } = prop;

  const btnClassName = clsx("button relative p-2 text-center transition-all rounded-md", className, {
    'w-full h-full': isFull,
    "bg-black text-white border border-black": black,
    "bg-white text-black border border-black hover:bg-black hover:text-white": white,
    "bg-sky-100 text-black hover:border hover:border-sky-100 hover:bg-white":
      sky,
    "afterAnimation overflow-hidden": afterAnimation,
  });
  return (
    <button className={btnClassName} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default memo(Button);
