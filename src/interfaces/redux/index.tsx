import { Filter, Post, PostsState } from "@interfaces/posts";
import store from "@redux/store";

import { useDispatch } from "react-redux";

// export type RootState = ReturnType<typeof rootReducer>;
export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export interface IPosts extends PostsState {
  posts: Post[];
  loading: boolean;
  error: boolean;
  notify: string | null;
  filter: Filter;
}

export interface IUser {
  name: null | string;
  id: null | number;
  email: null | string;
  telegramLink: null | string;
  discordUsername: null | string;
}

export interface IInitialStateAuth {
  user: IUser;
  token: null | string;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: boolean;
  notify: string | null;
}
export interface ISuccesToken {
  username: string;
  access_token: string;
}

// export interface RejectedAction extends Action {
//   error: Error;
// }

// export interface IrejectedAuth {
//   response: {
//     data: string;
//   };
// }
// export type rejectedStateAuth = IrejectedAuth | string;
