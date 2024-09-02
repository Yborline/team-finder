import { FC } from "react";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { IconContext } from "react-icons";
import styles from "./VisiblePassword.module.scss";

interface IPropsVisible {
  password: boolean;
  handleChange: () => void;
}

const VisiblePassword: FC<IPropsVisible> = ({ password, handleChange }) => {
  return (
    <IconContext.Provider value={{ className: styles.iconEye }}>
      {password ? (
        <FaEyeSlash onClick={handleChange} />
      ) : (
        <FaRegEye onClick={handleChange} />
      )}
    </IconContext.Provider>
  );
};

export default VisiblePassword;
