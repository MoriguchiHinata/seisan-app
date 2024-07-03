import React from "react";
import styled from "styled-components";
import Close from "../../icon/Close.svg";
import COLOR from "../../var/color";

const CreateNewReceipt = ({ memberList, onClick, addReceiptList }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const receiptName = form.get("receiptName");
    var d = new Date();
    const date = `${
      d.getMonth() + 1
    }/${d.getDate()} ${d.getHours()}:${d.getMinutes()}`;
    const paidby = form.get("paidby");
    const num = form.get("num");
    const selectedMembers = memberList
      .filter((member) => form.get(member.name) === "on")
      .map((member) => member.name);

    addReceiptList({
      name: receiptName,
      date: date,
      paidby: paidby,
      num: num,
      target: selectedMembers,
    });

    onClick();
  };

  return (
    <Container>
      <CloseButton onClick={onClick}>
        <img src={Close} alt="閉じる" />
      </CloseButton>
      <Title>～新規レシート～</Title>
      <SForm onSubmit={handleSubmit}>
        <SLabel>
          レシート名　
          <SInput type="text" name="receiptName" />
        </SLabel>
        <SLabel>
          立替人　
          <SSelect name="paidby">
            <SOption value="">選択してください</SOption>
            {memberList.map((member, _) => (
              <SOption>{member.name}</SOption>
            ))}
          </SSelect>
        </SLabel>
        <SLabel>
          金額　
          <SInput type="number" name="num" />円
        </SLabel>
        <SLabel>
          請求先　
          {memberList.map((member, _) => (
            <SLabel>
              <SInput type="checkbox" name={member.name} />
              {member.name}　
            </SLabel>
          ))}
        </SLabel>
        <SLabel>
          <SInput type="submit" value="作成" />
        </SLabel>
      </SForm>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${COLOR.WHITE};
  width: 95%;
  padding: 4px 4px;
  display: flex;
  flex-direction: column;
  z-index: 2;
  position: relative;
`;

const CloseButton = styled.button`
  padding: 0;
  background-color: ${COLOR.WHITE};
  border: none;
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;

  & > img {
    width: 80%;
  }
`;

const Title = styled.div`
  text-align: center;
`;

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SLabel = styled.label``;

const SInput = styled.input``;

const SSelect = styled.select``;

const SOption = styled.option``;

export default CreateNewReceipt;
