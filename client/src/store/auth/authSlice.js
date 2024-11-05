import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config";

const initialState = {
  user: [],
  loading: false,
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    const { email, password } = payload;
    try {
      const response = await axiosInstance.post("/api/auth/login", {
        email: email,
        password: password,
      });
      return response.data;
    } catch (err) {
      const status = err.response?.status || err?.message;
      return rejectWithValue(status);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (payload, { rejectWithValue }) => {
    const { username, email, password } = payload;
    try {
      const response = await axiosInstance.post("/api/auth/register", {
        username: username,
        email: email,
        password: password,
      });
      return response.data;
    } catch (err) {
      const status = err.response?.status || err?.message;
      return rejectWithValue(status);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logOut",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/api/auth/logout");
      return response.data;
    } catch (err) {
      const status = err.response?.status || err?.message;
      return rejectWithValue(status);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(logOut.pending, (state) => {
        state.loading = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = [];
        state.loading = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default authSlice.reducer;
