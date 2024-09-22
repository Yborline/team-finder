import styles from "./Layout.module.scss";
import { Outlet } from "react-router-dom";
import { Header } from "../components/widgets/Header/Header";
import { Footer } from "../components/widgets/Footer/Footer";
import TostifyContainer from "@components/widgets/TostifyContainer/TostifyContainer";

export const Layout = () => {
  return (
    <div className={styles.projectBox}>
      <Header />
      <TostifyContainer />
      <Outlet />
      <Footer />
    </div>
  );
};
