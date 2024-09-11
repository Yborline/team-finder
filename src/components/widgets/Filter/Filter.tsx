import { IconContext } from "react-icons";
import styles from "./Filter.module.scss";
import { BsSearch } from "react-icons/bs";
import { IoFilterSharp } from "react-icons/io5";

const Filter = () => {
  return (
    <div className={styles.boxFilter}>
      <div className={styles.boxInput}>
        <input className={styles.inputFilter} />
        <IconContext.Provider value={{ className: styles.iconSearch }}>
          <BsSearch />
        </IconContext.Provider>
      </div>
      <button className={styles.buttonFilter}>
        Filter
        <IconContext.Provider value={{ className: styles.iconFilter }}>
          <IoFilterSharp />
        </IconContext.Provider>
      </button>
    </div>
  );
};

export default Filter;
