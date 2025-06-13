import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const InventoryStatsSection = (): JSX.Element => {
  return (
    <div className="mt-0">
      <Card className="w-[165px] border border-[#dfdfdf] rounded-lg">
        <CardContent className="flex flex-col items-start gap-2 p-4 space-y-1">
          <h3 className="w-fit mt-[-1.00px] font-semibold text-black text-sm leading-[19.6px] whitespace-nowrap">
            Items in the Fridge
          </h3>
          <p className="w-fit font-semibold text-black text-xl tracking-[-0.40px] leading-[24.0px] whitespace-nowrap">
            16
          </p>
          <span className="w-fit font-medium text-[#828282] text-xs leading-[18px] whitespace-nowrap">
            +20% month over month
          </span>
        </CardContent>
      </Card>
    </div>
  );
};
