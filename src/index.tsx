import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/global.css";
import { Main } from "./pages/main/main";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
