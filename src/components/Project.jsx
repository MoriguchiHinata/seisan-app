import React, { useEffect, useState } from "react";
import Header from "./parts/Header";
import Breadcrumb from "./parts/Breadcrumb";
import CreateNewReceipt from "./parts/CreateNewReceipt";
import Receipt from "./parts/Receipt";
import styled from "styled-components";
import COLOR from "../var/color";

export const Project = ({ projectName, date, projectId }) => {
  const [receiptList, setReceiptList] = useState([]);

  const RECEIPTLIST_STORAGE_KEY = "" + projectId;
  const DEFAULT_RECEIPT_LIST = [
    {
      name: "海鮮丼",
      date: "5/28 18:21",
      paidby: "森口",
      num: 100000,
      target: ["矢野", "斉藤", "相馬"],
    },
  ];

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
      <Contents>
        <ProjectName>{projectName}</ProjectName>
        <Date>{date}</Date>
        <CreateNewReceipt />
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
