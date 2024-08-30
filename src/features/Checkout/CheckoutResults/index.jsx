import React from "react";
import { useLocation, useNavigate } from "react-router";
import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import WarningIcon from "@mui/icons-material/Warning";
import { BannerHeadPage, Button } from "../../../components";
import BillDetail from "./BillDetail";
import useTitle from "../../../hooks/useTitle";
const CheckoutResults = () => {
  const navigate = useNavigate();

  useTitle('Thanh toán - kết quả')

  // Lấy location hiện tại từ react-router
  const location = useLocation();

  // Tạo đối tượng URLSearchParams từ location.search
  const queryParams = new URLSearchParams(location.search);

  // Lấy các biến từ query string

  // variable VNPay payment
  // http://localhost:3000/checkout/results?
  /*
    vnp_Amount=63756400
    vnp_BankCode=NCB
    vnp_BankTranNo=VNP14569144
    vnp_CardType=ATM
    vnp_OrderInfo=vu+binh+an+thanh+toan+don+hang+95
    vnp_PayDate=20240827155531
    vnp_ResponseCode=00
    vnp_TmnCode=NG44HZWR
    vnp_TransactionNo=14569144
    vnp_TransactionStatus=00
    vnp_TxnRef=95
    vnp_SecureHash=a10f2b66942347ca9e828bcbffdff40a742b9cc2c35d48ac441ea2ec24cb9f71692716439c29120144860e848fc7f48f1aeceda641d94cb593774a064df2c8dc
  */

  const vnp_ResponseCode = queryParams.get("vnp_ResponseCode");

  // orderId VNPay
  const vnp_TxnRef = queryParams.get("vnp_TxnRef");

  // OrderId COD
  const { orderid } = location.state ?? 0;

  const handleClick = () => {
    navigate("/");
  };
  const button = (
    <Button black afterAnimation isFull onClick={handleClick}>
      Quay lại trang chủ
    </Button>
  );



  return (
    <div className="">
      {orderid && (
        <>
          <BannerHeadPage>
            <div className="flex gap-4 justify-center items-center text-center text-yellow-500">
              <div>
                <WarningAmberIcon sx={{ fontSize: 40 }} />
              </div>
              <span className="text-4xl">Đang chờ thanh toán</span>
            </div>
          </BannerHeadPage>
          <BillDetail orderId={orderid} />
        </>
      )}
      {vnp_ResponseCode === "00" && (
        <>
          <BannerHeadPage>
            <div className="flex gap-4 justify-center items-center text-center text-green-500">
              <div>
                <CheckCircleIcon sx={{ fontSize: 40 }} />
              </div>
              <span className="text-4xl">Giao dịch thành công</span>
            </div>
          </BannerHeadPage>
          <BillDetail orderId={vnp_TxnRef} />
        </>
      )}
      {vnp_ResponseCode === "11" && (
        <BannerHeadPage>
          <div className="flex gap-4 justify-center items-center text-center text-red-500">
            <div>
              <CheckCircleIcon sx={{ fontSize: 40 }} />
            </div>
            <span className="text-4xl">Giao dịch không thành công</span>
          </div>
        </BannerHeadPage>
      )}
    </div>
  );
};

export default CheckoutResults;
