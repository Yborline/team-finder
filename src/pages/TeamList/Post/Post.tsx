import { useParams } from "react-router-dom";
import styles from "./Post.module.scss";
// import { useEffect } from "react";
// import { AppDispatch, useAppDispatch } from "@interfaces/redux";
// import postsOperations from "@redux/posts/posts-operations";

const Post: React.FC = () => {
  const { id } = useParams();
  // const dispatch = useAppDispatch<AppDispatch>();

  // useEffect(() => {
  //   if (id) dispatch(postsOperations.getPosts());
  // }, [dispatch, id]);

  return <div className={styles.boxPost}>{id}</div>;
};

export default Post;
