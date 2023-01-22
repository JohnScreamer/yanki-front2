import { Currency } from "../../Redux/Slice/Common";
import { FC } from "react";
import { useAppSelector } from "../../Hooks/common";

type CurrencyType = {
    price: number;
};

const Price: FC<CurrencyType> = ({ price }) => {
    const currency = useAppSelector((state) => state.common.currency);
    const currentPrice =
        currency === "UA₴" ? price : Math.round((price / 37) * 100) / 100;
    const currentPriceName = currency === "UA₴" ? "грн" : "USD";
    return (
        <div className="font-bold     flex  w-[75px] font-mono    gap-1  ">
            {currentPrice} <span>{currentPriceName}</span>
        </div>
    );
};

export default Price;
