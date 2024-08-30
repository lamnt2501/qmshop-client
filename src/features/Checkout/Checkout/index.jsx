import React, { useEffect } from "react";
import CheckoutInfomations from "./Containers/CheckoutInfomations";
import CheckoutBillPreview from "./Containers/CheckoutBillPreview";
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

  useTitle('Thanh toán')

  return (
    <div className="my-8">
      <Container>
        <CheckoutInfomationsHeader />
        <div className="grid grid-cols-4 lg:grid-cols-8 space-x-4">
          <div className="col-span-4">
            <CheckoutInfomations />
          </div>
          <div className="col-span-4">
            <CheckoutBillPreview />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
