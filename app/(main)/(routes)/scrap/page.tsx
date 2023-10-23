"use client";

import { useEffect, useState } from "react";

import useScrap from "@/hooks/use-scrap";
import ScrapList from "@/components/scrap-list";

const ScrapPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { scrapItem } = useScrap();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <main className="overflow-scroll h-[100dvh] pb-32 scrollbar-hide">
      <div>
        <ScrapList scrap={scrapItem} />
      </div>
    </main>
  );
};

export default ScrapPage;
