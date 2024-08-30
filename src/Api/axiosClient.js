import axios from "axios";
import Cookies from "js-cookie";

const axiosClient = axios.create({
  // baseURL: 'http://localhost:4000',
  // baseURL: "http://localhost:8080/api/v1",
  baseURL: "http://localhost:80/api/v1",
  timeout: 3000,
});

// Thêm một bộ đón chặn request
axiosClient.interceptors.request.use(
  function (config) {
    // // Hủy request cũ nếu có
    // if (cancelTokenSource) {
    //   cancelTokenSource.cancel("Operation canceled due to new request.");
    // }

    // // Tạo một cancel token mới cho request mới
    // cancelTokenSource = axios.CancelToken.source();
    // config.cancelToken = cancelTokenSource.token;

    // Làm gì đó trước khi request dược gửi đi

    const token = Cookies.get("token");
    if (token) {
      // console.log(token);
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    // Làm gì đó với lỗi request
    return Promise.reject(error);
  }
);

// Thêm một bộ đón chặn response
axiosClient.interceptors.response.use(
  function (response) {
    // Bất kì mã trạng thái nào nằm trong tầm 2xx đều khiến hàm này được trigger
    // Làm gì đó với dữ liệu response
    return response.data;
  },
  function (error) {
    if (axios.isCancel(error)) {
      console.log("Request canceled:", error.message);
    } else {
      // Xử lý lỗi
      // Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
      // Làm gì đó với lỗi response
      return Promise.reject(error);
    }
  }
);

export default axiosClient;
