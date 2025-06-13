// ...existing code from FridgePal...
// ActivityListSection from Activity module
import React from "react";
import { Avatar } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";

// Activity data for mapping
const activities = [
	{
		id: 1,
		username: "starryskies23",
		timeAgo: "today",
		action: "Shopped at Blinkit",
		avatar: "/avatar.png",
		hasShowButton: true,
		details: null,
	},
	{
		id: 2,
		username: "nebulanomad",
		timeAgo: "1d",
		action: "Shopped at Zepto",
		avatar: "/avatar-1.png",
		hasShowButton: true,
		details: null,
	},
	{
		id: 3,
		username: "emberecho",
		timeAgo: "2d",
		action: "Added to Inventory",
		avatar: "/avatar-2.png",
		hasShowButton: false,
		details: ["3 Apples"],
	},
	{
		id: 4,
		username: "shadowlynx",
		timeAgo: "4d",
		action: "Removed from Inventory",
		avatar: "/avatar-3.png",
		hasShowButton: false,
		details: ["2 Eggs", "1 Onion"],
	},
	{
		id: 5,
		username: "nebulanomad",
		timeAgo: "5d",
		action: "Shopped at Zepto",
		avatar: "/avatar-4.png",
		hasShowButton: true,
		details: null,
	},
	{
		id: 6,
		username: "lunavoyager",
		timeAgo: "5d",
		action: "Added to To Buy",
		avatar: "/avatar-5.png",
		hasShowButton: false,
		details: ["Spinach", "Multi-grain Bread", "Paneer"],
	},
];

export const ActivityListSection = (): JSX.Element => {
	return (
		<div className="flex flex-col w-full items-start mt-2">
			{activities.map((activity) => (
				<div
					key={activity.id}
					className="relative w-full flex items-start gap-4 py-3 px-4"
				>
					{/* Activity indicator dot */}
					{activity.id < 5 && (
						<div className="absolute w-1.5 h-1.5 top-[33px] left-[5px] bg-[#fe2c55] rounded-[3px]" />
					)}

					{/* Avatar */}
					<Avatar className="w-12 h-12 rounded-full">
						<img
							src={activity.avatar}
							alt={`${activity.username}'s avatar`}
							className="w-full h-full object-cover rounded-full"
						/>
					</Avatar>

					{/* Content */}
					<div className="flex-1 flex flex-col items-start gap-0.5">
						<div className="flex items-start gap-1 w-full">
							<div className="font-medium text-black text-sm leading-5 whitespace-nowrap">
								{activity.username}
							</div>
							<div className="font-normal text-[#00000080] text-sm leading-5">
								{activity.timeAgo}
							</div>
						</div>

						<div className="font-normal text-[#00000080] text-sm leading-5">
							{activity.action}
						</div>

						{/* Details if any */}
						{activity.details && (
							<div className="mt-5 pl-2.5 relative">
								<div
									className={`absolute left-0 top-0 w-${
										activity.details.length > 1 ? "px" : "3px"
									} h-${
										activity.details.length > 1 ? "[35px]" : "5"
									} bg-[#d9d9d9] rounded-[3px]`}
								/>
								<div className="font-normal text-[#828282] text-sm leading-5">
									{activity.details.map((detail, index) => (
										<React.Fragment key={index}>
											{detail}
											{index < activity.details.length - 1 && <br />}
										</React.Fragment>
									))}
								</div>
							</div>
						)}
					</div>

					{/* Show button */}
					{activity.hasShowButton && (
						<Button className="h-8 rounded-lg bg-black text-white px-4">
							Show
						</Button>
					)}
				</div>
			))}
		</div>
	);
};
