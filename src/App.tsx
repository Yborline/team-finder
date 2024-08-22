import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { Suspense } from "react";
// import { useTranslation } from "react-i18next";

function App() {
  // const { t, i18n } = useTranslation();
  return (
    <Suspense fallback="...loading">
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
