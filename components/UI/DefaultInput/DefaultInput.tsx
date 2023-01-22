import { FC } from "react";

type DefaultInputType = {
    fn: (value: number | string) => void;
    value: string | number;
    number?: boolean;
};

const DefaultInput: FC<DefaultInputType> = ({ fn, value, number }) => {
    return (
        <input
            type={number ? "number" : "text"}
            value={value}
            onChange={(e) => fn(e.target.value)}
        />
    );
};

export default DefaultInput;
