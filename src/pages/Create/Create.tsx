import styles from "./Create.module.scss";
import CreatePost from "@components/widgets/Form/CreatePost/CreatePost";

const Create = () => {
  return (
    <div className={styles.boxCreate}>
      <CreatePost />
    </div>
  );
};

export default Create;
