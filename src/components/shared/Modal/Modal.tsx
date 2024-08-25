import { FC, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

interface IModalProps {
  close: () => void;
  children: React.ReactNode;
}

const modalRoot = document.getElementById("modal-root") as HTMLDivElement;

const Modal: FC<IModalProps> = ({ close, children }) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Escape") {
      close();
    }
  };

  const handleBackdropClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.currentTarget === e.target) {
      close();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    document.getElementsByTagName("body")[0].style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    };
  });

  return createPortal(
    <div className={styles.backdrop} onClick={(e) => handleBackdropClick(e)}>
      {children}
    </div>,
    modalRoot
  );
};

export default Modal;
