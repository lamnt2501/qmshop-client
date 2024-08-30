import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCustomerAddresses,
  selectAuthToken,
  selectCustomerAddresses,
  selectCustomerAddressStatus,
  selectCustomerStatus,
  selectCheckoutAddressId,
  setAddressId,
} from "../../../../../app/reducers";
import { FETCH_SUCCEEDED } from "../../../../../config";

const OldAddress = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectAuthToken);
  const customerAddresses = useSelector(selectCustomerAddresses);
  const AddressId = useSelector(selectCheckoutAddressId);
  const addressStatus = useSelector(selectCustomerAddressStatus);

  useEffect(() => {
    if (token) {
      dispatch(fetchCustomerAddresses());
      // dispatch(setAddressId(customerAddresses[0].id ?? 0))
    }
  }, []);

  useEffect(() => {
    if (addressStatus === FETCH_SUCCEEDED) {
      customerAddresses.length > 0
        ? dispatch(setAddressId(customerAddresses[0].id))
        : dispatch(setAddressId(0));
    }
  }, [addressStatus]);

  const handleSetAddress = (event) => {
    dispatch(setAddressId(event.target.value));
  };

  return (
    <div>
      <select
        className="p-4 border border-slate-600 w-full rounded-md"
        name="oldAddress"
        id="oldAddress"
        value={AddressId}
        onChange={handleSetAddress}
      >
        {customerAddresses.length > 0 ? (
          customerAddresses.map((address) => (
            <option key={address.id} value={address.id}>
              {address.specificAddress}
            </option>
          ))
        ) : (
          <option>Bạn chưa có địa chỉ đã lưu</option>
        )}
      </select>
    </div>
  );
};

export default OldAddress;
