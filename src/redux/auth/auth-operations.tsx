import { IFormLogin, IFormRegisterSend } from "@interfaces/form";
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@api/api";
import axios from "axios";
import { IUserForm } from "@interfaces/user/user";
import { AxiosError } from "axios";
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
  "register/auth",
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
  "login/auth",
  async (credentials: IFormLogin, { rejectWithValue }) => {
    try {
      const { data } = await api.post("auth/login", credentials);

      token.setAccessToken(data.access_token);
      token.setRefreshToken(data.refresh_token);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          return rejectWithValue(error.response.data.message || "Server error");
        } else if (error.request) {
          return rejectWithValue("Щось пішло не так, спробуйте пізніше");
        }
      }
      return rejectWithValue(error);
    }
  }
);
const logInG = createAsyncThunk(
  "google/auth",
  async (credentials: string, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`auth/google?googleToken=${credentials}`);
      console.log(data);
      token.setAccessToken(data.access_token);
      token.setRefreshToken(data.refresh_token);
      return data;
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        if (error.response) {
          return rejectWithValue(error.response.data.message || "Server error");
        } else if (error.request) {
          return rejectWithValue("Щось пішло не так, спробуйте пізніше");
        }
      }
      return rejectWithValue(error);
    }
  }
);

const logOut = createAsyncThunk("logout/auth", async (_, thunkAPI) => {
  try {
    await api.get("users/logout");
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const fetchRefreshToken = createAsyncThunk(
  "refreshToken/auth",
  async (tokenRefresh: string, thunkApi) => {
    try {
      const { data } = await api.get(
        `auth/refresh?refreshToken=${tokenRefresh}`
      );
      token.setAccessToken(data.access_token);
      thunkApi.dispatch(fetchCurrentUser());

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const fetchCurrentUser = createAsyncThunk(
  "refresh/auth",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get("/users/getmyself");
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError && error.response?.status === 401) {
        const tokenRefresh = document.cookie
          .split("; ")
          .find((row) => row.startsWith("refreshToken"))
          ?.split("=")[1];

        if (tokenRefresh) {
          const result = await thunkAPI.dispatch(
            fetchRefreshToken(tokenRefresh)
          );
          if (fetchRefreshToken.rejected.match(result)) {
            return thunkAPI.rejectWithValue(result.error);
          }
        } else {
          return thunkAPI.rejectWithValue(error);
        }
      } else {
        return thunkAPI.rejectWithValue(error);
      }
    }
  }
);

const changeInfoUser = createAsyncThunk(
  "user/change",
  async (objUser: IUserForm, thunkAPI) => {
    try {
      const { data } = await api.put("/users/update", objUser);
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
  fetchRefreshToken,
  changeInfoUser,
};

export default operationsAuth;
