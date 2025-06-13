import React from "react";
import { SearchIcon, HomeIcon, PackageIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area";

// Data for categories
const categories = [
	{ name: "Fruits", image: "/image-5.svg" },
	{ name: "Vegetables", image: "/image-1.svg" },
	{ name: "Dairy", image: "/image-3.svg" },
	{ name: "Curries", image: "/image-7.svg" },
];

// Data for inventory items
const inventoryItems = [
	{
		name: "Apple",
		status: "Expires in 5 days",
		statusColor: "#bfb00c",
		quantity: "3",
	},
	{
		name: "Banana",
		status: "Expired",
		statusColor: "#d01111",
		quantity: "1",
	},
	{
		name: "Paneer Makhani",
		status: "Fresh",
		statusColor: "#2bae4e",
		quantity: "1",
	},
	{
		name: "Pizza",
		status: "Expires in 5 days",
		statusColor: "#e0c86b",
		quantity: "2 slices",
	},
];

// Filter options
const filterOptions = ["Expired", "Expiring Soon", "Fresh"];

export const Inventory = ({ onNavigate }: { onNavigate?: (page: 'home' | 'inventory' | 'tobuy') => void }): JSX.Element => {
	return (
		<div className="bg-white flex flex-col h-[812px] w-[375px] relative overflow-hidden">
			{/* Status bar */}
			<div className="w-full h-11">
				<div className="absolute w-[67px] h-[11px] top-[17px] right-4">
					<img
						className="absolute w-6 h-[11px] top-0 right-0"
						alt="Battery"
						src="/battery.png"
					/>
					<img
						className="absolute w-[15px] h-[11px] top-0 right-[25px]"
						alt="Wifi"
						src="/wifi.svg"
					/>
					<img
						className="absolute w-[17px] h-[11px] top-0 right-[45px]"
						alt="Mobile signal"
						src="/mobile-signal.svg"
					/>
				</div>
				<div className="absolute w-[54px] h-[21px] top-3 left-[21px] bg-[url(/time.svg)] bg-[100%_100%]" />
			</div>

			{/* Header */}
			<div className="w-full text-center mt-2 mb-4">
				<h1 className="font-semibold text-xl tracking-[-0.40px]">
					Inventory
				</h1>
			</div>

			{/* SearchIcon bar */}
			<div className="px-4 mb-4">
				<div className="relative">
					<SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
					<Input
						className="pl-10 py-2 bg-neutral-100 rounded-lg"
						placeholder="Search"
					/>
				</div>
			</div>

			{/* Filter chips */}
			<div className="flex px-4 gap-2 mb-4">
				{filterOptions.map((option) => (
					<Button
						key={option}
						variant="outline"
						className="h-8 px-3 py-1.5 rounded-lg border border-solid border-[#cac4d0]"
					>
						<span className="text-m3syslighton-surface-variant text-center whitespace-nowrap">
							{option}
						</span>
					</Button>
				))}
			</div>

			{/* Categories section */}
			<div className="px-4 mb-4">
				<div className="flex items-center mb-2">
					<h2 className="font-semibold text-base tracking-[-0.32px]">
						Categories
					</h2>
					<div className="w-5 h-5 bg-neutral-100 rounded-[10px] ml-2.5 flex items-center justify-center">
						<img
							className="w-[7px] h-3.5"
							alt="Icon chevron"
							src="/icon-chevron.svg"
						/>
					</div>
				</div>

				<ScrollArea className="w-full">
					<div className="flex gap-6 py-2">
						{categories.map((category) => (
							<div
								key={category.name}
								className="flex flex-col items-center gap-2"
							>
								<div
									className="w-[76px] h-[76px] rounded-[38px] bg-cover bg-center"
									style={{ backgroundImage: `url(${category.image})` }}
								/>
								<span className="w-[76px] font-medium text-primary text-xs text-center tracking-[0.12px] leading-[16.8px]">
									{category.name}
								</span>
							</div>
						))}
					</div>
					<ScrollBar />
				</ScrollArea>
			</div>

			{/* In the Fridge section */}
			<div className="px-4 mb-4">
				<h2 className="font-semibold text-base tracking-[-0.32px] mb-2">
					In the Fridge
				</h2>

				<div className="flex flex-col gap-3">
					{inventoryItems.map((item) => (
						<Card
							key={item.name}
							className="rounded-3xl bg-[rgba(51,51,51,1)] backdrop-blur-[75px]"
						>
							<CardContent className="p-3.5 flex items-center">
								<div className="w-[38px] h-[38px] rounded-[8.5px] bg-[url(/no-app-icon-3.png)] bg-cover bg-center mr-2.5" />
								<div className="flex flex-col flex-1">
									<div className="flex justify-between">
										<span className="font-normal text-black text-[15px] tracking-[-0.23px] leading-5 [font-family:'ABeeZee',Helvetica]">
											{item.name}
										</span>
										<span
											className="font-normal text-[13px] text-right leading-5 [font-family:'ABeeZee',Helvetica]"
											style={{ color: item.statusColor }}
										>
											{item.status}
										</span>
									</div>
									<span className="font-normal text-[#74767e] text-[15px] tracking-[-0.23px] leading-5 [font-family:'ABeeZee',Helvetica]">
										Quantity: {item.quantity}
									</span>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>

			{/* Microphone button */}
			<div className="absolute bottom-[152px] right-4">
				<Button
					className="w-[75px] h-[75px] rounded-full bg-[#cce8f3] flex items-center justify-center"
					size="icon"
				>
					<div className="w-[38px] h-[35px] bg-[url(/mic.svg)] bg-[100%_100%]" />
				</Button>
			</div>

			{/* Bottom navigation */}
			<div className="absolute bottom-0 left-0 w-full bg-white shadow-[0px_-0.5px_0px_#0000001a] backdrop-blur-[10px]">
				<div className="flex justify-around items-center h-11">
					<button onClick={() => onNavigate && onNavigate('home')}><HomeIcon className="w-6 h-6" /></button>
					<button onClick={() => onNavigate && onNavigate('inventory')}><PackageIcon className="w-6 h-6" /></button>
					<button onClick={() => onNavigate && onNavigate('tobuy')}><ShoppingCartIcon className="w-6 h-6" /></button>
				</div>
				<div className="h-[34px] flex justify-center items-center">
					<div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
				</div>
			</div>
		</div>
	);
};
