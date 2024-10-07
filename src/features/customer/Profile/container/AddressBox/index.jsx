import PropTypes from "prop-types";
import { Popup } from "../../../../../components";
import { useDispatch } from "react-redux";

const AddressBox = ({
  addressId,
  isNewAddress,
  isUpdateAddress,
  receive,
  handleCancel,
}) => {
  const dispatch = useDispatch()
  // const 
  return (
    <Popup
      receive={receive}
      handleCancel={handleCancel}
      cancelName="Hủy"
      receiveName={addressId === 0 ? "Thêm địa chỉ" : "Cập nhật địa chỉ"}
    >
      <div className="text-center text-2xl font-medium mb-4">Chọn địa chỉ mới</div>
    </Popup>
  );
};

AddressBox.propTypes = {
  addressId: PropTypes.number,
  isNewAddress: PropTypes.bool,
  isUpdateAddress: PropTypes.bool,
  receive: PropTypes.bool,
  handleCancel: PropTypes.func,
};

export default AddressBox;
