import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { Suspense } from "react";
import { store } from "@redux/store";
import { Provider } from "react-redux";
// import { useTranslation } from "react-i18next";

function App() {
  // const { t, i18n } = useTranslation();
  return (
    <Provider store={store}>
      <Suspense fallback="...loading">
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  );
}

export default App;
