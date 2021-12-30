import { useEffect, useCallback, useRef } from 'react';

type Props = {
  hasNextPage: boolean,
  loadMore: () => void,
  children: any
}

const InfiniteScroll = (props: Props) => {
  const loader = useRef(null);
  const { hasNextPage, loadMore, children } = props;

   const handleObserver = useCallback((entries) => {
    const target = entries[0];
    console.log('target', target);
    if (hasNextPage && target.isIntersecting) {
      loadMore();
    }
  }, []);

  useEffect(() => {    
    window.scrollTo({top: 0});

    const option = {
      root: null,
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, [handleObserver]);

  return (
    <>
      {children}
      <div ref={loader} />
    </>
  )
}

export default InfiniteScroll;