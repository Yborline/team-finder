import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@api/api";

const getPosts = createAsyncThunk(
  "post/list",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.get(`post/list`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const addPost = createAsyncThunk(
  "post/item",
  async (credentials: string, thunkAPI) => {
    try {
      const { data } = await api.get(`post/${credentials}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const postsOperations = {
  getPosts,
  addPost,
};

export default postsOperations;
