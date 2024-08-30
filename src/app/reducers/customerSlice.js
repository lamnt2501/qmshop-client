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

export const customerSlice = createSlice({
  name: baseName,

  // các giá trị ban đầu
  initialState: {
    name: "",
    email: "",
    phone: "",
    addresses: [],

    addressStatus: FETCH_IDLE,
    status: FETCH_IDLE,
    error: null,
  },
  reducers: {},

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
      });
  },
});

// đẩy các dữ liệu ra ngoài
export const selectCustomerName = (state) => state.customer.name;
export const selectCustomerPhone = (state) => state.customer.phone;
export const selectCustomerEmail = (state) => state.customer.email;
export const selectCustomerAddresses = (state) => state.customer.addresses;

export const selectCustomerStatus = (state) => state.customer.status;
export const selectCustomerAddressStatus = (state) => state.customer.addressStatus;
export const selectCustomerError = (state) => state.customer.error;

export default customerSlice.reducer;
