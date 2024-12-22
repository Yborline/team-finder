import { useEffect, useState } from "react";
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
import { useTranslation } from "react-i18next";
import { preloadImages } from "@utils/preloadImages";
import LoaderPage from "@pages/LoaderPage/LoaderPage";

const imageUrls = [
  meepoMob,
  meepo,
  meepo3k,
  gtaMob,
  gta,
  gta3k,
  stalkerMob,
  stalker,
  stalker3k,
  WukongMob,
  Wukong,
  Wukong3k,
];

const Home = () => {
  const { t } = useTranslation();
  const isLoggedIn = useSelector(getLoggedIn);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch<AppDispatch>();

  const [loading, setLoading] = useState(true);

  const handleClickCreate = () => {
    const currentPath = location.pathname;

    if (!isLoggedIn) {
      dispatch(setModal("login"));
    } else {
      navigate(`${currentPath}create`);
    }
  };

  useEffect(() => {
    preloadImages(imageUrls)
      .then(() => setLoading(false))
      .catch((error: any) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <LoaderPage />}
      <div className={styles.mainHome}>
        <Link to={"/team"} className={styles.leftView}>
          <img
            src={meepoMob}
            srcSet={`${meepoMob} 1020w, ${meepo} 1920w, ${meepo3k} 4000w`}
            className={styles.meepo}
            alt="meepo"
          />
          <p className={`${styles.textLeft} ${styles.textSelect}`}>
            {t("home.teamSearch")}
          </p>
          <img
            src={gtaMob}
            srcSet={`${gtaMob} 1020w, ${gta} 1920w, ${gta3k} 4000w`}
            className={styles.gta}
            alt="gta"
          />
        </Link>
        <img className={styles.line} src={line} alt="line" />
        <button onClick={handleClickCreate} className={styles.rightView}>
          <img
            src={stalkerMob}
            srcSet={`${stalkerMob} 1020w, ${stalker} 1920w, ${stalker3k} 4000w`}
            className={styles.stalker}
            alt="stalker"
          />
          <p className={`${styles.textRight} ${styles.textSelect}`}>
            {t("home.createAPost")}
          </p>
          <img
            src={WukongMob}
            srcSet={`${WukongMob} 1020w, ${Wukong} 1920w, ${Wukong3k} 4000w`}
            className={styles.wukongMob}
            alt="Wukong"
          />
        </button>
      </div>
    </>
  );
};

export default Home;
