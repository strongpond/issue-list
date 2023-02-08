import { useState, useEffect, useCallback } from "react";
import { useRecoilState } from "recoil";

import { getIssueList } from "../apis";
import { issueListDataAtom } from "../atoms";

const useFetch = (page) => {
  const [issueListData, setIssueListData] = useRecoilState(issueListDataAtom);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendQuery = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await getIssueList(page);
      if (!response) {
        throw new Error(`서버에 오류가 있습니다.`);
      }

      if (issueListData.length > 0) {
        setIssueListData((prev) => [...prev, ...response]);
      } else {
        setIssueListData(response);
      }

      setHasMore(response.length > 0);
      setIsLoading(false);
    } catch (e) {
      throw new Error(`오류입니다. ${e.message}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, setIssueListData]);

  useEffect(() => {
    sendQuery();
  }, [sendQuery, page]);

  return { hasMore, isLoading };
};

export default useFetch;
