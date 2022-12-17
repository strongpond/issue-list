import React from "react";
import styled from "styled-components";
import { Header, List } from "../components";

const IssueList = () => {
  return (
    <Container>
      <Header />
      <List />
    </Container>
  );
};

export default IssueList;

const Container = styled.div`
  ${({ theme }) => theme.flex("null", "center", "column")};
  height: 100vh;
  margin-top: 3%;
`;
