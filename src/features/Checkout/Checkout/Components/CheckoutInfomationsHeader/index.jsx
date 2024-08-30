import React from "react";
import { Logo, CustomBreadcrumbs } from "../../../../../components";

const CheckoutInfomationsHeader = () => {
  const BreadcrumbsList = [
    {
      url: "/carts",
      name: "Giỏ hàng",
    },
    {
      url: "/checkout",
      name: "Thanh toán",
    },
  ];

  return (
    <div>
      <div className="max-w-64">
        <Logo />
      </div>
      <div className="my-4">
        <CustomBreadcrumbs breadcrumbs={BreadcrumbsList} />
      </div>
    </div>
  );
};

export default CheckoutInfomationsHeader;
