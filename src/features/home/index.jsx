// Conponent
import {
  IntroSlide,
  NewProducts,
  BannerWrapContainer,
  OutstandingContainer,
  BigBanner,
  ByMeContainer,
  NewsletterSignupForm,
  MarketingContainer,
} from "./containers";
import useTitle from "../../hooks/useTitle";
import { useLocation } from "react-router";
// import NewMarketingContainer from "./containers/NewMarketingContainer";

const Home = () => {
  // set path
  const { pathname: next_Path_After_Auth } = useLocation();
  localStorage.setItem("path", next_Path_After_Auth);

  useTitle("Trang chủ");

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
