import { useEffect, useState } from "react";
import {
  resetUpdateStatus,
  selectCustomerStatus,
  selectCustomerUpdateResult,
  selectCustomerUpdateStatus,
  updateInfomations,
} from "../../../../../app/reducers";
import { useDispatch, useSelector } from "react-redux";
import InputValue from "../../components/InputValue";
import {
  ALERT_SUCCESS,
  FETCH_SUCCEEDED,
  GENDERS,
  VN_GENDERS,
} from "../../../../../config";
// import PropTypes from "prop-types";
import { CustomLink, CustomSnackbar } from "../../../../../components";
import { Button } from "@mui/material";
import {
  isValidDate,
  translateLanguage,
  validator,
} from "../../../../../utils";
import dayjs from "../../../../../config/dayjsConfig";
import { FormControl, FormLabel, Radio, RadioGroup } from "@mui/joy";
import DateTime from "../../../../../components/DateTime";
import { useOutletContext } from "react-router";

const ChangeInfomations = () => {
  const {
    customerName,
    customerPhone,
    customerEmail,
    customerGender,
    customerBirthday,
  } = useOutletContext();

  const dispatch = useDispatch();

  const customerStatus = useSelector(selectCustomerStatus);

  const customerUpdateStatus = useSelector(selectCustomerUpdateStatus);
  const customerUpdateResult = useSelector(selectCustomerUpdateResult);

  const [customerNewName, setCustomerNewName] = useState("");
  const [customerNewPhone, setCustomerNewPhone] = useState("");
  const [customerNewGender, setCustomerNewGender] = useState("");
  const [customerNewBirthDay, setCustomerNewBirthDay] = useState(dayjs());
  const [customerNewBirthDayString, setCustomerNewBirthDayString] =
    useState("");

  useEffect(() => {
    if (customerStatus === FETCH_SUCCEEDED) {
      setCustomerNewName(customerName);
      setCustomerNewPhone(customerPhone);
      setCustomerNewGender(
        translateLanguage(VN_GENDERS, GENDERS, customerGender)
      );
      setCustomerNewBirthDay(dayjs(customerBirthday));
      setCustomerNewBirthDayString(customerBirthday);
    }
  }, [
    customerStatus,
    customerName,
    customerPhone,
    customerGender,
    customerBirthday,
  ]);

  const getIsActiveSaveButton = () => {
    return (
      (customerNewName !== "" && customerNewName !== customerName) ||
      (customerNewPhone !== "" && customerNewPhone !== customerPhone) ||
      translateLanguage(VN_GENDERS, GENDERS, customerNewGender) !==
        customerGender ||
      customerNewBirthDayString !== customerBirthday
    );
  };

  // validate
  const baseOptions = {
    form: "#changeCustomerInfomation",
    formGroupSelector: ".formGroup",
    errorSelector: ".formMessage",
  };

  const handleNameValidator = () => {
    return handleValidator({
      ...baseOptions,
      rules: [
        validator.isRequired(`#name`, customerNewName),
        validator.isName("#name", customerNewName),
      ],
    });
  };

  const handlePhoneValidator = () => {
    return handleValidator({
      ...baseOptions,
      rules: [
        validator.isRequired("#phone", customerNewPhone),
        validator.isPhone("#phone", customerNewPhone),
      ],
    });
  };

  // handle
  const handleSubmit = (e) => {
    e.preventDefault();

    const isName = handleNameValidator();
    const isPhone = handlePhoneValidator();
    const isDate = isValidDate(customerNewBirthDayString);

    if (isName && isPhone && isDate) {
      dispatch(
        updateInfomations({
          phoneNumber: customerNewPhone,
          name: customerNewName,
          gender: translateLanguage(VN_GENDERS, GENDERS, customerNewGender),
          birthday: customerNewBirthDayString,
        })
      );
    }
  };

  const handleValidator = (options) => validator(options);

  const handleSetBirthDay = (newValue) => {
    setCustomerNewBirthDay(newValue);

    if (newValue && newValue.format() && newValue.format() !== "Invalid Date") {
      const dateString = newValue.utc().format();
      setCustomerNewBirthDayString(dateString);
    }
  };

  return (
    <div className="grid grid-cols-5 md:grid-cols-12">
      <div className="col-span-5 bg-gray-200 p-8">
        <h1 className="text-3xl font-normal mb-4">Thông tin cá nhân</h1>
        <p>
          Đây là thông tin riêng tư và sẽ không được chia sẻ với người khác. Hãy
          đọc{" "}
          <CustomLink url={"/privacy-policy"} className={"text-red-400"}>
            Chính sách bảo mật thông tin
          </CustomLink>{" "}
          bất cứ khi nào bạn muốn!
        </p>
      </div>
      <div className="col-span-5 md:col-span-7">
        <div className=" my-10">
          <form
            id="changeCustomerInfomation"
            className="flex flex-col px-10 md:px-32 gap-4"
          >
            <InputValue
              disabled
              id={"email"}
              value={customerEmail}
              newValue={customerEmail}
            >
              Email
            </InputValue>

            <InputValue
              id={"name"}
              newValue={customerNewName}
              value={customerName}
              setNewValue={setCustomerNewName}
              Validator={() => handleNameValidator()}
            >
              Họ và tên
            </InputValue>

            <InputValue
              id={"phone"}
              newValue={customerNewPhone}
              value={customerPhone}
              setNewValue={setCustomerNewPhone}
              Validator={() => handlePhoneValidator()}
            >
              Số điện thoại
            </InputValue>

            <div className="mt-6 w-full">
              <DateTime
                value={customerNewBirthDay}
                setValue={handleSetBirthDay}
              />
            </div>

            <div className="w-full mt-6">
              <FormControl>
                <FormLabel>Giới tính</FormLabel>
                <RadioGroup
                  orientation="horizontal"
                  aria-label="Alignment"
                  defaultValue={customerNewGender}
                  value={customerNewGender}
                  onChange={(e) => setCustomerNewGender(e.target.value)}
                >
                  {VN_GENDERS.map((g, i) => (
                    <Radio
                      color={
                        translateLanguage(VN_GENDERS, GENDERS, g) ===
                        customerGender
                          ? "success"
                          : "neutral"
                      }
                      variant={"soft"}
                      key={i}
                      value={g}
                      label={g}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>

            <div className="flex justify-end">
              <Button
                onClick={(e) => handleSubmit(e)}
                variant="outlined"
                color="inherit"
                disabled={!getIsActiveSaveButton()}
              >
                Lưu thông tin
              </Button>
            </div>
          </form>
        </div>
      </div>
      <CustomSnackbar
        openSnackbar={
          customerUpdateStatus === FETCH_SUCCEEDED &&
          customerUpdateResult.StatusCode === "200"
        }
        handleCloseSnackbar={() => dispatch(resetUpdateStatus())}
        snackbarSeverity={ALERT_SUCCESS}
      >
        Thông tin của bạn đã được thay đổi
      </CustomSnackbar>
    </div>
  );
};

// ChangeInfomations.propTypes = {
//   customerName: PropTypes.string,
//   customerPhone: PropTypes.string,
//   customerEmail: PropTypes.string,
//   customerGender: PropTypes.string,
//   customerBirthday: PropTypes.string,
// };

export default ChangeInfomations;
