import React, { useEffect } from "react";
import { Input } from "../../../../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCustomerInfomations,
  selectCustomerName,
  selectCustomerPhone,
  selectCustomerStatus,
  selectCheckoutFullName,
  selectCheckoutPhoneNumber,
  setFullName,
  setPhoneNumber,
} from "../../../../../app/reducers";
import { FETCH_SUCCEEDED } from "../../../../../config";

const CheckoutForm = () => {
  const dispatch = useDispatch();
  const phoneNumber = useSelector(selectCheckoutPhoneNumber);
  const orderFullName = useSelector(selectCheckoutFullName);

  const customerName = useSelector(selectCustomerName);
  const customerPhone = useSelector(selectCustomerPhone);
  const customerStatus = useSelector(selectCustomerStatus);

  useEffect(() => {
    dispatch(fetchCustomerInfomations());
  }, []);

  useEffect(() => {
    if (customerStatus === FETCH_SUCCEEDED) {
      dispatch(setPhoneNumber(customerPhone));
      dispatch(setFullName(customerName));
    }
  }, [customerStatus]);

  return (
    <div>
      <div className="flex gap-4">
        <Input
          value={phoneNumber}
          onChange={(e) => dispatch(setPhoneNumber(e.target.value))}
        >
          Số điện thoại
        </Input>
        <Input
          value={orderFullName}
          onChange={(e) => dispatch(setFullName(e.target.value))}
        >
          Tên người nhận
        </Input>
      </div>
    </div>
  );
};

export default CheckoutForm;
