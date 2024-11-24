import { FC } from "react";
import styles from "./SocialsButton.module.scss";

interface ISocialsButton {
  text: string;
  img: string;
  onClick: () => void;
}

const SocialsButton: FC<ISocialsButton> = ({ text, img, onClick }) => {
  return (
    <button type="button" className={styles.buttonSocials} onClick={onClick}>
      <img className={styles.imgSocials} src={img} /> {text}
    </button>
  );
};

export default SocialsButton;
