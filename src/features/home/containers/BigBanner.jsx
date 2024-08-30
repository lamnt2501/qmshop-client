import React from "react";
import { Container, Image } from "../../../components";
import { frame } from "../../../config";

const BigBanner = () => {
  return (
    <Container>
      <div className="rounded-md overflow-hidden">
        <Image data={frame[0]} />
      </div>
    </Container>
  );
};

export default BigBanner;
