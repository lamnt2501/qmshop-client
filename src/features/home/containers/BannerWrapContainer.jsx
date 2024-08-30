import React from "react";
import BannerWrap from "../components/BannerWrap";
import { bannerWrap } from "../../../config";
import { Container } from "../../../components";

const BannerWrapContainer = () => {
  return (
    <Container>
      <div className="grid grid-rows-1 md:grid-rows-2 grid-cols-2 md:grid-cols-12 gap-4 md:gap-8">
        <div className="col-span-2 md:col-span-6 md:row-span-2 rounded-md overflow-hidden">
          <BannerWrap data={bannerWrap[0]} top />
        </div>
        <div className="col-span-2 md:col-span-6 md:row-span-1 rounded-md overflow-hidden">
          <BannerWrap data={bannerWrap[1]} bottom />
        </div>
        <div className="col-span-2 md:col-span-6 md:row-span-1 rounded-md overflow-hidden">
          <BannerWrap data={bannerWrap[2]} bottom />
        </div>
      </div>

    </Container>
  );
};

export default BannerWrapContainer;
