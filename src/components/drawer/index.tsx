import { BuyButton } from "@components/buyButton";
import { SellButton } from "@components/sellButton";
import { CardMarketTypeEnum } from "@/types/cardMarket";
import { FC, useEffect } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
	toggleDrawer: () => void;
	type: CardMarketTypeEnum;
};

export const Drawer: FC<Props> = ({ toggleDrawer, type }) => {
	const { register, resetField } = useFormContext();
	useEffect(() => {
		resetField("weight");
	}, []);

	return (
		<div className="fixed top-0 left-0 w-[100%] h-[100vh] bg-opacity-90 bg-gray-900 md:flex">
			<div className="fixed *:mt-8 p-8 bg-stone-50 w-full rounded-t-3xl bottom-0 animate-swipe-up md:animate-become md:rounded-lg md:w-fit md:m-auto md:relative">
				<p>ثبت سفارش {type === CardMarketTypeEnum.buy ? "خرید" : "فروش"}</p>
				<div className="flex">
					<span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
						گرم
					</span>
					<input
						type="text"
						id="website-admin"
						{...register("weight", { required: true })}
						className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
						placeholder="50"
					/>
				</div>
				<div>
					<button
						onClick={toggleDrawer}
						className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
					>
						انصراف
					</button>

					{type === CardMarketTypeEnum.buy ? <BuyButton type="submit" /> : <SellButton type="submit" />}
				</div>
			</div>
		</div>
	);
};
