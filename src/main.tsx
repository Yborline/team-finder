import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.sass";
import "./i18next.js";
const applyTheme = () => {
  document.documentElement.classList.add("dark-theme");
  // const savedTheme = localStorage.getItem("theme");
  // if (savedTheme) {
  //   document.documentElement.classList.add(savedTheme);
  // } else {
  //   const systemDarkMode = window.matchMedia(
  //     "(prefers-color-scheme: dark)"
  //   ).matches;
  //   document.documentElement.classList.add(
  //     systemDarkMode ? "dark-theme" : "light-theme"
  //   );
  // }
};

applyTheme();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
