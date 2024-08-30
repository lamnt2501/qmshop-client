import React, { useEffect } from "react";
import { Overlay } from "../../../../components";
import clsx from "clsx";
import { IoFilter } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";
import FiltersList from "../../components/FiltersList";

const FilterContainer = ({ isOpenFilter, onClick }) => {
  const className = clsx(
    "fixed z-40 top-0 w-full h-full top-0 bottom-0 left-0 right-0",
    "transition-opacity duration-7000",
    {
      "invisible opacity-0": !isOpenFilter,
      "visible opacity-100 ": isOpenFilter,
    }
  );
  const filtersList = clsx(
    "p-0 isolate transition-all ",
    "absolute left-0",
    "h-full w-full max-h-none max-w-[300px] bg-white z-50",
    {
      "translate-x-[-100%]": !isOpenFilter,
      "translate-x-0": isOpenFilter,
    }
  );

  const handleFiltersListClick = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    const preventScroll = (event) => {
      event.preventDefault();
    };

    if (isOpenFilter) {
      document.body.style.overflow = "hidden";
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, [isOpenFilter]);

  return (
    <div className={className}>
      <Overlay isOverlay={isOpenFilter} onClick={onClick} />
      <div className={filtersList} onClick={(e) => handleFiltersListClick(e)}>
        <div className="flex justify-between items-center w-full h-[54px] bg-slate-100 p-4">
          <div className="flex justify-normal items-center gap-2">
            <IoFilter />
            <div>bộ lọ</div>
          </div>
          <div></div>
          <div
            className="cursor-pointer hover:text-red-700"
            onClick={() => onClick()}
          >
            <TfiClose />
          </div>
        </div>
        <div className="p-4">
          <FiltersList />
        </div>
      </div>
    </div>
  );
};

export default FilterContainer;
