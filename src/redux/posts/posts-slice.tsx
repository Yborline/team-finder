import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import postsOperations from "./posts-operations";
import { IErrorResponse } from "@interfaces/slicer";
import { Filter, Post } from "@interfaces/posts";
import { IPosts } from "@interfaces/redux";

const mokkaPlayers: Post[] = [
  {
    id: 1,
    name: "LLLLLLLLLLLLLLLLLLLL1",
    createdByUser: {
      id: 1,
      name: "User1",
      email: "user1@example.com",
    },
    game: "punk",
    text: "dssssssssssssssasasas",
    tags: ["tags", "mid"],
    socials: {
      discord: null,
      telegram: "yyyyyy",
    },
    type: "lookingForGroup",
    createdDate: new Date().toString(),
  },
  {
    id: 2,
    name: "Lol2",
    createdByUser: {
      id: 2,
      name: "User2",
      email: "user2@example.com",
    },
    game: "dota 2",
    text: "laxatron",
    tags: ["sock", "mid"],
    socials: {
      discord: "123456789012345678",
      telegram: "yyyyyy",
    },
    type: "lookingForPlayers",
    createdDate: new Date(
      new Date().setHours(new Date().getHours() - 1)
    ).toString(),
  },

  {
    id: 3,
    name: "Lol3",
    createdByUser: {
      id: 3,
      name: "User3",
      email: "user3@example.com",
    },
    game: "dota 3",
    text: "",
    tags: ["dick", "mid"],
    socials: {
      discord: "123456789012345678",
      telegram: null,
    },
    type: "lookingForPlayers",
    createdDate: new Date(
      new Date().setHours(new Date().getHours() - 2)
    ).toString(),
  },
];

export const filterStateDefault: Filter = {
  type: "all",
  date: "new",
  socials: "all",
  input: "",
};

const initialState: IPosts = {
  posts: mokkaPlayers,
  loading: false,
  error: false,
  notify: null as string | null,
  filter: filterStateDefault,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setFilter<K extends keyof Filter>(
      state: IPosts,
      actions: PayloadAction<{
        field: K;
        value: Filter[K];
      }>
    ) {
      const { field, value } = actions.payload;
      state.filter[field] = value;
    },
    setInputFilter(state: IPosts, { payload }) {
      state.filter.input = payload;
    },
    resetFilter(state) {
      state.filter = filterStateDefault;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postsOperations.getPosts.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.posts = payload;
        state.loading = false;
      })
      .addCase(postsOperations.getPosts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(postsOperations.getPosts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.notify = (payload as IErrorResponse).response?.data;
      })
      .addCase(postsOperations.addPost.fulfilled, (state, { payload }) => {
        // state.posts = [payload.post, ...state.posts];
        state.loading = false;
      })
      .addCase(postsOperations.addPost.pending, (state, { payload }) => {
        // state.posts = [payload.post, ...state.posts];
        state.loading = true;
      })
      .addCase(postsOperations.addPost.rejected, (state, { payload }) => {
        // state.posts = [payload.post, ...state.posts];
        state.loading = false;
      });
  },
});

export default postsSlice.reducer;
export const { setFilter, resetFilter, setInputFilter } = postsSlice.actions;
