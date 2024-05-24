import React from "react";
import historyImg from "../../icon/History.svg";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";
import COLOR from "../../var/color";

export const History = ({ projectList }) => {
  return (
    <Container>
      <HistoryHeading>
        <img src={historyImg} alt="history" />
        <Text>履歴</Text>
      </HistoryHeading>
      <HistoryTable>
        <HistoryTitle>
          <Text>旅行名</Text>
          <Text>最終更新日</Text>
        </HistoryTitle>
        <Line />
        <List>
          {projectList.map((project, _) => (
            <ProjectCard
              name={project.name}
              timestamp={project.date}
              id={project.id}
            />
          ))}
        </List>
      </HistoryTable>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const HistoryHeading = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 8px;
  & > img {
    height: 80%;
  }
`;

const Text = styled.div``;

const HistoryTable = styled.div``;

const HistoryTitle = styled.div`
  padding: 0 4px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Line = styled.hr`
  color: ${COLOR.BACKGROUND_GRAY};
  width: 100%;
`;

const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default History;
