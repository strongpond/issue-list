import React from "react";
import styled from "styled-components";

const ListItem = ({ number, title, comments, user, created_at }) => {
  return (
    <ItemWrapper>
      <ItemContent>
        <ItemTitle>
          #{number}&nbsp;{title}
        </ItemTitle>
        <Desc>작성자: {user},&nbsp;</Desc>
        <Desc>작성일: {created_at}</Desc>
      </ItemContent>
      <ItemComment>코멘트 : {comments}</ItemComment>
    </ItemWrapper>
  );
};

export default ListItem;

const ItemWrapper = styled.div`
  ${({ theme }) => theme.flex("space-between", "center", "row")};
  margin-top: 10px;
  padding: 30px;
  width: 50vw;
  border: 1px solid black;
`;

const ItemContent = styled.div`
  ${({ theme }) => theme.flex("center", "flex-start", "column")};
`;

const ItemTitle = styled.p``;

const Desc = styled.p``;

const ItemComment = styled.div``;
