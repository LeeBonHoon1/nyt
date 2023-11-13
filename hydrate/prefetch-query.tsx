import getHydrateQueryClient from "@/hydrate/get-hydrate-query-client";
import NewsAPIs from "@/common/apis";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

export const PrefetchQuery = async ({ children }: PropsWithChildren) => {
  const queryClient = getHydrateQueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["news"],
    queryFn: ({ pageParam = 0 }) => NewsAPIs.getNews("", "", "", pageParam),
  });

  const dehydrateState = dehydrate(queryClient);
  return <Hydrate state={dehydrateState}>{children}</Hydrate>;
};
