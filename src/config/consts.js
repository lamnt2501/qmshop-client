import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DoDisturbAltIcon from "@mui/icons-material/DoDisturbAlt";
import Inventory2Icon from "@mui/icons-material/Inventory2"
// fetch status
export const FETCH_IDLE = "idle";
export const FETCH_LOADING = "loading";
export const FETCH_SUCCEEDED = "succeeded";
export const FETCH_FAILED = "failed";

// alert status success, info, warning, error
export const ALERT_SUCCESS = "success";
export const ALERT_INFO = "info";
export const ALERT_WARNING = "warning";
export const ALERT_ERROR = "error";

// Payment Method
export const OFLINE = "COD";
export const ONLINE = "Online";

// Payment Provider
export const VN_PAY = "VN Pay";
export const COD = "COD";

// Order Status
export const ORDER_STATUS = [
  "WAITING",
  "APPROVED",
  "PACKING",
  "SHIPPING",
  "SUCCEEDED",
  "CANCEL",
];

export const VN_ORDER_STATUS = [
  "chờ duyệt",
  "đang chuẩn bị",
  "đang đóng gói",
  "đang vận chuyển",
  "đã giao",
  "đã hủy",
];

export const STYLE_ORDER_STATUS = [
  { color: "bg-yellow-100", Icon: AccessTimeFilledIcon },
  { color: "bg-teal-100", Icon: CreditScoreIcon },
  { color: "bg-teal-200", Icon: Inventory2Icon },
  { color: "bg-cyan-100", Icon: LocalShippingIcon },
  { color: "bg-green-100", Icon: CheckCircleOutlineIcon },
  { color: "bg-rose-100", Icon: DoDisturbAltIcon },
];

// export const COLOR_ORDER_STATUS = [
//   "bg-yellow-100",
//   "bg-teal-100",
//   "bg-cyan-100",
//   "bg-green-100",
//   "bg-rose-100",
// ];

// Payment Status
export const PAYMENT_STATUS = ["PAID", "UNPAID", "PROCESSING", "CANCEL"];
export const VN_PAYMENT_STATUS = [
  "đã thanh toán",
  "chưa thanh toán",
  "đang xử lý",
  "hủy bỏ",
];

export const COLOR_PAYMENT_STATUS = [
  "bg-green-200",
  "bg-yellow-100",
  "bg-cyan-200",
  "bg-rose-200",
];

// mã số thuế
export const LEGAL_REGISTRATION_NO = "987654";

export const SHOP_EMAIL = "qmstore@gmail.com";
export const SHOP_PHONE = "0912345678";
export const SHOP_WEBSITE = "https://qm-shop.netlify.app/home";

// Giới tính
export const VN_GENDERS = ["Nam", "Nữ"];
export const GENDERS = ["MALE", "FEMALE"];

// export const VN_GENDERS = ["Nam", "Nữ", "Khác"];
// export const GENDERS = ["MALE", "FEMALE", "OTHER"];
