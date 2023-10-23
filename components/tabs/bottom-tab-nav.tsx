"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Routes {
  href: string;
  label: string;
  icon: string;
  active: boolean;
}

const BottomTabNav = () => {
  const router = useRouter();

  const routes: Routes[] = [
    {
      href: "/home",
      label: "홈",
      icon: "home",
      active: location.pathname === "/home",
    },
    {
      href: "/scrap",
      label: "스크랩",
      icon: "scrap",
      active: location.pathname === "/scrap",
    },
  ];

  return (
    <nav className="flex fixed bottom-0 h-[75px] bg-[black] max-w-[560px] w-full justify-around rounded-3xl items-center m-auto">
      {routes.map((item) => {
        return (
          <div
            key={item.href}
            className="flex flex-col items-center space-y-2 cursor-pointer"
            onClick={() => router.push(item.href)}
          >
            <Image
              src={item.active ? `/${item.icon}.png` : `/${item.icon}.png`}
              height={20}
              width={20}
              alt="Icon"
            />
            <div className="text-[white]">{item.label}</div>
          </div>
        );
      })}
    </nav>
  );
};

export default BottomTabNav;
