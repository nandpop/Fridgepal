import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const MonthlySpendChartSection = (): JSX.Element => {
  // Data for y-axis labels
  const yAxisLabels = [
    { value: "$50K", position: "top-0" },
    { value: "$45K", position: "top-9" },
    { value: "$40K", position: "top-[72px]" },
    { value: "$35K", position: "top-[108px]" },
    { value: "$30K", position: "top-36" },
  ];

  // Data for x-axis labels
  const xAxisLabels = [
    { value: "Nov 23", position: "left-0" },
    { value: "24", position: "left-[61px]" },
    { value: "25", position: "left-[100px]" },
    { value: "26", position: "left-[139px]" },
    { value: "27", position: "left-[178px]" },
    { value: "28", position: "left-[216px]" },
    { value: "29", position: "left-[255px]" },
    { value: "30", position: "left-[294px]" },
  ];

  return (
    <Card className="w-full max-w-[343px] h-[282px] rounded-lg border border-[#dfdfdf]">
      <CardContent className="p-4 relative h-full">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-sm text-black">Monthly Spend</h3>
          <div className="text-right">
            <p className="font-semibold text-base tracking-[-0.32px] leading-[19.2px] text-black">
              $4,678.90
            </p>
            <p className="font-medium text-xs text-[#828282] leading-[18px]">
              +20% month over month
            </p>
          </div>
        </div>

        <div className="relative h-[178px] mt-4">
          {/* Horizontal grid lines */}
          <img
            className="w-full h-px object-cover"
            alt="Line"
            src="/line.svg"
          />
          <img
            className="absolute top-8 w-full h-px object-cover"
            alt="Line"
            src="/line.svg"
          />
          <img
            className="absolute top-[68px] w-full h-px object-cover"
            alt="Line"
            src="/line.svg"
          />
          <img
            className="absolute top-[104px] w-full h-px object-cover"
            alt="Line"
            src="/line.svg"
          />
          <img
            className="absolute top-[140px] w-full h-px object-cover"
            alt="Line"
            src="/line.svg"
          />
          <img
            className="absolute top-44 w-full h-px object-cover"
            alt="Line"
            src="/line.svg"
          />

          {/* Y-axis labels */}
          <div className="absolute w-9 h-[158px] top-0 left-0.5">
            {yAxisLabels.map((label, index) => (
              <div
                key={index}
                className={`absolute ${label.position} left-0 font-normal text-[#828282] text-[10px] leading-[14px] whitespace-nowrap`}
              >
                {label.value}
              </div>
            ))}
          </div>

          {/* Graph */}
          <img
            className="absolute w-[304px] h-40 top-[17px] left-0"
            alt="Graph"
            src="/graph.png"
          />

          {/* Blue dot indicator */}
          <div className="absolute w-[30px] h-[30px] top-1 left-72 rounded-[15px]">
            <div className="relative w-2 h-2 top-[11px] left-[11px] bg-[#2d6eff] rounded" />
          </div>
        </div>

        {/* X-axis labels */}
        <div className="absolute w-[323px] h-3.5 bottom-4 left-4">
          {xAxisLabels.map((label, index) => (
            <div
              key={index}
              className={`absolute top-0 ${label.position} font-normal text-[#828282] text-[10px] leading-[14px] whitespace-nowrap`}
            >
              {label.value}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
