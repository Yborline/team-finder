import { IFormLogin, IFormRegisterSend } from "@interfaces/form";
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@api/api";
// import axios from "axios";

const token = {
  setAccessToken(accessToken: string) {
    document.cookie = `accessToken=${accessToken}; path=/; secure; SameSite=Strict`;
  },
  setRefreshToken(refreshToken: string) {
    document.cookie = `refreshToken=${refreshToken}; path=/; secure; SameSite=Strict`;
  },
  unset() {
    document.cookie =
      "accessToken=; Max-Age=0; path=/; secure; SameSite=Strict";
    document.cookie =
      "refreshToken=; Max-Age=0; path=/; secure; SameSite=Strict";
  },
};
// axios.defaults.baseURL = "http://95.135.51.126/api/";

const register = createAsyncThunk(
  "auth/register",
  async (credentials: IFormRegisterSend, thunkAPI) => {
    try {
      const { data } = await api.post("auth/register", credentials);
      token.setAccessToken(data.access_token);
      token.setRefreshToken(data.refresh_token);
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

      token.setAccessToken(data.access_token);
      token.setRefreshToken(data.refresh_token);
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
      token.setAccessToken(data.access_token);
      token.setRefreshToken(data.refresh_token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await api.get("users/logout");
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const fetchRefreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (tokenRefresh: string, thunkApi) => {
    try {
      const { data } = await api.get(
        `auth/refresh?refreshToken=${tokenRefresh}`
      );
      token.setAccessToken(data.access_token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get("/users/getmyself");
      console.log(data);
      return data;
    } catch (error) {
      const tokenRefresh = document.cookie
        .split("; ")
        .find((row) => row.startsWith("refreshToken"))
        ?.split("=")[1];
      if (tokenRefresh) thunkAPI.dispatch(fetchRefreshToken(tokenRefresh));
      else return thunkAPI.rejectWithValue(error);
    }
  }
);

const operationsAuth = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
  logInG,
  fetchRefreshToken,
};

export default operationsAuth;
