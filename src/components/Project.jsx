import React, { useEffect, useState } from "react";
import Header from "./parts/Header";
import Breadcrumb from "./parts/Breadcrumb";
import CreateNewReceipt from "./parts/CreateNewReceipt";
import CreateNewReceiptButton from "./parts/CreateNewReceiptButton";
import Receipt from "./parts/Receipt";
import styled from "styled-components";
import COLOR from "../var/color";

export const Project = ({ projectName, date, memberList, projectId }) => {
  const [receiptList, setReceiptList] = useState([]);
  const [isWriting, setWriting] = useState(false);

  const RECEIPTLIST_STORAGE_KEY = "" + projectId;
  const DEFAULT_RECEIPT_LIST = [];

  const handleClick = () => {
    setWriting(true);
  };

  const handleClose = () => {
    setWriting(false);
  };

  const addReceiptList = (receipt) => {
    setReceiptList([...receiptList, receipt]);
  };

  useEffect(() => {
    const storedReceiptList = localStorage.getItem(RECEIPTLIST_STORAGE_KEY);
    if (storedReceiptList === null) {
      setReceiptList(DEFAULT_RECEIPT_LIST);
    } else {
      setReceiptList(JSON.parse(storedReceiptList));
    }
  }, []);

  return (
    <Container>
      <Header />
      <Breadcrumb />
      {isWriting && (
        <Overlay>
          <CreateNewReceipt
            memberList={memberList}
            onClick={handleClose}
            addReceiptList={addReceiptList}
          />
        </Overlay>
      )}
      <Contents>
        <ProjectName>{projectName}</ProjectName>
        <Date>{date}</Date>
        <CreateNewReceiptButton onClick={handleClick} />
        <List>
          {receiptList.map((receipt, _) => (
            <Receipt
              name={receipt.name}
              date={receipt.date}
              paidby={receipt.paidby}
              num={receipt.num}
              target={receipt.target}
            />
          ))}
        </List>
      </Contents>
    </Container>
  );
};

const Container = styled.div``;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${COLOR.OVERLAY};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const Contents = styled.div`
  margin: 24px 0;
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ProjectName = styled.div`
  font-size: 24px;
  text-align: center;
`;

const Date = styled.div`
  font-size: 8px;
  color: ${COLOR.GRAY};
  text-align: right;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default Project;
