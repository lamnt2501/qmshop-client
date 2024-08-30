import React from "react";
import { bannerSliderSettings, sliderImage } from "../../../config";
import { Sliders } from "../../../components";
import BannerSlider from "../components/BannerSlider";
const IntroSlide = () => {
  return (
    <div className="slider-container mb-10 pb-10">
      <Sliders settings={bannerSliderSettings} datas={sliderImage}>
        <BannerSlider />
      </Sliders>
    </div>
  );
};

export default IntroSlide;
