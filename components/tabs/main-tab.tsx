"use client";

import { useStoreModal } from "@/hooks/use-modal";

const MainTabNav = () => {
  const { onOpen } = useStoreModal();

  const filterItems = [
    {
      id: 1,
      title: "전체 헤드라인",
    },
    {
      id: 2,
      title: "전체 날짜",
    },
    {
      id: 3,
      title: "전체 국가",
    },
  ];

  return (
    <nav className="flex h-[60px] items-center min-w-[560px] w-full gap-[7px] px-[20px] bg-[white]">
      {filterItems.map((filterItem) => (
        <div
          key={filterItem.id}
          className="px-[12px] border border-[#C4C4C4] py-[8px] rounded-3xl"
        >
          <div onClick={onOpen} className="text-[14px]">
            {filterItem.title}
          </div>
        </div>
      ))}
    </nav>
  );
};

export default MainTabNav;
