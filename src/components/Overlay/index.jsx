import clsx from "clsx";
import React, { useEffect } from "react";
import "./Overlay.css";

const Overlay = ({ isOverlay, onClick, children }) => {
  useEffect(() => {
    if (isOverlay) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup function để đảm bảo rằng lớp được xóa khi component bị unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOverlay]);

  const className = clsx(
    "overlay w-full h-full ",
    "fixed top-0 bottom-0 left-0 right-0",
    {
      "z-0 invisible opacity-0": !isOverlay,
      "z-50 visible opacity-100": isOverlay,
    }
  );
  return (
    <div className={className} onClick={onClick ? onClick : undefined}>
      {children}
    </div>
  );
};

export default Overlay;
