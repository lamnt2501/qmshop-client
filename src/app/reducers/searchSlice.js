import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productsApi } from "../../Api";
import {
  FETCH_IDLE,
  FETCH_LOADING,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
} from "../../config";

// tên reducers
const baseName = "search";

// Async thunks để gọi API
export const searchProductsByName = createAsyncThunk(
  `${baseName}/searchProductsByName`,
  async (name) => {
    const response = await productsApi.getAll({ name });
    return response;
  }
);

export const productsSlice = createSlice({
  name: baseName,

  // các giá trị ban đầu
  initialState: {
    products: [],
    status: FETCH_IDLE,
    error: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    resetProducts: (state) => {
      state.products = [];
      state.status = FETCH_IDLE;
      state.error = null;
    },
  },

  // xử lý các action được tạo bởi createAsyncThunk
  // hoặc các action khác không được định nghĩa trong phần reducers của slice.
  extraReducers: (builder) => {
    builder
      .addCase(searchProductsByName.pending, (state) => {
        state.status = FETCH_LOADING;
      })
      .addCase(searchProductsByName.fulfilled, (state, action) => {
        state.status = FETCH_SUCCEEDED;
        state.products = action.payload;
      })
      .addCase(searchProductsByName.rejected, (state, action) => {
        state.status = FETCH_FAILED;
        state.error = action.error.message;
      });
  },
});

export const { resetProducts, setProducts } = productsSlice.actions;

// đẩy các dữ liệu ra ngoài
export const selectSearchResult = (state) => state.search.products;
export const selectSearchStatus = (state) => state.search.status;
export const selectSearchError = (state) => state.search.error;

export default productsSlice.reducer;
