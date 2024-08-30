import React, { useState } from "react";
import clsx from "clsx";

const ChoiceAddress = ({ active, children, changeActive }) => {
  return (
    <button
      className={clsx("basis-1/2 transition duration-300 hover:bg-slate-300 border border-black rounded-lg", {
        "bg-slate-300": active,
        "bg-white": !active,
      })}
      onClick={changeActive}
    >
      {children}
    </button>
  );
};

export default ChoiceAddress;
