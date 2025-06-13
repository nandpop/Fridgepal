// ...existing code from FridgePal...
// FilterSection from Activity module
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const FilterSection = (): JSX.Element => {
  // Define the filter options as data to map over
  const filterOptions = [
    { id: "all", label: "All" },
    { id: "inventory", label: "Inventory" },
    { id: "to-buy", label: "To Buy" },
    { id: "shopped", label: "Shopped" },
  ];

  return (
    <div className="w-full pt-4">
      <Tabs defaultValue="all">
        <TabsList className="flex gap-2 bg-transparent p-0 h-auto">
          {filterOptions.map((option) => (
            <TabsTrigger
              key={option.id}
              value={option.id}
              className={`rounded-[20px] px-3.5 py-1.5 border border-solid font-medium text-sm [font-family:'Inter',Helvetica] data-[state=active]:bg-[#000000e6] data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-black data-[state=inactive]:border-[#e6e6e6]`}
            >
              {option.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};
