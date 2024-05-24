import React from "react";
import Header from "./parts/Header";
import Navi from "./parts/Navi";
import styled from "styled-components";

const Top = () => {
  return (
    <Container>
      <Header />
      <Navi />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 0px;
  padding: 0px;
`;

export default Top;
