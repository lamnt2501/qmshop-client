import { Avatar, Button } from "@mui/material";
import { useState } from "react";
import { useOutletContext } from "react-router";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { resetUpdateAvatarStatus, selectCustomerUpdateAvatar, updateAvatar } from "../../../../../app/reducers";
import { CustomSnackbar } from "../../../../../components";
import { ALERT_ERROR, ALERT_SUCCESS, FETCH_FAILED, FETCH_SUCCEEDED } from "../../../../../config";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ChangeAvata = () => {
  const dispatch = useDispatch();
  const { customerAvata } = useOutletContext();

  const [newAvataUrl, setNewAvataUrl] = useState(customerAvata);

  const [file, setFile] = useState(null);

  const status = useSelector(selectCustomerUpdateAvatar)

  const handleUploadFile = (file) => {
    setFile(file);

    // Tạo URL tạm thời để hiển thị ảnh
    const filePreview = URL.createObjectURL(file);
    setNewAvataUrl(filePreview);
  };

  const handleSubmit = () => {
    if (!file) {
      alert("Vui lòng chọn file trước khi upload");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    dispatch(updateAvatar(formData));
  };

  return (
    <>
      <div className="grid grid-cols-5 md:grid-cols-12">
        <div className="col-span-5 bg-gray-200 p-8">
          <h1 className="text-3xl font-normal mb-4">Ảnh đại diện</h1>
        </div>
        <div className="col-span-5 md:col-span-7">
          <div className=" my-10">
            <form
              id="changeAvatar"
              className="grid grid-cols-1 px-10 md:px-32 gap-4"
            >
              <div className="justify-self-center">
                <Avatar
                  alt="avata"
                  src={newAvataUrl}
                  sx={{ width: 100, height: 100 }}
                />
              </div>
              <div className="flex justify-self-center">
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                >
                  Upload files
                  <VisuallyHiddenInput
                    type="file"
                    accept="image/*"
                    onChange={(event) =>
                      handleUploadFile(event.target.files[0])
                    }
                    multiple
                  />
                </Button>
              </div>
              <div className="flex justify-self-end">
                <Button
                  variant="outlined"
                  color="inherit"
                  disabled={!file}
                  onClick={() => handleSubmit()}
                >
                  Lưu thông tin
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <CustomSnackbar
        openSnackbar={
          status === FETCH_SUCCEEDED 
        }
        handleCloseSnackbar={() => dispatch(resetUpdateAvatarStatus())}
        snackbarSeverity={ALERT_SUCCESS}
      >
        Thông tin của bạn đã được thay đổi
      </CustomSnackbar>
      <CustomSnackbar
        openSnackbar={
          status === FETCH_FAILED
        }
        handleCloseSnackbar={() => dispatch(resetUpdateAvatarStatus())}
        snackbarSeverity={ALERT_ERROR}
      >
        File ảnh quá lớn hoặc đã có lỗi xẩy ra
      </CustomSnackbar>
    </>
  );
};

export default ChangeAvata;
