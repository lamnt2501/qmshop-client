const priceConvert = (price) => {
  if (typeof price === "number") return `${price.toLocaleString("vi-VN")} VND`;
};

export default priceConvert