import React from "react";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";

import styled from "styled-components";
import { issueListDataAtom, issueSelectedAtom } from "../atoms";

const Header = () => {
  const navigate = useNavigate();
  const setIssueListData = useSetRecoilState(issueListDataAtom);
  const [issueSelected, setIssueSelected] = useRecoilState(issueSelectedAtom);

  const goToMain = () => {
    setIssueListData([]);
    setIssueSelected([]);
    navigate("/");
  };

  return (
    <HeadWrapper>
      {issueSelected.length !== 0 && (
        <BsFillCaretLeftFill className="logo" onClick={goToMain} />
      )}
      <Head>angular/angular-cli</Head>
    </HeadWrapper>
  );
};

export default Header;

const HeadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  min-width: 50vw;
  border: 1px solid black;

  .logo {
    margin-right: 5%;
  }
`;

const Head = styled.div`
  font-size: x-large;
`;
