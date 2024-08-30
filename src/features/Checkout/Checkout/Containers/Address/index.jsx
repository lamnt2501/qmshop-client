import React, { useState } from "react";
import NewAddress from "../NewAddress";
import ChoiceAddress from "../../Components/ChoiceAddress";
import OldAddress from "../OldAddress";
const Address = () => {
  const [newAddress, setNewAddress] = useState(false);
  return (
    <>
      <div className="flex gap-4 justify-center text-center text-2xl">
        <ChoiceAddress
          active={!newAddress}
          changeActive={() => setNewAddress(false)}
        >
          Sử dụng địa chỉ đã có
        </ChoiceAddress>
        <ChoiceAddress
          active={newAddress}
          changeActive={() => setNewAddress(true)}
        >
          Sử dụng địa chỉ mới
        </ChoiceAddress>
      </div>
      {newAddress ? <NewAddress /> : <OldAddress/>}
    </>
  );
};

export default Address;
