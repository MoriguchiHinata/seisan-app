import React from "react";
import Header from "./parts/Header";
import Navi from "./parts/Navi";
import styled from "styled-components";
import CreateNew from "./parts/CreateNew";
import History from "./parts/History";

const Top = () => {
  return (
    <Container>
      <Header />
      <Navi />
      <Contents>
        面倒なお金のやり取りをお助けします。
        <CreateNew />
        <History />
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
