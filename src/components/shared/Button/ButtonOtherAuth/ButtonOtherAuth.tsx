import { FC, ReactNode } from "react";
import styles from "./ButtonOtherAuth.module.scss";

interface IButtonOtherAuth {
  text: string;
  onClick: () => void;
  children: ReactNode;
}

const ButtonOtherAuth: FC<IButtonOtherAuth> = ({ text, onClick, children }) => {
  return (
    <button onClick={onClick} className={styles.buttonOtherAuth}>
      {children}
      {text}
    </button>
  );
};

export default ButtonOtherAuth;
