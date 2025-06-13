import React, { useEffect, useState } from "react";
import { SearchIcon, HomeIcon, PackageIcon, ShoppingCartIcon, BellIcon, UserIcon } from "lucide-react";
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
const filterOptions = ["All", "Expired", "Expiring Soon", "Fresh"];

export const Inventory = (props: { onNavigate?: (page: 'home' | 'inventory' | 'tobuy' | 'activity' | 'profile') => void }): JSX.Element => {
	const [currentTime, setCurrentTime] = useState<string>("");
	const [selectedFilter, setSelectedFilter] = useState<string>("All");

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

	// Filter inventory items based on selected filter
	const filteredItems = selectedFilter && selectedFilter !== "All"
		? inventoryItems.filter((item) => {
			if (selectedFilter === "Expired") {
				return item.status.toLowerCase() === "expired";
			} else if (selectedFilter === "Expiring Soon") {
				return item.status.toLowerCase().includes("expires in");
			} else if (selectedFilter === "Fresh") {
				return item.status.toLowerCase() === "fresh";
			}
			return true;
		})
		: inventoryItems;

	return (
		<div className="bg-white flex flex-row justify-center w-full">
			<div className="bg-white w-full max-w-[375px] min-h-screen flex flex-col relative">
				{/* Status bar */}
				<div className="w-full h-11 flex justify-between items-center px-5">
					<div className="w-[54px] h-[21px] flex items-center justify-start">
						<span className="font-semibold text-black text-base tracking-tight">
							{currentTime}
						</span>
					</div>
					<div className="flex items-center gap-1">
						<img
							className="w-[17px] h-[11px]"
							alt="Mobile signal"
							src="/mobile-signal.svg"
						/>
						<img className="w-[15px] h-[11px]" alt="Wifi" src="/wifi.svg" />
						<img className="w-6 h-[11px]" alt="Battery" src="/battery.png" />
					</div>
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
							variant={selectedFilter === option ? "default" : "outline"}
							className={`h-8 px-3 py-1.5 rounded-lg border border-solid border-[#cac4d0] ${selectedFilter === option ? 'bg-primary text-white' : ''}`}
							onClick={() => setSelectedFilter(option)}
						>
							<span className={`text-center whitespace-nowrap ${selectedFilter === option ? 'text-white' : 'text-m3syslighton-surface-variant'}`}>
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
					<div className="flex flex-col py-2 gap-1"> {/* Reduced gap for closer items */}
						{filteredItems.map((item) => (
							<div
								key={item.name}
								className="w-full h-16 bg-gray-50 rounded-lg shadow-md flex items-center justify-between px-4 my-1"
							>
								<div className="flex items-center">
									<div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
										<img
											className="w-10 h-10 object-cover rounded-full"
											alt={item.name}
											src={item.name === 'Apple' ? '/rectangle-1.png' : item.name === 'Banana' ? '/banana.jpeg' : item.name === 'Paneer Makhani' ? '/paneer.jpg' : '/bread.jpg'}
										/>
									</div>
									<div className="ml-4">
										<p className="text-base font-semibold text-black">{item.name}</p>
										<p className="text-base text-gray-500">Quantity: {item.quantity}</p>
									</div>
								</div>
								<span
									className="font-normal text-[13px] text-right leading-5 [font-family:'ABeeZee',Helvetica]"
									style={{ color: item.statusColor }}
								>
									{item.status}
								</span>
							</div>
						))}
					</div>
				</div>

				{/* Microphone button */}
				<div className="absolute bottom-[152px] right-4">
					<Button
						className="w-[75px] h-[75px] rounded-full bg-[#cce8f3] flex items-center justify-center relative"
						size="icon"
					>
						{/* Dark blue mic icon on top of the light blue circle */}
						<img
							src="/mic.svg"
							alt="Mic"
							className="w-[38px] h-[35px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
							style={{ filter: 'invert(13%) sepia(98%) saturate(7477%) hue-rotate(217deg) brightness(90%) contrast(120%)' }}
						/>
					</Button>
				</div>

				{/* Bottom navigation */}
				<nav className="w-full flex justify-around items-center h-14 border-t border-gray-200 bg-white fixed bottom-0 left-1/2 -translate-x-1/2 max-w-[375px]">
					<button onClick={() => props.onNavigate && props.onNavigate('home')}><HomeIcon className="w-6 h-6" /></button>
					<button onClick={() => props.onNavigate && props.onNavigate('inventory')}><PackageIcon className="w-6 h-6" /></button>
					<button onClick={() => props.onNavigate && props.onNavigate('tobuy')}><ShoppingCartIcon className="w-6 h-6" /></button>
					<button onClick={() => props.onNavigate && props.onNavigate('activity')}><BellIcon className="w-6 h-6" /></button>
					<button onClick={() => props.onNavigate && props.onNavigate('profile')}><UserIcon className="w-6 h-6" /></button>
				</nav>
			</div>
		</div>
	);
};
