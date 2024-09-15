import { Avatar } from "@mui/material";
import { Container, CustomBox, CustomSnackbar } from "../../../components";
import { ALERT_SUCCESS, avataImage, FETCH_SUCCEEDED } from "../../../config";
import { useDispatch, useSelector } from "react-redux";
import GradingIcon from "@mui/icons-material/Grading";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import {
  fetchCustomerInfomations,
  selectAuthToken,
  selectCustomerAddresses,
  selectListOrder,
  selectCustomerName,
  selectCustomerPhone,
  selectCustomerEmail,
  fetchCustomerAddresses,
  fetchOrders,
  selectCustomerUpdateStatus,
} from "../../../app/reducers";
import { useEffect, useState } from "react";
import ChangeInfomations from "./container/ChangeInfomations";
import MenuItem from "./components/MenuItem";
import ChangePassword from "./container/ChangePassword";

const Profile = () => {
  const dispatch = useDispatch();

  const menu = [
    { icon: <AccountBoxIcon />, name: "Hồ sơ" },
    { icon: <HomeIcon />, name: "Địa chỉ" },
    { icon: <GradingIcon />, name: "đơn hàng" },
  ];
  const [selectedMenu, setSelectedMenu] = useState(0);

  const token = useSelector(selectAuthToken);

  const customerUpdateStatus = useSelector(selectCustomerUpdateStatus);
  const customerName = useSelector(selectCustomerName);
  const customerPhone = useSelector(selectCustomerPhone);
  const customerEmail = useSelector(selectCustomerEmail);

  const listAddress = useSelector(selectCustomerAddresses);
  const listOrder = useSelector(selectListOrder);

  useEffect(() => {
    if (token) {
      dispatch(fetchCustomerInfomations());
      dispatch(fetchCustomerAddresses());
      dispatch(fetchOrders());
    }
  }, [dispatch, token, customerUpdateStatus]);

  return (
    <Container>
      {token && (
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="flex items-center gap-4 py-2">
              <div className="w-20 h-20">
                <Avatar
                  sx={{ width: "100%", height: "100%" }}
                  alt={avataImage.name}
                  src={avataImage.url}
                />
              </div>

              <div className="flex flex-col">
                <p className="">Tài khoản của</p>
                <h3 className="text-xl capitalize font-normal">
                  {customerName}
                </h3>
              </div>
            </div>
          </div>

          <div className="my-3 flex flex-col md:flex-row gap-4">
            <div className=" md:basis-1/6">
              {menu.map((item, index) => (
                <li key={index} className="list-none">
                  <MenuItem
                    item={item}
                    onClick={setSelectedMenu}
                    isActive={index === selectedMenu}
                    index={index}
                  />
                </li>
              ))}
            </div>
            {selectedMenu === 0 && (
              <div className="basis-5/6">
                <CustomBox className={"mb-10"}>
                  <ChangeInfomations
                    customerName={customerName}
                    customerPhone={customerPhone}
                    customerEmail={customerEmail}
                  />
                </CustomBox>
                <CustomBox>
                  <ChangePassword />
                </CustomBox>
              </div>
            )}
            {selectedMenu === 1 && <div></div>}
            {selectedMenu === 2 && <div></div>}
          </div>
        </div>
      )}
    </Container>
  );
};

export default Profile;
