import PropTypes from "prop-types";
import { Input } from "../../../../../components";
import { handleEditValueInput } from "../../../../../utils";

const InputValue = ({
  newValue,
  value,
  setNewValue,
  children,
  Validator,
  id,
  disabled,
}) => {
  return (
    <Input
      disabled={disabled}
      type={"text"}
      id={id}
      value={newValue}
      onClick={() => handleEditValueInput(newValue, value, "", setNewValue)}
      onChange={(e) => setNewValue(e.target.value)}
      Validator={newValue !== "" ? Validator : undefined}
      onBlur={() => handleEditValueInput(newValue, "", value, setNewValue)}
    >
      {children}
    </Input>
  );
};

InputValue.propTypes = {
  newValue: PropTypes.any,
  value: PropTypes.any,
  children: PropTypes.any,
  setNewValue: PropTypes.func,
  Validator: PropTypes.func,
  id: PropTypes.string,
  disabled: PropTypes.bool,
};

export default InputValue;
