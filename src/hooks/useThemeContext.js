import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";

function useThemeContext() {
  const { theme } = useContext(ThemeContext);
  return theme;
}

export default useThemeContext;
