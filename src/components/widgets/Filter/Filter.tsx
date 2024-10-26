import { IconContext } from "react-icons";
import styles from "./Filter.module.scss";
import { BsSearch } from "react-icons/bs";
import { IoFilterSharp } from "react-icons/io5";
import { useState } from "react";
import FilterForm from "../Form/FilterForm/FilterForm";
import Modal from "@components/shared/Modal/Modal";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { getModal } from "@redux/modal/modal-selector";
import { useAppDispatch } from "@interfaces/redux";
import { setModal } from "@redux/modal/modal-slice";
import { getCountChangedFilter } from "@redux/posts/posts-selector";
import { setInputFilter } from "@redux/posts/posts-slice";
import { useTranslation } from "react-i18next";

const Filter = () => {
  const showModal = useSelector(getModal);
  const countFilter = useSelector(getCountChangedFilter);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(true);
  const { t } = useTranslation();

  const toggleModal = () => {
    if (showModal === "filter") {
      setIsOpen(false);

      setTimeout(() => {
        dispatch(setModal(""));
        setIsOpen(true);
      }, 300);
    } else {
      dispatch(setModal("filter"));
    }
  };

  const handleChangeInput = (value: string) => {
    dispatch(setInputFilter(value.toLowerCase()));
  };
  return (
    <div className={styles.boxFilter}>
      <div className={styles.boxInput}>
        <input
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeInput(e.target.value)
          }
          className={styles.inputFilter}
        />
        <IconContext.Provider value={{ className: styles.iconSearch }}>
          <BsSearch />
        </IconContext.Provider>
      </div>
      <button onClick={toggleModal} className={styles.buttonFilter}>
        {t("listTeam.filter.filter")}
        <IconContext.Provider value={{ className: styles.iconFilter }}>
          <IoFilterSharp />
        </IconContext.Provider>
        {countFilter > 0 && (
          <div className={styles.filterCount}>{countFilter}</div>
        )}
      </button>
      <AnimatePresence>
        {showModal === "filter" && (
          <Modal close={toggleModal}>
            <FilterForm showModal={isOpen} />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Filter;
