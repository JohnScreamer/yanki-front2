import { FC, ReactNode } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
type ColorlessBtnType = {
    fn?: () => void;
    children: string;
    className?: string;
    active?: boolean;
};

const ColorlessBtn: FC<ColorlessBtnType> = ({
    children,
    fn,
    className,
    active,
}) => {
    return (
        <button
            className={`px-[15px] py-4 lg:px-[39px] flex items-center justify-center sm:text-base text-sm border-black dark:border-accentActive-dark dark:hover:bg-accentActive-dark border border-solid uppercase hover:shadow-lg duration-300 active:shadow-inner ${className}`}
            onClick={fn}
        >
            {active ? (
                <FavoriteIcon className="fill-accent-light mr-3 w-[15px] h-[15px]" />
            ) : (
                <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3"
                >
                    <path
                        d="M7.50061 1.14671C9.26233 -0.435007 11.9848 -0.382508 13.682 1.31771C15.3785 3.01868 15.437 5.72763 13.859 7.49459L7.49911 13.8635L1.14073 7.49459C-0.437237 5.72763 -0.377988 3.01418 1.31773 1.31771C3.01645 -0.380258 5.73365 -0.437257 7.50061 1.14671ZM12.62 2.37744C11.495 1.25096 9.68007 1.20521 8.50259 2.26269L7.50136 3.16118L6.49938 2.26344C5.31816 1.20446 3.50694 1.25096 2.37896 2.37894C1.26148 3.49642 1.20523 5.28514 2.23496 6.46711L7.49986 11.7403L12.7648 6.46786C13.7952 5.28514 13.739 3.49867 12.62 2.37744Z"
                        fill="#E0BEA2"
                    />
                </svg>
            )}

            {children}
        </button>
    );
};

export default ColorlessBtn;
