import styles from "./Layout.module.scss";
import { Outlet } from "react-router-dom";
import Header from "../components/widgets/Header/Header";
import Footer from "../components/widgets/Footer/Footer";
import TostifyContainer from "@components/widgets/TostifyContainer/TostifyContainer";
import { useEffect } from "react";
import { useAppDispatch } from "@interfaces/redux";
import operationsAuth from "@redux/auth/auth-operations";

const Layout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(operationsAuth.fetchCurrentUser());
  });

  return (
    <div className={styles.projectBox}>
      <Header />
      <TostifyContainer />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
