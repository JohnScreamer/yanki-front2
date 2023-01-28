import { ChangeEvent, FC, ReactNode } from "react";
// import s from `./Pagination.module.scss`;
import { makeStyles, Pagination as MPagination } from "@mui/material";
import { useRouter } from "next/router";
import { useAppSelector } from "../../../Hooks/common";
import { getCurrentTheme } from "../../../utiles/selectors/coomonSelectors";

type PaginationType = {
    children: ReactNode;
    page: number;
    count: number;
    fn: (page: number) => void;
};

const Pagination: FC<PaginationType> = ({ children, count, page, fn }) => {
    const handleChange = (e: ChangeEvent<unknown>, p: number) => {
        fn(p);
    };
    const totalPage = Math.ceil(count / 9);
    const isHidden = totalPage > 1;
    const isDark = useAppSelector(getCurrentTheme);
    const theme = isDark === "dark" ? "white" : "";
    return (
        <div className="flex flex-col justify-center">
            <div className="flex justify-center md:py-5 py-1  relative min-h-[48px] max-[768px]:flex-col">
                <div className="flex justify-center !text-white">
                    {isHidden && (
                        <MPagination
                            count={totalPage}
                            page={page}
                            sx={{
                                ".MuiButtonBase-root": {
                                    color: theme,
                                },
                            }}
                            onChange={handleChange}
                            color="secondary"
                        />
                    )}
                </div>
                <div className="absolute top-1/2  max-[768px]:static max-[768px]:justify-end   right-0 flex ">
                    <span>Знайдено:{count}</span>
                </div>
            </div>
            <div>{children}</div>
            {isHidden && (
                <div className="flex justify-center my-3 mt-5">
                    <MPagination
                        count={totalPage}
                        page={page}
                        sx={{
                            ".MuiButtonBase-root": {
                                color: theme,
                            },
                        }}
                        onChange={handleChange}
                        color="secondary"
                    />
                </div>
            )}
        </div>
    );
};

export default Pagination;
