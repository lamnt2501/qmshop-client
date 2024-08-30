import React, { useState } from "react";
import { FaMoneyBill } from "react-icons/fa";
import { Range, getTrackBackground } from "react-range";
import { useDispatch, useSelector } from "react-redux";
import { Button, Popover } from "../../../../components";
import { selectFiltersPrice, setFilterPrice } from "../../../../app/reducers";
const PriceButton = () => {
  const dispatch = useDispatch();
  const filterPrice = useSelector(selectFiltersPrice);

  const [values, setValues] = useState(filterPrice);

  const handleSetPrice = () => {
    dispatch(setFilterPrice(values));
  };

  const MIN = 0;
  const MAX = 5000000;
  const STEP = 10000;

  return (
    <Popover Icon={FaMoneyBill} value={"Giá"}>
      <div className="box_shadow">
        <div className="bg-white absolute top-[110%] left-[-100%] w-[300%] z-10 overflow-hidden rounded-md">
          <output className="text-center w-full block">
            {values[0] ? values[0].toLocaleString("vi-VN") : undefined} VND -{" "}
            {values[1] ? values[1].toLocaleString("vi-VN") : undefined} VND
          </output>
          <Range
            values={values}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={(values) => setValues(values)}
            renderTrack={({ props, children }) => (
              <div
                key={props.someKey}
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  paddingLeft: "12px",
                  paddingRight: "12px",
                  height: "36px",
                  display: "flex",
                  width: "100%",
                }}
              >
                <div
                  ref={props.ref}
                  style={{
                    height: "8px",
                    width: "100%",
                    borderRadius: "4px",
                    background: getTrackBackground({
                      values: values,
                      colors: ["#ccc", "rgb(226 232 240)", "#ccc"],
                      min: MIN,
                      max: MAX,
                    }),
                    alignSelf: "center",
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props, isDragged }) => (
              <div
                key={props.someKey}
                {...props}
                style={{
                  ...props.style,

                  height: "12px",
                  width: "12px",
                  borderRadius: "4px",
                  backgroundColor: "rgb(224 242 254)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0px 2px 6px #AAA",
                }}
              >
                <div
                  style={{
                    backgroundColor: isDragged ? "rgb(224 242 254)" : "#CCC",
                    width: "8px",
                    height: "8px",
                  }}
                />
              </div>
            )}
          />
          <Button isFull sky afterAnimation onClick={handleSetPrice}>
            Tìm khoảng giá
          </Button>
        </div>
      </div>
    </Popover>
  );
};

export default PriceButton;
