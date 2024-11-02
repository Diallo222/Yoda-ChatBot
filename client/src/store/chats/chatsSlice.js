import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const createChat = createAsyncThunk(
  "chats/createChat",
  async (payload, { rejectWithValue }) => {
    const { userId, text } = payload;
    try {
      const response = await axiosInstance.post("/api/chats/createChat", {
        userId: userId,
        text: text,
      });
      return response.data;
    } catch (err) {
      const status = err.response?.status || err?.message;
      return rejectWithValue(status);
    }
  }
);

export const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createChat.pending, (state) => {
        state.loading = true;
      })
      .addCase(createChat.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(createChat.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default chatsSlice.reducer;
