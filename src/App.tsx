import Header from "@components/header";
import "./App.css";
import { CardMarket } from "@components/cardMarket";
import { CardMarketTypeEnum } from "@/types/cardMarket";
import { useState, useEffect } from "react";
import type { Prices } from "@/types/prices";

function App() {
	const [prices, setPrices] = useState<Prices>({
		buyPrice: "0",
		sellPrice: "0",
	});
	useEffect(() => {
		const sse = new EventSource(import.meta.env.VITE_BASE_URL + "/prices");

		sse.onmessage = (e) => setPrices(JSON.parse(e.data));
		sse.onerror = () => {
			sse.close();
		};
		return () => {
			sse.close();
		};
	}, []);

	return (
		<>
			<Header />
			<section className="flex flex-col items-center text-center md:flex-row md: justify-center">
				<CardMarket type={CardMarketTypeEnum.buy} price={prices.buyPrice} />
				<CardMarket type={CardMarketTypeEnum.sell} price={prices.sellPrice} />
			</section>
		</>
	);
}

export default App;
