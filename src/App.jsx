import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Project from "./components/Project";
import styled from "styled-components";

export const App = () => {
  const [projectList, setProjectList] = useState([]);
  const PROJECTS_KEY = "projects-key";
  const DEFAULT_PROJECT_LIST = [];

  useEffect(() => {
    const storedProjectList = localStorage.getItem(PROJECTS_KEY);
    if (storedProjectList === null) {
      setProjectList(DEFAULT_PROJECT_LIST);
    } else {
      setProjectList(JSON.parse(storedProjectList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(projectList));
  }, [projectList]);

  const addProjectList = (project) => {
    setProjectList([...projectList, project]);
  };

  return (
    <Container>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home projectList={projectList} addProjectList={addProjectList} />
          }
        />
        {projectList.map((project, _) => (
          <Route
            exact
            path={"/project/" + project.id}
            element={
              <Project
                projectName={project.projectName}
                date={project.date}
                projectId={project.id}
              />
            }
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
