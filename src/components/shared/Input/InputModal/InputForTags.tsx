import { possibleClassN } from "@interfaces/form";
import styles from "./InputModal.module.scss";
import { FC, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { notify } from "@components/widgets/Tostify/Tostify";

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
  const handleSaveTag = () => {
    if (value === "") {
      notify("info", "Введіть ваш тег");
      return;
    }
    setValue("");
    handleSaveWord(value);
  };
  return (
    <div className={`${styles.inputContainer} ${styles.flexRow}`}>
      <input
        value={value}
        className={`${styles.inputMain} ${classN ? styles[classN] : ""}`}
        placeholder={placeholder}
        type={"text"}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChangeInput(e.target.value)
        }
      />
      <IconContext.Provider value={{ className: styles.buttonAdd }}>
        <IoAddCircleOutline onClick={handleSaveTag} />
      </IconContext.Provider>

      {/* <button type="button" onClick={handleSaveTag}>
          Додати
        </button> */}
    </div>
  );
};

export default InputForTags;
