import { IRootState } from "@interfaces/redux";

export const getUserName = (state: IRootState) => state.auth.user.name;
export const getLoggedIn = (state: IRootState) => state.auth.isLoggedIn;
export const getLoading = (state: IRootState) => state.auth.isLoading;
export const getUser = (state: IRootState) => state.auth.user;
