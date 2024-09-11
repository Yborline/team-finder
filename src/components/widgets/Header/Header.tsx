import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { useTranslation } from "react-i18next";
import LanguageButton from "@components/shared/LanguageButton/LanguageButton";
import { useState } from "react";
import Modal from "@components/shared/Modal/Modal";
import Register from "../Form/Register/Register";
import Login from "../Form/Login/Login";
// import ThemeToggle from "@components/shared/ThemeToggle/ThemeToggle";

type IButtonModal = false | "register" | "login";

export const Header = () => {
  const { t } = useTranslation();
  const [toggleModal, setToggleModal] = useState<IButtonModal>(false);
  const handleCloseModal = (value: IButtonModal) => {
    if (toggleModal === value) {
      setToggleModal(false);
    } else {
      setToggleModal(value);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.mainBox}>
        <div className={styles.boxLeft}>
          <Link className={styles.linkLogo} to={"/"}>
            TeamTinder
          </Link>
          <LanguageButton />
        </div>
        <div className={styles.boxRight}>
          <button
            onClick={() => handleCloseModal("login")}
            className={styles.auth}
          >
            {t("header.login")}
          </button>
          <button
            onClick={() => handleCloseModal("register")}
            className={styles.auth}
          >
            {t("header.signUp")}
          </button>
        </div>
      </div>

      {toggleModal === "register" && (
        <Modal close={() => handleCloseModal(false)}>
          <Register close={() => handleCloseModal(false)} />
        </Modal>
      )}
      {toggleModal === "login" && (
        <Modal close={() => handleCloseModal(false)}>
          <Login close={() => handleCloseModal(false)} />
        </Modal>
      )}
    </header>
  );
};
