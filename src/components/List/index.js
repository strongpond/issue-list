import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { getIssueList } from "../../apis";
import ListItem from "./ListItem";

export const List = () => {
  const navigate = useNavigate();
  const [issues, setIssues] = useState([]);

  const getIssues = useCallback(async () => {
    const result = await getIssueList();
    setIssues(result.data);
    console.log(result.data);
  }, []);

  useEffect(() => {
    getIssues();
  }, [getIssues]);

  return (
    <ListWrapper>
      {issues.map((data, idx) => {
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
  );
};

const ListWrapper = styled.div``;
