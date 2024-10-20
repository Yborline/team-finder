import styles from "./Loader.module.scss";
import { Atom } from "react-loading-indicators";

const Loader = () => {
  return (
    <div className={styles.boxLoader}>
      <Atom color="#32cd32" size="medium" text="" textColor="" />
    </div>
  );
};

export default Loader;
