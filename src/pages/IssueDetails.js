import React from "react";
import styled from "styled-components";
import { Header } from "../components";

const IssueDetails = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default IssueDetails;

const Container = styled.div`
  ${({ theme }) => theme.flex("null", "center", "column")};
  height: 100vh;
  margin-top: 5%;
`;
