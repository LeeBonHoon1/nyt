import APIs from "@/common/apis";
import { useQuery } from "@tanstack/react-query";

const useGetNews = (headline: string = "", date: string = "", tags: string = "") => {
  const { data, isPending, error, isLoading } = useQuery(
    {
      queryKey: ['news', headline, date, tags],
      queryFn: () => APIs.getNews(headline, date, tags),
      retry: 1
    },
  )

  return {
    data, isPending, error, isLoading
  }
}

export default useGetNews

