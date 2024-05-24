import React from "react";
import styled from "styled-components";
import COLOR from "../../var/color";

export const Receipt = ({ name, date, paidby, num, target }) => {
  return (
    <Container>
      <Wrapper>
        <Info>
          <Name>{name}</Name>
          <Date>{date}</Date>
          <Flow>
            {paidby} → {target.map((name, _) => name + " ")}
          </Flow>
        </Info>
        <Num>{num}</Num>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  & :hover {
    background-color: ${COLOR.BACKGROUND_BLUE};
    transition: 0.1s;
  }
`;

const Wrapper = styled.div`
  padding: 2px 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const Name = styled.div``;

const Date = styled.div`
  font-size: 8px;
`;

const Flow = styled.div`
  font-size: 10px;
`;

const Num = styled.div`
  font-size: 32px;
`;

export default Receipt;
