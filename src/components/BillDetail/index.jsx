import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOrderById,
  selectOrderItem,
  selectOrderStatusItem,
  setOrder,
} from "../../app/reducers";
import { Container, Loading } from "..";
import {
  FETCH_LOADING,
  FETCH_SUCCEEDED,
  LEGAL_REGISTRATION_NO,
  PAYMENT_STATUS,
  SHOP_EMAIL,
  SHOP_PHONE,
  SHOP_WEBSITE,
  VN_PAYMENT_STATUS,
} from "../../config";
import {
  splitDateTime,
  priceConvert,
  translateLanguage,
  getColorByStatus,
} from "../../utils";
import ProductBillItem from "../ProductBillItem";

const BillDetail = ({ orderId, orderItem, onClick }) => {

  // const breadcrumbList = [
  //   { url: "carts", name: "Giỏ hàng" },
  //   { name: "Thanh toán" },
  // ];

  const infos = [
    { name: "Mã số doanh nghiệp", info: LEGAL_REGISTRATION_NO },
    { name: "Email", info: SHOP_EMAIL },
    { name: "Trang web", info: SHOP_WEBSITE, url: "https://qm-shop.netlify.app/home" },
    { name: "Số điện thoại", info: SHOP_PHONE },
  ];

  const dispatch = useDispatch();
  const order = useSelector(selectOrderItem);
  const orderStatus = useSelector(selectOrderStatusItem);

  const statusColor = getColorByStatus("payment", order.paymentStatus);
  
  useEffect(() => {
    if (orderId) {
      dispatch(fetchOrderById(orderId));
    } else if (orderItem) {
      dispatch(setOrder(orderItem));
    }
  }, [dispatch, orderId, orderItem]);

  return (
    <Container onClick={onClick}>
      {/* <CustomBreadcrumbs breadcrumbs={breadcrumbList}></CustomBreadcrumbs> */}
      {orderStatus === FETCH_LOADING && <Loading />}
      {orderStatus === FETCH_SUCCEEDED && (
        <div className="w-full p-4 bg-white border border-gray-400 shadow-md">
          <div className="flex">
            <div className="basis-3/5">
              <h1 className="text-3xl font-normal italic uppercase ">
                QM Shop
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
                <div className="flex gap-1" key={name}>
                  <span>{name}:</span>
                  {url ? (
                    <a href={url} className={"text-blue-500 font-medium hover:text-red-600  transition duration-300"}>
                      {info}
                    </a>
                  ) : (
                    <span className="font-medium">{info}:</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2 my-8">
            <div className="col-span-2 flex flex-col gap-2">
              <h5 className="uppercase">Mã số hóa đơn</h5>
              <p className="font-normal"># QMS{order.orderId}</p>
            </div>
            <div className="col-span-2 flex flex-col gap-2">
              <h5 className="uppercase">Ngày tạo</h5>
              <p className="font-normal">{splitDateTime(order.createdAt)}</p>
            </div>
            <div className="col-span-2 flex flex-col gap-2">
              <h5 className="uppercase">trạng thái thanh toán</h5>
              <div className={`font-normal flex `}>
                <p
                  className={`capitalize px-2 py-1 rounded-md border border-gray-400 ${statusColor}`}
                >
                  {translateLanguage(
                    VN_PAYMENT_STATUS,
                    PAYMENT_STATUS,
                    order.paymentStatus
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-2 my-8">
            <div className="col-span-2 flex flex-col gap-2">
              <h5 className="uppercase">địa chỉ giao hàng</h5>
              <div>
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
                  <p>chi tiết:</p>
                  <p className="font-normal">{order.address.specificAddress}</p>
                </span>
              </div>
            </div>
            <div className="col-span-2 flex flex-col gap-2">
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
            <div className="col-span-2 flex flex-col gap-2">
              <h5 className="uppercase">thanh toán</h5>
              <div>
                <div className="flex gap-1">
                  <p>Hình thức:</p>
                  <p className="font-normal">{order.paymentMethod.name}</p>
                </div>
                <div className="flex gap-1">
                  <p>Nhà cung cấp:</p>
                  <p className="font-normal">{order.paymentMethod.provider}</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 flex flex-col gap-2">
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

BillDetail.propTypes = {
  orderId: PropTypes.any,
  orderItem: PropTypes.object,
  onClick:PropTypes.func
};
export default BillDetail;
