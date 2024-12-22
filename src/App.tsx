import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { Suspense } from "react";
import store from "@redux/store";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import LoaderPage from "@pages/LoaderPage/LoaderPage";

// import { useTranslation } from "react-i18next";

function App() {
  // const { t, i18n } = useTranslation();
  const googleId = import.meta.env.VITE_GOOGLE_CLIENTID!;

  // const googleId = `384010096834-b2nqf1gfe13v90nfiglkqcpgd0a73deh.apps.googleusercontent.com`;
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={googleId}>
        {/* <Suspense fallback={<LoaderPage />}> */}
        <RouterProvider router={router} />
        {/* </Suspense> */}
      </GoogleOAuthProvider>
    </Provider>
  );
}

export default App;
