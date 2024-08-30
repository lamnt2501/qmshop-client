import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAuthToken,
  selectCartsError,
  selectCartsItem,
  selectCartsStatus,
  updateCartItems,
} from "../../../../app/reducers";
import CartItem from "../../components/CartItem";
import { FETCH_LOADING } from "../../../../config";
import { Loading } from "../../../../components";

const ListCartItem = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectAuthToken);
  const carts = useSelector(selectCartsItem);
  const cartsStatus = useSelector(selectCartsStatus);
  const cartsError = useSelector(selectCartsError);

  const [async1, setAsync] = useState(true);

  useEffect(() => {
    if (!async1 && !token) setAsync(true);

    if (async1 && token) {
      dispatch(updateCartItems(carts));
      setAsync(false);
    }
  }, [async1, token]);
  return (
    <ul>
      {carts.length > 0 ? (
        <>
          {cartsStatus === FETCH_LOADING && <Loading />}
          <div className="grid grid-cols-12 gap-1 justify-items-center ">
            <div className="col-span-1"></div>
            <div className="col-span-4 font-medium">Tên sản phẩm</div>
            <div className="col-span-1 font-medium">Màu sắc</div>
            <div className="col-span-1 font-medium">kích thước</div>
            <div className="col-span-1 font-medium">Đơn giá</div>
            <div className="col-span-2 font-medium">Số lượng</div>
            <div className="col-span-1 font-medium">Tổng giá</div>
          </div>
          {carts.map((cartItem, index) => (
            <li key={index}>
              <CartItem cartItem={cartItem} />
            </li>
          ))}
        </>
      ) : undefined}
    </ul>
  );
};

export default ListCartItem;
