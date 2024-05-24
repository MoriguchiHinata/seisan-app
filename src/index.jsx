import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter, Route } from "react-router-dom";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Route exact path="/" element={<App />} />
    </HashRouter>
  </React.StrictMode>
);
