"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

const ErrorPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col space-y-4 max-w-[560px] min-w-min h-full items-center px-3 justify-center m-auto border border-black">
      <span>너무 많은 요청으로 인해 문제가 생겼어요.</span>
      <span>잠시 후 다시 시도해 주세요.</span>
      <Button
        className="w-full h-[60px] bg-[#3478F6] text-[16px]"
        onClick={() => router.push("/home")}
      >
        홈으로 가기
      </Button>
    </div>
  );
};

export default ErrorPage;
