import PropTypes from "prop-types";
import { Container } from "../../../../../components";
import {
  Step,
  stepClasses,
  StepIndicator,
  stepIndicatorClasses,
  Stepper,
  Typography,
  typographyClasses,
} from "@mui/joy";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { splitDateTime, translateLanguage } from "../../../../../utils";
import { ORDER_STATUS, VN_ORDER_STATUS } from "../../../../../config";
import ClearIcon from "@mui/icons-material/Clear";
const StepOrderDetail = ({ order, trackings }) => {
  return (
    <Container>
      <div className="flex justify-between my-10">
        <div>
          <h3 className="font-normal uppercase text-2xl">địa chỉ nhận hàng</h3>
          <p className="font-medium py-4">{order.receiverName}</p>
          <p>{order.phoneNumber}</p>
          <p>Phường {order.address.ward}</p>
          <p>Quận {order.address.district}</p>
          <p>Thành phố {order.address.city}</p>
          <p>Chi tiết {order.address.specificAddress}</p>
        </div>
        <Stepper
          orientation="vertical"
          sx={(theme) => ({
            "--Stepper-verticalGap": "2.5rem",
            "--StepIndicator-size": "2.5rem",
            "--Step-gap": "1rem",
            "--Step-connectorInset": "0.5rem",
            "--Step-connectorRadius": "1rem",
            "--Step-connectorThickness": "4px",
            "--joy-palette-success-solidBg": "var(--joy-palette-success-400)",
            [`& .${stepClasses.completed}`]: {
              "&::after": { bgcolor: "success.solidBg" },
            },
            [`& .${stepClasses.active}`]: {
              [`& .${stepIndicatorClasses.root}`]: {
                border: "4px solid",
                borderColor: "#fff",
                boxShadow: `0 0 0 1px ${theme.vars.palette.primary[500]}`,
              },
            },
            [`& .${stepClasses.disabled} *`]: {
              color: "neutral.softDisabledColor",
            },
            [`& .${typographyClasses["title-sm"]}`]: {
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontSize: "10px",
            },
          })}
        >
          {trackings.map((track, index) => (
            <Step
              key={index}
              completed={index < trackings.length - 1}
              active={index === trackings.length - 1}
              indicator={
                <StepIndicator
                  variant="solid"
                  color={
                    track.status === "CANCEL"
                      ? "danger"
                      : index < trackings.length - 1
                      ? "success"
                      : "primary"
                  }
                >
                  {track.status === "CANCEL" ? (
                    <ClearIcon />
                  ) : (
                    <CheckRoundedIcon />
                  )}
                </StepIndicator>
              }
            >
              <div className="flex gap-4">
                <div>{splitDateTime(track.time)}</div>
                <div>
                  <div className="font-medium capitalize">
                    {translateLanguage(
                      VN_ORDER_STATUS,
                      ORDER_STATUS,
                      track.status
                    )}
                  </div>
                  <div>{track.message}</div>
                </div>
              </div>
            </Step>
          ))}
        </Stepper>
      </div>
    </Container>
  );
};

StepOrderDetail.propTypes = {
  order: PropTypes.object,
  trackings: PropTypes.array,
};

export default StepOrderDetail;
