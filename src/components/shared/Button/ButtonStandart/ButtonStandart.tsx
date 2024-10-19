import React, { FC } from "react";
import styles from "./ButtonStandart.module.scss";

interface IButtonStandart {
  type?: "button" | "submit";
  onClick?: () => void;
  children: string;
}

const ButtonStandart: FC<IButtonStandart> = ({
  onClick,
  children,
  type = "button",
}) => {
  return (
    <button type={type} className={styles.buttonStandart} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonStandart;
