import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";
import { error } from "console";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  isLoading: false,
  error: null as string | null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authOperations.register.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(authOperations.register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(authOperations.register.rejected, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.error = action.error.message ?? "Unknown error";
      })
      .addCase(authOperations.logIn.fulfilled, (state, action) => {
        console.log("Payload:", action.payload);
        state.user = action.payload.data.user;
        state.token = action.payload.data.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authOperations.fetchCurrentUser.pending, (state) => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(
        authOperations.fetchCurrentUser.fulfilled,
        (state, { payload }) => {
          state.user = payload;
          state.isLoggedIn = true;
          state.isFetchingCurrentUser = false;
        }
      )
      .addCase(authOperations.fetchCurrentUser.rejected, (state, action) => {
        state.isFetchingCurrentUser = false;
        state.error = action.error.message ?? "Unknown error"; // Зберігаємо повідомлення про помилку
      });
  },
});

export default authSlice.reducer;
