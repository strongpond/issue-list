import React from "react";
import styled from "styled-components";

const ListItem = () => {
  return (
    <ItemWrapper>
      <ItemContent>
        <ItemTitle>#111 Issue Title</ItemTitle>
        <Writer>euiyeonlee</Writer>
      </ItemContent>
      <ItemComment>코멘트 : 67</ItemComment>
    </ItemWrapper>
  );
};

export default ListItem;

const ItemWrapper = styled.div`
  ${({ theme }) => theme.flex("space-between", "center", "row")};
  margin-top: 10px;
  padding: 30px;
  width: 40vw;
  border: 1px solid black;
`;

const ItemContent = styled.div`
  ${({ theme }) => theme.flex("center", "center", "column")};
`;

const ItemTitle = styled.p``;

const Writer = styled.p``;

const ItemComment = styled.div``;
