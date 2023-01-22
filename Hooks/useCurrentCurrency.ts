import { Currency } from "../Redux/Slice/Common";

export const CurrencyPrice = (price: number, currency: Currency) => {
    const finalPrice =
        currency === "UA₴" ? price : Math.round((price / 37) * 100) / 100;
    return finalPrice;
};
