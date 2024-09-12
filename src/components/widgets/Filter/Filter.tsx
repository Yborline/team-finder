import { IconContext } from "react-icons";
import styles from "./Filter.module.scss";
import { BsSearch } from "react-icons/bs";
import { IoFilterSharp } from "react-icons/io5";
import { useState } from "react";
import FilterForm from "../Form/FilterForm/FilterForm";
import ModalBackdropAuth from "@components/shared/Modal/ModalBackdropAuth/ModalBackdropAuth";
import Modal from "@components/shared/Modal/Modal";

const Filter = () => {
  const [showModal, setShowModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleModal = () => {
    if (showModal) {
      setIsClosing(true);

      setTimeout(() => {
        setShowModal(false);
        setIsClosing(false);
      }, 300);
    } else {
      setShowModal(true);
    }
  };
  return (
    <div className={styles.boxFilter}>
      <div className={styles.boxInput}>
        <input className={styles.inputFilter} />
        <IconContext.Provider value={{ className: styles.iconSearch }}>
          <BsSearch />
        </IconContext.Provider>
      </div>
      <button onClick={toggleModal} className={styles.buttonFilter}>
        Filter
        <IconContext.Provider value={{ className: styles.iconFilter }}>
          <IoFilterSharp />
        </IconContext.Provider>
      </button>
      {showModal && (
        <Modal close={toggleModal}>
          <FilterForm showModal={!isClosing} />
        </Modal>
      )}
    </div>
  );
};

export default Filter;
