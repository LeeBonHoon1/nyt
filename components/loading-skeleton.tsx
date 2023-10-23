import { Skeleton } from "@/components/ui/skeleton";

export function LoadingSkeleton() {
  return (
    <>
      {Array.from({ length: 6 }).map((_, idx) => {
        return (
          <div className="space-y-2" key={idx}>
            <div className="flex items-center space-x-4 bg-white rounded-lg px-2 h-[150px]">
              <div className="flex flex-col space-y-5 px-2">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
