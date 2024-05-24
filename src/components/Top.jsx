import React from "react";
import Header from "./parts/Header";
import Breadcrumb from "./parts/Breadcrumb";
import styled from "styled-components";
import CreateNewProject from "./parts/CreateNewProject";
import History from "./parts/History";

const Top = ({ projectList }) => {
  return (
    <Container>
      <Header />
      <Breadcrumb />
      <Contents>
        面倒なお金のやり取りをお助けします。
        <CreateNewProject />
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

const Contents = styled.div`
  padding: 20px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export default Top;
