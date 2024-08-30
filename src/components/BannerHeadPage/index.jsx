import { Image, Title } from "..";
import { collectionImage } from "../../config";
import PropTypes from "prop-types";

const BannerHeadPage = ({ title, description, children }) => {
  return (
    <div className="relative py-16 text-center">
      <div className="flex flex-col gap-3 justify-center w-full px-10">
        <Title>{title}</Title>
        <div className="description">{description ?? children}</div>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0">
        <Image data={collectionImage} />
      </div>
    </div>
  );
};

BannerHeadPage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.any,
};
export default BannerHeadPage;
