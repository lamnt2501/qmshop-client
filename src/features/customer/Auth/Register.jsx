import { useEffect, useState } from "react";
import { Input, Button, CustomSnackbar } from "../../../components";
import { validator, isValidDate } from "../../../utils";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAuthRegister,
  setName,
  setEmail,
  setPhone,
  setPassword,
  setPasswordComfirmation,
  register,
  // selectAuthError,
  selectAuthToken,
  selectAuthStatus,
  resetAuthState,
  resetAuthStatus,
  setGender,
  setBirthDay,
} from "../../../app/reducers/";
import useAuthRedirect from "../../../hooks/useAuthRedirect";
import {
  ALERT_ERROR,
  FETCH_FAILED,
  GENDERS,
  VN_GENDERS,
} from "../../../config";
import useTitle from "../../../hooks/useTitle";
import DateTime from "../../../components/DateTime";
import { FormControl, FormLabel, Radio, RadioGroup } from "@mui/joy";

import dayjs from "../../../config/dayjsConfig";

const Register = () => {
  const nextPath = localStorage.getItem("path") ?? "/";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const infomation = useSelector(selectAuthRegister);
  const token = useSelector(selectAuthToken);
  const status = useSelector(selectAuthStatus);

  const [birth, setBirth] = useState(dayjs());

  useEffect(() => {
    return () => {
      dispatch(resetAuthState());
    };
  }, [dispatch]);

  useTitle("Đăng ký");

  useAuthRedirect(token, status, navigate, nextPath);

  const baseOptions = {
    form: "#registerForm",
    formGroupSelector: ".formGroup",
    errorSelector: ".formMessage",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isName = handleNameValidator();
    const isEmail = handleEmailValidator();
    const isPhone = handlePhoneValidator();
    const isPassword = handlePasswordValidator();
    const isPasswordComfirmation = handlePasswordComfirmationValidator();
    const isDate = isValidDate(birth.format());

    if (
      isName &&
      isEmail &&
      isPhone &&
      isPassword &&
      isPasswordComfirmation &&
      isDate
    ) {
      dispatch(register(infomation));
    }
  };

  const handleNameValidator = () => {
    return handleValidator({
      ...baseOptions,
      rules: [
        validator.isRequired(`#name`, infomation.name),
        validator.isName("#name", infomation.name),
      ],
    });
  };

  const handleEmailValidator = () => {
    return handleValidator({
      ...baseOptions,
      rules: [
        validator.isRequired("#email", infomation.email),
        validator.isEmail("#email", infomation.email),
      ],
    });
  };

  const handlePhoneValidator = () => {
    return handleValidator({
      ...baseOptions,
      rules: [
        validator.isRequired("#phone", infomation.phoneNumber),
        validator.isPhone("#phone", infomation.phoneNumber),
      ],
    });
  };

  const handlePasswordValidator = () => {
    return handleValidator({
      ...baseOptions,
      rules: [
        validator.isRequired("#password", infomation.password),
        validator.isPassword("#password", infomation.password),
      ],
    });
  };

  const handlePasswordComfirmationValidator = () => {
    return handleValidator({
      ...baseOptions,
      rules: [
        validator.isRequired(
          "#passwordComfirmation",
          infomation.passwordComfirmation
        ),
        validator.isComfirmed(
          "#passwordComfirmation",
          infomation.passwordComfirmation,
          infomation.password
        ),
      ],
    });
  };

  const handleValidator = (options) => validator(options);

  const handleSetGender = (genderIndex) => {
    dispatch(setGender(GENDERS[genderIndex]));
  };

  const handleSetBirthDay = (newValue) => {
    setBirth(newValue);

    if (newValue && newValue.format() && newValue.format() !== "Invalid Date") {
      const dateString = newValue.utc().format();
      dispatch(setBirthDay(dateString));
    }
  };

  return (
    <>
      {/* <BannerHeadPage title={"Đăng ký"} /> */}
      <div className="form rounded-md shadow-md transition-transform duration-200 w-[500px] text-center m-auto my-10">
        <div className="formValue">
          <form className="grid justify-items-center px-4" id="registerForm">
            <h1 className="text-black pt-6 text-center uppercase text-4xl">
              đăng ký
            </h1>
            <Input
              id="name"
              type="text"
              value={infomation.name}
              onChange={(e) => dispatch(setName(e.target.value))}
              Validator={() => handleNameValidator()}
            >
              Nhập họ và tên
            </Input>

            <Input
              id="email"
              type="email"
              value={infomation.email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
              Validator={() => handleEmailValidator()}
            >
              Nhập email
            </Input>

            <Input
              id="phone"
              type="text"
              value={infomation.phoneNumber}
              onChange={(e) => dispatch(setPhone(e.target.value))}
              Validator={() => handlePhoneValidator()}
            >
              Nhập số điện thoại
            </Input>
            <div className="mt-6 w-full">
              <DateTime value={birth} setValue={handleSetBirthDay} />
            </div>
            <div className="w-full mt-6">
              <FormControl>
                <FormLabel>Giới tính</FormLabel>
                <RadioGroup
                  orientation="horizontal"
                  aria-label="Alignment"
                  defaultValue={0}
                  name="radio-buttons-group"
                  onChange={(e) => handleSetGender(parseInt(e.target.value))}
                >
                  {VN_GENDERS.map((g, i) => (
                    <Radio
                      color="neutral"
                      variant="soft"
                      key={i}
                      value={i}
                      label={g}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>

            <Input
              id="password"
              type="password"
              value={infomation.password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
              Validator={() => handlePasswordValidator()}
            >
              Nhập mật khẩu
            </Input>

            <Input
              id="passwordComfirmation"
              type="password"
              value={infomation.passwordComfirmation}
              onChange={(e) =>
                dispatch(setPasswordComfirmation(e.target.value))
              }
              Validator={() => handlePasswordComfirmationValidator()}
            >
              Nhập lại mật khẩu
            </Input>

            <div className="w-3/4 mb-5 mt-1">
              <Button
                isFull
                afterAnimation
                black
                onClick={(e) => handleSubmit(e)}
              >
                Đăng Ký
              </Button>
            </div>
          </form>
          <div className="flex justify-center gap-1 pb-4">
            <span>nếu bạn đã có tài khoản, hãy</span>
            <Link
              to={"/login"}
              className="text-sky-700 underline decoration-1 hover:text-sky-600 transition"
            >
              Đăng nhập
            </Link>
          </div>
        </div>
        <CustomSnackbar
          openSnackbar={status === FETCH_FAILED}
          handleCloseSnackbar={() => dispatch(resetAuthStatus())}
          snackbarSeverity={ALERT_ERROR}
        >
          Tài khoản đã tồn tại
        </CustomSnackbar>
      </div>
    </>
  );
};

export default Register;
