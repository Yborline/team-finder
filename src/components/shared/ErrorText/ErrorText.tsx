import { AnimatePresence, motion } from "framer-motion";
import styles from "./ErrorText.module.scss";
import { FieldError } from "react-hook-form";
import { FC } from "react";

interface ErrorText {
  error?: FieldError;
}

const ErrorText: FC<ErrorText> = ({ error }) => {
  return (
    <AnimatePresence>
      {error && (
        <motion.p
          className={styles.errorP}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }} // Достаточно для большинства сообщений
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          role="alert"
        >
          {error.message}
        </motion.p>
      )}
    </AnimatePresence>
  );
};

export default ErrorText;
