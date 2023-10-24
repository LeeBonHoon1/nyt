import NewsList from "@/components/news-list";

const HomePage = () => {
  return (
    <main className="overflow-scroll h-[100dvh] pb-32 scrollbar-hide">
      <NewsList />
    </main>
  );
};

export default HomePage;
