import dayjs from "dayjs";
import "dayjs/locale/vi";
import utc from "dayjs/plugin/utc";

// Cấu hình mặc định
dayjs.locale("vi");
dayjs.extend(utc);

// Xuất các hàm hoặc đối tượng cần thiết
export default dayjs;