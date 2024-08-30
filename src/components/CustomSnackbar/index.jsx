import { Alert, Snackbar } from "@mui/material";

const CustomSnackbar = (prop) => {
  const {
    openSnackbar,
    handleCloseSnackbar,
    snackbarSeverity,
    children,
    duration = 5000,
  } = prop;
  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={duration}
      onClose={handleCloseSnackbar}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
        {children}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
