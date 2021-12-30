import { useInfiniteQuery } from 'react-query';
import { getPhotoList } from '../api/photoList';

export function usePhotoListing() {
  return useInfiniteQuery('photoList', ({ pageParam = 1 }) => getPhotoList(pageParam), {
    getNextPageParam: (lastPage) => {
      if (lastPage.nextPage < lastPage.totalPages) return lastPage.nextPage;
      return undefined;
    }
  });
}
