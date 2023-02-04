import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";

import dayjs from "dayjs";
import styled from "styled-components";

import { issueListDataAtom, issueSelectedAtom } from "../../atoms";

const ListItem = ({ idx, id, number, title, comments, user, created_at }) => {
  const date = dayjs(created_at);
  const createDate = date.format("YYYY년 MM월 DD일");
  const navigate = useNavigate();
  const issueListData = useRecoilValue(issueListDataAtom);
  const setIssueSelected = useSetRecoilState(issueSelectedAtom);

  setIssueSelected([]);

  const goToDetail = () => {
    setIssueSelected(issueListData.filter((data) => data.id === id));
    navigate(`/detail/${id}`);
  };

  return (
    <>
      {idx === 4 && (
        <ImgWrapper>
          <ImgBox>
            <a
              target="_blank"
              href="https://www.wanted.co.kr/"
              rel="noreferrer"
            >
              <img src="/images/ad_wanted.webp" alt="wanted" />
            </a>
          </ImgBox>
        </ImgWrapper>
      )}
      <ItemWrapper onClick={goToDetail}>
        <ItemContent>
          <ItemTitle>
            #{number}&nbsp;{title}
          </ItemTitle>
          <DescBox>
            <Desc>작성자: {user},&nbsp;</Desc>
            <Desc>작성일: {createDate}</Desc>
          </DescBox>
        </ItemContent>
        <ItemComment>코멘트 : {comments}</ItemComment>
      </ItemWrapper>
    </>
  );
};

export default ListItem;

const ImgWrapper = styled.div`
  ${({ theme }) => theme.flex("center", "center")};
  margin-top: 10px;
  padding: 30px;
  width: 50vw;
`;

const ImgBox = styled.div`
  display: flex;
  object-fit: cover;
`;

const ItemWrapper = styled.div`
  ${({ theme }) => theme.flex("space-between", "center", "row")};
  margin-top: 10px;
  padding: 30px;
  width: 50vw;
  border: 1px solid black;
`;

const ItemContent = styled.div`
  ${({ theme }) => theme.flex("center", "flex-start", "column")};
  margin-right: 15px;
  max-width: 500px;
`;

const ItemTitle = styled.p`
  font-weight: 700;
`;

const DescBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  font-size: 14px;
`;

const Desc = styled.p``;

const ItemComment = styled.div`
  min-width: 80px;
`;
