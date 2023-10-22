"use client";

import { useEffect, useState } from "react";

import NewsList from "@/components/news-list";
import useGetNews from "@/hooks/useGetNews";
import { useRouter } from "next/navigation";
import useFilter from "@/hooks/use-filter";

const HomePage = () => {
  const [isMount, setIsMount] = useState(false);
  const filter = useFilter();
  const router = useRouter();
  const { filterData } = filter || {};
  const { filterTags, headline, date } = filterData || {};
  const arrayToString = filterTags.toString();

  const {
    data: news,
    error,
    isLoading,
  } = useGetNews(headline, date, arrayToString);

  useEffect(() => {
    setIsMount(true);
  }, []);

  if (!isMount) return null;
  if (error) router.push("/error");

  return (
    <main className="overflow-scroll h-[100dvh] pb-32 scrollbar-hide">
      <div>
        <NewsList news={news} isLoading={isLoading} />
      </div>
    </main>
  );
};

export default HomePage;
