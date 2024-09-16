import { useParams } from "react-router-dom";
import styles from "./Post.module.scss";
import { useEffect } from "react";
import { AppDispatch, useAppDispatch } from "@interfaces/redux";
import postsOperations from "@redux/posts/posts-operations";

const Post = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch<AppDispatch>();

  useEffect(() => {
    if (id) dispatch(postsOperations.addPost(id));
  }, [dispatch, id]);

  return <div className={styles.boxPost}>{id}</div>;
};

export default Post;
