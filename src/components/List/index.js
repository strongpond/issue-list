import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { useFetch } from "../../apis";
import useInfiniteScroll from "../../hooks/useInfinityScroll";
import ListItem from "./ListItem";

export const List = () => {
  const navigate = useNavigate();
  const [pageNum, setPageNum] = useState(1);
  const { list, hasMore, isLoading } = useFetch(pageNum);
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

  /* const handleIntersect = useCallback(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && issues.length !== 0) {
          const data = getIssues(); // data 확인
          // 그러고 나중에 위에 if문에다가 end라는 state도 확인해줘야지 false일때만 하는거지

          // console.log("hi");
          // onIntersect(entry, observer); / 얘는 아마 필요없을듯???
        }
      });
    },
    [issues]
  );

  useEffect(() => {
    if (!observerRef.current) return undefined;
    // const options = { root: null, rootMargin: "0px", threshold: 0.5 }; // default값인지 검색해보기

    const observer = new IntersectionObserver(handleIntersect);
    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [handleIntersect, observerRef]);

  const getIssues = useCallback(async () => {
    const result = await useFetch(pageNum);
    setIssues(result.data); // 이게 처음일떄는 set이고 두번째일때는 이전값이랑 합쳐주는 걸로 바꿔야함
    setPageNum((page) => page + 1); // 이게 비동기라서 ++되는지도 확인해야됨 (만약에안될경우)
    console.log(pageNum);
  }, []);

  useEffect(() => {
    getIssues();
    console.log(pageNum);
  }, [getIssues]); */

  return (
    <>
      <ListWrapper>
        {list?.map((data, idx) => {
          return (
            <ListItem
              key={data.id}
              idx={idx}
              number={data.number}
              title={data.title}
              comments={data.comments}
              user={data.user.login}
              created_at={data.created_at}
            />
          );
        })}
      </ListWrapper>
      <div ref={observer} />
      <>{isLoading && <Loading>로딩중...</Loading>}</>
    </>
  );
};

const ListWrapper = styled.div`
  height: 100vh;
`;

const Loading = styled.p``;
