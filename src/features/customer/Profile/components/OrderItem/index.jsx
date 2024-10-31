import PropTypes from "prop-types";
import {
  getColorByStatus,
  priceConvert,
  splitDateTime,
  translateLanguage,
} from "../../../../../utils";
import { ORDER_STATUS, VN_ORDER_STATUS } from "../../../../../config";
import { CustomBox } from "../../../../../components";
import ProductItem from "../ProductItem";
import { Link } from "react-router-dom";
// import { Button } from "@mui/material";

const OrderItem = ({ order }) => {
  const bgColor = getColorByStatus("order", order.status);

  return (
    <CustomBox className={"px-4 py-2"}>
      <div className="flex justify-between">
        <div>{splitDateTime(order.createdAt)}</div>
        <div
          className={`capitalize ${bgColor.color} px-2 py-1 rounded-md border border-gray-400`}
        >
          {translateLanguage(VN_ORDER_STATUS, ORDER_STATUS, order.status)}
        </div>
      </div>
      <Link to={`${order.orderId}`} className="my-4">
        {order.items.map((item, index) => (
          <ProductItem key={index} product={item} />
        ))}
      </Link>
      <div className="flex justify-between items-center my-4">
        <div>
          {/* <Button variant="outlined" color="error" disabled={ORDER_STATUS[0] !== order.status}>
            Hủy đơn hàng
          </Button> */}
        </div>
        <div className="flex items-center gap-2">
          <h5>Thành tiền: </h5>
          <span className="text-red-500 text-2xl">
            {priceConvert(order.total)}
          </span>
        </div>
      </div>
    </CustomBox>
  );
};

OrderItem.propTypes = {
  order: PropTypes.object,
};

export default OrderItem;
