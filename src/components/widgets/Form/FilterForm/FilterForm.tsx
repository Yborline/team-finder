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
import { useTranslation } from "react-i18next";

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

const FilterForm: FC<FilterFormProps> = ({ showModal }) => {
  const { t } = useTranslation();

  const optionType = [
    { value: "all", label: t("listTeam.filter.optionType.allCards") },
    {
      value: "lookingForPlayers",
      label: t("listTeam.filter.optionType.lookingForPlayers"),
    },
    {
      value: "lookingForGroup",
      label: t("listTeam.filter.optionType.lookingForGroup"),
    },
  ];

  const optionDate = [
    { value: "new", label: t("listTeam.filter.optionDate.new") },
    { value: "old", label: t("listTeam.filter.optionDate.old") },
  ];

  const optionSocials = [
    { value: "all", label: t("listTeam.filter.optionSocials.all") },
    { value: "discord", label: t("listTeam.filter.optionSocials.discord") },
    { value: "telegram", label: t("listTeam.filter.optionSocials.telegram") },
  ];

  const filterType = useSelector(getFilterType);
  const filterDate = useSelector(getFilterDate);
  const filterSocials = useSelector(getFilterSocials);

  const dispatch = useAppDispatch();

  const handleChangeFilter = (option: Option, field: string) => {
    const { value } = option;
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
          initial={{ left: "-100%" }}
          animate={{ left: "0%" }}
          exit={{ left: "-100%" }}
          transition={{ duration: 0.3 }}
        >
          <form className={styles.FilterFormBox}>
            <SelectFilter
              label={t("listTeam.filter.type")}
              value={optionType.find(({ value }) => value === filterType)}
              onChange={handleChangeFilter}
              id="type"
              className={styles.boxOneFilter}
              options={optionType}
            />

            <SelectFilter
              label={t("listTeam.filter.sortDate")}
              value={optionDate.find(({ value }) => value === filterDate)}
              onChange={handleChangeFilter}
              id="date"
              className={styles.boxOneFilter}
              options={optionDate}
            />

            <SelectFilter
              label={t("listTeam.filter.connection")}
              value={optionSocials.find(({ value }) => value === filterSocials)}
              onChange={handleChangeFilter}
              id="socials"
              className={styles.boxOneFilter}
              options={optionSocials}
            />
            <ButtonStandart onClick={handleResetFilter}>
              {t("listTeam.filter.resetButton")}
            </ButtonStandart>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FilterForm;
