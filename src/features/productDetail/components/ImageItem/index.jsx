import { Image } from "../../../../components";
import clsx from "clsx";
import "./ImageItem.css";
import PropTypes from "prop-types";

const ImageItem = ({ image, isSelector, isValid, onClick }) => {
  const { color, url } = image;

  const imageBoxClassName = clsx(
    "imageItem w-20 h-28 relative transition hover:border hover:border-black cursor-pointer rounded-md",
    {
      imageItemSelector: isSelector,
      "opacity-100": isValid,
      "opacity-50 brightness-50 ": !isValid,
    }
  );
  return (
    <div className={imageBoxClassName} onClick={onClick}>
      <div className="w-full h-[70px] rounded-md overflow-hidden">
        <Image data={{ name: color, image: url }} />
      </div>
      <span className="block text-center text-sm font-semibold">{color}</span>
    </div>
  );
};

ImageItem.propTypes = {
  image: PropTypes.object,
  isSelector: PropTypes.bool,
  isValid: PropTypes.bool,
  onClick: PropTypes.func,
};
export default ImageItem;
