import { useEffect } from "react";
import CheckoutInfomations from "./Containers/CheckoutInfomations";
import { Container } from "@mui/material";
import CheckoutInfomationsHeader from "./Components/CheckoutInfomationsHeader";
import { useDispatch } from "react-redux";
import { resetCheckout } from "../../../app/reducers";
import useTitle from "../../../hooks/useTitle";

const Checkout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(resetCheckout());
    };
  }, [dispatch]);

  useTitle("Thanh toán");

  return (
    <div className="my-8">
      <Container className="flex justify-center">
        <div className="w-1/2">
          <CheckoutInfomationsHeader />
          <CheckoutInfomations />
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
