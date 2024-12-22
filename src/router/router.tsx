import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";

// import Post from "@pages/TeamList/Post/Post";

import PrivateRoute from "./PrivateRoute";

import { lazyLoadRoutes } from "./LazyLoadRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: lazyLoadRoutes("Home"),
      },
      {
        path: "/team",
        element: lazyLoadRoutes("TeamList"),
      },

      {
        path: "/create",
        element: <PrivateRoute>{lazyLoadRoutes("Create")}</PrivateRoute>,
      },
      {
        path: "/user",
        element: <PrivateRoute>{lazyLoadRoutes("UserPage")}</PrivateRoute>,
      },
    ],
  },
]);
