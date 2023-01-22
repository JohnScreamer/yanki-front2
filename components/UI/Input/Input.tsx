import React, { ChangeEvent, memo, useState } from "react";
import { FC, FocusEventHandler } from "react";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
interface InputType {
    placeholder: string;
    value: string | number;
    fn: (str: string) => void;
    className?: string;
    padding?: boolean;
    passSVG?: boolean;
    error?: string;
    field?: any;

    type?: "text" | "password" | "number";
}

const Input: FC<InputType> = ({
    placeholder,
    fn,
    value,
    className,
    padding,
    type = "text",
    error,
    field,
}) => {
    const [focused, setFocused] = React.useState(false);
    const handlerOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        fn(e.target.value);
    };
    const [inputType, setInput] = useState(type);
    function handleOnFocus() {
        setFocused(true);
    }

    function handleOnBlur() {
        setFocused(false);
    }
    const handlerSwitchType = () => {
        if (inputType === "password") {
            return setInput("text");
        }
        setInput("password");
    };

    const svgIcon =
        inputType === "password" ? (
            <svg
                width="25"
                height="23"
                viewBox="0 0 19 19"
                fill="#E0BEA2"
                onClick={handlerSwitchType}
                xmlns="http://www.w3.org/2000/svg"
                className="absolute translate-y-[-50%] top-[50%] right-[18px] cursor-pointer hover:fill-base2-light"
            >
                <g clipPath="url(#clip0_344_470)">
                    <path d="M9.50059 2.375C13.7693 2.375 17.3207 5.44667 18.0656 9.5C17.3215 13.5533 13.7693 16.625 9.50059 16.625C5.23192 16.625 1.68051 13.5533 0.935547 9.5C1.67971 5.44667 5.23192 2.375 9.50059 2.375ZM9.50059 15.0417C11.1152 15.0413 12.6818 14.4929 13.9441 13.4862C15.2064 12.4795 16.0896 11.074 16.449 9.5C16.0882 7.9272 15.2045 6.52334 13.9423 5.51794C12.6802 4.51254 11.1142 3.96508 9.50059 3.96508C7.88693 3.96508 6.32101 4.51254 5.05885 5.51794C3.79668 6.52334 2.91295 7.9272 2.55213 9.5C2.91162 11.074 3.79479 12.4795 5.05708 13.4862C6.31937 14.4929 7.88601 15.0413 9.50059 15.0417ZM9.50059 13.0625C8.55576 13.0625 7.64962 12.6872 6.98152 12.0191C6.31342 11.351 5.93809 10.4448 5.93809 9.5C5.93809 8.55517 6.31342 7.64903 6.98152 6.98093C7.64962 6.31283 8.55576 5.9375 9.50059 5.9375C10.4454 5.9375 11.3516 6.31283 12.0197 6.98093C12.6878 7.64903 13.0631 8.55517 13.0631 9.5C13.0631 10.4448 12.6878 11.351 12.0197 12.0191C11.3516 12.6872 10.4454 13.0625 9.50059 13.0625ZM9.50059 11.4792C10.0255 11.4792 10.5289 11.2706 10.9001 10.8995C11.2712 10.5283 11.4798 10.0249 11.4798 9.5C11.4798 8.97509 11.2712 8.47168 10.9001 8.10052C10.5289 7.72935 10.0255 7.52083 9.50059 7.52083C8.97568 7.52083 8.47227 7.72935 8.10111 8.10052C7.72994 8.47168 7.52142 8.97509 7.52142 9.5C7.52142 10.0249 7.72994 10.5283 8.10111 10.8995C8.47227 11.2706 8.97568 11.4792 9.50059 11.4792Z" />
                </g>
                <defs>
                    <clipPath id="clip0_344_470">
                        <rect width="19" height="19" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ) : (
            <VisibilityOffOutlinedIcon
                onClick={handlerSwitchType}
                className="fill-accent-light absolute translate-y-[-50%] top-[50%] right-[18px] cursor-pointer hover:fill-base2-light"
            />
        );

    return (
        <div className="relative">
            <>
                <input
                    type={inputType}
                    placeholder={focused ? "" : placeholder}
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                    onChange={handlerOnChange}
                    value={value}
                    min={1}
                    {...field}
                    className={`${
                        padding ? "" : "px-[39px] py-4"
                    }  sm:text-base text-sm flex items-center ${
                        error
                            ? "border-red-600"
                            : "border-black dark:bg-text-dark"
                    }   border border-solid placeholder:text-center ${
                        inputType === "number" ? "font-mono" : ""
                    }   placeholder:text-prime50-light dark:placeholder:text-main-dark outline-0 dark:focus:border-accent75-dark duration-300 focus:border-accent-light ${className}`}
                />
                {type === "password" ? svgIcon : null}
                {error ? (
                    <span className="text-red-600 absolute text-sm bg-white dark:bg-main2-dark">
                        {error}
                    </span>
                ) : null}
            </>
        </div>
    );
};

export default Input;
