import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));

  useEffect(() => {
    //   document.body.className = "";
    //  document.body.classList.add(theme);
  }, [theme]);

  return [theme, toggleTheme];
};

// Change dark and light theme
