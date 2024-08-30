import { FC, useState } from "react";
import styles from "./InputModal.module.scss";
import { UseFormRegisterReturn } from "react-hook-form";

type inputType = "string" | "number" | "password";

interface IPropsInputModal {
  hookForm: UseFormRegisterReturn;
  // changeInput: () => void;
  // value: string;
  text: string;
  type?: inputType;
}

export const InputModal: FC<IPropsInputModal> = ({
  hookForm,

  text,
  type = "string",
}) => {
  return (
    <input
      {...hookForm}
      className={styles.inputMain}
      placeholder={text}
      // value={value}
      // onInput={changeInput}
      type={type}
    />
  );
};

export default InputModal;
