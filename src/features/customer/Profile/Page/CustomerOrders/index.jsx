import { useOutletContext } from "react-router";
import OrderItem from "../../components/OrderItem";
import { ORDER_STATUS, VN_ORDER_STATUS } from "../../../../../config";
import clsx from "clsx";
import { useState } from "react";
import "./CustomerOrders.css";
import { translateLanguage } from "../../../../../utils";
import { CustomBox } from "../../../../../components";
const CustomerOrders = () => {
  const { listOrder } = useOutletContext();
  const filterOrderItem = Object.groupBy(listOrder, ({ status }) => status);
  const filterOrderStatus = ["tất cả", ...VN_ORDER_STATUS];

  const [selected, setSelected] = useState(0);

  return (
    <div>
      <div className="flex gap-2 bg-white mb-4 rounded-md shadow-md">
        {filterOrderStatus.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelected(index)}
            className={clsx(
              "relative flex items-center justify-center p-2 basis-1/6 text-center cursor-pointer transition-all",
              {
                "text-red-500 menuItemActive": selected === index,
              }
            )}
          >
            {item}
          </div>
        ))}
      </div>
      <ul className="flex flex-col gap-4">
        {selected === 0 ? (
          listOrder.map((order, index) => (
            <li key={index} className="list-none">
              <OrderItem order={order} />
            </li>
          ))
        ) : filterOrderItem[
            translateLanguage(
              VN_ORDER_STATUS,
              ORDER_STATUS,
              filterOrderStatus[selected]
            )
          ] ? (
          filterOrderItem[
            translateLanguage(
              VN_ORDER_STATUS,
              ORDER_STATUS,
              filterOrderStatus[selected]
            )
          ].map((order, index) => (
            <li key={index} className="list-none">
              <OrderItem order={order} />
            </li>
          ))
        ) : (
          <CustomBox className="text-center p-4 my-10 text-2xl">Không có đơn hàng</CustomBox>
        )}
      </ul>
    </div>
  );
};

export default CustomerOrders;
