import { useEffect, useCallback } from 'react';

export const useInfiniteScroll = (callback: () => void, hasMore: boolean, isFetching: boolean) => {
  const handleScroll = useCallback(() => {
    if (!hasMore || isFetching) return;

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    
    // 페이지 하단에서 200px 정도 남았을 때 로드
    if (scrollTop + clientHeight >= scrollHeight - 200) {
      console.log('Scroll threshold reached, calling callback');
      callback();
    }
  }, [callback, hasMore, isFetching]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const throttledHandleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 200);
    };

    console.log('Adding scroll listener');
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    return () => {
      console.log('Removing scroll listener');
      window.removeEventListener('scroll', throttledHandleScroll);
      clearTimeout(timeoutId);
    };
  }, [handleScroll]);
};