import PropTypes from "prop-types";
import { Input } from "../../../../../components";
import { handleEditValueInput } from "../../../../../utils/handleEditValueInput";

const InputValue = ({ newValue, value, setNewValue, children }) => {
  return (
    <div className="grid justify-items-stretch items-center gap-5 grid-cols-2">
      <h5 className="text-xl col-span-1 justify-self-end">{children}</h5>
      <div className="col-span-1">
        <Input
          type={"text"}
          value={newValue}
          onClick={() => handleEditValueInput(newValue, value, "", setNewValue)}
          onBlur={() => handleEditValueInput(newValue, "", value, setNewValue)}
          onChange={(e) => setNewValue(e.target.value)}
        >
          {children}
        </Input>
      </div>
    </div>
  );
};

InputValue.propTypes = {
  newValue: PropTypes.any,
  value: PropTypes.any,
  children: PropTypes.any,
  setNewValue: PropTypes.func,
};

export default InputValue;
