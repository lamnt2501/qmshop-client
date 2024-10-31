import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  fetchOrderById,
  resetRatingStatus,
  selectAddRatingsStatus,
  selectOrderItem,
  selectOrderStatusItem,
} from "../../../../../app/reducers";
import { BillDetail, Container, Overlay } from "../../../../../components";

import { FETCH_SUCCEEDED, ORDER_STATUS } from "../../../../../config";
import { getColorByStatus, priceConvert } from "../../../../../utils";
import StepOrder from "../../container/StepOrder";
import StepOrderDetail from "../../container/StepOrderDetail";
import CancelOrder from "../../container/CancelOrder";
import ProductItem from "../../components/ProductItem";
import { Button } from "@mui/material";
import RateProduct from "../../container/RateProduct";
import {
  ALERT_ERROR,
  ALERT_SUCCESS,
  FETCH_FAILED,
} from "../../../../../config";
import { CustomSnackbar } from "../../../../../components";
const OrderDetail = () => {
  const dispatch = useDispatch();
  const addRatingStatus = useSelector(selectAddRatingsStatus);
  const { id } = useParams();
  const order = useSelector(selectOrderItem);
  const status = useSelector(selectOrderStatusItem);

  const [trackings, setTrackings] = useState([]);
  const [overlay, setOverlay] = useState(false);
  const [billDetail, setBillDetail] = useState(false);
  const [rateProduct, setRateProduct] = useState(false);
  const [selectProductId, setSelectProductId] = useState({});

  useEffect(() => {
    if (id) {
      dispatch(fetchOrderById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (status === FETCH_SUCCEEDED) {
      const newTrackings = order.tracking.map((track) => {
        return { ...track, Icon: getColorByStatus("order", track.status).Icon };
      });
      setTrackings(newTrackings);
    }
  }, [status, order.tracking]);

  const handleCloseOverlay = () => {
    setOverlay(false);
    setBillDetail(false);
  };

  const handleOpenBillDetail = () => {
    setOverlay(true);
    setBillDetail(true);
  };

  const handleOpenRateProduct = (product) => {
    setOverlay(true);
    setRateProduct(true);
    setSelectProductId(product);
  };

  return (
    <div>
      <CustomSnackbar
        openSnackbar={addRatingStatus === FETCH_SUCCEEDED}
        handleCloseSnackbar={() => dispatch(resetRatingStatus())}
        snackbarSeverity={ALERT_SUCCESS}
      >
        Đánh giá sản phẩm thành công
      </CustomSnackbar>
      <CustomSnackbar
        openSnackbar={addRatingStatus === FETCH_FAILED}
        handleCloseSnackbar={() => dispatch(resetRatingStatus())}
        snackbarSeverity={ALERT_ERROR}
      >
        Đã có lỗi xẩy ra trong quá trình đánh giá
      </CustomSnackbar>

      <Overlay isOverlay={overlay} onClick={() => handleCloseOverlay()}>
        {billDetail && (
          <BillDetail orderItem={order} onClick={() => handleCloseOverlay()} />
        )}
        {rateProduct && (
          <RateProduct
            product={selectProductId}
            onClose={() => handleCloseOverlay()}
          />
        )}
      </Overlay>
      {status === FETCH_SUCCEEDED && (
        <div>
          {order && order.status === "CANCEL" ? (
            <Container>
              <div className="text-center bg-red-100 flex justify-center items-stretch h-20">
                <span className="self-center text-2xl font-medium text-red-500">
                  đơn hàng đã bị hủy
                </span>
              </div>
            </Container>
          ) : (
            <StepOrder order={order} trackings={trackings} />
          )}
          <StepOrderDetail order={order} trackings={trackings} />
          {order.status === "SUCCEEDED" && (
            <div className="flex justify-end gap-4">
              <Button variant="outlined" onClick={() => handleOpenBillDetail()}>
                Xem chi tiết hoad đơn
              </Button>
            </div>
          )}
          {order.items.map((product) => (
            <ProductItem
              key={product.sku}
              product={product}
              openRate={handleOpenRateProduct}
              rate={order.status === "SUCCEEDED"}
            />
          ))}
          <div className="flex justify-end text-xl gap-4">
            <h5>Tổng giá: </h5>
            <span className=" text-red-500">{priceConvert(order.total)}</span>
          </div>
          {order.status === ORDER_STATUS[0] && (
            <CancelOrder orderId={order.orderId} />
          )}
        </div>
      )}
    </div>
  );
};

export default OrderDetail;
