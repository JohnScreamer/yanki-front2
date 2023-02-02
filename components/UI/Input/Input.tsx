import React, { ChangeEvent, useState } from "react";
import { FC } from "react";

import { InputType } from "../../../Types/InputTypes";
import InputError from "./InputError";
import PasswordBtn from "./PasswordBtn";

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
    const handlerOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        fn(e.target.value);
    };
    const [inputType, setInput] = useState(type);
    const handlerSwitchType = () => {
        if (inputType === "password") {
            return setInput("text");
        }
        setInput("password");
    };
    const errorsStyle = error
        ? "border-red-600 text-red-600  placeholder:text-red-600"
        : "border-black dark:bg-text-dark";
    return (
        <div className="relative">
            <>
                <input
                    type={inputType}
                    placeholder={placeholder}
                    onChange={handlerOnChange}
                    value={value}
                    autoComplete="on"
                    min={1}
                    {...field}
                    className={`${
                        padding ? "" : "px-[39px] py-4"
                    }  sm:text-base text-sm flex items-center bg-white dark:bg-text-dark  ${errorsStyle}   border border-solid placeholder:text-center ${
                        inputType === "number" ? "font-mono" : ""
                    }   placeholder:text-prime50-light   dark:placeholder:text-main-dark outline-0 dark:focus:border-accent75-dark duration-300 focus:border-accent-light ${className}`}
                />
                {type === "password" ? (
                    <PasswordBtn
                        handlerSwitchType={handlerSwitchType}
                        inputType={inputType}
                    />
                ) : null}
                {error ? <InputError error={error} /> : null}
            </>
        </div>
    );
};

export default Input;
