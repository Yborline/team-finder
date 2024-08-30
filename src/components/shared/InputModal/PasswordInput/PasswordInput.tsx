import { FC, useState } from "react";
import styles from "./PasswordInput.module.scss";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { IconContext } from "react-icons";
import { IPropsInputModal } from "interfaces/form";

const PasswordInput: FC<IPropsInputModal> = ({ hookForm, text }) => {
  const [passwordType, setPasswordType] = useState(true);

  const handleChangeType = () => {
    setPasswordType(!passwordType);
  };

  return (
    <div className={styles.inputContainer}>
      <input
        {...hookForm}
        className={styles.inputMain}
        placeholder={text}
        type={passwordType ? "password" : "text"}
      />

      <IconContext.Provider value={{ className: styles.iconEye }}>
        {passwordType ? (
          <FaEyeSlash onClick={handleChangeType} />
        ) : (
          <FaRegEye onClick={handleChangeType} />
        )}
      </IconContext.Provider>
    </div>
  );
};

export default PasswordInput;
