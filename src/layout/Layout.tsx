import styles from "./Layout.module.scss";
import { Outlet } from "react-router-dom";
import { Header } from "../components/widgets/Header/Header";
import { Footer } from "../components/widgets/Footer/Footer";

export const Layout = () => {
  return (
    <div className={styles.projectBox}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
