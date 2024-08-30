import clsx from "clsx";
import React from "react";
import { RxArrowTopRight } from "react-icons/rx";
import { Link } from "react-router-dom";
import "./CustomLink.css";
const CustomLink = (prop) => {
  const {
    children,
    url,
    className,
    iconEndText,
    bottomLine,
    textDark,
    textLight,
  } = prop;

  return (
    <Link
      to={url ?? undefined}
      className={clsx(
        className,
        "hover:text-red-600 truncate transition duration-300",
        {
          "bottomLine relative pb-1 inline-flex items-center": bottomLine,
          dark: textDark,
          light: textLight,
        }
      )}
    >
      {children}
      {iconEndText && <RxArrowTopRight />}
    </Link>
  );
};

export default CustomLink;
