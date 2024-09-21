import { FC, useState } from "react";
import styles from "./InputModal.module.scss";
import { UseFormRegisterReturn } from "react-hook-form";
import VisiblePassword from "../VisiblePassword/VisiblePassword";

type inputType = "text" | "number" | "password";
type possibleClassN = "transparent";

interface IPropsInputModal {
  hookForm: UseFormRegisterReturn;
  text: string;
  type?: inputType;
  repeatPassword?: boolean;
  classN?: null | possibleClassN;
}

export const InputModal: FC<IPropsInputModal> = ({
  hookForm,
  repeatPassword,
  text,
  type = "string",
  classN = null,
}) => {
  const [passwordType, setPasswordType] = useState(true);

  const handleChangeType = () => {
    setPasswordType(!passwordType);
  };

  const getTypeInput = () => {
    if (type === "password") {
      return passwordType ? "password" : "text";
    } else {
      return type;
    }
  };

  return (
    <div className={styles.inputContainer}>
      <input
        {...hookForm}
        className={`${styles.inputMain} ${classN ? styles[classN] : ""}`}
        placeholder={text}
        type={getTypeInput()}
        autoComplete={repeatPassword ? "new-password" : "on"}
      />
      {type === "password" && (
        <VisiblePassword
          password={passwordType}
          handleChange={handleChangeType}
        />
      )}
    </div>
  );
};

export default InputModal;
