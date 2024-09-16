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
  tags: string;
  createdDate: Date;
}

export interface PostsState {
  posts: Post[];
}
