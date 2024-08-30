import React from "react";
import Image from "../../../../components/Image";
import Button from "../../../../components/Button";
import { NavLink } from "react-router-dom";
import "./BannerSlider.css";

const BannerSlider = ({ data }) => {
  const { image, name, title, titleTrending } = data;

  return (
    <div className="w-full h-full relative">
      <div className=" w-full h-full bottom-0 top-0 left-0 right-0">
        <Image data={{ name: name, image: image }} />
      </div>
      <div className="absolute top-0 left-[10%] uppercase h-full place-content-center z-10 w-full">
        <div className="relative">
          <div className="slideTitle text-left text-base font-bold w-full h-auto mb-6">
            <p>{title}</p>
          </div>
          <div className="slideTitleTrending text-left font-bold text-4xl lg:text-5xl xl:text-6xl w-full h-auto mb-12">
            <h1>{titleTrending}</h1>
          </div>
          <div className="slideButton w-56 h-auto mb-12">
            <NavLink to={"/collections"}>
              <Button afterAnimation black isFull>
                Bộ sưu tập
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
