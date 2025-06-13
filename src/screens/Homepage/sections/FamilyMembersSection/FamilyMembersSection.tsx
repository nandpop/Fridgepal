import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FamilyMembersSection = (): JSX.Element => {
  return (
    <Card className="flex flex-col items-start gap-2 p-4 border border-[#dfdfdf] rounded-lg">
      <CardContent className="p-0 space-y-2">
        <h3 className="font-semibold text-sm text-black font-sans leading-[19.6px]">
          Items Expired
        </h3>
        <p className="font-semibold text-xl text-black font-sans tracking-[-0.40px] leading-[24px]">
          3
        </p>
        <p className="font-medium text-xs text-[#828282] font-sans leading-[18px]">
          +33% month over month
        </p>
      </CardContent>
    </Card>
  );
};
