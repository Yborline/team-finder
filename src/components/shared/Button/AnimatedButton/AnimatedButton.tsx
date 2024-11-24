import { FC } from "react";
import styles from "./AnimatedButton.module.scss";
import { typeB } from "@interfaces/button";

interface IPropsRegularButton {
  type?: typeB;
  text: string;
  onClick?: () => void;
}

const AnimatedButton: FC<IPropsRegularButton> = ({
  type = "button",
  text,
  onClick,
}) => {
  return (
    <button type={type} onClick={onClick} className={styles.btn}>
      <strong>{text}</strong>
      <div className={styles.containerStars}>
        <div className={styles.stars}></div>
      </div>
      <div className={styles.glow}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </button>
  );
};

export default AnimatedButton;
