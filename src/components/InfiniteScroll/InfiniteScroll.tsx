import { useEffect } from 'react';

type Props = {
  hasNextPage: boolean,
  loadMore: () => void,
  children: any
}

const InfiniteScroll = (props: Props) => {
  const { hasNextPage, loadMore, children } = props;

  const handleScroll = (e: Event) => {
    const target = e.target as HTMLDocument;
    const scrollHeight = target.documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      target.documentElement.scrollTop + window.innerHeight
    );
    
    if (hasNextPage && currentHeight + 1 >= scrollHeight) {
      loadMore();
    }
  };

  useEffect(() => {
    window.scrollTo({top: 0});
    loadMore();
    window.addEventListener("scroll", handleScroll);

    return function cleanupListener() {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return children;
}

export default InfiniteScroll;