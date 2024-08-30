import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOrderById,
  selectOrderItem,
  selectOrderStatus,
} from "../../../../app/reducers";
import {
  Container,
  Loading,
  CustomBreadcrumbs,
  CustomLink,
} from "../../../../components";
import {
  FETCH_LOADING,
  FETCH_SUCCEEDED,
  LEGAL_REGISTRATION_NO,
  SHOP_EMAIL,
  SHOP_PHONE,
  SHOP_WEBSITE,
} from "../../../../config";
import { splitDateTime } from "../../../../utils/splitDateTime";
import { paymentStatusTranslations } from "../../../../utils/statusTranslations";
import { priceConvert } from "../../../../utils/priceConvert";
import ProductBillItem from "../ProductBillItem";

const BillDetail = ({ orderId }) => {
  const breadcrumbList = [
    { url: "carts", name: "Giỏ hàng" },
    { name: "Thanh toán" },
  ];

  const infos = [
    { name: "Mã số doanh nghiệp", info: LEGAL_REGISTRATION_NO },
    { name: "Email", info: SHOP_EMAIL },
    { name: "Trang web", info: SHOP_WEBSITE, url: "/" },
    { name: "Số điện thoại", info: SHOP_PHONE },
  ];

  const dispatch = useDispatch();
  const order = useSelector(selectOrderItem);
  const orderStatus = useSelector(selectOrderStatus);

  useEffect(() => {
    if (orderId) {
      dispatch(fetchOrderById(orderId));
    }
  }, []);

  return (
    <Container>
      <CustomBreadcrumbs breadcrumbs={breadcrumbList}></CustomBreadcrumbs>
      {orderStatus === FETCH_LOADING && <Loading />}
      {orderStatus === FETCH_SUCCEEDED && (
        <div className="w-full p-4 bg-white border border-gray-400 shadow-md">
          <div className="flex">
            <div className="basis-3/5">
              <h1 className="text-3xl font-normal italic uppercase ">
                QM Store
              </h1>
              <div className="pt-10 flex flex-col gap-1">
                <h3 className="uppercase">địa chỉ</h3>
                <p className="capitalize">
                  số 8 tam trinh, hai bà trưng, hà nội, việt nam
                </p>
                <p>Mã bưu chính: 11600</p>
              </div>
            </div>
            <div className="basis-2/5">
              {infos.map(({ name, info, url }) => (
                <div className="flex gap-1">
                  <span>{name}:</span>
                  {url ? (
                    <CustomLink className={"text-blue-500 font-medium"}>
                      {info}
                    </CustomLink>
                  ) : (
                    <span className="font-medium">{info}:</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2 my-8">
            <div className="col-span-2 flex flex-col gap-1">
              <h5 className="uppercase">số hóa đơn</h5>
              <p className="font-normal"># QMS{order.orderId}</p>
            </div>
            <div className="col-span-2 flex flex-col gap-1">
              <h5 className="uppercase">ngày</h5>
              <p className="font-normal">{splitDateTime(order.createdAt)}</p>
            </div>
            <div className="col-span-2 flex flex-col gap-1">
              <h5 className="uppercase">trạng thái thanh toán</h5>
              <p className="font-normal lowercase">
                {paymentStatusTranslations(order.paymentStatus)}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-2 my-8">
            <div className="col-span-2 flex flex-col gap-1">
              <h5 className="uppercase">địa chỉ giao hàng</h5>
              <span className="flex gap-1">
                <p>Thành phố:</p>
                <p className="font-normal">{order.address.city}</p>
              </span>
              <span className="flex gap-1">
                <p>Quận:</p>
                <p className="font-normal">{order.address.district}</p>
              </span>
              <span className="flex gap-1">
                <p>Phường:</p>
                <p className="font-normal">{order.address.ward}</p>
              </span>
              <span className="flex gap-1">
                <p>chi tiết địa chỉ:</p>
                <p className="font-normal">{order.address.specificAddress}</p>
              </span>
            </div>
            <div className="col-span-2 flex flex-col gap-1">
              <h5 className="uppercase">thông tin người nhận</h5>
              <div className="">
                <p className="normal-case">
                  tên nghười nhận: {order.receiverName}
                </p>
                <p className="normal-case">
                  số điện thoại: {order.phoneNumber}
                </p>
              </div>
            </div>
            <div className="col-span-2 flex flex-col gap-1">
              <h5 className="uppercase">hình thức thanh toán</h5>
              <p className="font-normal">{order.paymentMethod.name}</p>
            </div>
            <div className="col-span-2 flex flex-col gap-1">
              <h5 className="uppercase">tổng số tiền</h5>
              <p className="font-normal">{priceConvert(order.total)}</p>
            </div>
          </div>
          <div className="pt-5 pb-10">
            <ProductBillItem products={order.items} />
          </div>
        </div>
      )}
    </Container>
  );
};

export default BillDetail;
