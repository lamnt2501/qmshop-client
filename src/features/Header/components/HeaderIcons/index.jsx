import React from "react";
import { Link } from "react-router-dom";

const HeaderIcons = ({ children, url, isLink = true }) => {
  return (
    <>
      {isLink ? (
        <Link
          className=" navItem rounded-lg px-4 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
          to={url}
        >
          {children}
        </Link>
      ) : (
        <div className=" navItem rounded-lg px-4 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 cursor-pointer">
          {children}
        </div>
      )}
    </>
  );
};

export default HeaderIcons;
