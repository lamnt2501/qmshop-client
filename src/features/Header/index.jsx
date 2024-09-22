import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthToken, logout, fetchCustomerInfomations, selectCustomerAvata } from "../../app/reducers";

import { FaSearch, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { Overlay, PopupMessage, Logo } from "../../components";
import Navbar from "./containers/Navbar";
import Dropdow from "./components/Dropdow";
import { FiUser } from "react-icons/fi";
import HeaderIcons from "./components/HeaderIcons";
import clsx from "clsx";
import useScrollDirection from "../../hooks/useScrollDirection";
import { Avatar } from "@mui/material";
import { avataImage } from "../../config";

const Header = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectAuthToken);
  const [overlay, setOverlay] = useState(false);

  const customerAvata = useSelector(selectCustomerAvata)

  useEffect(() => {
    if(token){
      dispatch(fetchCustomerInfomations())
    }
  }, [token,dispatch])

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
        <PopupMessage
          message={"Xác nhận đăng xuất?"}
          receiveName="Đăng xuất"
          cancelName="Hủy"
          receive={overlay}
          handleReceive={() => handleLogout()}
          handleCancel={() => handleCancel()}
        />
      </Overlay>

      <header
        className={clsx(
          "sticky top-0 left-0 w-full p-4 border-b-1 border-line-border z-20",
          "bg-white text-black text-center ",
          "transition-transform duration-300",
          `${useScrollDirection() ? "-translate-y-full" : "translate-y-0"}`
        )}
      >
        <div className={"flex items-center space-x-2 justify-between max-h-14"}>
          <div className="flex self-center max-h-14">
            <div className="basis-52 self-center">
              <Logo />
            </div>

            <div className="pl-8 self-center">
              <Navbar />
            </div>
          </div>

          <div className="flex items-center">
            <HeaderIcons>
              <FaSearch />
            </HeaderIcons>

            <HeaderIcons url={"/carts"}>
              <FaShoppingCart />
            </HeaderIcons>

            <HeaderIcons>
              <FaRegHeart />
            </HeaderIcons>

            <HeaderIcons isLink={false}>
              {token === null ? (
                <Dropdow listPage={authenLisPage} itemRight>
                  <FiUser />
                </Dropdow>
              ) : (
                <Dropdow listPage={authenLisPageIsLogin} itemRight>
                  <Avatar alt={avataImage.name} src={customerAvata ?? avataImage.url}/>
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
