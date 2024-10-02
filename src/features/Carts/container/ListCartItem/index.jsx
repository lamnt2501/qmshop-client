import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCarts,
  selectAuthToken,
  // selectCartsError,
  selectCartsItem,
  selectCartsStatus,
} from "../../../../app/reducers";
import CartItem from "../../components/CartItem";
import { FETCH_LOADING } from "../../../../config";
import { Loading } from "../../../../components";

const ListCartItem = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectAuthToken);
  const carts = useSelector(selectCartsItem);
  const cartsStatus = useSelector(selectCartsStatus);
  // const cartsError = useSelector(selectCartsError);
  useEffect(() => {
    if (token) {
      dispatch(fetchCarts(carts));
    }
  }, [dispatch, token]);
  return (
    <ul>
      {carts.length > 0 ? (
        <>
          {cartsStatus === FETCH_LOADING && <Loading />}
          <div className="grid grid-cols-12 gap-1 justify-items-center mb-4">
            <div className="col-span-1"></div>
            <div className="col-span-4 font-medium justify-self-start">sản phẩm</div>
            <div className="col-span-2 font-medium justify-self-start">Đơn giá</div>
            <div className="col-span-2 font-medium">Số lượng</div>
            <div className="col-span-2 font-medium justify-self-end">Tổng giá</div>
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
