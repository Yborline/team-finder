import React, { useEffect } from "react";

const ThemeToggle = () => {
  useEffect(() => {
    // Перевіряємо, чи є збережена тема в LocalStorage
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      document.documentElement.classList.add(savedTheme);
    } else {
      // Встановлюємо тему на основі системних налаштувань
      const systemDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.documentElement.classList.add(
        systemDarkMode ? "dark-theme" : "light-theme"
      );
    }
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark-theme");
    if (isDark) {
      document.documentElement.classList.remove("light-theme");
      localStorage.setItem("theme", "dark-theme");
    } else {
      document.documentElement.classList.add("light-theme");
      localStorage.setItem("theme", "light-theme");
    }
  };

  return <button onClick={toggleTheme}>Змінити тему</button>;
};

export default ThemeToggle;
