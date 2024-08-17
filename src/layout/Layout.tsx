import { Outlet } from "react-router-dom";
import { Header } from "../components/widgets/Header/Header";
import { Footer } from "../components/widgets/Footer/Footer";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
