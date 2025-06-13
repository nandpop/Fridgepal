import React from "react";

export const SummarySection = (): JSX.Element => {
  // Data for summary items to enable mapping
  const summaryItems = [
    { label: "Subtotal (2)", value: "$19.98", isBold: false },
    { label: "Shipping total", value: "Free", isBold: false },
    { label: "Taxes", value: "$2.00", isBold: false },
    { label: "Total", value: "$21.98", isBold: true },
  ];

  return (
    <section className="flex flex-col w-full gap-2">
      {summaryItems.map((item, index) => (
        <div key={index} className="flex justify-between w-full">
          <span
            className={`font-inter text-sm text-black ${item.isBold ? "font-medium" : "font-normal"}`}
          >
            {item.label}
          </span>
          <span
            className={`font-inter text-sm text-black text-right ${item.isBold ? "font-medium" : "font-normal"}`}
          >
            {item.value}
          </span>
        </div>
      ))}
    </section>
  );
};
