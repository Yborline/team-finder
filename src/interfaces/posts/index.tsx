import { ISocials, SocialKeys, typePost } from "@interfaces/form";

export interface Post {
  id: number;
  name: string;
  createdByUser: {
    id: number;
    name: string;
    email: string;
  };
  game: string;
  text: string;
  tags: string[];
  socials: ISocials;
  type: typePost;
  createdDate?: string;
}

export interface PostsState {
  posts: Post[];
}

export interface Filter {
  type: "all" | typePost;
  date: "new" | "old";
  socials: "all" | SocialKeys;
  input: string;
}

export type FilterField = keyof Filter;
