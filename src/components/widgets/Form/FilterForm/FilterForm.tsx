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
            <div>
              <label htmlFor="search">Search:</label>
              <input
                id="search"
                type="text"
                {...register("search", { required: "This field is required" })}
              />
              {errors.search && <span>{errors.search.message}</span>}
            </div>

            <div>
              <label htmlFor="category">Category:</label>
              <select id="category" {...register("category")}>
                <option value="all">All</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
              </select>
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
