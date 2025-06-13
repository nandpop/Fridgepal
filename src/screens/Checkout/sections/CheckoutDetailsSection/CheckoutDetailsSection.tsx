import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Define data structure for items
const items = [
	{
		image: "/image.svg",
		brand: "Brand",
		name: "Product name",
		description: "Description",
		quantity: "01",
		price: "$10.99",
	},
	{
		image: "/image-1.svg",
		brand: "Brand",
		name: "Product name",
		description: "Description",
		quantity: "01",
		price: "$8.99",
	},
];

export const CheckoutDetailsSection = ({
	shoppingAt,
}: {
	shoppingAt?: "Zepto" | "Blinkit" | null;
}): JSX.Element => {
	const checkoutSections = [
		{
			label: "SHOPPING AT",
			value:
				typeof shoppingAt === "string" && shoppingAt
					? shoppingAt
					: "Select a service",
			hasChevron: true,
			isActive: true,
		},
		{
			label: "ADDRESS",
			value: "Add shipping address",
			hasChevron: true,
			isActive: false,
		},
		{
			label: "PAYMENT",
			value: "Visa *1234",
			hasChevron: true,
			isActive: true,
		},
		{
			label: "PROMOS",
			value: "Apply promo code",
			hasChevron: true,
			isActive: false,
		},
	];

	return (
		<Card className="w-full border-none shadow-none">
			<CardContent className="p-0">
				{/* Checkout sections */}
				{checkoutSections.map((section, index) => (
					<div key={index} className="flex items-start w-full">
						<div className="flex items-start gap-3 p-4 w-full border-b-[0.5px] border-[#e6e6e6]">
							<div className="w-[100px] [font-family:'Inter',Helvetica] font-medium text-black text-xs tracking-[0] leading-5">
								{section.label}
							</div>
							<div className="flex-1 h-5 relative">
								<div
									className={`[font-family:'Inter',Helvetica] font-normal text-sm tracking-[0] leading-[19.6px] ${
										section.isActive
											? "text-black"
											: "text-[#00000080]"
									}`}
								>
									{section.value}
								</div>
								{section.hasChevron && (
									<ChevronRightIcon className="absolute w-5 h-5 top-0 right-0" />
								)}
							</div>
						</div>
					</div>
				))}

				{/* Items section */}
				<div className="w-full border-b-[0.5px] border-[#e6e6e6]">
					{/* Items header */}
					<div className="flex p-4 pb-0">
						<div className="w-[100px] [font-family:'Inter',Helvetica] font-medium text-black text-xs tracking-[0] leading-5">
							ITEMS
						</div>
						<div className="w-[100px] [font-family:'Inter',Helvetica] font-medium text-black text-xs tracking-[0] leading-5">
							DESCRIPTION
						</div>
						<div className="flex-1 [font-family:'Inter',Helvetica] font-medium text-black text-xs text-right tracking-[0] leading-5">
							PRICE
						</div>
					</div>

					{/* Items list */}
					<div className="p-4 pt-2 space-y-4">
						{items.map((item, index) => (
							<div key={index} className="flex gap-4">
								<div
									className="w-[84px] h-[84px] rounded-lg bg-cover bg-center"
									style={{ backgroundImage: `url(${item.image})` }}
								/>
								<div className="flex flex-col w-[148px] gap-0.5">
									<div className="[font-family:'Inter',Helvetica] font-normal text-[#00000080] text-xs leading-[18px] tracking-[0]">
										{item.brand}
									</div>
									<div className="[font-family:'Inter',Helvetica] font-normal text-black text-sm tracking-[0] leading-[19.6px]">
										{item.name}
									</div>
									<div className="[font-family:'Inter',Helvetica] font-normal text-black text-sm tracking-[0] leading-[19.6px]">
										{item.description}
									</div>
									<div className="[font-family:'Inter',Helvetica] font-normal text-black text-sm tracking-[0] leading-[19.6px]">
										Quantity: {item.quantity}
									</div>
								</div>
								<div className="flex-1 [font-family:'Inter',Helvetica] font-normal text-black text-sm text-right tracking-[0] leading-[19.6px] whitespace-nowrap">
									{item.price}
								</div>
							</div>
						))}
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
