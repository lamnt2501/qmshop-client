import { useState, useEffect } from "react";
import CheckoutForm from "../CheckoutForm";
import PaymentMethod from "../PaymentMethod";
import { CustomSnackbar, NewAddress } from "../../../../../components";
import {
  addOrders,
  selectAddressCityName,
  selectAddressDistrictName,
  selectAddressSpecificAddress,
  selectAddressWardName,
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
import { Button } from "@mui/material";
import OldAddress from "../OldAddress";
import ChoiceAddress from "../../Components/ChoiceAddress";
import CheckoutBillPreview from "../CheckoutBillPreview";

const CheckoutInfomations = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const orderItem = useSelector(selectCheckoutItems);

  const city = useSelector(selectAddressCityName);
  const district = useSelector(selectAddressDistrictName);
  const ward = useSelector(selectAddressWardName);
  const specificAddress = useSelector(selectAddressSpecificAddress);

  const orderPaymentMethod = useSelector(selectCheckoutPaymentMethod);
  const orderFullName = useSelector(selectCheckoutFullName);
  const orderPhoneNumber = useSelector(selectCheckoutPhoneNumber);
  const orderVoucher = useSelector(selectCheckoutVoucher);
  const orderAddressId = useSelector(selectCheckoutAddressId);
  const vnPayResult = useSelector(selectCheckoutResult);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState(ALERT_SUCCESS);

  const [newAddress, setNewAddress] = useState(false);

  useEffect(() => {
    if (orderPaymentMethod.provider === VN_PAY && vnPayResult.PaymentUrl) {
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
  }, [
    navigate,
    orderPaymentMethod.name,
    orderPaymentMethod.provider,
    vnPayResult,
  ]);

  const getActive = () => {
    // Kiểm tra điều kiện chung
    const isOrderValid =
      orderItem.length > 0 && orderFullName !== "" && orderPhoneNumber !== "";

    // Kiểm tra điều kiện có sử dụng addressId hay không
    const isNewAddressComplete =
      city !== "" && district !== "" && ward !== "" && specificAddress !== "";

    const isAddressComplete = newAddress
      ? isNewAddressComplete
      : orderAddressId !== 0 || orderAddressId !== "0";

    return isOrderValid && isAddressComplete;
  };

  const handleOrder = (e) => {
    e.preventDefault();
    const valid = getActive();
    if (valid) {
      const order = {
        items: orderItem,
        paymentMethod: orderPaymentMethod,
        voucher: orderVoucher,
        receiverName: orderFullName,
        phoneNumber: orderPhoneNumber,
        ...(newAddress
          ? { address: { city, district, ward, specificAddress } }
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
        <div className="flex gap-4 justify-center text-center text-2xl">
          <ChoiceAddress
            active={!newAddress}
            changeActive={() => setNewAddress(false)}
          >
            Sử dụng địa chỉ đã có
          </ChoiceAddress>
          <ChoiceAddress
            active={newAddress}
            changeActive={() => setNewAddress(true)}
          >
            Sử dụng địa chỉ mới
          </ChoiceAddress>
        </div>
        {newAddress ? <NewAddress /> : <OldAddress />}
        <CheckoutForm />
        <CheckoutBillPreview/>
        <h3 className="text-3xl">Phương thức thanh toán</h3>
        <PaymentMethod />
        <div className="my-4">
          <Button
            fullWidth
            variant="contained"
            disabled={!getActive()}
            onClick={(e) => handleOrder(e)}
          >
            Xác nhận thanh toán
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
