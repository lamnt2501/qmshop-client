import { Option, Select } from "@mui/joy";

const Options = (prop) => {
  const { options, name, value, setValue, children } = prop;

  return (
    <Select
      placeholder={name}
      value={value}
      onChange={setValue}
      sx={{ minWidth: 200 }}
    >
      <Option value="">{children}</Option>
      {Array.isArray(options) &&
        options.map(({ id, name }) => (
          <Option key={id} value={id} data-name={name}>
            {name}
          </Option>
        ))}
    </Select>
  );
};

export default Options;
