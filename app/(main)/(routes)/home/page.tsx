import NewsList from "@/components/news-list";
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
