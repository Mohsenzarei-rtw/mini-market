export const toPriceFormat = (price: string) => new Intl.NumberFormat().format(Number(price ?? 0));
