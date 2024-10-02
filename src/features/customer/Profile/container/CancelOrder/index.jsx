import PropTypes from "prop-types";

import { Button, TextField } from "@mui/material";
import { Container, CustomSnackbar } from "../../../../../components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelOrder,
  resetOrderUpdateStatus,
  selectOrderUpdateStatus,
} from "../../../../../app/reducers";
import {
  ALERT_ERROR,
  ALERT_SUCCESS,
  FETCH_FAILED,
  FETCH_SUCCEEDED,
} from "../../../../../config";

const CancelOrder = ({ orderId }) => {
  const dispatch = useDispatch();
  const status = useSelector(selectOrderUpdateStatus);
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    dispatch(cancelOrder({ id: orderId, message, status: "CANCEL" }));
  };

  return (
    <>
      <Container className="flex justify-end">
        <TextField
          id="outlined-basic"
          label="lý do bạn muốn hủy"
          variant="outlined"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          variant="outlined"
          color="error"
          disabled={message === ""}
          onClick={handleSubmit}
        >
          Hủy đơn hàng
        </Button>
      </Container>
      <CustomSnackbar
        openSnackbar={status === FETCH_SUCCEEDED}
        handleCloseSnackbar={() => dispatch(resetOrderUpdateStatus())}
        snackbarSeverity={ALERT_SUCCESS}
      >
        Hủy đơn hàng thành công
      </CustomSnackbar>
      <CustomSnackbar
        openSnackbar={status === FETCH_FAILED}
        handleCloseSnackbar={() => dispatch(resetOrderUpdateStatus())}
        snackbarSeverity={ALERT_ERROR}
      >
        Hủy đơn hàng thất bại
      </CustomSnackbar>
    </>
  );
};

CancelOrder.propTypes = {
  orderId: PropTypes.number,
};

export default CancelOrder;
