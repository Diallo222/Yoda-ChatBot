import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sideBarSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});
