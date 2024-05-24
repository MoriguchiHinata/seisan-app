import React from "react";
import Top from "./components/Top";
import { Routes, Route } from "react-router-dom";
import Project from "./components/Project";
import styled from "styled-components";

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Container>
  );
};

const Container = styled.div`
  max-width: 400px;
`;

export default App;
