import BottomTabNav from "@/components/tabs/bottom-tab-nav";
import MainTabNav from "@/components/tabs/main-tab";
import { PropsWithChildren } from "react";

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-[#F0F1F4] max-w-[560px] flex flex-col m-auto">
      <main className="overflow-scroll h-[100dvh] pb-32 scrollbar-hide">
        <MainTabNav />
        {children}
        <BottomTabNav />
      </main>
    </div>
  );
};

export default HomeLayout;
