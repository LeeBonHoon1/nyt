"use client";

import NewsList from "@/components/news-list";
import useGetNews from "@/hooks/useGetNews";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  const { data: news, error, isLoading } = useGetNews();

  if (isLoading) return null;
  if (error) router.push("/error");

  return (
    <main className="overflow-scroll h-[100dvh] pb-32 scrollbar-hide">
      <div>
        <NewsList news={news} />
      </div>
    </main>
  );
};

export default HomePage;
