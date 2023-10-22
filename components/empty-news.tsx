import { Button } from "./ui/button";
import { useStoreModal } from "@/hooks/use-modal";

const EmptyNews = () => {
  const { onOpen } = useStoreModal();
  return (
    <div className="flex flex-col space-y-4 w-full items-center px-3">
      <span>검색 결과가 없습니다!</span>
      <Button
        className="w-full h-[60px] bg-[#3478F6] text-[16px]"
        onClick={onOpen}
      >
        검색 수정하기
      </Button>
    </div>
  );
};

export default EmptyNews;
