import { React } from "react";
import { memo } from "react";
import "./Input.css";

const Input = (prop) => {

  const {
    children,
    required = true,
    type,
    value,
    onChange,
    id,
    checked,
    Validator,
  } = prop;

  return (
    <div className={`formGroup py-5 relative w-full`}>
      <input
        className="form__field "
        id={id}
        name={id}
        autoComplete={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={children}
        checked={checked}
        required={required}
        onBlur={Validator ? () => Validator() : undefined}
      />
      <label className="form__label" htmlFor={id}>
        {children}
      </label>
      <div className="formMessage"></div>
    </div>
  );
};

export default memo(Input);
