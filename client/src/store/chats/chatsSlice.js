import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config";

const initialState = {
  data: [],
  singleChat: null,
  loading: false,
  error: null,
};

// Create Chat
export const createChat = createAsyncThunk(
  "chats/createChat",
  async (payload, { rejectWithValue }) => {
    const { userId, text } = payload;
    try {
      const response = await axiosInstance.post("/api/chats/createChat", {
        userId,
        text,
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Fetch All Chats by User
export const getAllUserChats = createAsyncThunk(
  "chats/getAllUserChats",
  async (payload, { rejectWithValue }) => {
    const { userId } = payload;
    try {
      const response = await axiosInstance.get(
        `/api/chats/getAllChats/${userId}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Fetch Single Chat
export const getSingleChatById = createAsyncThunk(
  "chats/getSingleChatById",
  async (payload, { rejectWithValue }) => {
    const { userId, chatId } = payload;
    try {
      const response = await axiosInstance.get(
        `/api/chats/getSingleChat/${userId}/${chatId}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create Chat
      .addCase(createChat.pending, (state) => {
        state.loading = true;
      })
      .addCase(createChat.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.loading = false;
      })
      .addCase(createChat.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      // Fetch All Chats by User
      .addCase(getAllUserChats.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUserChats.fulfilled, (state, action) => {
        state.data = action.payload.chats;
        state.loading = false;
      })
      .addCase(getAllUserChats.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      // Fetch Single Chat by ID
      .addCase(getSingleChatById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleChatById.fulfilled, (state, action) => {
        state.singleChat = action.payload.chat;
        state.loading = false;
      })
      .addCase(getSingleChatById.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default chatsSlice.reducer;
