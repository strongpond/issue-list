import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { useFetch } from "../../hooks";

export const Detail = () => {
  //필요한 내용 => number, title, user.login, created_at, user.avatar_url, comments, body
  return (
    <Container>
      <HeaderBox>
        <ProfileBox>
          <ProfileImg />
        </ProfileBox>
        <TitleContentBox>
          <TitleMainBox>
            <Title>#이슈번호 이슈제목</Title>
            <IssueInfo>작성자: 작성일: </IssueInfo>
          </TitleMainBox>
          <CommentCount>코멘트: </CommentCount>
        </TitleContentBox>
      </HeaderBox>
      <ContentBox>
        <IssueBody>본문</IssueBody>
      </ContentBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  min-width: 50vw;
  padding: 30px;
  border: 1px solid black;
`;

const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid gray;
`;

const ProfileBox = styled.div`
  min-width: 50px;
  min-height: 50px;
  margin-right: 20px;
  border: 1px solid red;
`;

const ProfileImg = styled.img``;

const TitleContentBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TitleMainBox = styled.div``;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
`;

const IssueInfo = styled.h2`
  margin-top: 10px;
`;

const CommentCount = styled.h2``;

const ContentBox = styled.div`
  margin-top: 40px;
`;

const IssueBody = styled.div``;
