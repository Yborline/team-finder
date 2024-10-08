import { FaUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import styles from "./ButtonUser.module.scss";

const ButtonUser = () => {
  // const nameUser = useSelector(getUserName);

  return (
    <IconContext.Provider value={{ className: styles.userButton }}>
      <FaUserCircle />
    </IconContext.Provider>
  );
};

export default ButtonUser;
