import { createSlice } from "@reduxjs/toolkit";
import postsOperations from "./posts-operations";
import { IErrorResponse } from "@interfaces/slicer";
import { PostsState, Post } from "@interfaces/posts";

const initialState = {
  posts: [] as PostsState[],
  loading: false,
  error: false,
  notify: null as string | null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postsOperations.getPosts.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.posts = payload.posts;
        state.loading = false;
      })
      .addCase(postsOperations.getPosts.pending, (state, { payload }) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(postsOperations.getPosts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.notify = (payload as IErrorResponse).response.data;
      })
      .addCase(postsOperations.addPost.fulfilled, (state, { payload }) => {
        state.posts = [payload.post, ...state.posts];
      });
  },
});

export default postsSlice;
