import { useOutletContext } from "react-router";
import { Container, CustomBox } from "../../../../../components";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
const CustomerAddress = () => {
  const { listAddress } = useOutletContext();

  return (
    <Container className={"space-y-4"}>
      <CustomBox className={"flex justify-between px-8 py-4 items-center"}>
        <span className="text-2xl font-light">Địa chỉ của tôi</span>
        <Button variant="outlined" color="success" startIcon={<AddIcon />}>
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
              <Button variant="outlined" color="info">
                Cập nhật
              </Button>
              <Button variant="outlined" color="error">
                Xóa
              </Button>
            </div>
          </CustomBox>
        ))
      ) : (
        <div className="text-center">Hiện không có địa chỉ nào</div>
      )}
    </Container>
  );
};

export default CustomerAddress;
