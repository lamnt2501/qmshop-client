import { Button } from "@mui/material";
import clsx from "clsx";
import React from "react";

const SizeItem = ({ size, isValid, isSelector, onClick }) => {
  const sizeItemClassName = clsx(
    "block transition text-black",
    // "block p-2 hover:bg-black hover:text-white transition border boder-black",
    {
      "bg-white": !isSelector,
      "bg-slate-200": isSelector,
      "opacity-100 cursor-pointer": isValid,
      "size-invalid opacity-50 bg-slate-300 cursor-not-allowed": !isValid,
    }
  );
  return (
    <div className={sizeItemClassName} onClick={isValid ? onClick : undefined}>
      <Button variant="outlined" color="inherit" disabled={!isValid}>
        {size}
      </Button>
    </div>
  );
};

export default SizeItem;
