import React, { useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import styled, { keyframes } from "styled-components";
import { issueListDataAtom, pageNumAtom } from "../../atoms";
import { useFetch } from "../../hooks";
import ListItem from "./ListItem";

export const List = () => {
  const [pageNum, setPageNum] = useRecoilState(pageNumAtom);
  const issueListData = useRecoilValue(issueListDataAtom);
  const { hasMore, isLoading } = useFetch(pageNum);
  const observerRef = useRef();

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

  return (
    <Container>
      <ListWrapper>
        {issueListData?.map((data, idx) => {
          const { id, number, title, comments, created_at } = data;

          return (
            <ListItem
              key={id}
              id={id}
              idx={idx}
              number={number}
              title={title}
              comments={comments}
              user={data.user.login}
              created_at={created_at}
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
