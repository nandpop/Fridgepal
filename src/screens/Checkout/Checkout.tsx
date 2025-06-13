import { ChevronLeftIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { CheckoutDetailsSection } from "./sections/CheckoutDetailsSection";
import { SummarySection } from "./sections/SummarySection";

export const Checkout = ({
  shoppingAt,
  onNavigate
}: {
  shoppingAt?: "Zepto" | "Blinkit" | null;
  onNavigate?: (page: "home" | "inventory" | "tobuy" | "activity" | "profile") => void;
}): JSX.Element => {
  const [currentTime, setCurrentTime] = useState<string>("");

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

  useEffect(() => {
    // Debug: log the shoppingAt value
    console.log("Checkout screen shoppingAt:", shoppingAt);
  }, [shoppingAt]);

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[375px] min-h-screen relative flex flex-col">
        {/* Status Bar */}
        <div className="w-full h-11 px-5 flex justify-between items-center">
          <div className="w-[54px] h-[21px] flex items-center justify-start">
            <span className="font-semibold text-black text-base tracking-tight">
              {currentTime}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <img
              className="w-[17px] h-[11px]"
              alt="Mobile signal"
              src="/mobile-signal.svg"
            />
            <img className="w-[15px] h-[11px]" alt="Wifi" src="/wifi.svg" />
            <img className="w-6 h-[11px]" alt="Battery" src="/battery.png" />
          </div>
        </div>

        {/* Header */}
        <div className="w-full flex items-center px-4 py-2">
          <button onClick={() => onNavigate && onNavigate("tobuy")}>
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <h1 className="flex-1 text-center font-semibold text-xl tracking-[-0.40px]">Checkout</h1>
          <div className="w-6" /> {/* Spacer for symmetry */}
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-y-auto pb-32">
          <CheckoutDetailsSection shoppingAt={shoppingAt} />
          <SummarySection />
        </div>

        {/* Fixed Footer */}
        <div className="w-full border-t-[0.5px] border-[#e6e6e6] bg-white fixed bottom-0 left-1/2 -translate-x-1/2 max-w-[375px] z-10">
          <Button className="w-[343px] mx-4 mt-3 mb-4 font-small-text text-white bg-black rounded-lg shadow-button-shadow">
            Place order
          </Button>
          <div className="h-[34px] flex justify-center items-center">
            <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
