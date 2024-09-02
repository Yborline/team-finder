import { FC, useState } from "react";
import styles from "./InputModal.module.scss";
import { UseFormRegisterReturn } from "react-hook-form";
import VisiblePassword from "../VisiblePassword/VisiblePassword";

type inputType = "text" | "number" | "password";

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
        className={styles.inputMain}
        placeholder={text}
        // value={value}
        // onInput={changeInput}
        type={getTypeInput()}
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
