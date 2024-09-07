import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@api/api"; // Змініть на правильний шлях до вашого інстансу Axios

const token = {
  set(token: string) {
    document.cookie = `token=${token}; path=/; secure; HttpOnly; SameSite=Strict`;
  },
  unset() {
    document.cookie =
      "token=; Max-Age=0; path=/; secure; HttpOnly; SameSite=Strict";
  },
};

const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post("users/signup", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const logIn = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
    const { data } = await api.post("users/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

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
