"use client";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const EmptyScrap = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col space-y-4 w-full items-center px-3">
      <span>저장된 스크랩이 없습니다.</span>
      <Button
        className="w-full h-[60px] bg-[#3478F6] text-[16px]"
        onClick={() => router.push("/home")}
      >
        스크랩 하러가기
      </Button>
    </div>
  );
};

export default EmptyScrap;
