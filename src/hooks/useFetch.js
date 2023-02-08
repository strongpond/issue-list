import { useState, useEffect, useCallback } from "react";
import { useSetRecoilState } from "recoil";

import { getIssueList } from "../apis";
import { issueListDataAtom } from "../atoms";

const useFetch = (page) => {
  const setIssueListData = useSetRecoilState(issueListDataAtom);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendQuery = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await getIssueList(page);
      if (!response) {
        throw new Error(`서버에 오류가 있습니다.`);
      }
      setIssueListData((prev) => {
        return prev.length > 0 ? [...prev, ...response] : response;
      });
      setHasMore(response.length > 0);
      setIsLoading(false);
    } catch (e) {
      throw new Error(`오류입니다. ${e.message}`);
    }
  }, [page, setIssueListData]);

  useEffect(() => {
    sendQuery();
  }, [sendQuery, page]);

  return { hasMore, isLoading };
};

export default useFetch;
