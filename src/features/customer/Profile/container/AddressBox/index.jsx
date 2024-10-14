import PropTypes from "prop-types";
import { NewAddress, Popup } from "../../../../../components";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import {
  addNewCustomerAddresses,
  selectAddressCity,
  selectAddressCityName,
  selectAddressDistrict,
  selectAddressDistrictName,
  selectAddressSpecificAddress,
  selectAddressWard,
  selectAddressWardName,
  updateCustomerAddresses,
} from "../../../../../app/reducers";

const AddressBox = ({
  addressId,
  isNewAddress,
  isUpdateAddress,
  handleCancel,
}) => {
  const dispatch = useDispatch();

  const cityId = useSelector(selectAddressCity);
  const districtId = useSelector(selectAddressDistrict);
  const wardId = useSelector(selectAddressWard);

  const city = useSelector(selectAddressCityName);
  const district = useSelector(selectAddressDistrictName);
  const ward = useSelector(selectAddressWardName);

  const specificAddress = useSelector(selectAddressSpecificAddress);

  const getActive = () => {
    return (
      cityId !== "" &&
      districtId !== "" &&
      wardId !== "" &&
      specificAddress !== ""
    );
  };

  const handleSubmit = () => {
    const newAddress = { city, district, ward, specificAddress };
    if (isNewAddress) {
      dispatch(addNewCustomerAddresses(newAddress));
    } else if (isUpdateAddress && addressId) {
      dispatch(updateCustomerAddresses({ id: addressId, newAddress }));
    }
    handleCancel();
  };

  return (
    <Popup receive={true}>
      <div className="text-center text-2xl font-medium mb-4">
        Chọn địa chỉ mới
      </div>
      <div>
        <NewAddress />
      </div>
      <div className="space-x-4">
        <Button variant="outlined" color="error" onClick={handleCancel}>
          Hủy bỏ
        </Button>
        <Button
          variant="outlined"
          color="success"
          disabled={!getActive()}
          onClick={() => handleSubmit()}
        >
          Lưu địa chỉ
        </Button>
      </div>
    </Popup>
  );
};

AddressBox.propTypes = {
  addressId: PropTypes.number,
  isNewAddress: PropTypes.bool,
  isUpdateAddress: PropTypes.bool,
  handleCancel: PropTypes.func,
};

export default AddressBox;
