import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAuthToken,
  logout,
  fetchCustomerInfomations,
  selectCustomerAvata,
  selectCartsItem,
} from "../../app/reducers";

import {  FaShoppingCart } from "react-icons/fa";
import { Overlay, Popup, Logo } from "../../components";
import Navbar from "./containers/Navbar";
import Search from "./containers/Search";
import Dropdow from "./components/Dropdow";
import { FiUser } from "react-icons/fi";
import HeaderIcons from "./components/HeaderIcons";
import clsx from "clsx";
import useScrollDirection from "../../hooks/useScrollDirection";
import { Avatar, Badge } from "@mui/material";
import { avataImage } from "../../config";

const Header = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectAuthToken);
  const cartItem = useSelector(selectCartsItem);
  const [overlay, setOverlay] = useState(false);
  const [totalCartItem, setTotalCartItem] = useState(0);

  const customerAvata = useSelector(selectCustomerAvata);

  useEffect(() => {
    if (cartItem.length > 0) {
      const newTotalCartItem = cartItem.reduce(
        (accumulator, { quantity }) => accumulator + quantity,
        0
      );
      setTotalCartItem(newTotalCartItem);
    }
  }, [cartItem]);

  useEffect(() => {
    if (token) {
      dispatch(fetchCustomerInfomations());
    }
  }, [token, dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    setOverlay(false);
  };

  const handleCancel = () => {
    setOverlay(false);
  };

  const authenLisPage = [
    { pageName: "Đăng nhập", url: "/login" },
    { pageName: "Đăng ký", url: "/register" },
  ];
  const authenLisPageIsLogin = [
    { pageName: "Quản lý tài khoản", url: "/profile" },
    { pageName: "Đăng xuất", onClick: () => setOverlay(true) },
  ];

  return (
    <>
      <Overlay isOverlay={overlay} onClick={() => setOverlay(false)}>
        <Popup
          receiveName="Đăng xuất"
          cancelName="Hủy"
          receive={overlay}
          handleReceive={() => handleLogout()}
          handleCancel={() => handleCancel()}
        >
          Xác nhận đăng xuất?
        </Popup>
      </Overlay>

      <header
        className={clsx(
          "sticky top-0 left-0 w-full p-4 border-b-1 border-line-border z-20",
          "bg-white text-black ",
          "transition-transform duration-300",
          `${useScrollDirection() ? "-translate-y-full" : "translate-y-0"}`
        )}
      >
        <div className={"flex items-center space-x-2 justify-between max-h-14"}>
          <div className="flex self-center max-h-14 basis-1/3">
            <div className="basis-52 self-center">
              <Logo />
            </div>

            <div className="pl-8 self-center">
              <Navbar />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Search />

            {/* <HeaderIcons url={"/carts"} className={"relative"}>
              <div
                className={
                  "absolute top-0 right-0 bg-gray-800 text-white p-1 rounded-full text-[10px] leading-3 translate-x-2 -translate-y-3 opacity-70"
                }
              >
                {totalCartItem === 0 ? undefined : totalCartItem}
              </div>
              <FaShoppingCart />
            </HeaderIcons> */}

            <HeaderIcons url={"/carts"} className={"relative"}>
              <Badge badgeContent={totalCartItem} color="info">
                <FaShoppingCart />
              </Badge>
            </HeaderIcons>

            {/* <HeaderIcons>
              <FaRegHeart />
            </HeaderIcons> */}

            <HeaderIcons isLink={false}>
              {token === null ? (
                <Dropdow listPage={authenLisPage} itemRight>
                  <FiUser />
                </Dropdow>
              ) : (
                <Dropdow listPage={authenLisPageIsLogin} itemRight>
                  <Avatar
                    alt={avataImage.name}
                    src={customerAvata ?? avataImage.url}
                  />
                  {/* <FiUser /> */}
                </Dropdow>
              )}
            </HeaderIcons>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
