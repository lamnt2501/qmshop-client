// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const IconFotter = ({ url, children }) => {
  return (
    <a
      href={url}
      target="_blank"
      className="size-8 flex items-center justify-center border border-black text-black rounded-full transition-all hover:border-[#fe2c55] hover:text-[#fe2c55]"
    >
      {children}
    </a>
  );
};
IconFotter.propTypes = {
  url: PropTypes.string,
  children: PropTypes.any,
};
export default IconFotter;
