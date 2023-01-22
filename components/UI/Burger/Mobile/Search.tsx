import ClickAwayListener from "@mui/material/ClickAwayListener";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useAppDispatch } from "../../../../Hooks/common";
import { useIsMain } from "../../../../Hooks/useIsMain";
import { setBurgerStatus } from "../../../../Redux/Slice/Common";
import { useLazyGetAllGamesQuery } from "../../../../service/api/game";
import Price from "../../../../utiles/currency/Currency";
import { customDebounce } from "../../../../utiles/debounce/debounce";
import SearchInput from "../../SearchInput/SearchInput";

type SearchType = {};

const Search: FC<SearchType> = () => {
    const [value, setValue] = useState("");
    let [trigger, { isLoading, isError, data, error }] =
        useLazyGetAllGamesQuery();
    const router = useRouter();
    const dispatch = useAppDispatch();
    const bidedTrigger = customDebounce(trigger);
    const clickAway = () => {
        setValue("");
    };
    const goTOGame = (id: string) => {
        dispatch(setBurgerStatus(false));
        router.push({ pathname: `/catalog/${id}` });
    };
    const searchGame = (str: string) => {
        setValue(str);
        if (!!value.length) {
            bidedTrigger({ name: str });
        }
    };
    const isMain = useIsMain();
    const searchList = data?.games.slice(0, 5).map((el, index) => (
        <li
            key={el._id}
            onClick={() => goTOGame(el._id)}
            className={`cursor-pointer ${
                isMain ? "text-base2-light" : ""
            }  px-[4px]  text-sm hover:bg-accent-light dark:hover:bg-main2-dark w-full py-2 hover:text-white  flex gap-2  ${
                index != 4 ? "border-black border-b-[0.3px]" : ""
            } flex-row item-center justify-between `}
        >
            <span className="line-clamp-2 w-full"> {el.name}</span>{" "}
            <span className="font-bold  flex  items-center justify-center font-mono gap-1 ">
                <Price price={el.price} />
                {/* {el.price}
                <span> грн</span> */}
            </span>
        </li>
    ));
    return (
        <ClickAwayListener onClickAway={clickAway}>
            <div className="relative ">
                <SearchInput fn={searchGame} value={value} />
                {!!value.length ? (
                    <ul
                        className={`bg-white dark:bg-main2-dark mx-auto  dark:shadow-accent-dark top-[50px] absolute  shadow-2xl mt-2 flex flex-col w-full rounded-xl overflow-hidden `}
                    >
                        {searchList}
                    </ul>
                ) : null}
            </div>
        </ClickAwayListener>
    );
};

export default Search;
