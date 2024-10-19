import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";
import { IErrorResponse } from "@interfaces/slicer";

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
  isLoading: true,
  error: false,
  notify: null as string | null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authOperations.register.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.user.name = payload.username;
        state.isLoading = false;
        state.notify = "Ви успішно зареєеструвалися";
        state.token = payload.access_token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.register.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.notify = null;
        state.isLoggedIn = false;
      })
      .addCase(authOperations.register.rejected, (state, { payload }) => {
        console.log((payload as IErrorResponse).response.data);
        state.isLoading = false;
        state.notify = (payload as IErrorResponse).response.data;
        state.error = true;
      })
      .addCase(authOperations.logIn.pending, (state, { payload }) => {
        console.log("Payload:", payload);
        state.isLoggedIn = false;
        state.isLoading = true;
      })
      .addCase(authOperations.logIn.fulfilled, (state, { payload }) => {
        console.log("Payload:", payload);
        state.user = payload.data.user;
        state.isLoggedIn = true;
        state.user.name = payload.username;
        state.token = payload.access_token;
        state.isLoading = false;
      })
      .addCase(authOperations.logIn.rejected, (state, { payload }) => {
        console.log("Payload:", payload);
        state.isLoading = false;
        state.notify = (payload as IErrorResponse).response.data;
        state.error = true;
      })
      .addCase(authOperations.logOut.fulfilled, (state) => {
        state.user.name = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authOperations.logInG.fulfilled, (state, { payload }) => {
        console.log("Payload:", payload);
        state.isLoading = false;
        state.user.name = payload.username;
        state.token = payload.access_token;
        state.isLoggedIn = true;
      })

      .addCase(authOperations.logInG.pending, (state, { payload }) => {
        console.log("Payload:", payload);
        state.isLoggedIn = false;
        state.isLoading = true;
        state.isLoggedIn = false;
      })
      .addCase(authOperations.logInG.rejected, (state, { payload }) => {
        console.log("Payload:", payload);
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
      })
      .addCase(authOperations.fetchCurrentUser.pending, (state) => {
        state.error = false;
        state.isLoading = true;
        state.isLoggedIn = false;
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
      .addCase(authOperations.fetchRefreshToken.pending, (state) => {
        state.error = false;
        state.isLoading = true;
        // state.isLoggedIn = false;
      })
      .addCase(
        authOperations.changeInfoUser.fulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.user = payload;
        }
      )
      .addCase(authOperations.changeInfoUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authOperations.changeInfoUser.rejected, (state, { payload }) => {
        state.isLoading = true;
        state.error = true;
        state.notify = (payload as IErrorResponse).response.data;
      });
  },
});

export default authSlice.reducer;
