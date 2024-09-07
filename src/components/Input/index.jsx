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
    onClick,
    onBlur
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
        onClick={onClick}
        placeholder={children}
        checked={checked}
        required={required}
        onBlur={Validator ?? onBlur ?? undefined}
      />
      <label className="form__label" htmlFor={id}>
        {children}
      </label>
      <div className="formMessage"></div>
    </div>
  );
};

export default memo(Input);
