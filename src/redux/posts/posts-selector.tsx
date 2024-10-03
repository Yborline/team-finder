import { PostsState } from "@interfaces/posts";
import { IPosts, IRootState } from "@interfaces/redux";

export const getPosts = (state: IRootState) => state.posts.posts;
export const getFilterType = (state: IRootState) => state.posts.filter.type;
export const getFilterDate = (state: IRootState) => state.posts.filter.date;
export const getFilterSocials = (state: IRootState) =>
  state.posts.filter.socials;

export const selectFilteredPosts = (state: { posts: IPosts }) => {
  const { posts, filter } = state.posts;

  const filteredPosts = posts.filter(({ type, socials }) => {
    const typeMatches = filter.type === "all" || type === filter.type;
    const socialsMatch = filter.socials === "all" || socials[filter.socials];

    return typeMatches && socialsMatch;
  });

  const sortedPosts = filteredPosts.sort((a, b) => {
    if (filter.date === "new") {
      return (
        new Date(b.createdDate!).getTime() - new Date(a.createdDate!).getTime()
      );
    } else if (filter.date === "old") {
      return (
        new Date(a.createdDate!).getTime() - new Date(b.createdDate!).getTime()
      );
    }
    return 0;
  });

  return sortedPosts;
};
