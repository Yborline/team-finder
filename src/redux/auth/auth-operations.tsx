import { IFormLogin, IFormRegisterSend } from "@interfaces/form";
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@api/api";
// import axios from "axios";

const token = {
  set(token: string) {
    document.cookie = `token=${token}; path=/; secure; SameSite=Strict`;
  },
  unset() {
    document.cookie = "token=; Max-Age=0; path=/; secure; SameSite=Strict";
  },
};
// axios.defaults.baseURL = "http://95.135.51.126/api/";

const register = createAsyncThunk(
  "auth/register",
  async (credentials: IFormRegisterSend, thunkAPI) => {
    try {
      const { data } = await api.post("users/register", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const logIn = createAsyncThunk(
  "auth/login",
  async (credentials: IFormLogin, thunkAPI) => {
    try {
      const { data } = await api.post("users/auth", credentials);

      token.set(data.access_token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await api.post("users/logout");
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    // const state = thunkAPI.getState();
    // const persistedToken = state.auth.token;
    // if (persistedToken === null) {
    //   return thunkAPI.rejectWithValue();
    // }
    // token.set(persistedToken);
    try {
      const { data } = await api.get("/users/current");
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};

export default operations;
