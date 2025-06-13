// Activity screen from Activity module
import { BellIcon, PackageIcon, HomeIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { ActivityListSection } from "./sections/ActivityListSection/ActivityListSection";
import { FilterSection } from "./sections/FilterSection";

export const Activity = ({ onNavigate }: { onNavigate?: (page: 'home' | 'inventory' | 'tobuy' | 'activity' | 'profile') => void }): JSX.Element => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      setCurrentTime(
        `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}`
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Navigation items data
  const navigationItems: { icon: JSX.Element; alt: string; page?: 'home' | 'inventory' | 'tobuy' | 'activity' | 'profile' }[] = [
    { icon: <HomeIcon className="w-6 h-6" />, alt: "Home", page: 'home' },
    { icon: <PackageIcon className="w-6 h-6" />, alt: "Inventory", page: 'inventory' },
    { icon: <ShoppingCartIcon className="w-6 h-6" />, alt: "Shopping Cart", page: 'tobuy' },
    { icon: <BellIcon className="w-6 h-6" />, alt: "Notifications", page: 'activity' },
    { icon: <UserIcon className="w-6 h-6" />, alt: "Profile", page: 'profile' },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[375px] relative flex flex-col min-h-screen">
        {/* Status Bar */}
        <div className="w-full h-11 flex justify-between items-center px-5">
          <div className="w-[54px] h-[21px] flex items-center justify-start">
            <span className="font-semibold text-black text-base tracking-tight">{currentTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <img className="w-[17px] h-[11px]" alt="Mobile signal" src="/mobile-signal.svg" />
            <img className="w-[15px] h-[11px]" alt="Wifi" src="/wifi.svg" />
            <img className="w-6 h-[11px]" alt="Battery" src="/battery.png" />
          </div>
        </div>

        {/* Header */}
        <h1 className="mt-[10px] mx-auto font-sans font-semibold text-black text-xl text-center tracking-[-0.40px] leading-7">
          Activity
        </h1>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto pb-20 flex flex-col w-full">
          <FilterSection />
          <ActivityListSectionContainer />
        </div>

        {/* Bottom Navigation */}
        <nav className="w-full flex justify-around items-center h-14 border-t border-gray-200 bg-white fixed bottom-0 left-1/2 -translate-x-1/2 max-w-[375px]">
          {navigationItems.map((item, index) => (
            <button
              key={index}
              className=""
              onClick={() => item.page && onNavigate && onNavigate(item.page as 'home' | 'inventory' | 'tobuy' | 'activity')}
            >
              {item.icon}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

// Helper wrapper to adjust margin for ActivityListSection
const ActivityListSectionContainer = () => (
  <div className="mt-0">
    <ActivityListSection />
  </div>
);
