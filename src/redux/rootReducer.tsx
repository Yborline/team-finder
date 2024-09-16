import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/auth-slice";
import posts from "./posts/posts-operations";

export const rootReducer = combineReducers({
  auth: authReducer,
  posts: posts,
});
