import React, { FC } from "react";
import styles from "./FilterForm.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch } from "@interfaces/redux";
import { resetFilter, setFilter } from "@redux/posts/posts-slice";
import { FilterField } from "@interfaces/posts";
import { useSelector } from "react-redux";
import {
  getFilterDate,
  getFilterSocials,
  getFilterType,
} from "@redux/posts/posts-selector";
import SelectFilter from "@components/shared/Select/Filter/SelectFilter";
import ButtonStandart from "@components/shared/Button/ButtonStandart/ButtonStandart";

interface FilterForm {
  search: string;
  category: string;
  isActive: boolean;
}

interface FilterFormProps {
  showModal: boolean;
}

interface Option {
  value: string;
  label: string; // або будь-який інший тип, який вам потрібен
}

const optionType = [
  { value: "all", label: "Всі картки" },
  { value: "lookingForPlayers", label: "Пошук гравця" },
  { value: "lookingForGroup", label: "Пошук команди" },
];
const optionDate = [
  { value: "new", label: "New Date" },
  { value: "old", label: "Old Date" },
];
const optionSocials = [
  { value: "all", label: "All" },
  { value: "discord", label: "Discord" },
  { value: "telegram", label: "Telegram" },
];

const FilterForm: FC<FilterFormProps> = ({ showModal }) => {
  const filterType = useSelector(getFilterType);
  const filterDate = useSelector(getFilterDate);
  const filterSocials = useSelector(getFilterSocials);

  const dispatch = useAppDispatch();

  const handleChangeFilter = (option: Option, field: string) => {
    console.log(field);
    console.log(option);
    const { value } = option;

    // console.log(event.target.id);
    // const { id, value } = event.target;
    dispatch(setFilter({ field: field as FilterField, value }));
  };

  const handleResetFilter = () => {
    dispatch(resetFilter());
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
            <SelectFilter
              label="Type"
              value={optionType.find(({ value }) => value === filterType)}
              onChange={handleChangeFilter}
              id="type"
              className={styles.boxOneFilter}
              options={optionType}
            />

            <SelectFilter
              label="Sort Date"
              value={optionDate.find(({ value }) => value === filterDate)}
              onChange={handleChangeFilter}
              id="date"
              className={styles.boxOneFilter}
              options={optionDate}
            />

            <SelectFilter
              label="Connection"
              value={optionSocials.find(({ value }) => value === filterSocials)}
              onChange={handleChangeFilter}
              id="socials"
              className={styles.boxOneFilter}
              options={optionSocials}
            />
            <ButtonStandart onClick={handleResetFilter}>
              Скинути налаштування
            </ButtonStandart>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FilterForm;
