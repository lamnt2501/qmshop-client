import PropTypes from "prop-types";
import OrderItem from "../../components/OrderItem";

const ListOrder = ({ listOrder }) => {
  return (
    <div className="flex flex-col gap-4">
      {listOrder.map((order, index) => (
        <li key={index} className="list-none">
          <OrderItem order={order} />
        </li>
      ))}
    </div>
  );
};

ListOrder.propTypes = {
  listOrder: PropTypes.array,
};

export default ListOrder;
