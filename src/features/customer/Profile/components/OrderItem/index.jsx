import PropTypes from "prop-types";
import {
  priceConvert,
  splitDateTime,
  translateLanguage,
} from "../../../../../utils";
import { ORDER_STATUS, VN_ORDER_STATUS } from "../../../../../config";
import { CustomBox } from "../../../../../components";
import ProductItem from "../ProductItem";

const OrderItem = ({ order }) => {
  // console.log(order);

  return (
    <CustomBox className={"px-4 py-2"}>
      <div className="flex justify-between">
        <div>{splitDateTime(order.createdAt)}</div>
        <div>
          {translateLanguage(VN_ORDER_STATUS, ORDER_STATUS, order.status)}
        </div>
      </div>
      <div className="my-4">
        {order.items.map((item, index) => (
          <li key={index} className="list-none">
            <ProductItem product={item} />
          </li>
        ))}
      </div>
      <div className="flex justify-end items-center gap-2">
        <h5>Thành tiền: </h5>
        <span className="text-red-500 text-2xl">
          {priceConvert(order.total)}
        </span>
      </div>
    </CustomBox>
  );
};

OrderItem.propTypes = {
  order: PropTypes.object,
};

export default OrderItem;
