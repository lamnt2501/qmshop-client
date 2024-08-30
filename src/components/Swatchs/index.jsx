import React, { memo, useEffect, useState } from "react";
import { Image } from "../";
import "./Swatchs.css";

const Swatchs = (prop) => {
  const {
    swatchs,
    isLimit = true,
    limit = 4,
    imageSelector,
    setImageSelector,
  } = prop;

  // lưu trạng thái giới hạn có tồn tại trên component hay không
  const [stateLimit, setStateLimit] = useState(false);

  // hiển thị hoặc ẩn đi màu thêm vào nếu có stateLimit
  // true là đang được hiển thị tất cả và false là chưa được hiển thị
  const [showRest, setShowRest] = useState(true);

  // số lượng còn lại của danh sách màu (hiển thị số phần ẩn đi hoặc thêm vào)
  const [theRest, setTheRest] = useState("");

  // chuyển hóa nếu có giới hạn
  const [newSwatchs, setNewSwatchs] = useState([]);

  useEffect(() => {
    if (isLimit && swatchs.length > limit) {
      setStateLimit(true);

      const visibleSwatchs = showRest ? swatchs.slice(0, limit) : swatchs;
      setNewSwatchs(visibleSwatchs);

      if (showRest) {
        setTheRest((swatchs.length - limit).toString());
      }
    } else {
      setNewSwatchs(swatchs);
    }
  }, [showRest]);

  const handleShowRest = () => {
    setShowRest(!showRest);
  };

  return (
    <ul className="swatchs flex justify-center items-center">
      {newSwatchs
        ? newSwatchs.map((swatch, index) => (
            <li
              key={index}
              className={
                imageSelector.color === swatch.color ? "item active " : "item "
              }
              onClick={() => setImageSelector(swatch)}
            >
              <Image data={{ image: swatch.url, name: swatch.color }} />
              <div className="clearfix text-center">
                <span className="titleSwatch">{swatch.color}</span>
              </div>
            </li>
          ))
        : undefined}
      {stateLimit ? (
        showRest ? (
          <li className={"item my-auto"}>
            <span
              className="block w-full h-full rounded-full"
              onClick={() => handleShowRest()}
            >
              {"+" + theRest}
            </span>
          </li>
        ) : (
          <li className="item">
            <span
              className="block w-full h-full rounded-full"
              onClick={() => handleShowRest()}
            >
              {"-" + theRest}
            </span>
          </li>
        )
      ) : undefined}
    </ul>
  );
};

export default memo(Swatchs);
