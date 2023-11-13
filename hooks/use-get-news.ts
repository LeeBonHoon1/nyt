import APIs from "@/common/apis";
import { useInfiniteQuery } from "@tanstack/react-query";

const useGetNews = (headline: string = "", date: string = "", tags: string = "", page: number = 0) => {
  const { data, isLoading, isFetching, hasNextPage, fetchNextPage, error, remove } = useInfiniteQuery({
    queryKey: ['news', headline, date, tags, page],
    queryFn: ({ pageParam = 0 }) => APIs.getNews(headline, date, tags, pageParam),
    getNextPageParam: (lastPage, pages) => {
      const { meta } = lastPage || {};
      console.log(meta.hits, pages.length, meta.offset)
      if (meta.hits - 10 > pages.length * 10) {
        return meta.offset / 10 + 1
      } else {
        return false
      }
    },
    retry: false,
    refetchOnWindowFocus: false,
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60 * 3,
    keepPreviousData: true
  })

  return {
    data,
    isLoading,
    isFetching,
    hasNextPage,
    fetchNextPage,
    error,
    remove
  }
}

export default useGetNews