import React from "react";
import ReactDOM from "react-dom/client";
import Top from "./components/Top";
import { BrowserRouter } from "react-router-dom";
import "./style.css";
import Project from "./components/Project";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <Top /> */}
    <Project />
  </BrowserRouter>
);
