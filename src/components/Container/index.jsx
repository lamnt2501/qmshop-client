import PropTypes from "prop-types";
const Container = ({ children }) => {
  return (
    <div className="mb-10 px-2 sm:px-4 md:px-8 lg:px-12">
      <div className="w-full max-w-container mx-auto ">{children}</div>
    </div>
  );
};
Container.propTypes = {
  children: PropTypes.any,
};
export default Container;
