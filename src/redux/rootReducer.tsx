import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/auth-slice";
import postsReducer from "./posts/posts-slice";
import modalReducer from "./modal/modal-slice";

export const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
  modal: modalReducer,
});
