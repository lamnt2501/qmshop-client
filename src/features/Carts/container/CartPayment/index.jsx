import { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  removeCartItems,
  resetCheckoutItem,
  selectAuthToken,
  selectCartsItem,
  selectCheckoutItems,
  setCheckoutItems,
  updateCartItems,
} from "../../../../app/reducers";
import { priceConvert, totalPrice } from "../../../../utils";
import { Button as CustomButton, Overlay, Popup } from "../../../../components";
import useSticky from "../../../../hooks/useSticky";
import { Button } from "@mui/material";

const CartPayment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const orderListItem = useSelector(selectCheckoutItems);
  const cartListItem = useSelector(selectCartsItem);
  const token = useSelector(selectAuthToken);

  const { isSticky, elementRef } = useSticky();

  const [overlay, setOverlay] = useState(false);
  const [deleteItems, setDeleteItems] = useState(false);

  const total = totalPrice(orderListItem);

  const handleGoToCheckout = () => {
    if (token && orderListItem.length > 0) {
      navigate("/checkout");
    } else {
      setOverlay(true);
    }
  };

  const handleConfirmDeleteItems = () => {
    if (orderListItem.length > 0) {
      setOverlay(true);
      setDeleteItems(true);
    }
  };
  const handleCloseOverlay = () => {
    setOverlay(false);
    setDeleteItems(false);
  };
  const handleDeleteCartItems = () => {
    if (orderListItem.length > 0) {
      setOverlay(false);
      setDeleteItems(false);

      const cartItemUpdate = cartListItem
        .filter((cartItem) =>
          // Lọc ra các item có trong list order
          orderListItem.some((orderItem) => orderItem.sku === cartItem.sku)
        )
        .map((cartItem) => {
          // chuyển đổi số lượng về 0 để qua bước cập nhật
          return { ...cartItem, quantity: 0 };
        });
      token
        ? dispatch(updateCartItems(cartItemUpdate))
        : dispatch(removeCartItems(cartItemUpdate));
      dispatch(resetCheckoutItem(cartItemUpdate));
    }
  };

  const handleSelectOrderItem = () => {
    orderListItem.length !== cartListItem.length
      ? dispatch(setCheckoutItems(cartListItem))
      : dispatch(setCheckoutItems([]));
  };

  return (
    <>
      {cartListItem.length > 0 && (
        <>
          <Overlay isOverlay={overlay} onClick={() => handleCloseOverlay()}>
            {deleteItems && (
              <Popup
                receiveName="Xóa"
                cancelName="Giữ lại"
                receive={overlay}
                handleReceive={() => handleDeleteCartItems()}
                handleCancel={() => handleCloseOverlay()}
              >
                Bạn có muốn xóa các sản phẩm đã chọn
              </Popup>
            )}

            {!deleteItems && !token && (
              <Popup
                receiveName="Đăng nhập"
                cancelName="Hủy"
                receive={overlay}
                handleReceive={() => navigate("/login")}
                handleCancel={() => setOverlay(false)}
              >
                Vui lòng đăng nhập để thanh toán
              </Popup>
            )}

            {!deleteItems && token && orderListItem.length === 0 && (
              <Popup receive={overlay}>Vui lòng chọn sản phẩm</Popup>
            )}
          </Overlay>
          <div
            ref={elementRef}
            className={`mx-8 py-2 flex justify-between gap-2 border-t-2 mt-4 ${
              isSticky ? "" : "shadow-[3px_-5px_15px_-8px_rgba(0,0,0,0.50)]"
            }`}
          >
            <div className="flex gap-4 text-xl items-center">
              <div className="border rounded-md border-black overflow-hidden">
                <Button
                  color={"inherit"}
                  onClick={() => handleSelectOrderItem()}
                >
                  {orderListItem.length !== cartListItem.length
                    ? "Chọn tất cả"
                    : "Bỏ chọn tất cả"}
                </Button>
              </div>
              <div className="border rounded-md border-black overflow-hidden">
                <Button
                  color={"inherit"}
                  onClick={() => handleConfirmDeleteItems()}
                >
                  Xóa
                </Button>
              </div>
            </div>
            <div className="flex gap-4 text-xl items-center">
              <span>Tổng thanh toán ({orderListItem.length} sản phẩm)</span>
              <span className="text-red-500">{priceConvert(total)}</span>
              <div>
                <CustomButton
                  isFull
                  black
                  afterAnimation
                  onClick={() => handleGoToCheckout()}
                >
                  Thanh toán
                </CustomButton>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default memo(CartPayment);
