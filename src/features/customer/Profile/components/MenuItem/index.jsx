import clsx from "clsx";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function MenuItem({ onClick, index, isActive, item,path }) {
  return (
    <NavLink 
      to={path}
      onClick={() => onClick(index)}
      className={clsx(
        "basis-1/3 flex items-center gap-2 font-light hover:text-red-500 cursor-pointer transition duration-200 hover:bg-gray-100 py-1",
        { "text-red-500 bg-gray-100": isActive }
      )}
    >
      <div className="basis-7">{item.icon}</div>
      <h5 className="">{item.name}</h5>
    </NavLink>
  );
}
MenuItem.propTypes = {
  onClick: PropTypes.func,
  index: PropTypes.number,
  isActive: PropTypes.bool,
  item: PropTypes.object,
  path: PropTypes.string
};
export default MenuItem;
