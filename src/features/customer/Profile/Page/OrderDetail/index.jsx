import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  fetchOrderById,
  selectOrderItem,
  selectOrderStatus,
} from "../../../../../app/reducers";
import { BillDetail } from "../../../../../components";

import {
  Stepper,
  Typography,
  Step,
  StepIndicator,
  stepClasses,
  stepIndicatorClasses,
} from "@mui/joy";
// import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
// import CreditScoreIcon from "@mui/icons-material/CreditScore";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import DoDisturbAltIcon from "@mui/icons-material/DoDisturbAlt";
import { FETCH_SUCCEEDED } from "../../../../../config";
import { getColorByStatus } from "../../../../../utils";

const OrderDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const order = useSelector(selectOrderItem);
  const status = useSelector(selectOrderStatus);

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
  }, [status]);

  return (
    <div>
      {status === FETCH_SUCCEEDED && (
        <>
          <Stepper
            size="lg"
            sx={{
              width: "100%",
              "--StepIndicator-size": "3rem",
              "--Step-connectorInset": "0px",
              [`& .${stepIndicatorClasses.root}`]: {
                borderWidth: 4,
              },
              [`& .${stepClasses.root}::after`]: {
                height: 4,
              },
              [`& .${stepClasses.completed}`]: {
                [`& .${stepIndicatorClasses.root}`]: {
                  borderColor: "primary.300",
                  color: "primary.300",
                },
                "&::after": {
                  bgcolor: "primary.300",
                },
              },
              [`& .${stepClasses.active}`]: {
                [`& .${stepIndicatorClasses.root}`]: {
                  borderColor: "currentColor",
                },
              },
              [`& .${stepClasses.disabled} *`]: {
                color: "neutral.outlinedDisabledColor",
              },
            }}
          >
            {order.tracking &&
              trackings.map(({ message, Icon }, index) => (
                <Step
                  key={index}
                  orientation="vertical"
                  completed={trackings.length -1 !== index}
                  active={trackings.length -1 === index}
                  indicator={
                    <StepIndicator
                      variant={
                        trackings.length -1 !== index ? "outlined" : "solid"
                      }
                      color="primary"
                    >
                      <Icon />
                    </StepIndicator>
                  }
                >
                  <Typography
                    sx={{
                      textTransform: "uppercase",
                      fontWeight: "lg",
                      fontSize: "0.75rem",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {message}
                  </Typography>
                </Step>
              ))}
          </Stepper>
          <BillDetail orderItem={order} />
        </>
      )}
    </div>
  );
};

export default OrderDetail;
