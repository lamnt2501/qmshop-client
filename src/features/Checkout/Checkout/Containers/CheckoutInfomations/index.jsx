import React, { useState, useEffect } from "react";
import Address from "../Address";
import CheckoutForm from "../CheckoutForm";
import PaymentMethod from "../PaymentMethod";
import { Button, CustomSnackbar } from "../../../../../components";
import {
  addOrders,
  selectCheckoutAddress,
  selectCheckoutAddressId,
  selectCheckoutFullName,
  selectCheckoutItems,
  selectCheckoutPaymentMethod,
  selectCheckoutPhoneNumber,
  selectCheckoutResult,
  selectCheckoutVoucher,
} from "../../../../../app/reducers";
import { useDispatch, useSelector } from "react-redux";
import { ALERT_ERROR, ALERT_SUCCESS, COD, VN_PAY } from "../../../../../config";
import { useNavigate } from "react-router";

const CheckoutInfomations = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const orderItem = useSelector(selectCheckoutItems);
  const orderAddress = useSelector(selectCheckoutAddress);
  const orderPaymentMethod = useSelector(selectCheckoutPaymentMethod);
  const orderFullName = useSelector(selectCheckoutFullName);
  const orderPhoneNumber = useSelector(selectCheckoutPhoneNumber);
  const orderVoucher = useSelector(selectCheckoutVoucher);
  const orderAddressId = useSelector(selectCheckoutAddressId);
  const vnPayResult = useSelector(selectCheckoutResult);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState(ALERT_SUCCESS);

  useEffect(() => {
    if (orderPaymentMethod.name === VN_PAY && vnPayResult.PaymentUrl) {
      window.location.href = vnPayResult.PaymentUrl;
    } else if (orderPaymentMethod.name === COD && vnPayResult.OrderId) {
      navigate(`/checkout/results`, {
        state: { orderid: vnPayResult.OrderId },
      });
    } 
    // else {
    //   // Hiển thị thông báo lỗi
    //   setSnackbarMessage("Có lỗi xẩy ra!");
    //   setSnackbarSeverity(ALERT_ERROR);
    //   setOpenSnackbar(true);
    // }
  }, [vnPayResult]);

  const handleOrder = (e) => {
    e.preventDefault();

    // Kiểm tra điều kiện chung
    const isOrderValid =
      orderItem.length > 0 && orderFullName !== "" && orderPhoneNumber !== "";

    // Kiểm tra điều kiện có sử dụng addressId hay không
    const isAddressComplete =
      orderAddress.city !== "" &&
      orderAddress.district !== "" &&
      orderAddress.ward !== "" &&
      orderAddress.specificAddress !== "";

    if (
      isOrderValid &&
      (isAddressComplete || orderAddressId !== 0 || orderAddressId !== "0")
    ) {
      const order = {
        items: orderItem,
        paymentMethod: orderPaymentMethod,
        voucher: orderVoucher,
        receiverName: orderFullName,
        phoneNumber: orderPhoneNumber,
        ...(isAddressComplete
          ? { address: orderAddress }
          : { addressId: orderAddressId }),
      };
      dispatch(addOrders(order));
    } else {
      // Hiển thị thông báo lỗi
      setSnackbarMessage("Vui lòng kiểm tra lại thông tin đơn hàng!");
      setSnackbarSeverity(ALERT_ERROR);
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      <div className="my-4">{/* <CheckoutInfomationsHeader /> */}</div>
      <div className="my-4 flex flex-col gap-4">
        <h3 className="text-3xl">Thông tin giao hàng</h3>
        <Address />
        <CheckoutForm />
        <h3 className="text-3xl">Phương thức thanh toán</h3>
        <PaymentMethod />
        <div className="my-4">
          <Button isFull black afterAnimation onClick={(e) => handleOrder(e)}>
            Hoàn tất đơn hàng
          </Button>
        </div>
      </div>

      {/* Snackbar */}
      <CustomSnackbar
        openSnackbar={openSnackbar}
        handleCloseSnackbar={handleCloseSnackbar}
        snackbarSeverity={snackbarSeverity}
      >
        {snackbarMessage}
      </CustomSnackbar>
    </div>
  );
};

export default CheckoutInfomations;
