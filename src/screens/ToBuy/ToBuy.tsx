import React from "react";
import { Button } from "../../components/ui/button";

// Data for frequently bought items
const frequentlyBoughtItems = [
	{ id: 1, name: "Pear", image: "/image-2.svg" },
	{ id: 2, name: "Watermelon", image: "/image-3.svg" },
	{ id: 3, name: "Multi-Grain Bread", image: "/image.svg" },
	{ id: 4, name: "Maggi", image: "/image-1.svg" },
];

// Data for wishlist items
const wishlistItems = [
	{ id: 1, name: "Banana", quantity: 2 },
	{ id: 2, name: "Paneer", quantity: 1 },
	{ id: 3, name: "Frozen Roti", quantity: 1 },
];

export const ToBuy = ({
	onNavigate,
}: {
	onNavigate?: (page: "home" | "inventory" | "tobuy") => void;
}): JSX.Element => {
	return (
		<div className="bg-white flex flex-row justify-center w-full">
			<div className="bg-white overflow-hidden w-[375px] h-[812px] relative">
				{/* Status Bar */}
				<div className="absolute w-[375px] h-11 top-0 left-0">
					<div className="absolute w-[67px] h-[11px] top-[17px] left-[294px]">
						<img
							className="absolute w-6 h-[11px] top-0 left-[42px]"
							alt="Battery"
							src="/battery.png"
						/>
						<img
							className="absolute w-[15px] h-[11px] top-0 left-[22px]"
							alt="Wifi"
							src="/wifi.svg"
						/>
						<img
							className="absolute w-[17px] h-[11px] top-0 left-0"
							alt="Mobile signal"
							src="/mobile-signal.svg"
						/>
					</div>
					<div className="absolute w-[54px] h-[21px] top-3 left-[21px] bg-[url(/time.svg)] bg-[100%_100%]" />
				</div>
				{/* Header */}
				<div className="absolute w-[375px] h-16 top-0 left-0 bg-white shadow-md flex items-center justify-between px-4">
					<div className="flex items-center">
						<img
							className="w-8 h-8 rounded-full"
							alt="User"
							src="/user-avatar.png"
						/>
						<div className="ml-2">
							<p className="text-sm text-gray-500">Hello, User</p>
							<p className="text-lg font-semibold">
								What do you want to buy?
							</p>
						</div>
					</div>
					{/* <Button variant="ghost" className="p-0">
            <BellIcon className="w-6 h-6 text-gray-500" />
          </Button> */}
				</div>
				{/* Search Bar */}
				{/* <div className="absolute w-[335px] h-12 top-16 left-4 bg-gray-100 rounded-full flex items-center px-4">
          <SearchIcon className="w-5 h-5 text-gray-500" />
          <Input
            placeholder="Search for products"
            className="bg-transparent border-0 focus:ring-0 focus:outline-none ml-2"
          />
        </div> */}
				{/* Frequently Bought Items Section */}
				<div className="absolute w-[375px] top-24 left-0">
					<div className="px-4">
						<h2 className="text-lg font-semibold">Frequently Bought Items</h2>
					</div>
					<div className="flex overflow-x-auto py-2">
						{frequentlyBoughtItems.map((item) => (
							<div
								key={item.id}
								className="min-w-[120px] h-[120px] bg-gray-50 rounded-lg shadow-md m-2 flex flex-col items-center"
							>
								<img
									className="w-[80px] h-[80px] object-cover rounded-full mt-2"
									alt={item.name}
									src={item.image}
								/>
								<p className="text-center font-semibold mt-2">{item.name}</p>
								<Button
									variant="default"
									className="mt-auto mb-2 w-full rounded-full"
								>
									Add to Cart
								</Button>
							</div>
						))}
					</div>
				</div>
				{/* Divider */}
				<div className="absolute w-full h-px top-[380px] left-0 bg-gray-200" />
				{/* Wishlist Section */}
				<div className="absolute w-[375px] top-[392px] left-0">
					<div className="px-4">
						<h2 className="text-lg font-semibold">Your Wishlist</h2>
					</div>
					<div className="flex flex-col py-2">
						{wishlistItems.map((item) => (
							<div
								key={item.id}
								className="w-full h-16 bg-gray-50 rounded-lg shadow-md my-2 flex items-center justify-between px-4"
							>
								<div className="flex items-center">
									<div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
										<img
											className="w-6 h-6 text-gray-500"
											alt="Inventory"
											src="/box.svg"
										/>
									</div>
									<div className="ml-4">
										<p className="text-sm text-gray-500">{item.name}</p>
										<p className="text-lg font-semibold">
											Quantity: {item.quantity}
										</p>
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
				{/* Bottom Navigation */}
				<div className="absolute bottom-0 left-0 w-full bg-white shadow-[0px_-0.5px_0px_#0000001a] backdrop-blur-[10px]">
					<div className="flex justify-around items-center h-11">
						<button onClick={() => onNavigate && onNavigate("home")}>
							<img
								className="w-6 h-6"
								alt="Home"
								src="/icon-tab-home-fill.svg"
							/>
						</button>
						<button onClick={() => onNavigate && onNavigate("inventory")}>
							<img
								className="w-[29px] h-[27px]"
								alt="Inventory"
								src="/box.svg"
							/>
						</button>
						<button onClick={() => onNavigate && onNavigate("tobuy")}>
							<img
								className="w-6 h-6"
								alt="Cart"
								src="/iconmonstr-shopping-cart-2-1.svg"
							/>
						</button>
					</div>
					<div className="h-[34px] flex justify-center items-center">
						<div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
					</div>
				</div>
			</div>
		</div>
	);
};
