import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageButton.module.scss";
import { languages } from "@data/header/language";
import { languageButton } from "interfaces/header";

const LanguageButton = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<languageButton>(() => {
    const currentLanguage = localStorage.getItem("language") || "ua";
    return languages.find((item) => item.value === currentLanguage)!;
  });
  const [isToggleLanguage, setToggleLanguage] = useState<boolean>(false);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  function changeLanguage(lang: string): void {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    const currentObj = languages.find((item) => item.value === lang);
    if (currentObj) setCurrentLanguage(currentObj);
  }

  const reorderedLanguages = useMemo(() => {
    return [
      currentLanguage,
      ...languages.filter((item) => item.value !== currentLanguage.value),
    ];
  }, [currentLanguage]);

  return (
    <div
      className={styles.languages}
      onClick={() => setToggleLanguage(!isToggleLanguage)}
      ref={buttonsRef}
    >
      {isToggleLanguage ? (
        <ul
          className={`${styles.languages_toggle} ${
            isToggleLanguage ? styles.active : ""
          }`}
        >
          {reorderedLanguages.map(({ img, value }) => (
            <img
              key={value}
              className={styles.languages_flags}
              src={img}
              onClick={() => changeLanguage(value)}
            />
          ))}
        </ul>
      ) : (
        <img className={styles.languages_flags} src={currentLanguage.img} />
      )}
    </div>
  );
};

export default LanguageButton;
