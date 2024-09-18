import React, { useEffect } from "react";
import useThemeStore from "@/app/store/theme-store";
import { Icon } from "@/components";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-white text-white rounded-md dark:bg-gray-800 dark:text-gray-200"
    >
      {theme === "light" ? (
        <Icon type="moon" className="text-black h-6" />
      ) : (
        <Icon type="sun" className="text-white h-auto" />
      )}
    </button>
  );
};

export default ThemeToggleButton;
