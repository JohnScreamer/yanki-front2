import { FC, useState } from "react";
// import s from `./Select.module.scss`;
import ClickAwayListener from "@mui/base/ClickAwayListener";

import * as React from "react";
import { useIsMain } from "../../../Hooks/useIsMain";
import { Currency } from "../../../Redux/Slice/Common";
import { useAppSelector } from "../../../Hooks/common";

interface SelectType {
    list: Array<{ name: string }>;
    value: string | null;
    onChange: (value: string) => void;
    label?: string;
    main?: boolean;
}

const SelectCustom: FC<SelectType> = ({ list, value, onChange, label }) => {
    const [isActive, setActive] = useState(false);
    const toggleDropList = () => {
        setActive((status) => !status);
    };
    const isMain = useIsMain();

    const choseOption = (name: string) => {
        onChange(name);
        setActive(false);
    };
    const options = list.map((el) => (
        <li
            className="border-accent-light p-1 border-t-2  cursor-pointer "
            key={el.name}
            onClick={() => choseOption(el.name)}
        >
            {el.name}
        </li>
    ));
    const theme = useAppSelector((state) => state.common.theme);
    const arrowColor = isMain ? "#f5f5f5" : "#252525";
    const listStyle = isMain
        ? "absolute bg-prime-light dark:bg-main2-dark text-center min-w-full z-30"
        : "absolute bg-base-light  dark:bg-main2-dark text-center min-w-full z-30";

    return (
        <ClickAwayListener onClickAway={() => setActive(false)}>
            <div className="relative  z-40">
                <button onClick={toggleDropList} className="flex items-center">
                    <div className="mr-2">{label ? label : value}</div>
                    {isActive ? (
                        <svg
                            width="11"
                            height="7"
                            viewBox="0 0 11 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.01855 3.88906L8.90762 -4.85606e-08L10.0186 1.11094L5.01855 6.11093L0.0185546 1.11094L1.12949 -3.88553e-07L5.01855 3.88906Z"
                                fill={theme === "dark" ? "#f5f5f5" : arrowColor}
                            />
                        </svg>
                    ) : (
                        <svg
                            width="11"
                            height="7"
                            viewBox="0 0 11 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.0188 2.2219L1.12974 6.11096L0.0187988 5.00003L5.0188 2.67625e-05L10.0188 5.00003L8.90786 6.11096L5.0188 2.2219Z"
                                fill={theme === "dark" ? "#f5f5f5" : arrowColor}
                            />
                        </svg>
                    )}
                </button>
                {isActive ? <ul className={listStyle}>{options}</ul> : null}
            </div>
        </ClickAwayListener>
    );
};

export default SelectCustom;
