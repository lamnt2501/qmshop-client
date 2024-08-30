import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { FaAngleDown } from "react-icons/fa";
import PropTypes from "prop-types";

const Popover = ({ children, Icon, value }) => {
  // children sẽ chứa các dữ liệu khi được popover được mở

  const [showPopover, setShowPopover] = useState(false);

  const ref = useRef();

  const className = clsx(
    "transition-all h-[44px] border z-10 relative overflow-hidden rounded-md",
    {
      // fix cứng kích thước khi không có icon (chỉ sử dụng cho sortButton)
      "w-[190px]": !Icon,
      "border-line-border hover:border-black": !showPopover,
      "border-black overflow-visible": showPopover,
    }
  );

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

Popover.propTypes = {
  children: PropTypes.any,
  Icon: PropTypes.any,
  value: PropTypes.any,
};
export default Popover;
