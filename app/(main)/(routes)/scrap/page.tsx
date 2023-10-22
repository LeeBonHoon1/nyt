"use client";

import { useEffect, useState } from "react";

import useScrap from "@/hooks/use-scrap";
import ScrapList from "@/components/scrap-list";

const ScrapPage = () => {
  const [isMount, setIsMount] = useState(false);
  const { scrapItem } = useScrap();

  useEffect(() => {
    setIsMount(true);
  }, []);

  if (!isMount) return null;

  return (
    <main className="overflow-scroll h-[100dvh] pb-32 scrollbar-hide">
      <div>
        <ScrapList scrap={scrapItem} />
      </div>
    </main>
  );
};

export default ScrapPage;
