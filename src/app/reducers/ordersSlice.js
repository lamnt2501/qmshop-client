import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ordersApi } from "../../Api";
import {
  COD,
  FETCH_FAILED,
  FETCH_IDLE,
  FETCH_LOADING,
  FETCH_SUCCEEDED,
} from "../../config";

// tên reducers
const baseName = "orders";

export const fetchOrders = createAsyncThunk(
  `${baseName}/fetchOrders`,
  async () => {
    const response = await ordersApi.getAll();
    return response;
  }
);

export const fetchOrderById = createAsyncThunk(
  `${baseName}/fetchOrderById`,
  async (orderId) => {
    const response = await ordersApi.get(orderId);
    return response;
  }
);

export const ordersSlice = createSlice({
  name: baseName,

  // các giá trị ban đầu
  initialState: {
    listOrder: [],
    order: {},
    status: FETCH_IDLE,
    error: null,
  },

  reducers: {
    resetOrders: (state) => {
      state.listOrder = [];

      state.status = FETCH_IDLE;
      state.error = null;
    },
  },

  // xử lý các action được tạo bởi createAsyncThunk
  // hoặc các action khác không được định nghĩa trong phần reducers của slice.
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = FETCH_LOADING;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = FETCH_SUCCEEDED;
        state.listOrder = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = FETCH_FAILED;
        state.error = action.error.message;
      })
      .addCase(fetchOrderById.pending, (state) => {
        state.status = FETCH_LOADING;
      })
      .addCase(fetchOrderById.fulfilled, (state, action) => {
        state.status = FETCH_SUCCEEDED;
        state.order = action.payload;
      })
      .addCase(fetchOrderById.rejected, (state, action) => {
        state.status = FETCH_FAILED;
        state.error = action.error.message;
      });
  },
});

export const { resetOrders } = ordersSlice.actions;

// đẩy các dữ liệu ra ngoài
export const selectListOrder = (state) => state.orders.listOrder;
export const selectOrderItem = (state) => state.orders.order;
export const selectOrderStatus = (state) => state.orders.status;
export const selectOrdersError = (state) => state.orders.error;

export default ordersSlice.reducer;
