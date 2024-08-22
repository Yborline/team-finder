import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { useTranslation } from "react-i18next";
import LanguageButton from "@components/shared/LanguageButton/LanguageButton";
// import ThemeToggle from "@components/shared/ThemeToggle/ThemeToggle";

export const Header = () => {
  const { t } = useTranslation();

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
          <button className={styles.auth}>{t("header.login")}</button>
          <button className={styles.auth}>{t("header.signUp")}</button>
        </div>
      </div>
    </header>
  );
};
