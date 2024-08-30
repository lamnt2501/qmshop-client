import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Checked, Image, InputQuantity } from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  handleMutateCheckoutItems,
  removeItemToCart,
  selectAuthToken,
  selectCheckoutItems,
  setCheckoutQuantity,
  setQuantity,
  updateCartItems,
} from "../../../../app/reducers";
import { TfiClose } from "react-icons/tfi";
import { Checkbox } from "@mui/material";
import { productNameConnection } from "../../../../utils/productNameConnection";
import { priceConvert } from "../../../../utils/priceConvert";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const token = useSelector(selectAuthToken);

  const { name, imageUrl, slug, sku, price, quantity, color, size } = cartItem;

  const orderItems = useSelector(selectCheckoutItems);

  const handleUpdateQuantity = (newQuantity) => {
    const item = {
      name,
      imageUrl,
      slug,
      sku,
      price,
      quantity: newQuantity,
      color,
      size,
    };

    if (token) {
      dispatch(updateCartItems([item]));
    } else {
      dispatch(setQuantity({ sku, quantity: newQuantity }));
    }

    dispatch(setCheckoutQuantity({ sku, quantity: newQuantity }));
  };

  return (
    <div className="grid grid-cols-12 gap-1 my-2 place-items-center">
      <div className="col-span-1">
        {/* <Checked/> */}
        <Checkbox
          checked={orderItems.some((item) => item.sku === sku)}
          onClick={() =>
            dispatch(
              handleMutateCheckoutItems({
                sku,
                imageUrl,
                name: productNameConnection(name, color, size),
                quantity,
                price,
              })
            )
          }
        />
      </div>

      <div className="col-span-1 place-self-center h-full rounded-md overflow-hidden">
        <Image data={{ image: imageUrl, name: name }} />
      </div>

      <div className="col-span-3 justify-self-start">
        <Link
          className="text-black hover:text-blue-800 transition"
          to={`/products/${slug}`}
        >
          <div>{name}</div>
        </Link>
      </div>

      <div className="col-span-1 justify-self-center text-center">
        <div>{color}</div>
      </div>

      <div className="col-span-1 justify-self-center text-center">
        <div>{size}</div>
      </div>

      <div className="col-span-1 justify-self-start">
        <span>{priceConvert(price)}</span>
      </div>

      <div className="col-span-2">
        <InputQuantity
          limit={99}
          value={quantity}
          setValue={handleUpdateQuantity}
        />
      </div>

      <div className="col-span-1 justify-self-end">
        <span>{priceConvert(price * quantity)}</span>
      </div>

      <div
        onClick={() => handleUpdateQuantity(0)}
        className="col-span-1 cursor-pointer hover:text-red-700 hover:bg-slate-200 transition p-2 border rounded-full hover:border-black"
      >
        <TfiClose />
      </div>
    </div>
  );
};

export default CartItem;
// export default memo(
//   CartItem,
//   (currentProp, nextProp) =>
//     currentProp.cartItem.quantity === nextProp.cartItem.quantity
// );
