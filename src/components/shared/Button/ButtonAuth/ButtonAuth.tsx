import { FC } from "react";
import styles from "./ButtonAuth.module.scss";

type type = "submit" | "button";

interface IButtonAuth {
  text: string;
  type: type;
}

const ButtonAuth: FC<IButtonAuth> = ({ text, type = "submit" }) => {
  return (
    <button className={styles.btnRegister} type={type}>
      {text}
    </button>
  );
};

export default ButtonAuth;
