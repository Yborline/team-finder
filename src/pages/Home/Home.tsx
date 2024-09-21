import styles from "./Home.module.scss";
import line from "@assets/img/home/line.png";
import meepoMob from "@assets/img/home/leftView/leftPersons/meepo/meepoMob.png";
import meepo from "@assets/img/home/leftView/leftPersons/meepo/meepo.png";
import meepo3k from "@assets/img/home/leftView/leftPersons/meepo/meepo3k.png";
import gtaMob from "@assets/img/home/leftView/leftPersons/gta/gtaMob.png";
import gta from "@assets/img/home/leftView/leftPersons/gta/gta.png";
import gta3k from "@assets/img/home/leftView/leftPersons/gta/gta3k.png";
import stalkerMob from "@assets/img/home/rightView/rightPersons/stalker/stalkerMob.png";
import stalker from "@assets/img/home/rightView/rightPersons/stalker/stalker.png";
import stalker3k from "@assets/img/home/rightView/rightPersons/stalker/stalker3k.png";
import WukongMob from "@assets/img/home/rightView/rightPersons/wukong/WukongMob.png";
import Wukong from "@assets/img/home/rightView/rightPersons/wukong/Wukong.png";
import Wukong3k from "@assets/img/home/rightView/rightPersons/wukong/Wukong3k.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLoggedIn } from "@redux/auth/auth-selector";
import { AppDispatch, useAppDispatch } from "@interfaces/redux";
import { setModal } from "@redux/modal/modal-slice";

export const Home = () => {
  const isLoggedIn = useSelector(getLoggedIn);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch<AppDispatch>();
  const handleClickCreate = () => {
    const currentPath = location.pathname;

    if (!isLoggedIn) {
      dispatch(setModal("login"));
    } else {
      navigate(`${currentPath}create`);
    }
  };

  return (
    <div className={styles.mainHome}>
      <Link to={"/team"} className={styles.leftView}>
        <img
          src={meepoMob}
          srcSet={`
              ${meepoMob} 1020w,
              ${meepo} 1920w,
              ${meepo3k} 4000w,
          `}
          className={styles.meepo}
          alt="meepo"
        />
        <p className={`${styles.textLeft} ${styles.textSelect}`}>
          Пошук команди
        </p>
        <img
          src={gtaMob}
          srcSet={`
              ${gtaMob} 1020w,
              ${gta} 1920w,
              ${gta3k} 4000w,
          `}
          className={styles.gta}
          alt="gta"
        />
        {/* <img className={styles.gta} alt="gta" /> */}
      </Link>
      <img className={styles.line} src={line} alt="line" />
      <button
        // to={"/create"}
        onClick={handleClickCreate}
        className={styles.rightView}
      >
        <img
          src={stalkerMob}
          srcSet={`
              ${stalkerMob} 1020w,
              ${stalker} 1920w,
              ${stalker3k} 4000w,
          `}
          className={styles.stalker}
          alt="stalker"
        />
        <p className={`${styles.textRight} ${styles.textSelect}`}>
          Створити пост
        </p>
        <img
          src={WukongMob}
          srcSet={`
              ${WukongMob} 1020w,
              ${Wukong} 1920w,
              ${Wukong3k} 4000w,
          `}
          className={styles.wukongMob}
          alt="Wukong"
        />
      </button>
    </div>
  );
};
