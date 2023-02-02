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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const HeaderBox = styled.div``;

const ProfileBox = styled.div``;

const ProfileImg = styled.img``;

const TitleContentBox = styled.div``;

const TitleMainBox = styled.div``;

const Title = styled.h1``;

const IssueInfo = styled.h2``;

const CommentCount = styled.h2``;

const ContentBox = styled.div``;

const IssueBody = styled.div``;
