import { memo } from "react";
import "./Input.css";
import clsx from "clsx";

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
    onBlur,
    disabled,
    className,
  } = prop;

  return (
    <div className={clsx(`formGroup pt-6 relative w-full`)}>
      {/* <h3 className="text-left font-medium">{title}</h3> */}
      <input
        className={clsx("form__field", className, {
          capitalize: id === "name",
        })}
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
        disabled={disabled}
        onBlur={!disabled ? Validator ?? onBlur ?? undefined : undefined}
        // onBlur={Validator || onBlur || undefined}
      />
      <label className="form__label" htmlFor={id}>
        {children}
      </label>
      <div className="formMessage ">  </div>
    </div>
  );
};

export default memo(Input);
