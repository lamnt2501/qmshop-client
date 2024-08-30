import { SlickSlide, Image } from "../components";
import { sliderImage } from "./image";

export const StylesSlideSettings = {
  dots: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        dots: true,
        slidesToShow: 3,
      },
    },
  ],
};

export const bannerSliderSettings = {
  appendDots: (dots) => <ul>{dots}</ul>,
  customPaging: (i) => {
    return (
      <a>
        <Image data={sliderImage[i]} />
      </a>
    );
  },
  dots: true,
  dotsClass: "slick-thumb slick-thumb-image hidden lg:block",
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  arrows: false,
};

export const categoriesSlideSettings = {
  // dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  arrows: false,
  appendDots: (dots) => (
    <div
      style={{
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),
  customPaging: (i) => <SlickSlide>{i + 1}</SlickSlide>,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export const newPeoductsSlideSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  arrows: false,
  appendDots: (dots) => (
    <div
      style={{
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),
  customPaging: (i) => <SlickSlide>{i + 1}</SlickSlide>,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 580,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const brandsSlideSettings = {
  // dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  initialSlide: 0,
  arrows: false,
  appendDots: (dots) => (
    <div
      style={{
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),
  customPaging: (i) => <SlickSlide>{i + 1}</SlickSlide>,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const marketingContainerSettings = {
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  arrows: false,
  appendDots: (dots) => (
    <div
      style={{
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),
  customPaging: (i) => <SlickSlide>{i + 1}</SlickSlide>,
  responsive: [
    {
      breakpoint: 1020,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
