import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { useTranslation } from "react-i18next";
import LanguageButton from "@components/shared/LanguageButton/LanguageButton";
import { useState } from "react";
import Modal from "@components/shared/Modal/Modal";
// import ThemeToggle from "@components/shared/ThemeToggle/ThemeToggle";

export const Header = () => {
  const { t } = useTranslation();
  const [toggleModal, setToggleModal] = useState(false);
  const handleCloseModal = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <header className={styles.header}>
      <div className={styles.mainBox}>
        <div className={styles.boxLeft}>
          <Link className={styles.linkLogo} to={"./home"}>
            TeamTinder
          </Link>
          <LanguageButton />
        </div>
        <div className={styles.boxRight}>
          <button onClick={handleCloseModal} className={styles.auth}>
            {t("header.login")}
          </button>
          <button onClick={handleCloseModal} className={styles.auth}>
            {t("header.signUp")}
          </button>
        </div>
      </div>

      {toggleModal && (
        <Modal close={handleCloseModal}>
          <div className="boxRegister">ahahaha</div>
        </Modal>
      )}
    </header>
  );
};
