import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import COLOR from "../../var/color";

export const Navi = () => {
  return (
    <Container>
      <Link to="/">Top</Link>＞
    </Container>
  );
};

const Container = styled.div`
  background-color: ${COLOR.BACKGROUND_GRAY};
  width: 100%;
  padding: 4px 12px;
`;

export default Navi;
