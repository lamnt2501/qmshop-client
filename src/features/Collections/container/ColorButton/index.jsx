import React, { useEffect } from "react";
import { BiSolidColor } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Popover } from "../../../../components";
import { FilterItem } from "../../components";
import {
  selectColorsItem,
  selectColorsStatus,
  selectColorsError,
  fetchColors,
  handleFilterColors,
  selectFiltersColors,
} from "../../../../app/reducers";

const ColorButton = () => {
  const dispatch = useDispatch();
  const colors = useSelector(selectColorsItem);
  const status = useSelector(selectColorsStatus);
  const error = useSelector(selectColorsError);
  const filtersColors = useSelector(selectFiltersColors);

  useEffect(() => {
    dispatch(fetchColors());
  }, [dispatch]);

  return (
    <Popover Icon={BiSolidColor} value={"Màu sắc"}>
      <div className="box_shadow">
        <ul className="overflow-y-auto max-h-56 pt-2">
          {colors
            ? colors.map((color, index) => (
                <li key={index}>
                  <FilterItem
                    value={color.name}
                    isActive={filtersColors.includes(color.id)}
                    onClick={() => dispatch(handleFilterColors(color.id))}
                  />
                </li>
              ))
            : undefined}
        </ul>
      </div>
    </Popover>
  );
};

export default ColorButton;
