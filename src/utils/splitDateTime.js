export const splitDateTime = (datetimeString) => {
  if (typeof datetimeString !== "string") {
    return;
  }

  // Tách ngày và thời gian
  const [date, time] = datetimeString.split("T");

  // Tách ngày, tháng, năm và chuyển đổi sang kiểu số
  const [year, month, day] = date.split("-").map(Number);

  // Tách giờ, phút, giây
  let [hour, minute, second] = time.split(":");

  // Chuyển giây thành số và làm tròn
  second = Math.round(parseFloat(second));

  // Kiểm tra AM hay PM và chuyển đổi sang định dạng 12 giờ
  const period = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12; // Chuyển 0 thành 12 cho thời điểm nửa đêm

  // Đảm bảo giờ có 2 chữ số
  hour = hour.toString().padStart(2, "0");

  return `${day} tháng ${month} năm ${year} lúc ${hour}:${minute}:${second} ${period}`;
};
