import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";
import { IErrorResponse } from "@interfaces/slicer";
import { IInitialStateAuth, ISuccesToken } from "@interfaces/redux";

const user = {
  name: null,
  id: null,
  email: null,
  telegramLink: null,
  discordUsername: null,
};
const initialState = {
  user: user,
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: false,
  notify: null as string | null,
};

const setPendingState = (state: IInitialStateAuth) => {
  state.isLoading = true;
  state.error = false;
  state.notify = null;
  state.isLoggedIn = false;
};

const setUserAndToken = (state: IInitialStateAuth, payload: ISuccesToken) => {
  state.user.name = payload.username;
  state.token = payload.access_token;
  state.isLoggedIn = true;
  state.isLoading = false;
};

const allowedRejectedActions = [
  "register/auth/rejected",
  "login/auth/rejected",
  "google/auth/rejected",
  "logout/auth/rejected",
  "refreshToken/auth/rejected",
];
interface RejectedAction extends PayloadAction<IErrorResponse | string> {
  type: string;
}

function isRejectedAction(action: any): action is RejectedAction {
  return (
    typeof action.type === "string" &&
    action.type.endsWith("rejected") &&
    allowedRejectedActions.includes(action.type)
  );
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(authOperations.register.fulfilled, (state, { payload }) => {
        setUserAndToken(state, payload);
        state.notify = "Ви успішно зареєструвалися";
      })
      .addCase(authOperations.logIn.fulfilled, (state, { payload }) => {
        state.user = payload.data.user;
        setUserAndToken(state, payload);
      })
      .addCase(authOperations.logInG.fulfilled, (state, { payload }) => {
        setUserAndToken(state, payload);
      })
      .addCase(authOperations.logOut.fulfilled, (state) => {
        state.user.name = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(
        authOperations.fetchCurrentUser.fulfilled,
        (state, { payload }) => {
          state.user = payload;
          state.isLoggedIn = true;
        }
      )
      .addCase(authOperations.fetchCurrentUser.rejected, (state) => {
        state.isLoading = false;
        state.error = false;
        state.notify = null;
      })
      .addCase(
        authOperations.fetchRefreshToken.fulfilled,
        (state, { payload }) => {
          state.user.name = payload.name;
          state.isLoggedIn = true;
        }
      )
      .addCase(authOperations.fetchRefreshToken.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
      })
      .addCase(
        authOperations.changeInfoUser.fulfilled,
        (state, { payload }) => {
          state.user = payload;
          state.isLoading = false;
        }
      )
      .addMatcher(isRejectedAction, (state, { payload }) => {
        state.isLoading = false;
        state.error = true;
        state.notify =
          (payload as IErrorResponse)?.response?.data || (payload as string);
      })
      .addMatcher(
        (action) => action.type.endsWith("auth/pending"),
        setPendingState
      )
      .addMatcher(
        (action) => action.type.endsWith("user/pending"),
        setPendingState
      );
  },
});

export default authSlice.reducer;
