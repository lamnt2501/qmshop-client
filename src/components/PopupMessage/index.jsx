import React from "react";
import clsx from "clsx";
import { Button } from "../";
const PopupMessage = (prop) => {
  const {
    receive,
    message,
    receiveName,
    cancelName,
    handleReceive,
    handleCancel,
  } = prop;

  return (
    <div
      className={clsx(
        "fixed top-1/2 left-1/2 w-80 cursor-auto -translate-x-1/2 -translate-y-1/2 p-5 bg-white text-center transition-opacity z-30 overflow-hidden rounded-md",
        {
          "opacity-0 invisible": !receive,
          "opacity-100 visible": receive,
        }
      )}
    >
      <div className="text-2xl p-4">{message}</div>
      <div className="flex gap-1 items-stretch justify-around ">
        {receiveName && (
          <Button black isFull onClick={handleReceive}>
            {receiveName}
          </Button>
        )}
        {cancelName && (
          <Button white isFull onClick={handleCancel}>
            {cancelName}
          </Button>
        )}
      </div>
    </div>
  );
};

export default PopupMessage;
