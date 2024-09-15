const handleEditValueInput = (
  oldValue,
  comparativeValue,
  NewValue,
  changeFunction
) => {
  if (oldValue === comparativeValue) changeFunction(NewValue);
};

export default handleEditValueInput