import PropTypes from "prop-types";
import {
  Step,
  stepClasses,
  StepIndicator,
  stepIndicatorClasses,
  Stepper,
  Typography,
} from "@mui/joy";
import {
  ORDER_STATUS,
  STYLE_ORDER_STATUS,
  VN_ORDER_STATUS,
} from "../../../../../config";
import { translateLanguage } from "../../../../../utils";

const StepOrder = ({ order, trackings }) => {
  return (
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
      {STYLE_ORDER_STATUS.map(({ Icon }, index) => (
        <Step
          key={index}
          orientation="vertical"
          completed={index < order.tracking.length - 1}
          active={index === order.tracking.length - 1}
          disabled={index > order.tracking.length - 1}
          indicator={
            <StepIndicator
              variant={index !== trackings.length - 1 ? "outlined" : "solid"}
              color={index > trackings.length - 1 ? "neutral" : "primary"}
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
            {translateLanguage(
              VN_ORDER_STATUS,
              ORDER_STATUS,
              ORDER_STATUS[index]
            )}
          </Typography>
        </Step>
      ))}
    </Stepper>
  );
};

StepOrder.propTypes = {
  order: PropTypes.object,
  trackings: PropTypes.array,
};

export default StepOrder;
