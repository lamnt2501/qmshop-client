import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCustomerAddresses,
  selectAuthToken,
  selectCustomerAddresses,
  selectCustomerAddressStatus,
  selectCheckoutAddressId,
  setAddressId,
} from "../../../../../app/reducers";
import { FETCH_SUCCEEDED } from "../../../../../config";
import { Option, Select } from "@mui/joy";

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
  }, [dispatch, token]);

  useEffect(() => {
    if (addressStatus === FETCH_SUCCEEDED) {
      customerAddresses.length > 0
        ? dispatch(setAddressId(customerAddresses[0].id))
        : dispatch(setAddressId(0));
    }
  }, [dispatch, addressStatus, customerAddresses]);

  const handleSetAddress = (event, newValue) => {
    dispatch(setAddressId(newValue));
  };

  return (
    <div>
      <Select
        placeholder={"Địa chỉ"}
        value={AddressId}
        onChange={handleSetAddress}
        sx={{ minWidth: 200 }}
      >
        {Array.isArray(customerAddresses) &&
          customerAddresses.map(({ id, specificAddress }) => (
            <Option key={id} value={id}>
              {specificAddress}
            </Option>
          ))}
      </Select>
    </div>
  );
};

export default OldAddress;
