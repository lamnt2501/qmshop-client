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

export const addNewCustomerAddresses = createAsyncThunk(
  `${baseName}/addNewCustomerAddresses`,
  async (newAddress) => {
    const response = await customerAddressesApi.addNewAddress(newAddress);
    return response;
  }
);

export const updateCustomerAddresses = createAsyncThunk(
  `${baseName}/updateCustomerAddresses`,
  async ({ id, newAddress }) => {
    const response = await customerAddressesApi.updateAddress(id, newAddress);
    return response;
  }
);

export const deleteCustomerAddresses = createAsyncThunk(
  `${baseName}/deleteCustomerAddresses`,
  async (id) => {
    const response = await customerApi.deleteAddress(id);
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

export const updateAvatar = createAsyncThunk(
  `${baseName}/updateAvatar`,
  async (newAvatar) => {
    const response = await customerApi.updateAvatar(newAvatar);
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
    infoStatus: FETCH_IDLE,
    updateStatus: FETCH_IDLE,
    addAddressStatus: FETCH_IDLE,
    updateAddressStatus: FETCH_IDLE,
    changePasswordStatus: FETCH_IDLE,
    updateAvatarStatus: FETCH_IDLE,
    deleteAddressStatus: FETCH_IDLE,

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
    resetUpdateAvatarStatus: (state) => {
      state.updateAvatarStatus = FETCH_IDLE;
    },
  },

  // xử lý các action được tạo bởi createAsyncThunk
  // hoặc các action khác không được định nghĩa trong phần reducers của slice.
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomerInfomations.pending, (state) => {
        state.infoStatus = FETCH_LOADING;
      })
      .addCase(fetchCustomerInfomations.fulfilled, (state, action) => {
        state.infoStatus = FETCH_SUCCEEDED;
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.phone = action.payload.phone;
        state.birthday = action.payload.birthday;
        state.avtUrl = action.payload.avtUrl;
        state.gender = action.payload.gender;
      })
      .addCase(fetchCustomerInfomations.rejected, (state, action) => {
        state.infoStatus = FETCH_FAILED;
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

      .addCase(addNewCustomerAddresses.pending, (state) => {
        state.addAddressStatus = FETCH_LOADING;
      })
      .addCase(addNewCustomerAddresses.fulfilled, (state, action) => {
        state.addAddressStatus = FETCH_SUCCEEDED;
        state.addresses.push(action.payload);
      })
      .addCase(addNewCustomerAddresses.rejected, (state, action) => {
        state.addAddressStatus = FETCH_FAILED;
        state.error = action.error.message;
      })

      .addCase(updateCustomerAddresses.pending, (state) => {
        state.updateAddressStatus = FETCH_LOADING;
      })
      .addCase(updateCustomerAddresses.fulfilled, (state, action) => {
        state.updateAddressStatus = FETCH_SUCCEEDED;
        const index = state.addresses.findIndex(
          (address) => address.id === action.payload.id
        );

        if (index !== -1) {
          // Tạo một mảng mới với phần tử được thay thế
          state.addresses = [
            ...state.addresses.slice(0, index),
            action.payload,
            ...state.addresses.slice(index + 1),
          ];
        }
      })
      .addCase(updateCustomerAddresses.rejected, (state, action) => {
        state.updateAddressStatus = FETCH_FAILED;
        state.error = action.error.message;
      })

      .addCase(updateAvatar.pending, (state) => {
        state.updateAvatarStatus = FETCH_LOADING;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.updateAvatarStatus = FETCH_SUCCEEDED;
        state.avtUrl = action.payload;
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        state.updateAvatarStatus = FETCH_FAILED;
        state.error = action.error;
      })

      .addCase(deleteCustomerAddresses.pending, (state) => {
        state.deleteAddressStatus = FETCH_LOADING;
      })
      .addCase(deleteCustomerAddresses.fulfilled, (state, action) => {
        state.deleteAddressStatus = FETCH_SUCCEEDED;
        console.log(action.payload);

        // state.avtUrl = action.payload;
      })
      .addCase(deleteCustomerAddresses.rejected, (state, action) => {
        state.deleteAddressStatus = FETCH_FAILED;
        state.error = action.error;
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

export const {
  resetUpdateStatus,
  resetChangePasswordStatus,
  resetUpdateAvatarStatus,
} = customerSlice.actions;

// đẩy các dữ liệu ra ngoài
export const selectCustomerName = (state) => state.customer.name;
export const selectCustomerPhone = (state) => state.customer.phone;
export const selectCustomerEmail = (state) => state.customer.email;
export const selectCustomerGender = (state) => state.customer.gender;
export const selectCustomerBirthday = (state) => state.customer.birthday;
export const selectCustomerAvata = (state) => state.customer.avtUrl;

export const selectCustomerAddresses = (state) => state.customer.addresses;

export const selectCustomerStatus = (state) => state.customer.infoStatus;
export const selectCustomerAddressStatus = (state) =>
  state.customer.addressStatus;

export const selectCustomerAddNewAddressStatus = (state) =>
  state.customer.addAddressStatus;

export const selectCustomerUpdateAddressStatus = (state) =>
  state.customer.updateAddressStatus;

export const selectCustomerDeleteAddressStatus = (state) =>
  state.customer.deleteAddressStatus;

export const selectCustomerError = (state) => state.customer.error;

export const selectCustomerUpdateStatus = (state) =>
  state.customer.updateStatus;
export const selectCustomerUpdateResult = (state) =>
  state.customer.updateResult;

export const selectCustomerChangePasswordStatus = (state) =>
  state.customer.changePasswordStatus;
export const selectCustomerChangePasswordResult = (state) =>
  state.customer.changePasswordResult;
export const selectCustomerUpdateAvatar = (state) =>
  state.customer.updateAvatarStatus;

export default customerSlice.reducer;
