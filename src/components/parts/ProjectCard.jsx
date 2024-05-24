import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import COLOR from "../../var/color";

export const HistoryCard = ({ name, timestamp, id }) => {
  return (
    <Container>
      <Card to={"/project/" + id}>
        <Name>{name}</Name>
        <TimeStamp>{timestamp}</TimeStamp>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  & :hover {
    background-color: ${COLOR.BACKGROUND_BLUE};
    transition: 0.1s;
  }
`;

const Card = styled(Link)`
  padding: 0 4px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: ${COLOR.BLACK};
  cursor: pointer;
`;

const Name = styled.div``;

const TimeStamp = styled.div``;

export default HistoryCard;
