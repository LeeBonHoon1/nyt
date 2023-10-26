import NewsAPIs from "@/common/apis";
import NewsList from "@/components/news-list";
import getHydrateQueryClient from "@/hydrate/get-hydrate-query-client";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import { PrefetchQuery } from "@/hydrate/prefetch-query";

const HomePage = async () => {
  return (
    /* @ts-expect-error Async Server Component */
    <PrefetchQuery>
      <NewsList />
    </PrefetchQuery>
  );
};

export default HomePage;
