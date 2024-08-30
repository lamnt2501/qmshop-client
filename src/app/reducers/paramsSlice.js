import { createSlice } from "@reduxjs/toolkit";


// tên reducers
const baseName = "params";

export const paramsSlice = createSlice({
  name: baseName,

  // các giá trị ban đầu
  initialState: {
    colors: [],
    sizes: [],
    price: [0, 5000000],
    limitDefoult: 20,
    page: 1,
    // sort
    sortList: [
      // { key: "FEATURED", value: "Đặc sắc" },
      // { key: "BEST_SELLING", value: "Bán chạy nhất" },
      { key: "A_Z", value: "Từ A-Z", sort: "name", order: "ASC" },
      { key: "Z_A", value: "Từ Z-A", sort: "name", order: "DESC" },
      // {
      //   key: "LOW_IN_HIGH",
      //   value: "Giá thấp đến cao",
      //   sort: "price",
      //   order: "ASC",
      // },
      // {
      //   key: "HIGH_IN_LOW",
      //   value: "Giá cao đến thấp",
      //   sort: "price",
      //   order: "DESC",
      // },
      {
        key: "OLD_TO_NEW",
        value: "Ngày mới đến cũ",
        sort: "created_at",
        order: "ASC",
      },
      {
        key: "NEW_TO_OLD",
        value: "Ngày cũ đến mới",
        sort: "created_at",
        order: "DESC",
      },
    ],
    presentValue: { key: "A_Z", value: "Từ A-Z", sort: "name", order: "ASC" },
  },
  reducers: {
    setParamsCategory: (state, action) => {
      state.category = action.payload;
    },
    resetParamsCategory: (state) => {
      state.category = {};
    },
    // thay thế cho cả add và remove
    handleFilterColors: (state, action) => {
      const result = state.colors.includes(action.payload);

      // nếu đã tồn tại màu đó trong bộ lọc thì sẽ xóa bỏ nó đi
      if (result) {
        const newArray = state.colors.filter((item) => item !== action.payload);
        state.colors = newArray;
      }
      // nếu không tồn tại màu đó trong bộ lọc, thì sẽ thêm vào
      else {
        state.colors.push(action.payload);
      }
    },

    setFilterPrice: (state, action) => {
      state.price = action.payload;
    },

    handleFilterSizes: (state, action) => {
      const result = state.sizes.includes(action.payload);

      // nếu đã tồn tại màu đó trong bộ lọc thì sẽ xóa bỏ nó đi
      if (result) {
        const newArray = state.sizes.filter((item) => item !== action.payload);
        state.sizes = newArray;
      }

      // nếu không tồn tại màu đó trong bộ lọc, thì sẽ thêm vào
      else {
        state.sizes.push(action.payload);
      }
    },
    setPresentValue: (state, action) => {
      state.presentValue = action.payload;
    },

    setPage: (state) => {
      state.page += 1;
    },

    resetParams: (state) => {
      state.colors = [];
      state.category = {};
      state.price = [0, 5000000];
      state.sizes = [];
      state.page = 1;
      state.presentValue = state.sortList[0];
    },
    resetParamsPage: (state) => {
      state.page = 1;
    },
  },
});

export const {
  setParamsCategory,
  resetParamsCategory,
  resetParams,
  handleFilterColors,
  setFilterPrice,
  setPresentValue,
  handleFilterSizes,
  setPage,
  resetParamsPage,
} = paramsSlice.actions;

// đẩy các dữ liệu ra ngoài
export const selectPage = (state) => state.params.page;
export const selectLimitDefoult = (state) => state.params.limitDefoult;

export const selectFiltersColors = (state) => state.params.colors;
export const selectFiltersPrice = (state) => state.params.price;
export const selectFiltersSizes = (state) => state.params.sizes;

export const sortList = (state) => state.params.sortList;
export const presentValue = (state) => state.params.presentValue;

export default paramsSlice.reducer;
