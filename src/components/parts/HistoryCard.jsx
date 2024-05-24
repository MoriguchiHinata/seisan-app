import React from "react";
import styled from "styled-components";

export const HistoryCard = ({ name, timestamp }) => {
  return (
    <Card>
      <Name>{name}</Name>
      <TimeStamp>{timestamp}</TimeStamp>
    </Card>
  );
};

const Card = styled.div`
  padding: 0 4px;
  height: 20px;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.a``;

const TimeStamp = styled.div``;

export default HistoryCard;
