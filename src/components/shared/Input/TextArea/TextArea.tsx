import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./TextArea.module.scss";
import { FC } from "react";

interface IPropsTextArea {
  hookForm: UseFormRegisterReturn;
  placeholder: string;
}

const TextArea: FC<IPropsTextArea> = ({ hookForm, placeholder }) => {
  return (
    <textarea
      {...hookForm}
      placeholder={placeholder}
      className={styles.textArea}
    ></textarea>
  );
};

export default TextArea;
