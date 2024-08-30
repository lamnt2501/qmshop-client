import React from "react";
import clsx from "clsx";
const FilterButton = ({ children }) => {
  const filterDiv = clsx(
    "h-[44px] border z-3",
    "border-line-border hover:border-black",
    "duration-200"
  );
  const filterButton = clsx("flex gap-4 items-center h-full w-full py-2 px-5");

  return (
    <div className={filterDiv}>
      <button className={filterButton}>{children}</button>
    </div>
  );
};

export default FilterButton;
