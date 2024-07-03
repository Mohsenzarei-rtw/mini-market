import { FC, useState } from "react";
import { type CardMarket as CardMarketType, CardMarketTypeEnum } from "@/types/cardMarket";
import type { OrderParams } from "@/types/order";
import { Drawer } from "@components/drawer";
import { BuyButton } from "@components/buyButton";
import { SellButton } from "@components/sellButton";
import { toPriceFormat } from "@helpers/utilities";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useBuyOrder, useSellOrder } from "src/services/order";

export const CardMarket: FC<CardMarketType> = ({ type, price }) => {
	const [showDrawer, setShowDrawer] = useState<boolean>(false);
	const toggleDrawer = () => setShowDrawer((prevState) => !prevState);

	const [buyOrder] = useBuyOrder();
	const [sellOrder] = useSellOrder();

	const methods = useForm<OrderParams>({});

	const onSubmit: SubmitHandler<OrderParams> = (data) => {
		if (type === CardMarketTypeEnum.buy) {
			buyOrder({ ...data, price });
		} else {
			sellOrder({ ...data, price });
		}
		toggleDrawer();
	};

	return (
		<article className="text-cyan-50 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-w-80 m-4">
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)} className="*:mt-4">
					<h3>قیمت {type === CardMarketTypeEnum.buy ? "خرید" : "فروش"}</h3>
					<div>
						{toPriceFormat(price)}
						<span className="text-xs p-2">ریال</span>
					</div>

					{type === CardMarketTypeEnum.buy ? (
						<BuyButton onClickHandler={toggleDrawer} />
					) : (
						<SellButton onClickHandler={toggleDrawer} />
					)}
					{showDrawer && <Drawer type={type} toggleDrawer={toggleDrawer} />}
				</form>
			</FormProvider>
		</article>
	);
};
