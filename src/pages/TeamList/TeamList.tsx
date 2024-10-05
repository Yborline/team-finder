import Filter from "@components/widgets/Filter/Filter";
import ListPlayers from "@components/widgets/ListPlayers/ListPlayers";
import styles from "./TeamList.module.scss";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { AppDispatch, useAppDispatch } from "@interfaces/redux";
import postsOperations from "@redux/posts/posts-operations";
import {
  getAllFilterPosts,
  getSelectFilteredPosts,
} from "@redux/posts/posts-selector";
// import { resetFilter } from "@redux/posts/posts-slice";

const TeamList = () => {
  const dispatch = useAppDispatch<AppDispatch>();
  const posts = useSelector(getAllFilterPosts);
  useEffect(() => {
    dispatch(postsOperations.getPosts());

    // return () => {
    //   dispatch(resetFilter());
    // };
  }, [dispatch]);

  return (
    <div className={styles.boxTeam}>
      <Filter />
      {posts && posts.length > 0 && <ListPlayers list={posts} />}
    </div>
  );
};

export default TeamList;
