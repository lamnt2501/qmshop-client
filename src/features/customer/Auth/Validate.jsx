const validator = (options) => {
  // tạo một object rỗng để chứa tất cả các rule
  const selectorRules = {};

  let isValid;

  // lấy ra formGrout Element để dễ sử dụng

  const getParent = (element, selector) => {
    while (element.parentElement) {
      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
  };

  // khởi tọa hàm validate để thông báo hoặc gỡ mesage lỗi
  const validate = (inputElement, rule) => {
    var errorElement = getParent(
      inputElement,
      options.formGroupSelector
    ).querySelector(options.errorSelector);
    // khai báo error mesage
    var errorMesage;

    // lấy ra tất cả các rule selector có liên quan đến rule
    const rules = selectorRules[rule.selector];

    // lặp qua và kiểu tra, nếu có lỗi đầu tiên thì dừng
    for (var i = 0; i < rules.length; ++i) {
      errorMesage = rules[i]();
      if (errorMesage) break;
    }

    // nếu có lỗi thì thêm thông báo lỗi và lớp validate vào trong form group
    if (errorMesage) {
      errorElement.innerText = errorMesage;
      getParent(inputElement, options.formGroupSelector).classList.add(
        "invalid"
      );
      return false;
    } else {
      removeError(inputElement, errorElement);
      return true;
    }
  };

  // gỡ thông báo lỗi
  const removeError = (inputElement, errorElement) => {
    errorElement.innerText = "";
    getParent(inputElement, options.formGroupSelector).classList.remove(
      "invalid"
    );
  };

  // lặp qua và lưu các rule vào selectorRules
  options.rules.forEach((rule) => {
    // lấy ra inputElement của rule đó
    var inputElement = document.querySelector(rule.selector);

    if (Array.isArray(selectorRules[rule.selector])) {
      selectorRules[rule.selector].push(rule.test);
    } else {
      selectorRules[rule.selector] = [rule.test];
    }

    if (inputElement) {
      // kiểm tra lỗi
      isValid = validate(inputElement, rule);

      // khi người dùng bắt đầu nhập sẽ xóa bỏ thông báo lỗi
      inputElement.oninput = () => {
        removeError(
          inputElement,
          getParent(inputElement, options.formGroupSelector).querySelector(
            options.errorSelector
          )
        );
      };
    }
  });
  return isValid;
};

validator.isRequired = function (selector, value, customMesage) {
  return {
    selector,
    test: () => {
      return value.trim()
        ? undefined
        : customMesage || "Vui lòng nhập trường này";
    },
  };
};

validator.isName = function (selector, value, customMesage) {
  return {
    selector,
    test: () => {
      const re =
        /^[a-zàáảãạâầấẩẫậăằắẳẵặèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ]+(\s[a-zàáảãạâầấẩẫậăằắẳẵặèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ]+)*$/i;
      return re.test(value)
        ? undefined
        : customMesage || "Tên chỉ bao gồm ký tự và khoảng trắng";
    },
  };
};

validator.isEmail = function (selector, value, customMesage) {
  return {
    selector,
    test: () => {
      const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      return re.test(value)
        ? undefined
        : customMesage || "Vui lòng nhập đúng định dạng email !";
    },
  };
};

validator.isPhone = function (selector, value, customMesage) {
  return {
    selector,
    test: () => {
      const re = /((\+84|84|0)[3|5|7|8|9])+([0-9]{8})\b/;
      return re.test(value)
        ? undefined
        : customMesage || "Vui lòng nhập đúng số điện thoại !";
    },
  };
};
validator.isPassword = function (selector, value, customMesage) {
  return {
    selector,
    test: () => {
      const re =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return re.test(value)
        ? undefined
        : customMesage ||
            "Mật khẩu phải có tối thiểu 8 ký tự và bảo gồm chữ thường, chữ hoa, số và ký tự đặc biệt";
    },
  };
};
validator.isComfirmed = function (selector, value, confirmed, customMesage) {
  return {
    selector,
    test: () => {
      return value === confirmed
        ? undefined
        : customMesage || "Vui lòng nhập đúng mật khẩu trước đó";
    },
  };
};

export default validator;
