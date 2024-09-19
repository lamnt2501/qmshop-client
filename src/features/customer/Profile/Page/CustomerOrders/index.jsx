import { useOutletContext } from "react-router";
import OrderItem from "../../components/OrderItem";

const CustomerOrders = () => {
  const { listOrder } = useOutletContext();

  return (
    <ul className="flex flex-col gap-4">
      {listOrder.map((order, index) => (
        <li key={index} className="list-none">
          <OrderItem order={order} />
        </li>
      ))}
    </ul>
  );
};

export default CustomerOrders;
