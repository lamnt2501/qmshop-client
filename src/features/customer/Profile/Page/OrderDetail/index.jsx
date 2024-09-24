import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  fetchOrderById,
  selectOrderItem,
  selectOrderStatusItem,
} from "../../../../../app/reducers";
import { BillDetail, Container } from "../../../../../components";

import { FETCH_SUCCEEDED } from "../../../../../config";
import { getColorByStatus } from "../../../../../utils";
import StepOrder from "../../container/StepOrder";
import StepOrderDetail from "../../container/StepOrderDetail";

const OrderDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const order = useSelector(selectOrderItem);
  const status = useSelector(selectOrderStatusItem);

  const [trackings, setTrackings] = useState([]);

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

  return (
    <div>
      {status === FETCH_SUCCEEDED && (
        <>
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
          <BillDetail orderItem={order} />
        </>
      )}
    </div>
  );
};

export default OrderDetail;
