import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import PropTypes from "prop-types";

DateTime.propTypes = {
  value: PropTypes.any,
  setValue: PropTypes.func,
};

function DateTime({ value, setValue }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="vi">
      <DatePicker
        sx={{
          width: "100%",
        }}
        label="Chọn ngày sinh" // Nhãn của trường chọn ngày
        value={value} // Giá trị hiện tại của ngày được chọn
        onChange={(newValue) => setValue(newValue)} // Cập nhật khi người dùng chọn ngày mới
        disableFuture // Không cho phép chọn ngày trong tương lai
        // openTo="year" // Mở picker ở chế độ chọn năm trước
        views={["year", "month", "day"]} // Cho phép chọn năm, tháng và ngày
      />
    </LocalizationProvider>
  );
}

export default DateTime;
