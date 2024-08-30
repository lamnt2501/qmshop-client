// slide
import banner1 from "../assets/images/SlideImage/banner1_190f96ae-9055-4be1-b801-516b11f55fc0.webp";
import banner2 from "../assets/images/SlideImage/banner2_dcef7866-db0a-4f9a-bd73-0ec26e2b1fdc.webp";
import banner3 from "../assets/images/SlideImage/banner3_e035c084-9a3f-479d-a4fa-e5b754bc9fd3.webp";

// banner wrap
import BannerWrap1 from "../assets/images/bannerWrap/Rectangle_95_e80963fb-2550-406b-97f4-6d2b6f280fcc.webp";
import BannerWrap2 from "../assets/images/bannerWrap/Rectangle_96_231cdeb1-78a2-4908-81e7-8ac98b2d3847.webp";
import BannerWrap3 from "../assets/images/bannerWrap/Rectangle_116_e3f29c64-4c71-44cb-89bf-c257491618d5.webp";
import BannerWrap4 from "../assets/images/bannerWrap/image_29.webp";

import Frame1 from "../assets/images/Style/Frame_103.webp";
import Frame2 from "../assets/images/Style/Rectangle_177.webp";
import Frame3 from "../assets/images/Style/Rectangle_178.webp";

import NewsletterSignupForm from "../assets/images/Rectangle_327.webp";
import CollectionImage from "../assets/images/z4683181570507_46fb10fa21da971ae2af71e75431028c.webp";

import policy1 from "../assets/images/policy/service_ic_1.webp";
import policy2 from "../assets/images/policy/service_ic_2.webp";
import policy3 from "../assets/images/policy/service_ic_3.webp";
import policy4 from "../assets/images/policy/service_ic_4.webp";
import policy5 from "../assets/images/policy/service_ic_5.webp";

import style1 from "../assets/images/styles/shoe-1_3546c7e6-3e33-424d-9f42-941c1b7734b2.webp";
import style2 from "../assets/images/styles/shoe-2_becdb745-47ac-40ca-903f-25f6be7e0e0e.webp";
import style3 from "../assets/images/styles/shoe-3_754f417a-8a49-40d6-a97e-0f49e73363ac.webp";
import style4 from "../assets/images/styles/shoe-4_8571aa58-425b-41cb-863f-61e557328078.webp";
import style5 from "../assets/images/styles/shoe-5_4396909a-74bd-46c3-8252-6d565acac45c.jpg";

import vnPayLogo from "../assets/images/paymentMethod/cong-ty-cp-giai-phap-thanh-toan-viet-nam-vnpay-6194ba1fa3d66.webp";
import CODLogo from "../assets/images/paymentMethod/cod.png";

import logo from "../assets/images/logo/message.png";
import { COD, VN_PAY } from "./consts";

export const logoApp = { url: logo, name: "logo QM Store" };

export const sliderImage = [
  {
    name: "banner 1",
    title: "phải có",
    titleTrending: "summer shoes",
    image: banner1,
  },
  {
    name: "banner 2",
    title: "miễn phí vận chuyển",
    titleTrending: "nike air max 1",
    image: banner2,
  },
  {
    name: "banner 3",
    title: "giảm giá 10% hôm nay",
    titleTrending: "stan smith",
    image: banner3,
  },
];

export const bannerWrap = [
  {
    name: "bộ sưu tập giày nam",
    title: "bộ sưu tập giày nam",
    description: "Mỗi sản phẩm đều được thiết kế để bền bỉ qua nhiều mùa.",
    image: BannerWrap1,
  },
  {
    name: "bộ sưu tập giày nữ",
    title: "bộ sưu tập giày nữ",
    description: "",
    image: BannerWrap2,
  },
  {
    name: "bộ sưu tập giày trẻ em",
    title: "bộ sưu tập giày trẻ em",
    description: "",
    image: BannerWrap3,
  },
  {
    name: "bộ sưu tập giày thể thao",
    title: "bộ sưu tập giày thể thao",
    description: "",
    image: BannerWrap4,
  },
];

export const frame = [
  { name: "frame 1", image: Frame1 },
  { name: "frame 2", image: Frame2 },
  { name: "frame 3", image: Frame3 },
];

export const newsletterSignupForm = {
  name: "Newsletter Signup Form",
  image: NewsletterSignupForm,
};
export const collectionImage = {
  name: "collection image",
  image: CollectionImage,
};

export const policyImage = [policy1, policy2, policy3, policy4, policy5];

export const styles = [
  { image: style1 },
  { image: style2 },
  { image: style3 },
  { image: style4 },
  { image: style5 },
];

export const paymentMethods = [
  {
    name: COD,
    description: "Thanh toán khi nhận hàng (COD)",
    imageUrl: CODLogo,
  },
  { name: VN_PAY, description: "Thanh toán qua VN Pay", imageUrl: vnPayLogo },
];
