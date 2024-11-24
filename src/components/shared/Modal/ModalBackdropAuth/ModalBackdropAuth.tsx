import { FC, ReactNode } from "react";
import styles from "./ModalBackdropAuth.module.scss";
import { IconContext } from "react-icons";
import { IoCloseSharp } from "react-icons/io5";

interface IPropsModalAuth {
  close: () => void;
  children: ReactNode;
}

const ModalBackdropAuth: FC<IPropsModalAuth> = ({ close, children }) => {
  return (
    <div className={styles.boxAuth}>
      <IconContext.Provider value={{ className: styles.closeIcon }}>
        <IoCloseSharp onClick={close} />
      </IconContext.Provider>

      {children}
    </div>
  );
};

export default ModalBackdropAuth;
