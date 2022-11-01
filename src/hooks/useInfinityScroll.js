import { useCallback, useRef, useEffect } from "react";

//useRef = DOM 노드나 React 엘리먼트에 직접 접근하기 위해 사용
const useInfiniteScroll = (onIntersect, options) => {
  const ref = useRef(null);

  const handleIntersect = useCallback(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) onIntersect(entry, observer);
      });
    },
    [onIntersect]
  );

  useEffect(() => {
    if (!ref.current) return undefined;
    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [handleIntersect, ref, options]);

  return ref;
};

export default useInfiniteScroll;
