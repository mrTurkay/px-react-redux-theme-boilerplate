import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import { ThemeProvider } from "./contexts/ThemeContext";
import { themeLemonade } from "./styles/themes/themeLemonade";
import store from "./store";
import { Provider } from "react-redux";
import { themeLightBlue } from "./styles/themes/themeLightBlue";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themeLemonade}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
