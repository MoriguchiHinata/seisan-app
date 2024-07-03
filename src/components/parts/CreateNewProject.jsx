import React, { useState } from "react";
import styled from "styled-components";
import Close from "../../icon/Close.svg";
import Plus from "../../icon/Plus.svg";
import COLOR from "../../var/color";

export const CreateNewProject = ({ onClick, addProjectList }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const projectName = form.get("projectName");
    const startDate = form.get("startDate");
    const endDate = form.get("endDate");

    let temp = [];
    temp = memberList.map(
      (member, index) => (member.name = "" + form.get("member" + index))
    );
    setMemberList(temp);

    let d = new Date();

    addProjectList({
      projectName: projectName,
      date: startDate.replace(/-/g, "/") + " - " + endDate.substring(8),
      memberList: memberList,
      id: d.getTime(),
    });

    onClick();
  };

  const [memberNum, setMemberNum] = useState(2);
  const [memberList, setMemberList] = useState([{ name: "" }, { name: "" }]);

  const addMember = () => {
    setMemberList([...memberList, { name: "" }]);
    setMemberNum(memberNum + 1);
  };

  return (
    <Container>
      <CloseButton onClick={onClick}>
        <img src={Close} alt="閉じる" />
      </CloseButton>
      <Title>-　新規作成　-</Title>
      <SForm onSubmit={handleSubmit}>
        <SLabel>
          旅行名　
          <SInput type="text" name="projectName" />
        </SLabel>
        <SLabel>
          期間
          <div>
            <SInput type="date" name="startDate" />
            　～　
            <SInput type="date" name="endDate" />
          </div>
        </SLabel>
        <SLabel>
          メンバー
          {memberList.map((member, index) => (
            <SInput type="text" name={"member" + index} />
          ))}
          <AddButton type="button" onClick={addMember}>
            <img src={Plus} alt="追加" />
          </AddButton>
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

const AddButton = styled.button`
  background-color: ${COLOR.WHITE};
  border: 0;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 80%;
  }
`;

export default CreateNewProject;
