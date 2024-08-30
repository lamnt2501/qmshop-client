import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCheckoutItems } from "../../../../../app/reducers";
import { priceConvert } from "../../../../../utils/priceConvert";
import { Image } from "../../../../../components";
import { totalPrice } from "../../../../../utils/totalPrice";

const CheckoutBillPreview = () => {
  const listOrderItem = useSelector(selectCheckoutItems);

  const tempPrice = totalPrice(listOrderItem);
  const [discount, setDiscount] = useState({ name: "", discount: 100000 });
  const [shippingFee, setShippingFee] = useState(0);
  return (
    <div className="my-4">
      <h3 className="text-3xl">Danh sách sản phẩm</h3>
      <ul className="my-4">
        {listOrderItem.map((orderItem) => (
          <li
            key={orderItem.sku}
            className="grid grid-cols-12 gap-1 py-2 items-center text-xl"
          >
            <div className="col-span-2 relative">
              <Image
                data={{ name: orderItem.name, image: orderItem.imageUrl }}
              />
              <div className="absolute top-0 right-0 w-6 h-6 rounded-full bg-slate-500 text-white text-center flex justify-center items-center translate-x-1/3 -translate-y-1/3">
                <span>{orderItem.quantity}</span>
              </div>
            </div>
            <div className="col-span-7">{orderItem.name}</div>
            <div className="col-span-3 justify-self-end ">
              {priceConvert(orderItem.price * orderItem.quantity)}
            </div>
          </li>
        ))}
      </ul>
      <hr className="border border-slate-300 my-2" />
      <div className="flex justify-between text-lg">
        <div>Tạm tính</div>
        <div>{priceConvert(tempPrice)}</div>
      </div>
      <div className="flex justify-between text-lg">
        <div>Mã giảm giá</div>
        <div>{priceConvert(-discount.discount)}</div>
      </div>
      <div className="flex justify-between text-lg">
        <div>Phí vận chuyển</div>
        <div>{priceConvert(shippingFee)}</div>
      </div>
      <hr className="border border-slate-300 my-2" />
      <div className="flex justify-between text-lg">
        <div>Tổng</div>
        <div>{priceConvert(tempPrice + shippingFee - discount.discount)}</div>
      </div>
    </div>
  );
};

export default CheckoutBillPreview;
