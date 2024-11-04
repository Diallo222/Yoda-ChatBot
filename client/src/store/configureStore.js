import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import { thunk } from "redux-thunk";
import sidebarReducer from "./sideBarSlice";
import chatsReducer from "./chats/chatsSlice";
import authReducer from "./auth/authSlice";

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  chats: chatsReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
