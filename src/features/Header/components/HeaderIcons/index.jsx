import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const HeaderIcons = ({ children, url, isLink = true }) => {
  return (
    <>
      {isLink ? (
        <Link
          className=" navItem rounded-lg px-4 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
          to={url}
        >
          {children}
        </Link>
      ) : (
        <div className=" navItem rounded-lg px-4 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 cursor-pointer">
          {children}
        </div>
      )}
    </>
  );
};
HeaderIcons.propTypes = {
  children: PropTypes.any,
  url: PropTypes.string,
  isLink: PropTypes.bool,
};
export default HeaderIcons;
