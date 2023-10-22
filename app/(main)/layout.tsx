import BottomTabNav from "@/components/tabs/bottom-tab-nav";
import MainTabNav from "@/components/tabs/main-tab";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#F0F1F4] max-w-[560px] min-w-[380px] flex flex-col m-auto">
      <MainTabNav />
      {children}
      <BottomTabNav />
    </div>
  );
};

export default HomeLayout;
