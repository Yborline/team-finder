import { FaUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import styles from "./ButtonUser.module.scss";
import { Link } from "react-router-dom";

const ButtonUser = () => {
  // const nameUser = useSelector(getUserName);

  return (
    <Link to="/user">
      <IconContext.Provider value={{ className: styles.userButton }}>
        <FaUserCircle />
      </IconContext.Provider>
    </Link>
  );
};

export default ButtonUser;
