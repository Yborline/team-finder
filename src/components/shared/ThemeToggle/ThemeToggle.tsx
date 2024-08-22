const ThemeToggle = () => {
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
