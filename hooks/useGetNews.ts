import APIs from "@/common/apis";
import { useQuery } from "@tanstack/react-query";

const useGetNews = (page: number = 0) => {
  const { data, isPending, error, isLoading } = useQuery(
    {
      queryKey: ['news', page],
      queryFn: () => APIs.getNews(page),
    },
  )

  return {
    data, isPending, error, isLoading
  }
}

export default useGetNews

