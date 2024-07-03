export enum CardMarketTypeEnum {
	buy,
	sell,
}

export type CardMarket = {
	type: CardMarketTypeEnum;
	price: string;
};
