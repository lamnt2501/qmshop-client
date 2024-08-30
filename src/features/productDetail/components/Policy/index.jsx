import React from "react";
import { Image } from "../../../../components";

const Policy = ({ image, name, children }) => {
  return (
    <div className="p-2 border-[0.1px] border-slate-400 mb-1 rounded-md">
      <div className="flex w-full content-center">
        <div className="h-7 w-7 mx-4">
          <Image data={{ image: image, name: name }} />
        </div>
        <span>{children}</span>
      </div>
    </div>
  );
};

export default Policy;
