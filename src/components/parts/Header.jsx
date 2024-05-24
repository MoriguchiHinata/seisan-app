import React from "react";
import styled from "styled-components";
import COLOR from "../../var/color";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Title to="/">清算アプリ</Title>
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

  & > Link {
    color: ${COLOR.WHITE};
    font-size: 24px;
  }
`;

const Title = styled(Link)`
  color: ${COLOR.WHITE};
  font-size: 24px;
  text-decoration: none;
`;

export default Header;
