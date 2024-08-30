import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productsApi } from "../../Api";
import {
  FETCH_IDLE,
  FETCH_LOADING,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
} from "../../config";

// tên reducers
const baseName = "productDetail";

// Async thunks để gọi API
export const fetchProduct = createAsyncThunk(
  `${baseName}/fetchProduct`,
  async (query) => {
    const response = await productsApi.get(query);
    return response;
  }
);

export const productDetailSlice = createSlice({
  name: baseName,

  // các giá trị ban đầu
  initialState: {
    productDetail: {},
    selectorOption: {},
    selectorColor: "",
    selectorSize: "",
    status: FETCH_IDLE,
    error: null,
  },
  reducers: {
    setSelectorOption: (state, action) => {
      state.selectorOption = action.payload;
    },
    setSelectorColor: (state, action) => {
      state.selectorColor = action.payload;
    },
    setSelectorSize: (state, action) => {
      state.selectorSize = action.payload;
    },
    resetProduct: (state) => {
      state.productDetail = {};
      state.selectorOption = {};
      state.selectorColor = "";
      state.selectorSize = "";
      state.error = null;
      state.status = FETCH_IDLE;
    },
  },

  // xử lý các action được tạo bởi createAsyncThunk
  // hoặc các action khác không được định nghĩa trong phần reducers của slice.
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = FETCH_LOADING;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = FETCH_SUCCEEDED;
        state.productDetail = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = FETCH_FAILED;
        state.error = action.error.message;
      });
  },
});

export const {
  resetProduct,
  setSelectorOption,
  setSelectorColor,
  setSelectorSize,
} = productDetailSlice.actions;

// đẩy các dữ liệu ra ngoài
export const selectProductItem = (state) => state.productDetail.productDetail;
export const selectorOption = (state) => state.productDetail.selectorOption;
export const selectorColor = (state) => state.productDetail.selectorColor;
export const selectorSize = (state) => state.productDetail.selectorSize;
export const selectProductStatus = (state) => state.productDetail.status;
export const selectProductError = (state) => state.productDetail.error;

export default productDetailSlice.reducer;
