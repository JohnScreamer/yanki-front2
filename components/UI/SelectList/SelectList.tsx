import ClickAwayListener from "@mui/material/ClickAwayListener";
import { FC, ReactNode } from "react";

type SelectListType = {
    children: any;
    listStatus: boolean;
    setListStatus: any;
    btnChildren?: ReactNode;
    svg?: boolean;
    top?: number;
    value?: string | number;
    defaultValue: string;
    relative?: boolean;
};

const SelectList: FC<SelectListType> = ({
    children,
    listStatus,
    setListStatus,
    svg,
    top,
    defaultValue,
    value,
    btnChildren,
    relative,
}) => {
    const handlerToggleOnclick = () => {
        setListStatus((state: boolean) => !state);
    };
    return (
        <ClickAwayListener onClickAway={() => setListStatus(false)}>
            <div
                className={`w-full  ${
                    listStatus ? "z-50" : "z-10"
                } pb-[5px]  relative  `}
            >
                <button
                    onClick={handlerToggleOnclick}
                    className={`flex  items-center w-full   text-base relative`}
                >
                    <div className="flex  flex-nowrap whitespace-nowrap w-full  items-center pt-[10px] relative">
                        <div
                            className={`mr-8 text-base  w-full   text-base2-light dark:text-originText-light `}
                        >
                            {btnChildren ? btnChildren : defaultValue || value}
                        </div>
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
                        className={`flex flex-col gap-[10px] py-[10px] px-2 z-30 animate-swingBottom 
                             ${
                                 relative ? "relative" : "absolute"
                             }  left-0 bg-white dark:bg-main2-dark ${
                            top ? `top-${top}` : "top-9"
                        }  shadow-lg w-full 
                                 `}
                    >
                        {children}
                    </ul>
                )}
            </div>
        </ClickAwayListener>
    );
};

export default SelectList;
