import ClickAwayListener from "@mui/material/ClickAwayListener";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useCallback, useEffect, useState } from "react";
import { useLazyGetAllGamesQuery } from "../../../service/api/game";
import Price from "../../../utiles/currency/Currency";
import { customDebounce } from "../../../utiles/debounce/debounce";

type SearchType = {
    setSearchStatus: (status: boolean) => void;
    status: boolean;
};

const Search: FC<SearchType> = ({ setSearchStatus, status }) => {
    const [value, setValue] = useState("");
    const router = useRouter();
    const isMain = useRouter();
    const goToCatalog = () => {
        if (value)
            router.push({ pathname: "/catalog", query: { name: value } });
    };
    let [trigger, { isLoading, isError, data, error }] =
        useLazyGetAllGamesQuery();
    const bidedTrigger = customDebounce(trigger);
    const clickAway = () => {
        setValue("");
        status ? setSearchStatus(false) : null;
    };
    const searchGame = (str: string) => {
        setValue(str);
        if (!!value.length) {
            bidedTrigger({ name: str });
        }
    };
    const searchList = data?.games.slice(0, 3).map((el, index) => (
        <Link href={`/catalog/${el._id}`} key={el._id}>
            <li
                key={el._id}
                className={`cursor-pointer py-[5px] px-[4px] text-sm hover:bg-accent-light dark:hover:bg-accent75-dark flex gap-2  ${
                    isMain ? "text-base2-light dark:text-base-light" : ""
                } ${
                    index != 2 ? "border-black border-b-[0.3px]" : ""
                } flex-row item-center justify-between `}
            >
                <span className="line-clamp-2"> {el.name}</span>{" "}
                <span className="font-bold  flex items-center justify-center font-mono gap-1 ">
                    <Price price={el.price} />
                    {/* {el.price}
                    <span> грн</span> */}
                </span>
            </li>
        </Link>
    ));

    return (
        <ClickAwayListener onClickAway={clickAway}>
            {status ? (
                <div className="absolute top-[110%] right-0  bg-transparent md:block hidden">
                    <div className="">
                        <input
                            type={"text"}
                            placeholder="Введіть ваш запит"
                            value={value}
                            onChange={(e) => searchGame(e.target.value)}
                            className="rounded-[20px] text-base border-base-dark border-[0.5px] dark:border-accent2-light dark:placeholder:text-white dark:bg-text-dark  text-slate-900 dark:text-originText-light pl-4 outline-0 dark:focus:border-accentActive-dark pr-10 py-[5px] w-[300px]"
                        />
                        <div
                            onClick={goToCatalog}
                            className="absolute right-4 top-[10px] hover:cursor-pointer "
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
                    {!!value.length ? (
                        <ul className="bg-white dark:bg-main2-dark dark:text-base-light shadow-2xl mt-2 flex flex-col max-w-[300px] rounded-xl overflow-hidden ">
                            {searchList}
                        </ul>
                    ) : null}
                </div>
            ) : (
                <></>
            )}
        </ClickAwayListener>
    );
};

export default Search;
