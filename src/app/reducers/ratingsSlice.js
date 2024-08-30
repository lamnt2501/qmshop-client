import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ratingsApi } from "../../Api";
import {
  FETCH_IDLE,
  FETCH_LOADING,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
} from "../../config";

// tên reducers
const baseName = "ratings";

// Async thunks để gọi API
export const fetchRatings = createAsyncThunk(
  `${baseName}/fetchRatings`,
  async (productId) => {
    const response = await ratingsApi.getAll(productId);
    return response;
  }
);

export const addRatings = createAsyncThunk(
  `${baseName}/fetchRatings`,
  async (rating) => {
    const response = await ratingsApi.add(rating);
    return response;
  }
);

export const ratingsSlice = createSlice({
  name: baseName,

  // các giá trị ban đầu
  initialState: {
    ratings: [],
    status: FETCH_IDLE,
    error: null,
  },
  reducers: {},

  // xử lý các action được tạo bởi createAsyncThunk
  // hoặc các action khác không được định nghĩa trong phần reducers của slice.
  extraReducers: (builder) => {
    builder
      .addCase(fetchRatings.pending, (state) => {
        state.status = FETCH_LOADING;
      })
      .addCase(fetchRatings.fulfilled, (state, action) => {
        state.status = FETCH_SUCCEEDED;
        state.ratings = action.payload;
      })
      .addCase(fetchRatings.rejected, (state, action) => {
        state.status = FETCH_FAILED;
        state.error = action.error.message;
      });
  },
});

// đẩy các dữ liệu ra ngoài
export const selectRatings = (state) => state.ratings.ratings;
export const selectRatingsStatus = (state) => state.ratings.status;
export const selectRatingsError = (state) => state.ratings.error;

export default ratingsSlice.reducer;
