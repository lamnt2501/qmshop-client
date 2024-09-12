import { useEffect, useState } from "react";
import {
  changePassword,
  resetChangePasswordStatus,
  resetUpdateStatus,
  selectCustomerChangePasswordResult,
  selectCustomerChangePasswordStatus,
  selectCustomerUpdateResult,
  selectCustomerUpdateStatus,
} from "../../../../../app/reducers";
import { useDispatch, useSelector } from "react-redux";
import {
  ALERT_ERROR,
  ALERT_SUCCESS,
  FETCH_FAILED,
  FETCH_SUCCEEDED,
} from "../../../../../config";
import { CustomSnackbar, Input } from "../../../../../components";
import { Button } from "@mui/material";
import { validator } from "../../../../../utils";

const ChangePassword = () => {
  const dispatch = useDispatch();

  // update infomation
  const customerUpdateStatus = useSelector(selectCustomerUpdateStatus);
  const customerUpdateResult = useSelector(selectCustomerUpdateResult);

  // change password
  const customerChangePasswordStatus = useSelector(
    selectCustomerChangePasswordStatus
  );
  const customerChangePasswordResult = useSelector(
    selectCustomerChangePasswordResult
  );

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordComfirmation, setNewPasswordComfirmation] = useState("");

  const getIsActiveSaveButton = () => {
    return (
      password !== "" && newPassword !== "" && newPasswordComfirmation !== ""
    );
  };

  useEffect(() => {
    if (customerChangePasswordStatus === FETCH_SUCCEEDED) {
      setPassword("");
      setNewPassword("");
      setNewPasswordComfirmation("");
    }
  }, [customerChangePasswordStatus]);

  const baseOptions = {
    form: "#changeCustomerPassword",
    formGroupSelector: ".formGroup",
    errorSelector: ".formMessage",
  };

  const handlePasswordValidator = () => {
    return handleValidator({
      ...baseOptions,
      rules: [
        validator.isRequired("#newPassword", newPassword),
        validator.isPassword("#newPassword", newPassword),
      ],
    });
  };

  const handlePasswordComfirmationValidator = () => {
    return handleValidator({
      ...baseOptions,
      rules: [
        validator.isRequired(
          "#newPasswordComfirmation",
          newPasswordComfirmation
        ),
        validator.isComfirmed(
          "#newPasswordComfirmation",
          newPasswordComfirmation,
          newPassword
        ),
      ],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNewPassword = handlePasswordValidator();
    const isNewPasswordComfirmation = handlePasswordComfirmationValidator();

    if (isNewPassword && isNewPasswordComfirmation) {
      dispatch(
        changePassword({
          currentPassword: password,
          newPassword: newPassword,
          confirmPassword: newPasswordComfirmation,
        })
      );
    }
  };

  const handleValidator = (options) => validator(options);

  return (
    <div className="grid grid-cols-5 md:grid-cols-12">
      <div className="col-span-5 bg-gray-200 p-8">
        <h1 className="text-3xl font-normal mb-4">Đăng Nhập Tài Khoản</h1>
        <p>
          Bạn nên thay đổi mật khẩu định kỳ để giảm thiểu khả năng tài khoản bị
          truy cập bởi kẻ gian.
        </p>
      </div>
      <div className="col-span-5 md:col-span-7">
        <div className=" my-10">
          <form
            id="changeCustomerPassword"
            className="flex flex-col px-10 md:px-32 gap-4"
          >
            <Input
              id={"password"}
              type={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            >
              Mật khẩu hiện tại
            </Input>

            <Input
              id={"newPassword"}
              type={"password"}
              value={newPassword}
              Validator={() => handlePasswordValidator()}
              onChange={(e) => setNewPassword(e.target.value)}
            >
              Mật khẩu mới
            </Input>

            <Input
              id={"newPasswordComfirmation"}
              type={"password"}
              value={newPasswordComfirmation}
              Validator={() => handlePasswordComfirmationValidator()}
              onChange={(e) => setNewPasswordComfirmation(e.target.value)}
            >
              Xác nhận mật khẩu mới
            </Input>

            <div className="flex justify-end">
              <Button
                variant="outlined"
                color="inherit"
                onClick={(e) => handleSubmit(e)}
                disabled={!getIsActiveSaveButton()}
              >
                Đổi mật khẩu
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

      <CustomSnackbar
        openSnackbar={
          customerChangePasswordStatus === FETCH_SUCCEEDED &&
          customerChangePasswordResult.StatusCode === "200"
        }
        handleCloseSnackbar={() => dispatch(resetChangePasswordStatus())}
        snackbarSeverity={ALERT_SUCCESS}
      >
        Thay đổi mật khẩu thành công
      </CustomSnackbar>

      <CustomSnackbar
        openSnackbar={customerChangePasswordStatus === FETCH_FAILED}
        handleCloseSnackbar={() => dispatch(resetChangePasswordStatus())}
        snackbarSeverity={ALERT_ERROR}
      >
        Thay đổi mật khẩu thất bại
      </CustomSnackbar>
    </div>
  );
};

export default ChangePassword;
