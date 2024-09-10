import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Home } from "../pages/Home/Home";
import TeamList from "@pages/TeamList/TeamList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/team",
        element: <TeamList />,
      },
    ],
  },
]);
