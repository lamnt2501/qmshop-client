import React from "react";
import "./FilterItem.css";
import clsx from "clsx";

const FilterItem = ({ onClick, value, isActive }) => {
  const className = clsx({
    filterItemActive: isActive,
    filterItem: !isActive,
  });
  return (
    <div className="overflow-hidden rounded-md">
      <button className={className} onClick={() => onClick(value)}>
        {value}
      </button>
    </div>
  );
};

export default FilterItem;
