import { FC } from "react";
import styles from "./InputModal.module.scss";

interface IPropsInputModal {
  changeInput: () => void;
  value: string;
  text: string;
}

export const InputModal: FC<IPropsInputModal> = ({
  changeInput,
  value,
  text,
}) => {
  return (
    <input
      className={styles.inputMain}
      placeholder={text}
      value={value}
      onInput={changeInput}
    ></input>
  );
};

export default InputModal;
