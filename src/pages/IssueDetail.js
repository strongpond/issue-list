import React from "react";
import styled from "styled-components";

import { Header, Detail } from "../components";

const IssueDetail = () => {
  return (
    <Container>
      <Header />
      <Detail />
    </Container>
  );
};

export default IssueDetail;

const Container = styled.div`
  ${({ theme }) => theme.flex("null", "center", "column")};
  height: 100vh;
  margin-top: 5%;
`;
