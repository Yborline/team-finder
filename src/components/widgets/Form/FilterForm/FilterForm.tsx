import React, { FC } from "react";
import { useForm } from "react-hook-form";
import styles from "./FilterForm.module.scss";
import { AnimatePresence, motion } from "framer-motion";

interface FilterForm {
  search: string;
  category: string;
  isActive: boolean;
}

interface FilterFormProps {
  showModal: boolean;
}

const FilterForm: FC<FilterFormProps> = ({ showModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FilterForm>();

  const onSubmit = (data: FilterForm) => {
    console.log(data);
    // Здесь можно обработать данные фильтра
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          key="filterForm"
          className={styles.boxForm}
          initial={{ left: "-100%" }} // Початкове положення за межами екрана зліва
          animate={{ left: "0%" }} // Кінцеве положення на екрані
          exit={{ left: "-100%" }}
          transition={{ duration: 0.3 }}
        >
          <form
            className={styles.FilterFormBox}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={styles.boxOneFilter}>
              <label htmlFor="category">Type:</label>
              <select id="category" {...register("category")}>
                <option value="all">all</option>
                <option value="solo">solo</option>
                <option value="party">party</option>
              </select>
            </div>
            <div className={styles.boxOneFilter}>
              <label htmlFor="category">Sort Date:</label>
              <select id="category" {...register("category")}>
                <option value="newDate">New Date</option>
                <option value="oldDate">Old Date</option>
              </select>
            </div>
            <div className={styles.boxOneFilter}>
              <label htmlFor="category">Connection:</label>
              <select id="category" {...register("category")}>
                <option value="newDate">Discord</option>
                <option value="oldDate">Gmail</option>
                <option value="oldDate">Telegram</option>
                <option value="oldDate">viber</option>
              </select>
            </div>

            <div>
              <label htmlFor="isActive">Active:</label>
              <input id="isActive" type="checkbox" {...register("isActive")} />
            </div>

            <div>
              <label htmlFor="isActive">Active:</label>
              <input id="isActive" type="checkbox" {...register("isActive")} />
            </div>

            <button type="submit">Apply Filter</button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FilterForm;
