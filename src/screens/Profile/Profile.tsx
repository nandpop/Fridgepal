import React, { useEffect, useState } from "react";
import {
  BellIcon,
  ChevronRightIcon,
  HelpCircleIcon,
  HomeIcon,
  MessageSquareIcon,
  PackageIcon,
  SettingsIcon,
  ShoppingCartIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Switch } from "../../components/ui/switch";

export const Profile = ({ onNavigate }: { onNavigate?: (page: 'home' | 'inventory' | 'tobuy' | 'activity' | 'profile') => void } = {}): JSX.Element => {
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

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[375px] min-h-screen flex flex-col relative">
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
        <div className="w-full text-center mt-1 mb-2">
          <h1 className="font-semibold text-xl tracking-[-0.40px]">
            Profile
          </h1>
        </div>
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto pb-20">
          {/* Profile Section */}
          <div className="flex flex-col items-center mt-4 mb-4">
            <div className="flex items-start gap-4">
              <div className="w-[90px] h-[90px] rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center">
                <img src="/avatar.png" alt="Profile" className="w-full h-full object-cover rounded-2xl" />
              </div>
              <div className="flex flex-col mt-1">
                <div className="font-medium text-black text-xl leading-5 overflow-hidden text-ellipsis max-w-[90px]">Alia B</div>
                <a className="font-normal text-[#00000080] text-sm leading-5 mt-2" href="mailto:alia@gmail.com" rel="noopener noreferrer" target="_blank">alia@gmail.com</a>
              </div>
              <Button className="h-8 rounded-lg bg-black text-white ml-6" variant="default">Edit</Button>
            </div>
          </div>
          {/* Add gap below profile section */}
          <div className="h-5" />
          {/* Preferences Section */}
          <div className="font-medium text-black text-xl leading-5 px-8 mb-2">Preferences</div>
          {/* Notification Item */}
          <Card className="mx-8 mb-2 border-none shadow-none">
            <CardContent className="p-0 flex items-center justify-between py-2">
              <div className="flex items-center gap-4">
                <BellIcon className="w-[31px] h-[34px]" />
                <div className="flex flex-col">
                  <div className="font-medium text-black text-base leading-5">Notifications</div>
                  <div className="font-normal text-[#00000080] text-sm leading-5">Expiry Alerts and reminders</div>
                </div>
              </div>
              <Switch className="data-[state=checked]:bg-[#34c759]" defaultChecked />
            </CardContent>
          </Card>
          {/* Family Sharing Item */}
          <Card className="mx-8 mb-2 border-none shadow-none">
            <CardContent className="p-0 flex items-center justify-between py-2">
              <div className="flex items-center gap-4">
                <UsersIcon className="w-[41px] h-[38px]" />
                <div className="flex flex-col">
                  <div className="font-medium text-black text-base leading-5">Family Sharing</div>
                  <div className="font-normal text-[#00000080] text-sm leading-5">Manager users of your fridge</div>
                </div>
              </div>
              <ChevronRightIcon className="w-[31px] h-[31px]" />
            </CardContent>
          </Card>
          {/* App Settings Item */}
          <Card className="mx-8 mb-3 border-none shadow-none">
            <CardContent className="p-0 flex items-center justify-between py-2">
              <div className="flex items-center gap-4">
                <SettingsIcon className="w-9 h-[34px]" />
                <div className="flex flex-col">
                  <div className="font-medium text-black text-base leading-5">App Settings</div>
                  <div className="font-normal text-[#00000080] text-sm leading-5">Theme, Language, etc</div>
                </div>
              </div>
              <ChevronRightIcon className="w-[31px] h-[31px]" />
            </CardContent>
          </Card>
          {/* Support Section */}
          <div className="font-medium text-black text-xl leading-5 px-8 mb-2 mt-6">Support</div>
          {/* Chat with Us Item */}
          <Card className="mx-8 mb-2 border-none shadow-none">
            <CardContent className="p-0 flex items-center justify-between py-2">
              <div className="flex items-center gap-4">
                <MessageSquareIcon className="w-[31px] h-[29px]" />
                <div className="flex flex-col">
                  <div className="font-medium text-black text-base leading-5">Chat with Us</div>
                  <div className="font-normal text-[#00000080] text-sm leading-5">Feedback, Issue</div>
                </div>
              </div>
              <ChevronRightIcon className="w-[31px] h-[31px]" />
            </CardContent>
          </Card>
          {/* Help Item */}
          <Card className="mx-8 mb-3 border-none shadow-none">
            <CardContent className="p-0 flex items-center justify-between py-2">
              <div className="flex items-center gap-4">
                <HelpCircleIcon className="w-9 h-[35px]" />
                <div className="flex flex-col">
                  <div className="font-medium text-black text-base leading-5">Help</div>
                  <div className="font-normal text-[#00000080] text-sm leading-5">FAQs</div>
                </div>
              </div>
              <ChevronRightIcon className="w-[31px] h-[31px]" />
            </CardContent>
          </Card>
        </div>
        {/* Bottom Navigation */}
        <nav className="w-full flex justify-around items-center h-14 border-t border-gray-200 bg-white fixed bottom-0 left-1/2 -translate-x-1/2 max-w-[375px]">
          <button onClick={() => onNavigate && onNavigate('home')}><HomeIcon className="w-6 h-6" /></button>
          <button onClick={() => onNavigate && onNavigate('inventory')}><PackageIcon className="w-6 h-6" /></button>
          <button onClick={() => onNavigate && onNavigate('tobuy')}><ShoppingCartIcon className="w-6 h-6" /></button>
          <button onClick={() => onNavigate && onNavigate('activity')}><BellIcon className="w-6 h-6" /></button>
          <button onClick={() => onNavigate && onNavigate('profile')}><UserIcon className="w-6 h-6" /></button>
        </nav>
      </div>
    </div>
  );
};
