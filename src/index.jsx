import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
