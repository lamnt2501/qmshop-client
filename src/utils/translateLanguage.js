const translateLanguage = (vnArray, enArray, inputData) => {
  // Kiểm tra nếu inputData thuộc mảng tiếng Việt
  if (vnArray.includes(inputData)) {
    // Trả về giá trị tương ứng trong mảng tiếng Anh
    return enArray[vnArray.indexOf(inputData)];
  }
  // Kiểm tra nếu inputData thuộc mảng tiếng Anh
  else if (enArray.includes(inputData)) {
    // Trả về giá trị tương ứng trong mảng tiếng Việt
    return vnArray[enArray.indexOf(inputData)];
  } else {
    // Nếu không tìm thấy giá trị, trả về thông báo lỗi
    return "Dữ liệu không hợp lệ";
  }
};

export default translateLanguage;
