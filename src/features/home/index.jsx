import { React } from "react";

// Conponent
import {
  IntroSlide,
  CategoriesSlide,
  BrandsSlide,
  NewProducts,
  BannerWrapContainer,
  OutstandingContainer,
  BigBanner,
  ByMeContainer,
  NewsletterSignupForm,
  MarketingContainer,
} from "./containers";
import useTitle from "../../hooks/useTitle";
// import NewMarketingContainer from "./containers/NewMarketingContainer";

const Home = () => {

  useTitle('Trang chủ')

  return (
    <div className="m-auto">
      <IntroSlide />
      {/* <CategoriesSlide /> */}
      {/* <BrandsSlide /> */}
      <NewProducts />
      <BannerWrapContainer />
      <OutstandingContainer />
      <BigBanner />
      <ByMeContainer />
      <NewsletterSignupForm />
      <MarketingContainer />
    </div>
  );
};

export default Home;
