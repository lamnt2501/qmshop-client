import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Popover } from "../../../../components";
import { FilterItem } from "../../components";
import {
  presentValue,
  sortList,
  setPresentValue,
} from "../../../../app/reducers";

import "./SortButton.css";

const SortButton = () => {
  const dispatch = useDispatch();
  const present = useSelector(presentValue);
  const sorts = useSelector(sortList);

  const handleSetPresentValue = (sort) => {
    dispatch(setPresentValue(sort));
  };

  return (
    <Popover value={present.value}>
      <div className="box_shadow">
        <ul className="py-2">
          {sorts.map(({ key, value, sort, order }, index) => (
            <li key={index}>
              <FilterItem
                value={value}
                isActive={key === present.key}
                onClick={() =>
                  handleSetPresentValue({ key, value, sort, order })
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </Popover>
  );
};

export default SortButton;
