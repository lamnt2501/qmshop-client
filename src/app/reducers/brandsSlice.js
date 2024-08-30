import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { brandsApi } from "../../Api";
import {
  FETCH_IDLE,
  FETCH_LOADING,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
} from "../../config";

// tên reducers
const baseName = "brands";

// Async thunks để gọi API
export const fetchBrands = createAsyncThunk(
  `${baseName}/fetchBrands`,
  async (params) => {
    const response = await brandsApi.getAll(params);
    return response;
  }
);

export const brandsSlice = createSlice({
  name: baseName,

  // các giá trị ban đầu
  initialState: {
    brands: [],
    status: FETCH_IDLE,
    error: null,
  },
  reducers: {},

  // xử lý các action được tạo bởi createAsyncThunk
  // hoặc các action khác không được định nghĩa trong phần reducers của slice.
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.status = FETCH_LOADING;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.status = FETCH_SUCCEEDED;
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.status = FETCH_FAILED;
        state.error = action.error.message;
      });
  },
});

// đẩy các dữ liệu ra ngoài
export const selectBrandsItem = (state) => state.brands.brands;
export const selectBrandsStatus = (state) => state.brands.status;
export const selectBrandsError = (state) => state.brands.error;

export default brandsSlice.reducer;
