import { NewsProps } from "@/types";
import dayjs from "dayjs";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const NewsList = ({
  news,
  isLoading,
}: {
  news: NewsProps[];
  isLoading: boolean;
}) => {
  return (
    <div className="px-5 py-3 space-y-2 bg-[#F0F1F4]">
      {isLoading ? (
        <Loader2 className="animate-spin absolute left-[50%] top-[50%]" />
      ) : (
        news?.map((item) => {
          const { pub_date, byline, headline, web_url } = item || {};
          return (
            <div
              key={item.pub_date}
              className="px-5 py-3 bg-white border rounded-[8px] space-y-5 cursor-pointer"
              onClick={() => {
                window.location.href = web_url
                  ? web_url
                  : "https://www.nytimes.com/";
                console.log(web_url);
              }}
            >
              <div className="flex items-center">
                <div className={cn("text-[18px] line-clamp-2 mr-4")}>
                  {headline.main || ""}
                </div>
                <div>scrap</div>
              </div>
              <div className="flex items-center justify-between text-sm text-[#6D6D6D]">
                <div className="text-[#000000] truncate w-[100px]">
                  {byline.original}
                </div>
                <div className="">{dayjs(pub_date).format("YYYY.M.DD")}</div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default NewsList;
