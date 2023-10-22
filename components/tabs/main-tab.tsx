"use client";

import { useState, useEffect } from "react";
import useFilter from "@/hooks/use-filter";
import { useStoreModal } from "@/hooks/use-modal";
import dayjs from "dayjs";
import { cn } from "@/lib/utils";
import Image from "next/image";

const MainTabNav = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { filterData } = useFilter();
  const { date, filterTags, headline } = filterData || {};
  const { onOpen } = useStoreModal();

  const filterItems = [
    {
      icon: "headline",
      title: headline ? headline : "전체 헤드라인",
      active: headline ? true : false,
    },
    {
      icon: "calendar",
      title: date ? dayjs(date).format("YYYY.M.D") : "전체 날짜",
      active: date ? true : false,
    },
    {
      id: 3,
      title:
        filterTags && filterTags.length > 1
          ? `${filterTags[0]}외 ${filterTags.length - 1}`
          : "전체 국가",
      active: filterTags.length > 0,
    },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <nav className="flex h-[60px] items-center min-w-[560px] w-full gap-[7px] px-[20px] bg-[white] cursor-pointer">
      {filterItems.map((filterItem) => {
        console.log(filterItem.title);
        return (
          <div
            key={filterItem.id}
            className={cn(
              "px-[12px] border border-[#C4C4C4] py-[8px] rounded-3xl max-w-[120px]",
              filterItem.active && "border-[#3478F6] text-[#3478F6]"
            )}
          >
            <div onClick={onOpen} className="text-[14px] truncate flex">
              {filterItem.icon && (
                <Image
                  src={
                    filterItem.active
                      ? `/${filterItem.icon}-check.png`
                      : `/${filterItem.icon}.png`
                  }
                  alt="Icon"
                  width={16}
                  height={16}
                  className="mr-1"
                />
              )}
              {filterItem.title}
            </div>
          </div>
        );
      })}
    </nav>
  );
};

export default MainTabNav;
