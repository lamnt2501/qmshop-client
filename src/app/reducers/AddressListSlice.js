import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addressListApi } from "../../Api";
import {
  FETCH_IDLE,
  FETCH_LOADING,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
} from "../../config";

// tên reducers
const baseName = "addressList";

export const fetchCity = createAsyncThunk(
  `${baseName}/fetchCity`,
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await addressListApi.getAllCity();
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchDistrict = createAsyncThunk(
  `${baseName}/fetchDistrict`,
  async (cityId, { rejectWithValue }) => {
    try {
      const { data } = await addressListApi.getAllDistrictByCityId(cityId);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchWard = createAsyncThunk(
  `${baseName}/fetchWard`,
  async (districtId, { rejectWithValue }) => {
    try {
      const { data } = await addressListApi.getAllWardByDistrictId(districtId);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addressListSlice = createSlice({
  name: baseName,

  initialState: {
    listCity: [],
    listDistrict: [],
    listWard: [],

    selectCity: "",
    cityName: "",

    selectDistrict: "",
    districtName: "",

    selectWard: "",
    wardName: "",

    specificAddress: "",

    status: FETCH_IDLE,
    error: null,
  },

  // Actions
  reducers: {
    setSelectCity: (state, action) => {
      state.selectCity = action.payload;
    },
    setSelectDistrict: (state, action) => {
      state.selectDistrict = action.payload;
    },
    setSelectWard: (state, action) => {
      state.selectWard = action.payload;
    },

    setCityName: (state, action) => {
      state.cityName = action.payload;
    },
    setDistrictName: (state, action) => {
      state.districtName = action.payload;
    },
    setWardName: (state, action) => {
      state.wardName = action.payload;
    },
    setSpecificAddress: (state, action) => {
      state.specificAddress = action.payload;
    },

    resetAddressList: (state) => {
      state.listCity = [];
      state.listDistrict = [];
      state.listWard = [];

      state.selectCity = "";
      state.cityName = "";

      state.selectDistrict = "";
      state.districtName = "";

      state.selectWard = "";
      state.wardName = "";

      state.specificAddress = "";

      state.status = FETCH_IDLE;
      state.error = null;
    },
    resetListWard: (state) => {
      state.listWard = [];
    },
    resetAddressStatus: (state) => {
      state.status = FETCH_IDLE;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCity.pending, (state) => {
        state.status = FETCH_LOADING;
      })
      .addCase(fetchCity.fulfilled, (state, action) => {
        state.status = FETCH_SUCCEEDED;
        state.listCity = action.payload;
      })
      .addCase(fetchCity.rejected, (state, action) => {
        state.status = FETCH_FAILED;
        state.error = action.error.message;
      })

      .addCase(fetchDistrict.pending, (state) => {
        state.status = FETCH_LOADING;
      })
      .addCase(fetchDistrict.fulfilled, (state, action) => {
        state.status = FETCH_SUCCEEDED;
        state.listDistrict = action.payload;
      })
      .addCase(fetchDistrict.rejected, (state, action) => {
        state.status = FETCH_FAILED;
        state.error = action.error.message;
      })

      .addCase(fetchWard.pending, (state) => {
        state.status = FETCH_LOADING;
      })
      .addCase(fetchWard.fulfilled, (state, action) => {
        state.status = FETCH_SUCCEEDED;
        state.listWard = action.payload;
      })
      .addCase(fetchWard.rejected, (state, action) => {
        state.status = FETCH_FAILED;
        state.error = action.error.message;
      });
  },
});

export const {
  resetAddressList,
  resetAddressStatus,
  setSelectCity,
  setSelectDistrict,
  setSelectWard,
  resetListWard,
  setCityName,
  setDistrictName,
  setWardName,
  setSpecificAddress,
} = addressListSlice.actions;

export const selectAddressListCity = (state) => state.addressList.listCity;
export const selectAddressListDistrict = (state) =>
  state.addressList.listDistrict;
export const selectAddressListWard = (state) => state.addressList.listWard;

export const selectAddressCity = (state) => state.addressList.selectCity;
export const selectAddressDistrict = (state) =>
  state.addressList.selectDistrict;
export const selectAddressWard = (state) => state.addressList.selectWard;

export const selectAddressCityName = (state) => state.addressList.cityName;
export const selectAddressDistrictName = (state) =>
  state.addressList.districtName;
export const selectAddressWardName = (state) => state.addressList.wardName;
export const selectAddressSpecificAddress = (state) =>
  state.addressList.specificAddress;

export const selectAddressListStatus = (state) => state.addressList.status;
export const selectAddressListError = (state) => state.addressList.error;

export default addressListSlice.reducer;
