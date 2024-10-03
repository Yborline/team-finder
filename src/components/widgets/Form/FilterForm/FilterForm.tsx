import React, { FC } from "react";
import styles from "./FilterForm.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch } from "@interfaces/redux";
import { setFilter } from "@redux/posts/posts-slice";
import { FilterField } from "@interfaces/posts";
import { useSelector } from "react-redux";
import {
  getFilterDate,
  getFilterSocials,
  getFilterType,
} from "@redux/posts/posts-selector";

interface FilterForm {
  search: string;
  category: string;
  isActive: boolean;
}

interface FilterFormProps {
  showModal: boolean;
}

const FilterForm: FC<FilterFormProps> = ({ showModal }) => {
  const filterType = useSelector(getFilterType);
  const filterDate = useSelector(getFilterDate);
  const filterSocials = useSelector(getFilterSocials);

  const dispatch = useAppDispatch();

  const handleChangeFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.id);
    const { id, value } = event.target;
    dispatch(setFilter({ field: id as FilterField, value }));
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          key="filterForm"
          className={styles.boxFormFilter}
          initial={{ left: "-100%" }} // Початкове положення за межами екрана зліва
          animate={{ left: "0%" }} // Кінцеве положення на екрані
          exit={{ left: "-100%" }}
          transition={{ duration: 0.3 }}
        >
          <form className={styles.FilterFormBox}>
            <div className={styles.boxOneFilter}>
              <label htmlFor="type">Type:</label>
              <select
                value={filterType}
                onChange={handleChangeFilter}
                id="type"
              >
                <option value="all">Всі картки</option>
                <option value="lookingForPlayers">Пошук гравця</option>
                <option value="lookingForGroup">Пошук команди</option>
              </select>
            </div>
            <div className={styles.boxOneFilter}>
              <label htmlFor="date">Sort Date:</label>
              <select
                value={filterDate}
                onChange={handleChangeFilter}
                id="date"
              >
                <option value="new">New Date</option>
                <option value="old">Old Date</option>
              </select>
            </div>
            <div className={styles.boxOneFilter}>
              <label htmlFor="socials">Connection:</label>
              <select
                value={filterSocials}
                onChange={handleChangeFilter}
                id="socials"
              >
                <option value="all">all</option>
                <option value="discord">Discord</option>
                <option value="telegram">Telegram</option>
              </select>
            </div>

            <button type="submit">Apply Filter</button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FilterForm;
