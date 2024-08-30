import axios from "axios";

const showError = (error) => {
  if (axios.isCancel(error)) {
    console.log("Request canceled", error.message);
  } else if (error.response) {
    // Request đã được tạo ra và server đã hồi đáp với một mã trạng thái
    // nằm ra ngoài tầm 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // Request đã được tạo ra nhưng không nhận được hồi đáp nào
    // Trong trình duyệt, `error.request` là instance của XMLHttpRequest
    // còn trong node.js thì nó là instance của http.ClientRequest
    console.log(error.request);
  } else {
    // Điều gì đó đã xảy ra trong bước thiết lập request rồi gây nên lỗi
    console.log("Lỗi", error.message);
  }
  console.log(error.config);
};

export default showError;
