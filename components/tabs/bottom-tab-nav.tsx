"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface Routes {
  href: string;
  label: string;
  icon: string;
  active: boolean;
}

const BottomTabNav = () => {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const routes: Routes[] = [
    {
      href: "/home",
      label: "홈",
      icon: "home",
      active: false,
    },
    {
      href: "/scrap",
      label: "스크랩",
      icon: "scrap",
      active: false,
    },
  ];

  const bottomTabClickHandler = (item: Routes) => {
    router.push(item.href);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <nav className="flex fixed bottom-0 h-[75px] bg-[black] max-w-[560px] w-full justify-around rounded-3xl items-center m-auto">
      {routes.map((item) => {
        return (
          <div
            key={item.href}
            className="flex flex-col items-center space-y-2 cursor-pointer"
            onClick={() => bottomTabClickHandler(item)}
          >
            <Image
              src={
                pathname === item.href
                  ? `/${item.icon}-fill.png`
                  : `/${item.icon}.png`
              }
              height={20}
              width={20}
              alt="Icon"
            />
            <div
              className={cn(
                `text-[#6D6D6D]`,
                pathname === item.href && `text-[white]`
              )}
            >
              {item.label}
            </div>
          </div>
        );
      })}
    </nav>
  );
};

export default BottomTabNav;
