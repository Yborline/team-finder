import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { useTranslation } from "react-i18next";
import LanguageButton from "@components/shared/LanguageButton/LanguageButton";
import Modal from "@components/shared/Modal/Modal";
import Register from "../Form/Register/Register";
import Login from "../Form/Login/Login";
import ButtonUser from "@components/shared/Button/ButtonUser/ButtonUser";
import { useSelector } from "react-redux";
import { getLoggedIn } from "@redux/auth/auth-selector";
import { getModal } from "@redux/modal/modal-selector";
import { AppDispatch, useAppDispatch } from "@interfaces/redux";
import { setModal } from "@redux/modal/modal-slice";
import { ModalType } from "@interfaces/modal/intex";
import "react-toastify/dist/ReactToastify.css";
import operationsAuth from "@redux/auth/auth-operations";
import ButtonExit from "@components/shared/Button/ButtonExit/ButtonExit";
// import ThemeToggle from "@components/shared/ThemeToggle/ThemeToggle";

export const Header = () => {
  const modal = useSelector(getModal);
  const loggedIn = useSelector(getLoggedIn);
  const dispatch = useAppDispatch<AppDispatch>();
  const { t } = useTranslation();

  const handleChangeModal = (value: ModalType) => {
    dispatch(setModal(value));
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
        {loggedIn ? (
          <div className={styles.boxUser}>
            <ButtonUser />
            <ButtonExit onClick={() => dispatch(operationsAuth.logOut())} />
          </div>
        ) : (
          <div className={styles.boxRight}>
            <button
              onClick={() => handleChangeModal("login")}
              className={styles.auth}
            >
              {t("header.login")}
            </button>
            <button
              onClick={() => handleChangeModal("register")}
              className={styles.auth}
            >
              {t("header.signUp")}
            </button>
          </div>
        )}
      </div>

      {modal === "register" && (
        <Modal close={() => handleChangeModal(null)}>
          <Register close={() => handleChangeModal(null)} />
        </Modal>
      )}
      {modal === "login" && (
        <Modal close={() => handleChangeModal(null)}>
          <Login close={() => handleChangeModal(null)} />
        </Modal>
      )}
    </header>
  );
};
