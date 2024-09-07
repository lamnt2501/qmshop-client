import PropTypes from "prop-types";

const CustomBox = ({ children, className }) => {
  return (
    <div
      className={
        "border border-slate-200 rounded-md shadow-md bg-white " + className
      }
    >
      {children}
    </div>
  );
};

CustomBox.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default CustomBox;
