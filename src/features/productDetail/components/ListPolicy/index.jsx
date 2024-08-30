import React from "react";
import { Policy } from "../";
import { policyImage } from "../../../../config/image";

const ListPolicy = () => {
  const Policys = [
    {
      image: policyImage[0],
      name: "Cam kết chính hãng",
      title: "Cam kết chính hãng",
    },
    {
      image: policyImage[1],
      name: "Bảo hành 06 tháng",
      title: "Bảo hành 06 tháng",
    },
    {
      image: policyImage[2],
      name: "Đổi size trong vòng 7 ngày",
      title: "Đổi size trong vòng 7 ngày",
    },
    // {
    //   image: policyImage[3],
    //   name: "Đổi trả hàng trong vòng 7 ngày",
    //   title: "Đổi trả hàng trong vòng 7 ngày",
    // },
    {
      image: policyImage[4],
      name: "Free ship đơn hàng 1.5 Triệu",
      title: "Free ship đơn hàng 1.5 Triệu",
    },
  ];

  return (
    <div>
      {Policys.map((policy) => (
        <Policy key={policy.name} name={policy.name} image={policy.image}>
          {policy.title}
        </Policy>
      ))}
    </div>
  );
};

export default ListPolicy;
