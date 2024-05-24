import React from "react";
import Top from "./components/Top";
import { Routes, Route } from "react-router-dom";
import "./style.css";
import Project from "./components/Project";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/project" element={<Project />} />
        <Route path="*" />
      </Routes>
    </div>
  );
};

export default App;
