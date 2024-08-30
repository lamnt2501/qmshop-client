import React from "react";

const Title = ({ children, className }) => {
  return (
    <h2 className={"text-2xl uppercase font-bold " + className}>{children}</h2>
  );
};

export default Title;
