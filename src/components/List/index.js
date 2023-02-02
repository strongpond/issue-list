import React, { useState, useRef } from "react";
import { useRecoilValue } from "recoil";

import styled, { keyframes } from "styled-components";
import { issueListDataAtom } from "../../atoms";
import { useFetch } from "../../hooks";
import ListItem from "./ListItem";

export const List = () => {
  const [pageNum, setPageNum] = useState(1);
  const issueListData = useRecoilValue(issueListDataAtom);
  const { hasMore, isLoading } = useFetch(pageNum);
  const observerRef = useRef();

  console.log(issueListData);

  const observer = (node) => {
    if (isLoading) return;
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasMore) {
        setPageNum((page) => page + 1);
      }
    });

    node && observerRef.current.observe(node);
  };

  // const goDetail = (e) => {
  //   console.log(e);
  // };

  return (
    <Container>
      <ListWrapper>
        {issueListData?.map((data, idx) => {
          return (
            <ListItem
              key={data.id}
              idx={idx}
              number={data.number}
              title={data.title}
              comments={data.comments}
              user={data.user.login}
              created_at={data.created_at}
              // goDetail={goDetail}
            />
          );
        })}
      </ListWrapper>
      <div ref={observer} />
      {isLoading && (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )}
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

const ListWrapper = styled.div``;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const rotation = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

const Loading = styled.div`
  box-sizing: border-box;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 8px solid transparent;
  border-top-color: #6487f8;
  border-bottom-color: #6487f8;
  animation: ${rotation} 0.8s ease infinite;
`;
