import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@api/api";
import { notify } from "@components/widgets/Tostify/Tostify";
import { IFormCreatePost } from "@interfaces/form";
import i18next from "i18next";

const getPosts = createAsyncThunk(
  "list/post",
  async (credentials: number, thunkAPI) => {
    try {
      const { data } = await api.get(`post/list/${credentials}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const addPost = createAsyncThunk(
  "createPost/post",
  async (credentials: IFormCreatePost, thunkAPI) => {
    try {
      const { data } = await api.post(`post/add`, credentials);
      notify("success", i18next.t("createPost.postSuccess"));
      // notify("success", "Ваш пост відправлено");
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
