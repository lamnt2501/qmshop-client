import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../../Api";
import Cookies from "js-cookie";
import { getTimeByToken } from "../../utils/getTimeByToken";
import {
  FETCH_IDLE,
  FETCH_LOADING,
  FETCH_FAILED,
  FETCH_SUCCEEDED,
} from "../../config";

// tên reducers
const baseName = "auth";

export const login = createAsyncThunk(
  `${baseName}/login`,
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await authApi.login(credentials);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const register = createAsyncThunk(
  `${baseName}/register`,
  async (infomation, { rejectWithValue }) => {
    try {
      const response = await authApi.register(infomation);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: baseName,
  initialState: {
    token: Cookies.get("token") ?? null,

    register: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      passwordComfirmation: "",
    },
    status: FETCH_IDLE,
    error: null,
  },
  reducers: {
    resetAuthState: (state) => {
      state.register = {
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        passwordComfirmation: "",
      };
      state.status = FETCH_IDLE;
      state.error = null;
    },
    resetAuthStatus: (state) => {
      state.status = FETCH_IDLE;
      state.error = null;
    },
    logout: (state) => {
      state.token = null;
      state.error = null;
      state.status = FETCH_IDLE;
      Cookies.remove("token");
    },
    setName: (state, action) => {
      state.register.name = action.payload;
    },
    setEmail: (state, action) => {
      state.register.email = action.payload;
    },
    setPhone: (state, action) => {
      state.register.phoneNumber = action.payload;
    },
    setPassword: (state, action) => {
      state.register.password = action.payload;
    },
    setPasswordComfirmation: (state, action) => {
      state.register.passwordComfirmation = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = FETCH_LOADING;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = FETCH_SUCCEEDED;
        state.token = action.payload.token;
        Cookies.set("token", action.payload.token, {
          expires: getTimeByToken(action.payload.token),
        });
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = FETCH_FAILED;
        state.error = action.payload;
      })

      .addCase(register.pending, (state) => {
        state.status = FETCH_LOADING;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = FETCH_SUCCEEDED;
        state.token = action.payload.token;
        Cookies.set(
          "token",
          action.payload.token,
          getTimeByToken(action.payload.token)
        );
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = FETCH_FAILED;
        state.error = action.payload;
      });
  },
});

export const {
  logout,
  setName,
  setEmail,
  setPhone,
  setPassword,
  resetAuthStatus,
  setPasswordComfirmation,
  resetAuthState,
} = authSlice.actions;

// đẩy các dữ liệu ra ngoài
export const selectAuthRegister = (state) => state.auth.register;
export const selectAuthToken = (state) => state.auth.token;
export const selectAuthStatus = (state) => state.auth.status;
export const selectAuthError = (state) => state.auth.error;

export default authSlice.reducer;
