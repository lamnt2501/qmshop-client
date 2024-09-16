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
  "SHIPPING",
  "SUCCEEDED",
  "CANCEL",
];
export const VN_ORDER_STATUS = [
  "ĐANG DUYỆT",
  "ĐÃ DUYỆT",
  "ĐANG VẬN CHUYỂN",
  "ĐÃ GIAO",
  "ĐÃ HỦY",
];

// export const ORDER_STATUS_WAITING = "WAITING";
// export const ORDER_STATUS_APPROVED = "APPROVED";
// export const ORDER_STATUS_SHIPPING = "SHIPPING";
// export const ORDER_STATUS_SUCCEEDED = "SUCCEEDED";
// export const ORDER_STATUS_CANCEL = "CANCEL";

// export const VN_ORDER_STATUS_WAITING = "ĐANG CHỜ";
// export const VN_ORDER_STATUS_APPROVED = "ĐÃ DUYỆT";
// export const VN_ORDER_STATUS_SHIPPING = "ĐANG VẬN CHUYỂN";
// export const VN_ORDER_STATUS_SUCCEEDED = "ĐÃ GIAO";
// export const VN_ORDER_STATUS_CANCEL = "ĐÃ HỦY";

// Payment Status
export const PAYMENT_STATUS = ["PAID", "UNPAID", "PROCESSING", "CANCEL"];
export const VN_PAYMENT_STATUS = [
  "ĐÃ THANH TOÁN",
  "CHƯA THANH TOÁN",
  "ĐANG XỬ LÝ",
  "HỦY BỎ",
];

// export const PAYMENT_STATUS_PAID = "PAID";
// export const PAYMENT_STATUS_UNPAID = "UNPAID";
// export const PAYMENT_STATUS_PROCESSING = "PROCESSING";
// export const PAYMENT_STATUS_CANCEL = "CANCEL";

// export const VN_PAYMENT_STATUS_PAID = "ĐÃ THANH TOÁN";
// export const VN_PAYMENT_STATUS_UNPAID = "CHƯA THANH TOÁN";
// export const VN_PAYMENT_STATUS_PROCESSING = "ĐANG XỬ LÝ";
// export const VN_PAYMENT_STATUS_CANCEL = "HỦY BỎ";

// mã số thuế
export const LEGAL_REGISTRATION_NO = "987654";

export const SHOP_EMAIL = "qmstore@gmail.com";
export const SHOP_PHONE = "0912345678";
export const SHOP_WEBSITE = "www.qmstore.com.vn";

// Giới tính
// export const VN_GENDERS = ["Nam", "Nữ", "Khác"];
export const VN_GENDERS = ["Nam", "Nữ"];
// export const GENDERS = ["MALE", "FEMALE", "OTHER"];
export const GENDERS = ["MALE", "FEMALE"];
