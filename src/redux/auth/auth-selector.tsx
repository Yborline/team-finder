import { RootState } from "@interfaces/redux";

export const getUserName = (state: RootState) => state.auth.user.name;
