import { FilterField } from "@interfaces/posts";
import { IRootState } from "@interfaces/redux";
import { createSelector } from "@reduxjs/toolkit";
import { filterStateDefault } from "./posts-slice";

export const getPosts = (state: IRootState) => state.posts.posts;
export const getFilterObj = (state: IRootState) => state.posts.filter;
export const getFilterType = (state: IRootState) => state.posts.filter.type;
export const getFilterDate = (state: IRootState) => state.posts.filter.date;
export const getFilterSocials = (state: IRootState) =>
  state.posts.filter.socials;

export const getCountChangedFilter = createSelector(
  [getFilterObj],
  (filter) => {
    let differences = 0;

    for (const key in filter) {
      if (
        filter[key as FilterField] !== filterStateDefault[key as FilterField]
      ) {
        differences++;
      }
    }

    return differences;
  }
);

export const getSelectFilteredPosts = createSelector(
  [getPosts, getFilterObj],
  (posts, filter) => {
    const filteredPosts = posts.filter(({ type, socials }) => {
      const typeMatches = filter.type === "all" || type === filter.type;
      const socialsMatch = filter.socials === "all" || socials[filter.socials];

      return typeMatches && socialsMatch;
    });

    const sortedPosts = filteredPosts.sort((a, b) => {
      if (filter.date === "new") {
        return (
          new Date(b.createdDate!).getTime() -
          new Date(a.createdDate!).getTime()
        );
      } else if (filter.date === "old") {
        return (
          new Date(a.createdDate!).getTime() -
          new Date(b.createdDate!).getTime()
        );
      }
      return 0;
    });

    return sortedPosts;
  }
);
