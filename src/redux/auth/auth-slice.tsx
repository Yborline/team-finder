import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";
import { IErrorResponse } from "@interfaces/slicer";

const initialState = {
  user: { name: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
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
        state.user = { name: payload.username };
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
        // state.user = payload.data.user;
        state.isLoggedIn = true;
        state.user = { name: payload.username };
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
        state.user = { name: null };
        state.token = null;
        state.isLoggedIn = false;
      });

    // .addCase(
    //   authOperations.fetchCurrentUser.fulfilled,
    //   (state, { payload }) => {
    //     state.user = payload;
    //     state.isLoggedIn = true;
    //     state.isFetchingCurrentUser = false;
    //   }
    // );
    // .addCase(authOperations.fetchCurrentUser.rejected, (state,  => {
    //   state.isFetchingCurrentUser = false;
    //   state.error = error.message ?? "Unknown error"; // Зберігаємо повідомлення про помилку
    // });
  },
});

export default authSlice.reducer;
