import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import postsOperations from "./posts-operations";
import { IErrorResponse } from "@interfaces/slicer";
import { Filter, Post } from "@interfaces/posts";

const mokkaPlayers: Post[] = [
  {
    id: "11112111",
    name: "LLLLLLLLLLLLLLLLLLLL",
    createdByUser: {
      id: 1, // Задайте унікальний id для користувача
      name: "User1",
      email: "user1@example.com", // Додайте email
    },
    game: "dota 2",
    text: "dssssssssssssssasasas",
    tags: ["tags", "mid"], // Об'єднайте теги в рядок
    socials: {
      discord: null,
      telegram: "yyyyyy",
    },
    type: "lookingForGroup",
    createdDate: new Date(), // Якщо потрібно, задайте дату створення
  },
  {
    id: "123132132",
    name: "Lol",
    createdByUser: {
      id: 2,
      name: "User2",
      email: "user2@example.com",
    },
    game: "dota 2",
    text: "", // Додайте текст за потреби
    tags: ["tags", "mid"],
    socials: {
      discord: "123456789012345678",
      telegram: "yyyyyy",
    },
    type: "lookingForPlayers",
    createdDate: new Date(),
  },
  // Додайте інші об'єкти аналогічно
  {
    id: "12313213",
    name: "Lol",
    createdByUser: {
      id: 3,
      name: "User3",
      email: "user3@example.com",
    },
    game: "dota 2",
    text: "",
    tags: ["tags", "mid"],
    socials: {
      discord: "123456789012345678",
      telegram: null,
    },
    type: "lookingForPlayers",
    createdDate: new Date(),
  },
];

const initialState = {
  posts: mokkaPlayers,
  loading: false,
  error: false,
  notify: null as string | null,
  filter: {
    type: "all",
    date: "new",
    socials: "all",
  },
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setFilter(
      state,
      actions: PayloadAction<{ field: keyof Filter; value: string }>
    ) {
      const { field, value } = actions.payload;
      state.filter[field] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postsOperations.getPosts.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.posts = payload.posts;
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
        state.posts = [payload.post, ...state.posts];
      });
  },
});

export default postsSlice.reducer;
export const { setFilter } = postsSlice.actions;
