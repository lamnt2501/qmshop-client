import clsx from "clsx";
import { useEffect } from "react";
import "./Overlay.css";
import PropTypes from "prop-types";

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

  const handleClickOverlay = (e) => {
    // Chặn sự kiện khi người dùng click vào bên trong children
    if (onClick) onClick(e);
  };

  const handleClickInside = (e) => {
    // Ngăn chặn sự kiện click từ children truyền lên overlay
    e.stopPropagation();
  };

  return (
    <div className={className} onClick={handleClickOverlay}>
      {/* Đảm bảo mọi phần tử bên trong không kích hoạt sự kiện click của overlay */}
      <div onClick={handleClickInside}>
        {children}
      </div>
    </div>
  );
};

Overlay.propTypes = {
  isOverlay: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.any,
};
export default Overlay;
