import Loader from "@components/shared/Loader/Loader";
import styles from "./Loader.module.scss";

const LoaderPage = () => {
  return (
    <div className={styles.boxLoaderPage}>
      <Loader />
    </div>
  );
};

export default LoaderPage;
