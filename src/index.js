import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import { ThemeProvider } from "./Contexts/ThemeContext";

const themeLightBlue = {
  name: "light-blue",
  palette: {
    primary: "#2E8BC0",
    lighter: "#B1D4E0",
    darker: "#0C2D48",
    lessDarker: "#145DA0",
  },
};

const themeLemonade = {
  name: "lemonade",
  palette: {
    primary: "#E1C340",
    lighter: "#4CD7D0",
    darker: "#A4E8E0",
    lessDarker: "#F8EA8C",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themeLemonade}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
