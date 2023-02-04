import React from "react";
import styled from "styled-components";

const Header = () => {
  return <Head>angular/angular-cli</Head>;
};

export default Header;

const Head = styled.h1`
  ${({ theme }) => theme.flex("center", "center", null)};
  padding: 30px;
  min-width: 50vw;
  border: 1px solid black;
  font-size: x-large;
`;
