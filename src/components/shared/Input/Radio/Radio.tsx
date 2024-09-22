import React, { FC, useState } from "react";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import styles from "./Radio.module.scss";

interface IRadio {
  value: string;
  text: string;
  hookForm: UseFormRegisterReturn;
}

const Radio: FC<IRadio> = ({ value, hookForm, text }) => {
  console.log(value);

  return (
    <div className={styles.labelContainer}>
      <input
        className={styles.inputRadio}
        type="radio"
        value={value}
        id={value} // Додайте id для прив'язки label
        {...hookForm}
      />
      <label className={`${styles.labelRadio}`} htmlFor={value}>
        <span className={styles.checkmark}></span>
        <div className={styles.labelContent}>
          {text}
          {/* Можливо, додати зображення */}
          {/* <img className={styles.cardImage} src={imageSrc} alt="card" /> */}
        </div>
      </label>
    </div>
  );
};

export default Radio;
