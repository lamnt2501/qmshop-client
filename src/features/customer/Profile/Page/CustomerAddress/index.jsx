import { useOutletContext } from "react-router";
import {
  Container,
  CustomBox,
  Overlay,
  Popup,
} from "../../../../../components";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import AddressBox from "../../container/AddressBox";
import { useDispatch } from "react-redux";
import { deleteCustomerAddresses, resetAddressList } from "../../../../../app/reducers";
const CustomerAddress = () => {
  const dispatch = useDispatch();
  const { listAddress } = useOutletContext();

  const [overlay, setOverlay] = useState(false);
  const [selectorAddressId, setSelectorAddressId] = useState(0);
  const [isNewAddress, setIsNewAddress] = useState(false);
  const [isUpdateAddress, setIsUpdateAddress] = useState(false);
  const [isDeleteAddress, setIsDeleteAddress] = useState(false);

  const handleCloseOverlay = () => {
    setOverlay(false);
    setSelectorAddressId(0);
    setIsNewAddress(false);
    setIsUpdateAddress(false);
    setIsDeleteAddress(false);
    dispatch(resetAddressList());
  };

  const handleOpenOverlay = (type, addressId) => {
    setOverlay(true);

    if (type === "add") {
      setIsNewAddress(true);
      return;
    }

    if (!addressId) return;

    switch (type) {
      case "update":
        setIsUpdateAddress(true);
        break;
      case "delete":
        setIsDeleteAddress(true);
        break;
      default:
        return;
    }

    setSelectorAddressId(addressId);
  };

  const handleDeleteAddress = () => {
    dispatch(deleteCustomerAddresses(selectorAddressId))
    handleCloseOverlay()
  };

  return (
    <>
      <Overlay isOverlay={overlay} onClick={() => handleCloseOverlay()}>
        {isDeleteAddress && (
          <Popup
            receiveName="Xóa"
            cancelName="Giữ lại"
            receive={overlay}
            handleReceive={() => handleDeleteAddress()}
            handleCancel={() => handleCloseOverlay()}
          >
            Bạn có muốn xóa địa chỉ này
          </Popup>
        )}
        {(isNewAddress || isUpdateAddress) && (
          <AddressBox
            isNewAddress={isNewAddress}
            isUpdateAddress={isUpdateAddress}
            addressId={selectorAddressId}
            receive={overlay}
            handleCancel={() => handleCloseOverlay()}
          />
        )}
      </Overlay>

      <Container className={"space-y-4"}>
        <CustomBox className={"flex justify-between px-8 py-4 items-center"}>
          <span className="text-2xl font-light">Địa chỉ của tôi</span>
          <Button
            variant="outlined"
            color="success"
            onClick={() => handleOpenOverlay("add")}
            startIcon={<AddIcon />}
          >
            Thêm địa chỉ mới
          </Button>
        </CustomBox>
        {listAddress && listAddress.length > 0 ? (
          listAddress.map((address) => (
            <CustomBox
              key={address.id}
              className={"flex justify-between px-8 py-10 items-center"}
            >
              <div>
                <div>{address.specificAddress}</div>
                <div>
                  Phường {address.ward}, Quận {address.district}, {address.city}
                </div>
              </div>
              <div className={"space-x-4"}>
                <Button
                  variant="outlined"
                  color="info"
                  onClick={() => handleOpenOverlay("update", address.id)}
                >
                  Cập nhật
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleOpenOverlay("delete", address.id)}
                >
                  Xóa
                </Button>
              </div>
            </CustomBox>
          ))
        ) : (
          <div className="text-center">Hiện không có địa chỉ nào</div>
        )}
      </Container>
    </>
  );
};

export default CustomerAddress;
