import React from "react";
import styled from "styled-components";
import COLOR from "../../var/color";

const Header = () => {
  return (
    <Container>
      <Title>清算アプリ</Title>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${COLOR.MAINTHEME};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  color: ${COLOR.WHITE};
  font-size: 24px;
`;

export default Header;
