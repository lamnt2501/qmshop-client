import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ordersApi } from "../../Api";
import {
  COD,
  FETCH_FAILED,
  FETCH_IDLE,
  FETCH_LOADING,
  FETCH_SUCCEEDED,
} from "../../config";
import { productNameConnection } from "../../utils/productNameConnection";

// tên reducers
const baseName = "checkout";

export const addOrders = createAsyncThunk(
  `${baseName}/addOrders`,

  async (checkout) => {
    let newCheckoutItem = [];
    let response;
    if (Array.isArray(checkout.items) && checkout.items.length > 0) {
      newCheckoutItem = checkout.items.map(({ sku, quantity }) => {
        return { sku: sku, quantity: quantity };
      });
      checkout.items = newCheckoutItem;
    }

    try {
      response = await ordersApi.add(checkout);
    } catch (error) {
      console.log(error);
    }

    return response;
  }
);

export const checkoutSlice = createSlice({
  name: baseName,

  // các giá trị ban đầu
  initialState: {
    items: [],
    addressId: 0,
    address: {
      city: "",
      district: "",
      ward: "",
      specificAddress: "",
    },

    paymentMethod: {
      name: COD,
      provider: null,
    },
    phoneNumber: "",
    fullName: "",
    voucher: null,

    status: FETCH_IDLE,
    error: null,

    result: {
      Message: "",
      PaymentUrl: "",
      StatusCode: "",
    },
  },

  reducers: {
    setCheckoutItems: (state, action) => {
      const newItem = action.payload.map(
        ({ sku, imageUrl, name, quantity, price, color, size }) => {
          return {
            sku,
            imageUrl,
            name: productNameConnection(name, color, size),
            quantity,
            price,
          };
        }
      );
      state.items = newItem;
    },
    setAddressId: (state, action) => {
      state.addressId = action.payload;
    },
    setCheckoutAddress: (state, action) => {
      state.address = action.payload;
    },
    setPaymentMethodName: (state, action) => {
      state.paymentMethod.name = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setFullName: (state, action) => {
      state.fullName = action.payload;
    },
    setCheckoutCity: (state, action) => {
      state.address.city = action.payload;
    },
    setCheckoutDistrict: (state, action) => {
      state.address.district = action.payload;
    },
    setCheckoutWard: (state, action) => {
      state.address.ward = action.payload;
    },
    setCheckoutSpecificAddress: (state, action) => {
      state.address.specificAddress = action.payload;
    },

    handleMutateCheckoutItems: (state, action) => {
      if (state.items.some((item) => item.sku === action.payload.sku)) {
        state.items = state.items.filter(
          (item) => item.sku !== action.payload.sku
        );
      } else {
        state.items.push(action.payload);
      }
    },
    setCheckoutQuantity: (state, action) => {
      if (state.items.some((item) => item.sku === action.payload.sku)) {
        let newItems = {};
        if (action.payload.quantity === 0) {
          newItems = state.items.filter(
            (item) => item.sku !== action.payload.sku
          );
        } else {
          newItems = state.items.map((item) => {
            if (item.sku === action.payload.sku)
              item.quantity = action.payload.quantity;
            return item;
          });
        }

        state.items = newItems;
      }
    },
    removeCheckoutItem: (state, action) => {
      // Xóa nhiều
      if (Array.isArray(action.payload)) {
        const newCheckoutItem = state.items.filter((item) =>
          action.payload.some((checkoutItem) => item.sku !== checkoutItem.sku)
        );
        state.items = newCheckoutItem;
        return;
      }

      // Xóa một
      if (state.items.some((item) => item.sku === action.payload)) {
        const newCheckoutItem = state.items.filter(
          (item) => item.sku !== action.payload
        );
        state.items = newCheckoutItem;
      }
    },
    resetCheckoutItem: (state) => {
      state.items = [];
    },
    resetCheckout: (state) => {
      state.items = [];
      state.address = {
        city: "",
        district: "",
        ward: "",
        specificAddress: "",
      };
      state.paymentMethod = {
        name: COD,
        provider: null,
      };

      state.addressId = 0;
      state.phoneNumber = "";
      state.fullName = "";
      state.result = {
        Message: "",
        PaymentUrl: "",
        StatusCode: "",
      };

      state.status = FETCH_IDLE;
      state.voucher = null;
      state.error = null;
    },
  },

  // xử lý các action được tạo bởi createAsyncThunk
  // hoặc các action khác không được định nghĩa trong phần reducers của slice.
  extraReducers: (builder) => {
    builder
      .addCase(addOrders.pending, (state) => {
        state.status = FETCH_LOADING;
      })
      .addCase(addOrders.fulfilled, (state, action) => {
        state.status = FETCH_SUCCEEDED;
        state.result = action.payload;
      })
      .addCase(addOrders.rejected, (state, action) => {
        state.status = FETCH_FAILED;
        state.error = action.error.message;
      });
  },
});

export const {
  setCheckoutItems,
  setAddressId,
  setCheckoutAddress,
  setPaymentMethodName,
  handleMutateCheckoutItems,
  setCheckoutQuantity,
  removeCheckoutItem,
  setPhoneNumber,
  setCheckoutCity,
  setCheckoutDistrict,
  setCheckoutWard,
  setCheckoutSpecificAddress,
  setFullName,
  resetCheckoutItem,
  resetCheckout,
} = checkoutSlice.actions;

// đẩy các dữ liệu ra ngoài
export const selectCheckoutItems = (state) => state.checkout.items;
export const selectCheckoutAddress = (state) => state.checkout.address;
export const selectCheckoutAddressId = (state) => state.checkout.addressId;
export const selectCheckoutPhoneNumber = (state) => state.checkout.phoneNumber;
export const selectCheckoutFullName = (state) => state.checkout.fullName;
export const selectCheckoutPaymentMethod = (state) =>
  state.checkout.paymentMethod;
export const selectCheckoutResult = (state) => state.checkout.result;

export const selectCheckoutVoucher = (state) => state.checkout.voucher;
export const selectCheckoutStatus = (state) => state.checkout.status;
export const selectCheckoutError = (state) => state.checkout.error;

export default checkoutSlice.reducer;
