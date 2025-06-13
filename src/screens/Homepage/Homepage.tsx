// Homepage screen from homepage/project
import {
  BellIcon,
  HomeIcon,
  PackageIcon,
  ShoppingCartIcon,
  UserIcon,
} from "lucide-react";
import React from "react";
// Import sections (these will need to be added as well)
import { FamilyMembersSection } from "./sections/FamilyMembersSection/FamilyMembersSection";
import { InventoryStatsSection } from "./sections/InventoryStatsSection/InventoryStatsSection";
import { ItemsListSection } from "./sections/ItemsListSection/ItemsListSection";
import { MonthlySpendChartSection } from "./sections/MonthlySpendChartSection/MonthlySpendChartSection";

export const Homepage = ({ onNavigate }: { onNavigate?: (page: 'home' | 'inventory' | 'tobuy') => void }): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[375px] relative flex flex-col">
        {/* Status Bar */}
        <div className="w-full h-11 flex justify-between items-center px-5">
          <div className="w-[54px] h-[21px]">
            <img src="/time.svg" alt="Time" className="w-full h-full" />
          </div>
          <div className="flex items-center gap-1">
            <img className="w-[17px] h-[11px]" alt="Mobile signal" src="/mobile-signal.svg" />
            <img className="w-[15px] h-[11px]" alt="Wifi" src="/wifi.svg" />
            <img className="w-6 h-[11px]" alt="Battery" src="/battery.png" />
          </div>
        </div>
        {/* Header */}
        <header className="w-full h-14 mt-11 flex justify-center items-center">
          <h1 className="font-semibold text-black text-xl tracking-[-0.40px] leading-7">FridgePal</h1>
        </header>
        {/* Main Content */}
        <main className="flex flex-col w-full">
          <div className="grid grid-cols-2 gap-4 px-4 mb-4">
            <div className="w-full">
              <InventoryStatsSection />
            </div>
            <div className="w-full">
              <FamilyMembersSection />
            </div>
          </div>
          <MonthlySpendChartSection />
          <ItemsListSection />
        </main>
        {/* Bottom Navigation */}
        <nav className="w-full flex justify-around items-center h-14 border-t border-gray-200 mt-4">
          <button onClick={() => onNavigate && onNavigate('home')}><HomeIcon className="w-6 h-6" /></button>
          <button onClick={() => onNavigate && onNavigate('inventory')}><PackageIcon className="w-6 h-6" /></button>
          <button onClick={() => onNavigate && onNavigate('tobuy')}><ShoppingCartIcon className="w-6 h-6" /></button>
        </nav>
      </div>
    </div>
  );
};
