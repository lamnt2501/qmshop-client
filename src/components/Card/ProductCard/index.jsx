import { React, memo, useEffect, useState } from "react";
import { Button, Image, LinkInSlide, Swatchs } from "../../";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { priceConvert } from "../../../utils/priceConvert";

import { MdAddShoppingCart } from "react-icons/md";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { LuEye } from "react-icons/lu";

import "./ProductCard.css";
import clsx from "clsx";

const ProductCard = ({ data, padding }) => {
  const { name, images, slug, options, discount } = data;

  const [imageSelector, setImageSelector] = useState({});

  useEffect(() => {
    if (images[0]) setImageSelector(images[0]);
  }, []);

  // Nhóm các đối tượng theo category
  const groupedItems = images.reduce((group, item) => {
    const { color } = item;
    group[color] = group[color] ?? [];
    group[color].push(item);
    return group;
  }, {});

  // Lấy phần tử đầu tiên của mỗi nhóm
  const firstItems = Object.entries(groupedItems).map(([color, url]) => url[0]);

  // Tổng số màu và số Size trong sản phẩm
  const totalColors = Object.keys(
    Object.groupBy(options, ({ color }) => color)
  ).length;
  const totalSizes = Object.keys(
    Object.groupBy(options, ({ size }) => size)
  ).length;

  const handleOnMouseOver = () => {
    if (
      groupedItems &&
      groupedItems[imageSelector.color] &&
      groupedItems[imageSelector.color][1] &&
      groupedItems[imageSelector.color][1].url
    )
      setImageSelector(groupedItems[imageSelector.color][1]);
  };

  const handleOnMouseOut = () => {
    if (
      groupedItems[imageSelector.color][0].url &&
      imageSelector.url !== groupedItems[imageSelector.color][0].url
    ) {
      setImageSelector(groupedItems[imageSelector.color][0]);
    }
  };

  return (
    <div className={clsx("card border border-slate-200 rounded-md shadow-md bg-white", { "px-4": padding })}>
      <div className="cardImage block relative z-1 w-full aspect-square cardShadow rounded-md overflow-hidden">
        {discount ?? (
          <div className="absolute top-1 right-1 bg-red-600 text-white">
            {/* <span>-30%</span> */}
          </div>
        )}
        <LinkInSlide
          // Sự kiện hover
          url={`/products/${slug}`}
          onMouseOver={() => handleOnMouseOver()}
          onMouseOut={() => handleOnMouseOut()}
        >
          <TransitionGroup>
            <CSSTransition
              key={imageSelector.url}
              timeout={300}
              classNames="fade"
            >
              <Image data={{ image: imageSelector.url, name: name }} />
            </CSSTransition>
          </TransitionGroup>
        </LinkInSlide>
        <div className="my-2 absolute bottom-0 w-full">
          <div className="flex justify-center gap-4">
            <div className="cardIcon cardIcon-1 shadow-md">
              <Button white>
                <MdAddShoppingCart />
              </Button>
            </div>
            <div className="cardIcon cardIcon-2 shadow-md">
              <Button white>
                <FaHeartCirclePlus />
              </Button>
            </div>
            <div className="cardIcon cardIcon-3 shadow-md">
              <Button white>
                <LuEye />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 px-2">
        <div className="flex justify-between gap-1 my-2 ">
          <div className="flex gap-1">
            <span>{totalColors}</span>
            <span>Màu</span>
          </div>
          <div className="flex gap-1">
            <span>{totalSizes}</span>
            <span>Kích thước</span>
          </div>
        </div>
        <div className="text-xl productTitle">
          <LinkInSlide
            url={`/products/${slug}`}
            className="text-black hover:text-red-600 transition"
          >
            {name}
          </LinkInSlide>
        </div>
        <div className="flex gap-1 items-center text-red-600 text-xl">
          <span>{priceConvert(options[0].price)}</span>
        </div>
      </div>
      <div className="my-5">
        <Swatchs
          swatchs={firstItems}
          imageSelector={imageSelector}
          setImageSelector={setImageSelector}
          isLimit={false}
        />
      </div>
    </div>
  );
};

export default memo(ProductCard);
