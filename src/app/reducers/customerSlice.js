import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { customerAddressesApi, customerApi } from "../../Api";
import {
  FETCH_IDLE,
  FETCH_LOADING,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
} from "../../config";

// tên reducers
const baseName = "customer";

// Async thunks để gọi API
export const fetchCustomerInfomations = createAsyncThunk(
  `${baseName}/fetchCustomerInfomations`,
  async () => {
    const response = await customerApi.getInfomations();
    return response;
  }
);

export const fetchCustomerAddresses = createAsyncThunk(
  `${baseName}/fetchCustomerAddresses`,
  async () => {
    const response = await customerAddressesApi.getAddresses();
    return response;
  }
);

export const updateInfomations = createAsyncThunk(
  `${baseName}/updateInfomations`,
  async (newData) => {
    const response = await customerApi.updateInfomations(newData);
    return response;
  }
);

export const changePassword = createAsyncThunk(
  `${baseName}/changePassword`,
  async (newPassword) => {
    const response = await customerApi.changePassword(newPassword);
    return response;
  }
);

export const customerSlice = createSlice({
  name: baseName,

  // các giá trị ban đầu
  initialState: {
    name: "",
    email: "",
    phone: "",
    avtUrl: "",
    gender: "",
    birthday: "",

    addresses: [],

    updateResult: {},
    changePasswordResult: {},

    addressStatus: FETCH_IDLE,
    status: FETCH_IDLE,
    updateStatus: FETCH_IDLE,
    changePasswordStatus: FETCH_IDLE,

    error: null,
  },
  reducers: {
    resetUpdateStatus: (state) => {
      state.updateResult = {};
      state.updateStatus = FETCH_IDLE;
    },
    resetChangePasswordStatus: (state) => {
      state.changePasswordResult = {};
      state.changePasswordStatus = FETCH_IDLE;
    },
  },

  // xử lý các action được tạo bởi createAsyncThunk
  // hoặc các action khác không được định nghĩa trong phần reducers của slice.
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomerInfomations.pending, (state) => {
        state.status = FETCH_LOADING;
      })
      .addCase(fetchCustomerInfomations.fulfilled, (state, action) => {
        state.status = FETCH_SUCCEEDED;
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.phone = action.payload.phone;
        state.birthday = action.payload.birthday
        state.avtUrl = action.payload.avtUrl
        state.gender = action.payload.gender
      })
      .addCase(fetchCustomerInfomations.rejected, (state, action) => {
        state.status = FETCH_FAILED;
        state.error = action.error.message;
      })
      .addCase(fetchCustomerAddresses.pending, (state) => {
        state.addressStatus = FETCH_LOADING;
      })
      .addCase(fetchCustomerAddresses.fulfilled, (state, action) => {
        state.addressStatus = FETCH_SUCCEEDED;
        state.addresses = action.payload;
      })
      .addCase(fetchCustomerAddresses.rejected, (state, action) => {
        state.addressStatus = FETCH_FAILED;
        state.error = action.error.message;
      })
      .addCase(updateInfomations.pending, (state) => {
        state.updateStatus = FETCH_LOADING;
      })
      .addCase(updateInfomations.fulfilled, (state, action) => {
        state.updateStatus = FETCH_SUCCEEDED;
        state.updateResult = action.payload;
      })
      .addCase(updateInfomations.rejected, (state, action) => {
        state.updateStatus = FETCH_FAILED;
        state.error = action.error.message;
      })
      .addCase(changePassword.pending, (state) => {
        state.changePasswordStatus = FETCH_LOADING;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.changePasswordStatus = FETCH_SUCCEEDED;
        state.changePasswordResult = action.payload;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.changePasswordStatus = FETCH_FAILED;
        state.error = action.error;
      });
  },
});

export const { resetUpdateStatus, resetChangePasswordStatus } =
  customerSlice.actions;

// đẩy các dữ liệu ra ngoài
export const selectCustomerName = (state) => state.customer.name;
export const selectCustomerPhone = (state) => state.customer.phone;
export const selectCustomerEmail = (state) => state.customer.email;
export const selectCustomerGender = (state) => state.customer.gender;
export const selectCustomerBirthday = (state) => state.customer.birthday;
export const selectCustomerAvata = (state) => state.customer.avtUrl;


export const selectCustomerAddresses = (state) => state.customer.addresses;

export const selectCustomerStatus = (state) => state.customer.status;
export const selectCustomerAddressStatus = (state) =>
  state.customer.addressStatus;
export const selectCustomerError = (state) => state.customer.error;

export const selectCustomerUpdateStatus = (state) =>
  state.customer.updateStatus;
export const selectCustomerUpdateResult = (state) =>
  state.customer.updateResult;

export const selectCustomerChangePasswordStatus = (state) =>
  state.customer.changePasswordStatus;
export const selectCustomerChangePasswordResult = (state) =>
  state.customer.changePasswordResult;

export default customerSlice.reducer;
