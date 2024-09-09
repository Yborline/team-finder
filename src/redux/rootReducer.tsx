import { combineReducers } from "@reduxjs/toolkit";
import authREducer from "./auth/auth-slice";

export const rootReducer = combineReducers({
  auth: authREducer,
});
