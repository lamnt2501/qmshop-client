import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Dropdow.css";
import clsx from "clsx";
const Dropdow = (prop) => {
  const { listPage, children } = prop;
  const { itemCenter, itemRight, itemLeft } = prop;

  const dropdownClassName = clsx("dropdowItem cursor-pointer ", {
    "left-0 -translate-x-2/4": itemCenter,
    "right-0": itemRight,
    "left-0": itemLeft,
  });

  const dropdownItem = clsx(
    "block px-4 py-4 hover:text-orange-500 bg-white border-1 border-line-border transition"
  );

  return (
    <div className={"dropdown inline-block h-full w-full "}>
      <div>{children}</div>
      {listPage && Array.isArray(listPage) && listPage.length > 0 ? (
        <div className={dropdownClassName}>
          {listPage.map((page, index) => {
            return page.url ? (
              <NavLink className={dropdownItem} key={index} to={page.url}>
                {page.pageName ?? undefined}
              </NavLink>
            ) : (
              <div
                className={dropdownItem}
                key={index}
                onClick={page.onClick ?? undefined}
              >
                {page.pageName ?? undefined}
              </div>
            );
          })}
        </div>
      ) : undefined}
    </div>
  );
};

export default Dropdow;
