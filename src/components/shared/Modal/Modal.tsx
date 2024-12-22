import React, { FC, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";
import { motion } from "framer-motion";

interface IModalProps {
  close: () => void;
  children: React.ReactNode;
}

const modalRoot = document.getElementById("modal-root") as HTMLDivElement;

const Modal: FC<IModalProps> = React.memo(({ close, children }) => {
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
    <motion.div
      key="backdropModal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={styles.backdrop}
      onClick={(e) => handleBackdropClick(e)}
    >
      {children}
    </motion.div>,
    modalRoot
  );
});

export default Modal;
