import { useRouter } from "next/router";
import { FC } from "react";
import { useAppDispatch } from "../../../Hooks/common";
import { setBurgerStatus } from "../../../Redux/Slice/Common";
// import s from `./SearchInput.module.scss`;

type SearchInputType = {
    fn: (value: string) => void;
    value: string;
};

const SearchInput: FC<SearchInputType> = ({ fn, value }) => {
    const route = useRouter();
    const dispatch = useAppDispatch();
    const searchGame = () => {
        if (value) {
            route.push({ pathname: "/catalog", query: { name: value } });
            dispatch(setBurgerStatus(false));
        }
    };
    return (
        <div className="py-5 w-full relative">
            <input
                type={"text"}
                value={value}
                onChange={(e) => fn(e.target.value)}
                placeholder="Введіть ваш запит"
                className="rounded-[20px] text-base dark:placeholder:text-white border-base-dark dark:border-text-dark w-full border-[0.5px] text-slate-900 dark:bg-text-dark dark:text-originText-light pl-4 outline-0 focus:border-accent-light dark:focus:border-accent75-dark pr-10 py-[5px] "
            />
            <div
                onClick={searchGame}
                className="absolute right-4 top-[40%] hover:cursor-pointer "
            >
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11.8374 10.7933L15 13.9552L13.9552 15L10.7933 11.8374C9.61682 12.7805 8.15349 13.2935 6.64566 13.2913C2.97726 13.2913 0 10.3141 0 6.64566C0 2.97726 2.97726 0 6.64566 0C10.3141 0 13.2913 2.97726 13.2913 6.64566C13.2935 8.15349 12.7805 9.61682 11.8374 10.7933ZM10.3562 10.2454C11.2933 9.28169 11.8166 7.98988 11.8145 6.64566C11.8145 3.7895 9.50108 1.47681 6.64566 1.47681C3.7895 1.47681 1.47681 3.7895 1.47681 6.64566C1.47681 9.50108 3.7895 11.8145 6.64566 11.8145C7.98988 11.8166 9.28169 11.2933 10.2454 10.3562L10.3562 10.2454Z"
                        fill="#252525"
                    />
                </svg>
            </div>
        </div>
    );
};

export default SearchInput;
