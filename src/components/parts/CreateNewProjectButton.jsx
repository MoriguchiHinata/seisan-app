import React from "react";
import styled from "styled-components";
import plusImg from "../../icon/Plus.svg";
import COLOR from "../../var/color";

export const CreateNewProjectButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <img src={plusImg} alt="plus" />
      <Text>新規作成</Text>
    </Button>
  );
};

const Button = styled.button`
  margin: 0;
  background-color: ${COLOR.MAINTHEME};
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  & > img {
    margin-left: 4px;
    height: 80%;
    fill: ${COLOR.WHITE};
    position: absolute;
    left: 0;
  }
`;

const Text = styled.div`
  color: ${COLOR.WHITE};
  font-size: 16px;
`;

export default CreateNewProjectButton;
