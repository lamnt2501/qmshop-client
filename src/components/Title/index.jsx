import PropTypes from "prop-types";
const Title = ({ children, className }) => {
  return (
    <h2 className={"text-2xl uppercase font-bold " + className}>{children}</h2>
  );
};
Title.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
export default Title;
