import clsx from "clsx";
import PropTypes from "prop-types";

const ChoiceAddress = ({ active, children, changeActive }) => {
  return (
    <button
      className={clsx(
        "basis-1/2 transition duration-300 hover:bg-slate-300 border border-black rounded-lg",
        {
          "bg-slate-300": active,
          "bg-white": !active,
        }
      )}
      onClick={changeActive}
    >
      {children}
    </button>
  );
};

ChoiceAddress.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.any,
  changeActive: PropTypes.func,
};
export default ChoiceAddress;
