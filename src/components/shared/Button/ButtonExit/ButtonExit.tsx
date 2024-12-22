import { FC, memo } from "react";
import { IconContext } from "react-icons";
import { ImExit } from "react-icons/im";
import styles from "./ButtonExit.module.scss";

interface IButtonExit {
  onClick: () => void;
}

const ButtonExit: FC<IButtonExit> = memo(({ onClick }) => {
  return (
    <IconContext.Provider value={{ className: styles.exitIcon }}>
      <ImExit onClick={onClick} />
    </IconContext.Provider>
  );
});

export default ButtonExit;
