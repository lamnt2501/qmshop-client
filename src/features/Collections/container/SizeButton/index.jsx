import React, { useEffect } from "react";
import { IoIosResize } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSizes,
  handleFilterSizes,
  selectFiltersSizes,
  selectSizes,
} from "../../../../app/reducers";
import { Popover } from "../../../../components";
import { FilterItem } from "../../components";

const SizeButton = () => {
  const dispatch = useDispatch();
  const sizes = useSelector(selectSizes);
  const filterSize = useSelector(selectFiltersSizes);

  useEffect(() => {
    dispatch(fetchSizes());
  }, [dispatch]);

  const handleSetSize = (sizeId) => {
    dispatch(handleFilterSizes(sizeId));
  };

  return (
    <Popover Icon={IoIosResize} value={"Kích thước"}>
      <div className="box_shadow">
        <ul className="overflow-y-auto max-h-56 pt-2 grid grid-cols-2">
          {sizes
            ? sizes.map((size) => (
                <li key={size.id}>
                  <FilterItem
                    value={size.size}
                    isActive={filterSize.includes(size.id)}
                    onClick={() => handleSetSize(size.id)}
                  />
                </li>
              ))
            : undefined}
        </ul>
      </div>
    </Popover>
  );
};

export default SizeButton;
