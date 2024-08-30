import React, { memo } from "react";

const Options = (prop) => {
  const { options, name, id, value, setValue, children } = prop;

  return (
    <select
      className="p-4 border border-slate-600"
      name={name}
      id={id}
      value={value}
      onChange={setValue}
    >
      <option value="">{children}</option>
      {Array.isArray(options) &&
        options.map(({ id, name }) => (
          <option key={id} value={id} data-name={name}>
            {name}
          </option>
        ))}
    </select>
  );
};

export default Options;
