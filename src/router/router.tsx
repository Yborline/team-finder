import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Home } from "../pages/Home/Home";
import TeamList from "@pages/TeamList/TeamList";
import Post from "@pages/TeamList/Post/Post";

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
      {
        path: "/team/:id",
        element: <Post />, // Отдельная страница Post, но с общим родителем по пути
      },
    ],
  },
]);
