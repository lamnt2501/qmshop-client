import PropTypes from "prop-types";
import OrderItem from "../../components/OrderItem";

const ListOrder = ({ listOrder }) => {
  return (
    <div>
      {listOrder.map((order, index) => (
        <li key={index} className="list-none my-4">
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
