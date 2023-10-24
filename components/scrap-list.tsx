"use client";

import Image from "next/image";
import { toast } from "react-hot-toast";
import dayjs from "dayjs";

import { cn } from "@/lib/utils";
import useScrap from "@/hooks/use-scrap";
import EmptyScrap from "./empty-scrap";

import { Doc } from "@/types";

const ScrapList = () => {
  const { scrapHandler, scrapItem } = useScrap();

  const scrapClickHandler = (item: Doc) => {
    scrapHandler(item);
    toast.success("스크랩이 해제 되었습니다.");
  };

  return (
    <div className="px-5 py-3 space-y-2 bg-[#F0F1F4]">
      <>
        {scrapItem.length > 0 ? (
          scrapItem?.map((item) => {
            const { pub_date, byline, headline, web_url } = item || {};
            return (
              <div key={item.pub_date}>
                {
                  <div className="px-5 py-3 bg-white border rounded-[8px] space-y-6 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div
                        className={cn("text-[18px] line-clamp-2 mr-4")}
                        onClick={() => {
                          window.location.href = web_url
                            ? web_url
                            : "https://www.nytimes.com/";
                        }}
                      >
                        {headline.main || ""}
                      </div>
                      <div
                        className="min-w-[32px]"
                        onClick={() => scrapClickHandler(item)}
                      >
                        <Image
                          src={"/star-fill.png"}
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
                }
              </div>
            );
          })
        ) : (
          <div className="flex items-center justify-center h-[100dvh] pb-36">
            <EmptyScrap />
          </div>
        )}
      </>
    </div>
  );
};

export default ScrapList;
