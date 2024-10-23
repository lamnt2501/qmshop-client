import { Avatar } from "@mui/material";
import { Container } from "../../../components";
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
  selectCustomerAvata,
  selectCustomerBirthday,
  selectCustomerGender,
  fetchCustomerAddresses,
  fetchOrders,
  selectCustomerUpdateStatus,
} from "../../../app/reducers";
import { useEffect } from "react";
import MenuItem from "./components/MenuItem";
import { Outlet, useLocation } from "react-router";
import useTitle from "../../../hooks/useTitle";

const Profile = () => {
  useTitle("Hồ sơ");

  const dispatch = useDispatch();

  // get path
  const { pathname } = useLocation();
  const pathParts = pathname.split("/").filter(Boolean);

  const menu = [
    { icon: <AccountBoxIcon />, name: "Hồ sơ", path: "infomations" },
    { icon: <HomeIcon />, name: "Địa chỉ", path: "address" },
    { icon: <GradingIcon />, name: "đơn hàng", path: "orders" },
  ];

  const token = useSelector(selectAuthToken);

  // data
  const customerUpdateStatus = useSelector(selectCustomerUpdateStatus);
  const customerName = useSelector(selectCustomerName);
  const customerPhone = useSelector(selectCustomerPhone);
  const customerEmail = useSelector(selectCustomerEmail);
  const customerAvata = useSelector(selectCustomerAvata);
  const customerBirthday = useSelector(selectCustomerBirthday);
  const customerGender = useSelector(selectCustomerGender);

  const listAddress = useSelector(selectCustomerAddresses);
  const listOrder = useSelector(selectListOrder);

  // fetch
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
                  alt={"avata"}
                  src={customerAvata ?? ""}
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
            <div className="flex flex-row gap-2 md:flex-col md:basis-1/6">
              {menu.map((item, index) => (
                <li key={index} className="list-none basis-1/3 md:basis-0">
                  <MenuItem
                    path={item.path}
                    item={item}
                    isActive={item.path === pathParts[1]}
                    index={index}
                  />
                </li>
              ))}
            </div>
            <div className="basis-5/6">
              <Outlet
                context={{
                  customerAvata,
                  customerName,
                  customerPhone,
                  customerEmail,
                  customerGender,
                  customerBirthday,
                  listAddress,
                  listOrder,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Profile;
