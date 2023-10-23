"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import Image from "next/image";
import dayjs from "dayjs";
import { toast } from "react-hot-toast";

import useFilter from "@/hooks/use-filter";
import useGetNews from "@/hooks/use-get-news";
import useScrap from "@/hooks/use-scrap";

import { cn } from "@/lib/utils";
import { Doc } from "@/types";

import EmptyNews from "./empty-news";
import { LoadingSkeleton } from "./loading-skeleton";

const NewsList = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const router = useRouter();
  const filter = useFilter();
  const { scrapHandler, scrapItem } = useScrap();

  const { filterData } = filter || {};
  const { filterTags, headline, date } = filterData || {};
  const arrayToString = filterTags.toString();
  const {
    data: news,
    isLoading,
    isFetching,
    hasNextPage,
    fetchNextPage,
    error,
  } = useGetNews(headline, date, arrayToString);
  const { pages } = news || {};
  const isEmptyDocs = pages?.some((item) => !item.docs.length);

  const scrapClickHandler = (item: Doc, isScrapItem: boolean) => {
    scrapHandler(item);
    toast.success(
      isScrapItem ? "스크랩이 해제 되었습니다." : "스크랩 되었습니다."
    );
  };

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  return (
    <div className="px-5 py-3 space-y-2 bg-[#F0F1F4]">
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <>
          {pages?.map((newsPage) =>
            newsPage.docs.map((item: Doc) => {
              const isScrapItem = scrapItem.some(
                (scrap) => scrap.web_url === item.web_url
              );
              const { pub_date, byline, headline, web_url } = item || {};

              return (
                <div key={web_url}>
                  <div className="px-5 py-3 bg-white border rounded-[8px] space-y-6 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div
                        className={cn("text-[18px] line-clamp-2 mr-4")}
                        onClick={() => {
                          router.push(web_url || "https://www.nytimes.com/");
                        }}
                      >
                        {headline.main || ""}
                      </div>
                      <div
                        className="min-w-[32px]"
                        onClick={() => scrapClickHandler(item, isScrapItem)}
                      >
                        <Image
                          src={isScrapItem ? "/star-fill.png" : "/star.png"}
                          alt="Scrap"
                          width={20}
                          height={20}
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-[#6D6D6D]">
                      <div className="text-[#000000] truncate w-[140px]">
                        {byline.original}
                      </div>
                      <div>{dayjs(pub_date).format("YYYY.M.DD")}</div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
          {error && (
            <div className="flex items-center justify-center px-4 py-1 text-[#82B0F4]">
              너무 많은 요청으로 문제가 발생습니다. 잠시 후 다시 시도해주세요!
            </div>
          )}
          {!error && isFetching && <LoadingSkeleton />}
          {!error && !isLoading && isEmptyDocs && (
            <div className="flex h-[100dvh] items-center justify-center pb-40">
              <EmptyNews />
            </div>
          )}
        </>
      )}
      <div ref={ref} />
    </div>
  );
};

export default NewsList;
