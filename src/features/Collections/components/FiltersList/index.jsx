import React, { useEffect } from "react";
import FilterItem from "../FilterItem";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFiltersList,
  selectFiltersItems,
  selectFiltersStatus,
  selectFiltersError,
  setItem,
  resetItem,
} from "../../../../app/reducers";
const FiltersList = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <ul>
        <li></li>
      </ul>
    </div>
  );
};

export default FiltersList;
