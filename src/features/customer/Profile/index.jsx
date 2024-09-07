import { Avatar } from "@mui/material";
import { Container, CustomBox, Input } from "../../../components";
import { avataImage, FETCH_SUCCEEDED } from "../../../config";
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
  selectCustomerStatus,
} from "../../../app/reducers";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { handleEditValueInput } from "../../../utils/handleEditValueInput";

const Profile = () => {
  const dispatch = useDispatch();

  const menu = [
    { icon: <AccountBoxIcon />, name: "Hồ sơ" },
    { icon: <HomeIcon />, name: "Địa chỉ" },
    { icon: <GradingIcon />, name: "đơn hàng" },
  ];
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const token = useSelector(selectAuthToken);

  const customerStatus = useSelector(selectCustomerStatus);

  const customerName = useSelector(selectCustomerName);
  const [customerNewName, setCustomerNewName] = useState("");

  const customerPhone = useSelector(selectCustomerPhone);
  const [customerNewPhone, setCustomerNewPhone] = useState("");

  const customerEmail = useSelector(selectCustomerEmail);
  const [customerNewEmail, setCustomerNewEmail] = useState("");

  const listAddress = useSelector(selectCustomerAddresses);
  const listOrder = useSelector(selectListOrder);

  useEffect(() => {
    if (token) {
      dispatch(fetchCustomerInfomations());
      dispatch(fetchCustomerAddresses());
      dispatch(fetchOrders());
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (customerStatus === FETCH_SUCCEEDED) {
      setCustomerNewName(customerName);
      setCustomerNewPhone(customerPhone);
      setCustomerNewEmail(customerEmail);
    }
  }, [customerStatus, customerName, customerPhone, customerEmail]);

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

          {/* <div className="basis-5/6 flex items-center">
            <h1 className="text-3xl uppercase">{menu[selectedMenu].name}</h1>
          </div> */}

          <div className="my-3 flex flex-col md:flex-row gap-4">
            <div className=" md:basis-1/6">
              {menu.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedMenu(index)}
                  className={clsx(
                    "basis-1/3 flex items-center gap-2 font-light hover:text-red-500 cursor-pointer transition duration-200 hover:bg-gray-100 py-1",
                    { "text-red-500 bg-gray-100": index === selectedMenu }
                  )}
                >
                  <div className="basis-7">{item.icon}</div>
                  <h5 className="">{item.name}</h5>
                </div>
              ))}
            </div>
            <CustomBox className="basis-5/6 px-8 py-2">
              {selectedMenu === 0 && (
                <div>
                  <h1 className="text-3xl font-normal ">Thông tin cá nhân</h1>
                  <div className="flex my-10">
                    <div className="basis-2/3 flex flex-col px-10 gap-4">
                      <div className="flex justify-center items-center space-x-5">
                        <h5 className=" text-xl">Họ và tên</h5>
                        <div className="basis-80">
                          <Input
                            type={"text"}
                            value={customerNewName}
                            onClick={() =>
                              handleEditValueInput(
                                customerNewName,
                                customerName,
                                "",
                                setCustomerNewName
                              )
                            }
                            onBlur={() =>
                              handleEditValueInput(
                                customerNewName,
                                "",
                                customerName,
                                setCustomerNewName
                              )
                            }
                            onChange={(e) => setCustomerNewName(e.target.value)}
                          >
                            Họ và tên
                          </Input>
                        </div>
                      </div>

                      <div className="flex justify-center items-center space-x-5">
                        <h5 className=" text-xl">Họ và tên</h5>
                        <div className="basis-80">
                          <Input
                            type={"text"}
                            value={customerNewPhone}
                            onClick={() =>
                              handleEditValueInput(
                                customerNewPhone,
                                customerPhone,
                                "",
                                setCustomerNewPhone
                              )
                            }
                            onBlur={() =>
                              handleEditValueInput(
                                customerNewPhone,
                                "",
                                customerPhone,
                                setCustomerNewPhone
                              )
                            }
                            onChange={(e) =>
                              setCustomerNewPhone(e.target.value)
                            }
                          >
                            Số điện thoại
                          </Input>
                        </div>
                      </div>

                      <div className="flex justify-center items-center space-x-5">
                        <h5 className=" text-xl">Họ và tên</h5>
                        <div className="basis-80">
                          <Input
                            type={"text"}
                            value={customerNewEmail}
                            onClick={() =>
                              handleEditValueInput(
                                customerNewEmail,
                                customerEmail,
                                "",
                                setCustomerNewEmail
                              )
                            }
                            onBlur={() =>
                              handleEditValueInput(
                                customerNewEmail,
                                "",
                                customerEmail,
                                setCustomerNewEmail
                              )
                            }
                            onChange={(e) =>
                              setCustomerNewEmail(e.target.value)
                            }
                          >
                            Email
                          </Input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {selectedMenu === 1 && <div></div>}
              {selectedMenu === 2 && <div></div>}
            </CustomBox>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Profile;
