import React from "react";
import { Link } from "react-router-dom";

const IconFotter = ({ url, children }) => {
  return (
    <a
      href={url}
      target="_blank"
      className="size-8 flex items-center justify-center border border-black text-black rounded-full transition-all hover:border-[#fe2c55] hover:text-[#fe2c55]"
    >
      {children}
    </a>
  );
};

export default IconFotter;
