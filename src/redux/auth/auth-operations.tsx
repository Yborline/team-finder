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
      const { data } = await api.post("auth/register", credentials);
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
      const { data } = await api.post("auth/login", credentials);

      token.set(data.access_token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const logInG = createAsyncThunk(
  "auth/google",
  async (credentials: string, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`auth/google?googleToken=${credentials}`);
      console.log(data);
      // token.set(data.access_token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await api.post("auth/logout");
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
      const { data } = await api.get("/auth/current");
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const operationsAuth = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
  logInG,
};

export default operationsAuth;
