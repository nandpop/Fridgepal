import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
	HomeIcon,
	PackageIcon,
	ShoppingCartIcon,
	SearchIcon,
	BellIcon,
	UserIcon,
} from "lucide-react";

// Data for frequently bought items
const frequentlyBoughtItems = [
	{ id: 1, name: "Pear", image: "/pear.jpg" },
	{ id: 2, name: "Watermelon", image: "/watermelon.jpg" },
	{ id: 3, name: "Multi-Grain Bread", image: "/bread.jpg" },
	{ id: 4, name: "Maggi", image: "/maggi.jpg" },
];

// Data for wishlist items
const wishlistItems = [
	{ id: 1, name: "Banana", quantity: 2, image: "/banana.jpeg" },
	{ id: 2, name: "Paneer", quantity: 1, image: "/paneer.jpg" },
	{ id: 3, name: "Roti", quantity: 1, image: "/roti.jpg" },
];

export const ToBuy = ({
	onNavigate,
	setShoppingAt
}: {
	onNavigate?: (page: "home" | "inventory" | "tobuy" | "activity" | "profile" | "checkout") => void;
	setShoppingAt?: (service: "Zepto" | "Blinkit") => void;
}): JSX.Element => {
	const [currentTime, setCurrentTime] = useState<string>("");

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

	return (
		<div className="bg-white flex flex-row justify-center w-full">
			<div className="bg-white overflow-hidden w-[375px] min-h-screen flex flex-col relative">
				{/* Status Bar */}
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

				{/* Main Scrollable Content */}
				<div className="flex-1 overflow-y-auto pb-16">
					{/* Header */}
					<div className="w-full text-center mt-2 mb-4">
						<h1 className="font-semibold text-xl tracking-[-0.40px]">
							To Buy
						</h1>
					</div>

					{/* Search Bar */}
					<div className="px-4 mb-4">
						<div className="relative">
							<SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
							<Input
								className="pl-10 py-2 bg-neutral-100 rounded-lg w-full"
								placeholder="Search"
							/>
						</div>
					</div>

					{/* Buy with section */}
					<div className="flex justify-between items-center px-4 mb-2">
						<span className="font-semibold text-base tracking-[-0.32px] text-black leading-5">
							Buy with
						</span>
						<span className="font-semibold text-base tracking-[-0.32px] text-black leading-5">
							Calculate Cost
						</span>
					</div>

					{/* Service Buttons */}
					<div className="flex justify-between px-4 mb-4 gap-4">
						<Button
							className="w-1/2 h-[55px] bg-[#6f006c] rounded-lg overflow-hidden border border-solid border-black font-['Inter',Helvetica] font-semibold text-white text-xl tracking-[-0.40px] leading-7"
							onClick={() => {
								setShoppingAt && setShoppingAt("Zepto");
								onNavigate && onNavigate("checkout");
							}}
						>
							Zepto
						</Button>
						<Button
							className="w-1/2 h-[55px] bg-[#fbd30f] rounded-lg overflow-hidden font-['Inter',Helvetica] font-semibold text-black text-xl tracking-[-0.40px] leading-7"
							onClick={() => {
								setShoppingAt && setShoppingAt("Blinkit");
								onNavigate && onNavigate("checkout");
							}}
						>
							Blinkit
						</Button>
					</div>

					{/* Frequently Bought Items Section */}
					<div className="px-4 mb-4">
						<h2 className="font-semibold text-base tracking-[-0.32px] text-black leading-5 mb-2">
							Frequently Bought Items
						</h2>
						<div className="flex overflow-x-auto py-2">
							{frequentlyBoughtItems.map((item) => (
								<div
									key={item.id}
									className="min-w-[80px] h-[90px] bg-gray-50 rounded-lg shadow-md m-2 flex flex-col items-center"
								>
									<img
										className="w-[48px] h-[48px] object-cover rounded-full mt-2"
										alt={item.name}
										src={item.image.startsWith('/') ? item.image : `/` + item.image}
									/>
									<p className="text-center font-medium text-xs mt-2 w-full max-w-[120px] truncate">{item.name}</p>
								</div>
							))}
						</div>
					</div>

					{/* Divider */}
					<div className="w-full h-px bg-gray-200 mb-4" />

					{/* Wishlist Section */}
					<div className="px-4 mb-4">
						<h2 className="font-semibold text-base tracking-[-0.32px] text-black leading-5 mb-2">
							Your Wishlist
						</h2>
						<div className="flex flex-col py-2">
							{wishlistItems.map((item) => (
								<div
									key={item.id}
									className="w-full h-16 bg-gray-50 rounded-lg shadow-md my-2 flex items-center justify-between px-4"
								>
									<div className="flex items-center">
										<div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
											<img
												className="w-10 h-10 object-cover rounded-full"
												alt={item.name}
												src={item.image}
											/>
										</div>
										<div className="ml-4">
											<p className="text-base font-semibold text-black">{item.name}</p>
											<p className="text-base text-gray-500">Quantity: {item.quantity}</p>
										</div>
									</div>
									<Button
										variant="default"
										className="rounded-full w-[100px] h-10"
									>
										Move to Cart
									</Button>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Microphone button (absolute above bottom nav) */}
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

				{/* Bottom Navigation */}
				<nav className="w-full flex justify-around items-center h-14 border-t border-gray-200 bg-white fixed bottom-0 left-1/2 -translate-x-1/2 max-w-[375px]">
					<button onClick={() => onNavigate && onNavigate("home")}>
						<HomeIcon className="w-6 h-6" />
					</button>
					<button onClick={() => onNavigate && onNavigate("inventory")}>
						<PackageIcon className="w-6 h-6" />
					</button>
					<button onClick={() => onNavigate && onNavigate("tobuy")}>
						<ShoppingCartIcon className="w-6 h-6" />
					</button>
					<button onClick={() => onNavigate && onNavigate("activity")}>
						<BellIcon className="w-6 h-6" />
					</button>
					<button onClick={() => onNavigate && onNavigate("profile")}>
						<UserIcon className="w-6 h-6" />
					</button>
				</nav>
			</div>
		</div>
	);
};
