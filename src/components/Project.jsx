import React from "react";
import Header from "./parts/Header";
import Navi from "./parts/Navi";
import CreateNewReceipt from "./parts/CreateNewReceipt";
import Receipt from "./parts/Receipt";
import styled from "styled-components";
import COLOR from "../var/color";

export const Project = () => {
  return (
    <Container>
      <Header />
      <Navi />
      <Contents>
        <ProjectName>熱海旅行</ProjectName>
        <Date>2023/5/28 - 30</Date>
        <CreateNewReceipt />
        <List>
          <Receipt
            name={"海鮮丼"}
            date={"5/28 18:21"}
            paidby={"森口"}
            num={10000}
            target={["矢野", "斉藤", "相馬"]}
          />
        </List>
      </Contents>
    </Container>
  );
};

const Container = styled.div``;

const Contents = styled.div`
  margin: 24px 0;
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ProjectName = styled.div`
  font-size: 24px;
  text-align: center;
`;

const Date = styled.div`
  font-size: 8px;
  color: ${COLOR.GRAY};
  text-align: right;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Project;
