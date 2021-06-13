import { useContext } from "react";
import useThemeContext from "../hooks/useThemeContext";

function App() {
  const theme = useThemeContext();
  return (
    <div>
      <h2 style={{ backgroundColor: theme.palette.primary }}>
        Kodluyoruz Boilerplate
      </h2>
    </div>
  );
}

export default App;
