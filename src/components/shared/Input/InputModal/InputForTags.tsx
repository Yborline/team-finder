import { possibleClassN } from "@interfaces/form";
import styles from "./InputModal.module.scss";
import { FC, useState } from "react";

interface IPropsInputForTags {
  classN?: null | possibleClassN;
  placeholder: string;
  handleSaveWord: (value: string) => void;
}

const InputForTags: FC<IPropsInputForTags> = ({
  classN,
  placeholder,
  handleSaveWord,
}) => {
  const [value, setValue] = useState("");

  const handleChangeInput = (value: string) => {
    setValue(value.trim());
  };

  return (
    <div className={styles.inputContainer}>
      <div>
        <input
          className={`${styles.inputMain} ${classN ? styles[classN] : ""}`}
          placeholder={placeholder}
          type={"text"}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeInput(e.target.value)
          }
        />
        <button type="button" onClick={() => handleSaveWord(value)}>
          Додати
        </button>
      </div>
    </div>
  );
};

export default InputForTags;
