import React, { useEffect, useState } from "react";
import { Title } from "../../../../components";
import clsx from "clsx";
import Rating from "../Ratings";
import { fetchRatings, selectRatings, selectRatingsStatus } from "../../../../app/reducers";
import { useDispatch, useSelector } from "react-redux";
const ProductDescription = ({ data }) => {
  const { id, name, description, brand, categories, options, slug } = data;

  const dispatch = useDispatch();
  const ratings = useSelector(selectRatings);
  const ratingStatus = useSelector(selectRatingsStatus);

  useEffect(() => {
    if (id) {
      dispatch(fetchRatings(id));
    }
  }, []);

  // Lấy ra các giá trị duy nhất của size và màu và sau đó chuyển nó thành một chuỗi được cách nhau bởi dấu ,
  const color = Object.keys(Object.groupBy(options, ({ color }) => color));
  const size = Object.keys(Object.groupBy(options, ({ size }) => size));

  const detailInfomation = [
    { info: "Tên", value: name },
    { info: "Thương hiệu", value: brand },
    { info: "Danh mục", value: categories.join(", ") },
    { info: "Các màu của sản phẩm", value: color.join(", ") },
    { info: "Các size của sản phẩm", value: size.join(", ") },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="font-black my-4">
        <Title>Chi tiết sản phẩm</Title>
      </div>
      <ul className="flex flex-col rounded-md overflow-hidden border border-slate-300">
        {detailInfomation.map(({ info, value }, index) => (
          <li
            key={index}
            className={clsx("flex", {
              "bg-slate-100": index % 2 === 1,
            })}
          >
            <div className="basis-1/4 px-4 border-r-1 border-slate-300 py-2 font-medium">
              {info}
            </div>
            <div className="px-4 py-2">{value}</div>
          </li>
        ))}
      </ul>
      <div>
        <Title>Mô tả sản phẩm</Title>
      </div>
      <div>{description}</div>

      <Title>đánh giá sản phẩm</Title>
      <Rating ratings={ratings} />
    </div>
  );
};

export default ProductDescription;
