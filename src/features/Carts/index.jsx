import { memo, useEffect } from "react";
import { BannerHeadPage, Container } from "../../components";

import CartPayment from "./container/CartPayment";
import ListCartItem from "./container/ListCartItem";
import useTitle from "../../hooks/useTitle";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { resetCartStatus } from "../../app/reducers";

const Carts = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    return() => {
      dispatch(resetCartStatus())
    }
  }, [dispatch])

  // set path
  const { pathname: next_Path_After_Auth } = useLocation();
  localStorage.setItem('path', next_Path_After_Auth);

  useTitle("Giỏ hàng");

  return (
    <div className="min-h-page">
      <div className="mb-10">
        <BannerHeadPage title={"Giỏ hàng"} />
      </div>
      <Container>
        <ListCartItem />
        <div className="sticky bottom-0 w-full bg-gray-50">
          <CartPayment />
        </div>
      </Container>
    </div>
  );
};

export default memo(Carts);
