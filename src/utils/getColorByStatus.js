import { STYLE_ORDER_STATUS, COLOR_PAYMENT_STATUS, ORDER_STATUS, PAYMENT_STATUS } from "../config";


const getColorByStatus = (type, value) => {
  switch (type) {
    case "order":
      return STYLE_ORDER_STATUS[ORDER_STATUS.indexOf(value)];
    case "payment":
      return COLOR_PAYMENT_STATUS[PAYMENT_STATUS.indexOf(value)];
    default:
      return "#fff";
  }
};

export default getColorByStatus;
