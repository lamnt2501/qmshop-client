import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const HeaderIcons = ({ children, url, isLink = true, className }) => {
  return (
    <>
      {isLink ? (
        <Link
          className={
            " navItem rounded-md text-xl px-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 cursor-pointer " +
            className
          }
          to={url}
        >
          {children}
        </Link>
      ) : (
        <div
          className={
            " navItem rounded-md text-xl px-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 cursor-pointer " +
            className
          }
        >
          {children}
        </div>
      )}
    </>
  );
};
HeaderIcons.propTypes = {
  children: PropTypes.any,
  url: PropTypes.string,
  className: PropTypes.string,
  isLink: PropTypes.bool,
};
export default HeaderIcons;
