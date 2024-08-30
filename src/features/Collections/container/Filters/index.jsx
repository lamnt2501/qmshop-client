import React from "react";
import { ColorButton, SizeButton, PriceButton } from "../";
import { Container } from "../../../../components";
import "./Filters.css";

const Filters = () => {
  return (
    <div className="flex flex-row gap-4">
      <ColorButton />
      <SizeButton />
      <PriceButton />
    </div>
  );
};

export default Filters;
