import React, { useEffect, useRef, useState, value } from "react";
import clsx from "clsx";
import { FaAngleDown } from "react-icons/fa";

const Popover = (props) => {
  // children sẽ chứa các dữ liệu khi được popover được mở
  const { children, Icon, value } = props;
  const [showPopover, setShowPopover] = useState(false);

  const ref = useRef();

  const className = clsx("transition-all h-[44px] border z-10 relative overflow-hidden rounded-md", {
    // fix cứng kích thước khi không có icon (chỉ sử dụng cho sortButton)
    "w-[190px]": !Icon,
    "border-line-border hover:border-black": !showPopover,
    "border-black overflow-visible": showPopover,
  });

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowPopover(false);
      }
    }

    if (showPopover) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      if (showPopover) {
        document.removeEventListener("mousedown", handleClickOutside);
      }
    };
  }, [showPopover]);

  return (
    <>
      <div
        className={className}
        ref={ref}
        onClick={() => setShowPopover(!showPopover)}
      >
        {!Icon ? (
          <button className="flex justify-between items-center h-full w-full py-2 px-5">
            <div className="">{value}</div>
            <div className=""></div>
            <div className="">
              <FaAngleDown />
            </div>
          </button>
        ) : (
          <button className="flex gap-4 items-center h-full w-full py-2 px-5">
            <div>
              <Icon />
            </div>
            <span>{value}</span>
          </button>
        )}
        {showPopover ? children : undefined}
      </div>
    </>
  );
};

export default Popover;
