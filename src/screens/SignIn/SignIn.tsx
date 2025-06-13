import React from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

export const SignIn = ({ onContinue }: { onContinue?: () => void }): JSX.Element => {
  return (
    <div className="bg-[#e5f3fa] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-[#e5f3fa] w-[375px] h-[812px] relative">
        {/* Home indicator */}
        <div className="absolute w-full h-[34px] bottom-0 left-0 flex justify-center items-center">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>

        {/* Main content */}
        <div className="flex flex-col items-center gap-6 px-6 absolute top-[371px] left-0 w-full">
          {/* Header text */}
          <div className="flex flex-col items-center gap-0.5">
            <h2 className="font-semibold text-black text-base text-center leading-6">
              Create an account
            </h2>
            <p className="font-normal text-black text-sm text-center leading-[21px]">
              Enter your email to sign up for this app
            </p>
          </div>

          {/* Form elements */}
          <div className="flex flex-col w-full items-start gap-4">
            <Input
              className="h-10 px-4 py-2 bg-white rounded-lg border border-solid border-[#dfdfdf] text-sm font-normal text-[#828282]"
              placeholder="email@domain.com"
            />
            <Button className="w-full h-10 bg-black rounded-lg text-white text-sm font-medium" onClick={onContinue}>
              Continue
            </Button>
          </div>

          {/* Divider */}
          <div className="flex w-full items-center justify-center gap-2">
            <Separator className="flex-1 h-px bg-[#e6e6e6]" />
            <span className="font-normal text-[#828282] text-sm text-center leading-[19.6px]">
              or
            </span>
            <Separator className="flex-1 h-px bg-[#e6e6e6]" />
          </div>

          {/* Google sign-in */}
          <Card className="w-full h-10 bg-white rounded-lg flex items-center justify-center">
            <div className="flex items-center gap-2">
              <img className="w-5 h-5" alt="Logo" src="/logo.svg" />
              <span className="font-medium text-black text-sm leading-[19.6px]">
                Continue with Google
              </span>
            </div>
          </Card>

          {/* Terms text */}
          <p className="text-xs text-center leading-[18px] w-full mt-2">
            <span className="text-[#828282]">
              By clicking continue, you agree to our{" "}
            </span>
            <span className="text-black">Terms of Service</span>
            <span className="text-[#828282]"> and </span>
            <span className="text-black">Privacy Policy</span>
          </p>
        </div>

        {/* App title */}
        <h1 className="absolute top-[84px] left-0 w-full font-semibold text-black text-2xl text-center tracking-[-0.24px] leading-9">
          FridgePal
        </h1>

        {/* Status bar */}
        <div className="absolute w-full h-11 top-0 left-0">
          <div className="absolute w-[67px] h-[11px] top-[17px] right-[14px] flex justify-end">
            <img
              className="w-[17px] h-[11px]"
              alt="Mobile signal"
              src="/mobile-signal.svg"
            />
            <img
              className="w-[15px] h-[11px] ml-[5px]"
              alt="Wifi"
              src="/wifi.svg"
            />
            <img
              className="w-6 h-[11px] ml-[5px]"
              alt="Battery"
              src="/battery.png"
            />
          </div>
          <div className="absolute w-[54px] h-[21px] top-3 left-[21px] bg-[url(/time.svg)] bg-[100%_100%]" />
        </div>

        {/* App logo */}
        <img
          className="absolute w-[177px] h-[205px] top-[143px] left-[99px]"
          alt="Fridgapp logo"
          src="/fridgapp-logo-1.png"
        />
      </div>
    </div>
  );
};
