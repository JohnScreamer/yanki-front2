import { FC, useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useAppDispatch, useAppSelector } from "../../../Hooks/common";
import { setTheme } from "../../../Redux/Slice/Common";
import toast from "react-hot-toast";

type ThemeType = {};

const Theme: FC<ThemeType> = () => {
    const themeStatus = useAppSelector((state) => state.common.theme);
    const dispatch = useAppDispatch();
    const toggleTheme = (theme: "light" | "dark") => {
        dispatch(setTheme(theme));
        toast.success(
            `Тепер ти на ${theme === "dark" ? "темній" : "світлії"} стороні.`
        );
    };

    return (
        <div className="">
            {themeStatus === "dark" ? (
                <LightModeIcon
                    onClick={() => toggleTheme("light")}
                    className={
                        "hover:fill-slate-400 hover:cursor-pointer duration-300"
                    }
                />
            ) : (
                <DarkModeIcon
                    onClick={() => toggleTheme("dark")}
                    className={
                        "hover:fill-slate-400 hover:cursor-pointer duration-300"
                    }
                />
            )}
        </div>
    );
};

export default Theme;
