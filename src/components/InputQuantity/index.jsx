import React, { memo } from "react";
import { BsPlusLg } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import clsx from "clsx";

const InputQuantity = (prop) => {
  const { limit, value, setValue, min = 0, max } = prop;


  const spanClassName = clsx(
    "grid justify-items-center content-center bg-slate-100 w-8 cursor-pointer border border-slate-300 hover:border-black transition hover:text-red-600 rounded-md overflow-hidden"
  );
  const handleIncrease = () => {
    setValue(value + 1);
  };
  const handleDecrement = () => {
    if (value > min) setValue(value - 1);
  };
  const handleSetQuantity = (newValue) => {
    if (newValue > 1 && newValue < limit) setValue(newValue);
    else if (newValue > limit) setValue(limit);
    else setValue(1);
  };

  return (
    <form className="flex justify-items-stretch">
      <span className={spanClassName} onClick={() => handleDecrement()}>
        <FiMinus />
      </span>
      <input
        className="w-auto max-w-11 border text-center px-2 focus:outline-none"
        value={value}
        onChange={(e) => handleSetQuantity(e.target.value)}
      />
      <span className={spanClassName} onClick={() => handleIncrease()}>
        <BsPlusLg />
      </span>
    </form>
  );
};

export default InputQuantity;
