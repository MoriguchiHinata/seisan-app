import React, { useState } from "react";
import Header from "./parts/Header";
import Breadcrumb from "./parts/Breadcrumb";
import styled from "styled-components";
import CreateNewProjectButton from "./parts/CreateNewProjectButton";
import History from "./parts/History";
import CreateNewProject from "./parts/CreateNewProject";
import COLOR from "../var/color";

const Home = ({ projectList, addProjectList }) => {
  const [isCreating, setCreating] = useState(false);

  const handleClick = () => {
    setCreating(true);
  };

  const handleClose = () => {
    setCreating(false);
  };

  return (
    <Container>
      <Header />
      <Breadcrumb />
      {isCreating && (
        <Overlay>
          <CreateNewProject
            onClick={handleClose}
            addProjectList={addProjectList}
          />
        </Overlay>
      )}
      <Contents>
        面倒なお金のやり取りをお助けします。
        <CreateNewProjectButton onClick={handleClick} />
        <History projectList={projectList} />
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 0px;
  padding: 0px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${COLOR.OVERLAY};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const Contents = styled.div`
  padding: 20px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export default Home;
