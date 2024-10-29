import { memo, useEffect } from "react";
import { BannerHeadPage, Container } from "../../components";

import CartPayment from "./container/CartPayment";
import ListCartItem from "./container/ListCartItem";
import useTitle from "../../hooks/useTitle";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { resetCartStatus, selectCartsItem } from "../../app/reducers";

const Carts = () => {
  const dispatch = useDispatch()
  const cartItem = useSelector(selectCartsItem)
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
        {cartItem.length > 0 ?
        <>
        <ListCartItem />
        <div className="sticky bottom-0 w-full bg-gray-50">
          <CartPayment />
        </div>
        </>
        : <div className="text-center">Giỏ hàng không có sản phẩm</div>
      }
      </Container>
    </div>
  );
};

export default memo(Carts);
