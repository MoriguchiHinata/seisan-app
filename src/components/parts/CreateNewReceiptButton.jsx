import React from "react";
import styled from "styled-components";
import plusImg from "../../icon/Plus.svg";
import COLOR from "../../var/color";

export const CreateNewReceiptButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <img src={plusImg} alt="plus" />
      <Text>レシートを追加</Text>
    </Button>
  );
};

const Button = styled.button`
  background-color: ${COLOR.MAINTHEME};
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 4px;

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

export default CreateNewReceiptButton;
