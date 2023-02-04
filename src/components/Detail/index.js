import React from "react";
import { useRecoilValue } from "recoil";

import dayjs from "dayjs";
import styled from "styled-components";
import { issueSelectedAtom } from "../../atoms";

export const Detail = () => {
  const issueSelected = useRecoilValue(issueSelectedAtom);
  if (issueSelected.length === 0) return;
  const { number, title, user, created_at, comments, body } = issueSelected[0];
  const { login, avatar_url } = user;
  const date = dayjs(created_at);
  const createDate = date.format("YYYY년 MM월 DD일");

  console.log(issueSelected);
  return (
    <Container>
      <HeaderBox>
        <ProfileBox>
          <ProfileImg src={avatar_url} alt={login} />
        </ProfileBox>
        <TitleContentBox>
          <TitleMainBox>
            <Title>
              #{number} {title}
            </Title>
            <IssueInfo>
              작성자: {login}, 작성일: {createDate}
            </IssueInfo>
          </TitleMainBox>
          <CommentCount>코멘트: {comments}</CommentCount>
        </TitleContentBox>
      </HeaderBox>
      <ContentBox>
        <IssueBody>{body}</IssueBody>
      </ContentBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 50vw;
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
  margin-right: 20px;
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: fill;
`;

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

const CommentCount = styled.h2`
  min-width: 80px;
`;

const ContentBox = styled.div`
  margin-top: 40px;
`;

const IssueBody = styled.div``;
