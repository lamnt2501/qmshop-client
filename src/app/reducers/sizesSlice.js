import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sizesApi } from "../../Api";
import {
  FETCH_IDLE,
  FETCH_LOADING,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
} from "../../config";

// tên reducers
const baseName = "sizes";

// Async thunks để gọi API
export const fetchSizes = createAsyncThunk(
  `${baseName}/fetchColors`,
  async (params) => {
    const response = await sizesApi.getAll(params);
    return response;
  }
);

export const sizesSlice = createSlice({
  name: baseName,

  // các giá trị ban đầu
  initialState: {
    sizes: [],
    status: FETCH_IDLE,
  },
  reducers: {},
  // xử lý các action được tạo bởi createAsyncThunk
  // hoặc các action khác không được định nghĩa trong phần reducers của slice.
  extraReducers: (builder) => {
    builder
      .addCase(fetchSizes.pending, (state) => {
        state.status = FETCH_LOADING;
      })
      .addCase(fetchSizes.fulfilled, (state, action) => {
        state.status = FETCH_SUCCEEDED;
        state.sizes = action.payload;
      })
      .addCase(fetchSizes.rejected, (state, action) => {
        state.status = FETCH_FAILED;
        state.error = action.error.message;
      });
  },
});

// đẩy các dữ liệu ra ngoài
export const selectSizes = (state) => state.sizes.sizes;

export default sizesSlice.reducer;
