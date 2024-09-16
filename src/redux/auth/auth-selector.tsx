import { IRootState } from "@interfaces/redux";

export const getUserName = (state: IRootState) => state.auth.user.name;
export const getLoggedIn = (state: IRootState) => state.auth.isLoggedIn;
