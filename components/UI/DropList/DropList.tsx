import { ClickAwayListener } from "@mui/material";
import Link from "next/link";
import { FC, useState } from "react";

type DropListType = {
    svg?: boolean;
    fn?: (value: string) => void;
    defaultValue?: string;
    value?: string;
    list: Array<{ value: string; url?: string; name?: string }>;
    center?: boolean;
    className?: string;
    capitalize?: boolean;
    absolute?: boolean;
};

const DropList: FC<DropListType> = ({
    svg,
    defaultValue,
    fn,
    value,
    list,
    center,
    className,
    capitalize,
    absolute,
}) => {
    const [listStatus, setListStatus] = useState(false);
    const handlerToggleOnclick = () => {
        setListStatus((status) => !status);
    };
    const arrList = list.map((el) => {
        if (el.url) {
            return (
                <Link href={el.url} key={el.value}>
                    <li className="cursor-pointer text-center ">{el.value}</li>
                </Link>
            );
        }
        if (fn) {
            return (
                <li
                    className={`cursor-pointer  text-base hover:text-accentActive-light dark:text-accent75-dark p-2 ${
                        value === el.name ? "font-black" : ""
                    }`}
                    key={el.value}
                    onClick={() => {
                        setListStatus(false);
                        fn(el.value);
                    }}
                >
                    {el.name ? el.name : el.value}
                </li>
            );
        }
    });

    return (
        <ClickAwayListener onClickAway={() => setListStatus(false)}>
            <div
                className={`w-full pb-[5px] border-prime-light relative border-b-[1px]  ${
                    listStatus ? "z-40" : ""
                } ${className}`}
            >
                <button
                    onClick={handlerToggleOnclick}
                    className={`flex    items-center w-full ${
                        center ? "justify-center" : "justify-between"
                    } text-base relative`}
                >
                    <div className="flex   items-center pt-[10px] relative">
                        <span
                            className={`mr-2 text-base ${
                                capitalize ? "" : "uppercase"
                            }   text-base2-light dark:text-main-light`}
                        >
                            {value || defaultValue}
                        </span>
                        {svg ? (
                            <svg
                                width="11"
                                height="13"
                                viewBox="0 0 11 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.75 7.75V11.5L4.25 12.75V7.75L0.5 2.125V0.875H10.5V2.125L6.75 7.75ZM2.0025 2.125L5.5 7.37125L8.9975 2.125H2.0025Z"
                                    fill="#CCA88A"
                                />
                            </svg>
                        ) : (
                            ""
                        )}
                    </div>
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${
                            listStatus ? "-rotate-90" : "rotate-90"
                        } absolute top-1/2 right-2 `}
                    >
                        <path
                            d="M8.88186 12.1334L0.0666504 3.31817L2.58477 0.800049L13.9181 12.1334L2.58477 23.4667L0.0666504 20.9486L8.88186 12.1334Z"
                            fill="#CCA88A"
                        />
                    </svg>
                </button>
                {listStatus && (
                    <ul
                        className={`flex flex-col bg-white dark:bg-main2-dark   gap-[10px] py-[10px] animate-swingBottom ${
                            absolute
                                ? "absolute  left-0  top-9 shadow-lg w-full "
                                : ""
                        } `}
                    >
                        {arrList}
                    </ul>
                )}
            </div>
        </ClickAwayListener>
    );
};

export default DropList;
