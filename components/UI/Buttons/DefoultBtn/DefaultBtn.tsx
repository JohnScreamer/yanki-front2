import { FC, ReactNode } from "react";

type DefaultBtnType = {
    fn?: () => void;
    children: string | ReactNode;
    type?: "button" | "submit" | "reset";
    className?: string;
    padding?: boolean;
};

const DefaultBtn: FC<DefaultBtnType> = ({
    children,
    fn,
    className,
    padding,
    type = "button",
}) => {
    return (
        <button
            type={type}
            className={`${
                padding ? "" : "px-[15px] py-4 lg:px-[39px]"
            }  bg-accent-light dark:bg-accentActive-dark  dark:shadow-accent75-dark dark:hover:bg-accent75-dark sm:text-base text-sm text-white  uppercase hover:shadow-lg duration-300 active:shadow-inner active:bg-[#CCA88A] dark:active:bg-accentActive-dark ${className}`}
            onClick={fn}
        >
            {children}
        </button>
    );
};

export default DefaultBtn;
