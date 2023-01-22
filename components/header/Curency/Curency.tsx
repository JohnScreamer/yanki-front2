import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../Hooks/common";
import { Currency, setCurrency } from "../../../Redux/Slice/Common";
import SelectCustom from "../../UI/Select/Select";

type CurencyType = {};

const Curency: FC<CurencyType> = () => {
    const curetCurrency = useAppSelector((state) => state.common.currency);
    const dispatch = useAppDispatch();

    const handlerSetCurrency = (val: string) => {
        if (val === "USD$" || val === "UA₴") dispatch(setCurrency(val));
    };
    return (
        <div className="mr-4 ">
            <SelectCustom
                value={curetCurrency}
                onChange={handlerSetCurrency}
                list={[{ name: "UA₴" }, { name: "USD$" }]}
            />
        </div>
    );
};

export default Curency;
