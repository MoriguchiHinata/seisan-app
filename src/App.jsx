import React, { useEffect, useState } from "react";
import Top from "./components/Top";
import { Routes, Route } from "react-router-dom";
import Project from "./components/Project";
import styled from "styled-components";

export const App = () => {
  const [projectList, setProjectList] = useState([]);
  const PROJECTS_KEY = "projects-key";
  const DEFAULT_PROJECT_LIST = [
    { name: "熱海旅行", date: "2024/5/28", id: 12345 },
  ]; // デバッグ用

  useEffect(() => {
    const storedProjectList = localStorage.getItem(PROJECTS_KEY);
    if (storedProjectList === null) {
      setProjectList(DEFAULT_PROJECT_LIST);
    } else {
      setProjectList(JSON.parse(storedProjectList));
    }
  }, []);

  return (
    <Container>
      <Routes>
        <Route exact path="/" element={<Top projectList={projectList} />} />
        {projectList.map((project, _) => (
          <Route
            path={"/project/" + project.id}
            element={<Project projectId={project.id} />}
          />
        ))}
      </Routes>
    </Container>
  );
};

const Container = styled.div`
  max-width: 400px;
`;

export default App;
