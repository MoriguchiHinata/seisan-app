import React from "react";
import styled from "styled-components";
import COLOR from "../../var/color";

export const Receipt = ({ name, date, paidby, num, target }) => {
  return (
    <Container>
      <Info>
        <Name>{name}</Name>
        <Date>{date}</Date>
        <Flow>
          {paidby} → {target}
        </Flow>
      </Info>
      <Num>{num}</Num>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Name = styled.div``;

const Date = styled.div`
  font-size: 8px;
  color: ${COLOR.GRAY};
`;

const Flow = styled.div`
  font-size: 10px;
`;

const Num = styled.div`
  font-size: 32px;
`;

export default Receipt;
