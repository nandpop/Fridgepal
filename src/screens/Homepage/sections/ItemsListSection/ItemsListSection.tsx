import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

export const ItemsListSection = (): JSX.Element => {
  // Data for family members to enable mapping
  const familyMembers = [
    {
      id: 1,
      name: "Elynn Lee",
      email: "elynn.lee@gmail.com",
      avatar: "/rectangle-1.png",
    },
    {
      id: 2,
      name: "Oscar Dum",
      email: "oscar@gmail.com",
      avatar: "/rectangle-1-1.png",
    },
    {
      id: 3,
      name: "Carlo Emilion",
      email: "emcar@gmail.com",
      avatar: "/rectangle-1-2.png",
    },
    {
      id: 4,
      name: "Daniel Jay Park",
      email: "djpark@gmail.com",
      avatar: "/rectangle-1-3.png",
    },
    {
      id: 5,
      name: "Mark Rojas",
      email: "rojasmar@skiff.com",
      avatar: "/rectangle-1-4.png",
    },
  ];

  return (
    <Card className="w-full max-w-[343px] border border-[#dfdfdf] rounded-lg overflow-hidden">
      <CardContent className="p-4">
        <h3 className="font-semibold text-sm mb-4">Family Members</h3>
        <div className="flex flex-col space-y-1">
          {familyMembers.map((member) => (
            <div key={member.id} className="flex items-center gap-3 py-2">
              <Avatar>
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-sm text-black">{member.name}</p>
                <p className="text-xs text-[#828282]">{member.email}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
