import { getLoading, getLoggedIn } from "@redux/auth/auth-selector";
import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface IPropsPrivateRouter {
  children: React.ReactNode;
}

const PrivateRoute: FC<IPropsPrivateRouter> = ({ children }) => {
  const isLoggedIn = useSelector(getLoggedIn);
  const isLoading = useSelector(getLoading);
  if (!isLoggedIn && !isLoading) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
