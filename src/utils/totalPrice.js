export const totalPrice = (options) => {
  if (Array.isArray(options))
    return options.reduce(
      (total, { price, quantity }) => price * quantity + total,
      0
    );
};
