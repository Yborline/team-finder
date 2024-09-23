import { FC } from "react";
import styles from "./ButtonAuth.module.scss";
import { typeB } from "@interfaces/button";

interface IButtonAuth {
  text: string;
  type: typeB;
}

const ButtonAuth: FC<IButtonAuth> = ({ text, type = "submit" }) => {
  return (
    <button className={styles.btnRegister} type={type}>
      {text}
    </button>
  );
};

export default ButtonAuth;
