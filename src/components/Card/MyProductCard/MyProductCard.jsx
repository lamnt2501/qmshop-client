import React, { useMemo, useState } from "react";
import styles from "./index.module.css";
import clsx from "clsx";
import { IoCartOutline } from "react-icons/io5";
import { FiHeart, FiShuffle } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const MyProductCard = ({ data }) => {
  const navigate = useNavigate();
  const [imageSelected, setImageSelected] = useState(0);

  const { images, price } = useMemo(() => {
    const images = data?.images?.reduce((res, curr) => {
      const isExists = res?.some((it) => it.color === curr.color);

      if (!isExists) {
        res.push(curr);
      }

      return res;
    }, []);
    const imageSelectedData = images[imageSelected];
    const colorSelected = data?.options?.find(
      (it) => it.color === imageSelectedData.color
    );
    const price = colorSelected.price;

    return {
      images,
      price,
    };
  }, [data?.images, data?.options, imageSelected]);

  const onThumbnailHover = (index) => {
    setImageSelected(index);
  };

  return (
    <div
      onClick={() => navigate(`/products/${data.slug}`)}
      className="cursor-pointer"
    >
      <div
        style={{ backgroundImage: `url(${images?.[imageSelected].url})` }}
        className="pt-[100%] bg-cover bg-center bg-no-repeat relative overflow-hidden group"
      >
        <div className="flex gap-x-1 absolute pb-2 bottom-0 w-full justify-center translate-y-full group-hover:translate-y-0 transition-all">
          <div className="w-10 h-10 bg-white shadow-[0_8px_24px_#959da533] flex items-center justify-center cursor-pointer rounded-[4px]">
            <IoCartOutline className="text-xl" />
          </div>
          <div className="w-10 h-10 bg-white shadow-[0_8px_24px_#959da533] flex items-center justify-center cursor-pointer rounded-[4px]">
            <FiHeart className="text-xl" />
          </div>
          <div className="w-10 h-10 bg-white shadow-[0_8px_24px_#959da533] flex items-center justify-center cursor-pointer rounded-[4px]">
            <FiShuffle className="text-xl" />
          </div>
          <div className="w-10 h-10 bg-white shadow-[0_8px_24px_#959da533] flex items-center justify-center cursor-pointer rounded-[4px]">
            <LuEye className="text-xl" />
          </div>
        </div>
      </div>

      <div className="pt-5 flex flex-col gap-y-3">
        <p className="text-left uppercase font-bold">{data?.name}</p>

        <div className="flex items-center gap-x-2 text-sm">
          <p className="text-[#db1215] font-semibold">${price}</p>
        </div>

        <div className="flex gap-1 justify-center flex-wrap">
          {images?.map((item, index) => (
            <div
              key={index}
              className={clsx(styles.thumbnailWrap, {
                [styles.active]: index === imageSelected,
              })}
              onMouseOver={() => onThumbnailHover(index)}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={item.url}
                alt="Thumbnail"
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProductCard;
