import React, { FC } from "react";
import styles from "./ButtonStandart.module.scss";

interface IButtonStandart {
  onClick: () => void;
  children: string;
}

const ButtonStandart: FC<IButtonStandart> = ({ onClick, children }) => {
  return (
    <button className={styles.buttonStandart} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonStandart;
