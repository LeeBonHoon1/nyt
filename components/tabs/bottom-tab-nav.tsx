"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Routes {
  href: string;
  label: string;
  icon: string;
}

const BottomTabNav = () => {
  const router = useRouter();

  const routes: Routes[] = [
    { href: "/home", label: "홈", icon: "home" },
    { href: "/scrap", label: "스크랩", icon: "scrap" },
  ];

  return (
    <nav className="flex fixed bottom-0 h-[75px] bg-[black] max-w-[560px] w-full justify-around rounded-3xl items-center m-auto">
      {routes.map((item) => {
        return (
          <div
            key={item.href}
            className=""
            onClick={() => router.push(item.href)}
          >
            {/* <Image src={"/public/home.png"} height={28} width={28} alt="Icon" /> */}
            <div className="text-[white]">{item.label}</div>
          </div>
        );
      })}
    </nav>
  );
};

export default BottomTabNav;
