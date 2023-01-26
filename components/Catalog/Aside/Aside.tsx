import { useRouter } from "next/router";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { AllFiltersType } from "../../../Types/catalogTypes";
import { isPropNull } from "../../../utiles/isPropNull";
import DefaultBtn from "../../UI/Buttons/DefoultBtn/DefaultBtn";
import Input from "../../UI/Input/Input";
import FilterTagList from "./FilterTagList/FilterTagList";
import PriceMinMax from "./PriceMinMax/PriceMinMax";
import SearchGame from "./SearchGame/SearchGame";
export type AsideType = {
    filter: AllFiltersType;
    setFilter: Dispatch<SetStateAction<AllFiltersType>>;
    getGamesTrigger: any;
};
export type FilterKeys = keyof AllFiltersType;
const Aside: FC<AsideType> = ({ filter, setFilter, getGamesTrigger }) => {
    const router = useRouter();
    const handlerSearch = () => {
        router.push(
            {
                pathname: "/catalog",
                query: isPropNull({ ...filter, page: 1 }),
            },
            undefined,
            { shallow: true }
        );
        setFilter(isPropNull({ ...filter, page: 1 }));
        getGamesTrigger(isPropNull({ ...filter, page: 1 }));
    };

    return (
        <div className="flex flex-col gap-3 mt-[10px] md:mt-[112px] max-[768px]:mt-0 md:pr-2 relative">
            <SearchGame
                setFilter={setFilter}
                name={filter?.name || ""}
                handlerSearch={handlerSearch}
            />

            <PriceMinMax
                filter={filter}
                setFilter={setFilter}
                handlerSearch={handlerSearch}
            />
            <FilterTagList
                setFilter={setFilter}
                getGamesTrigger={getGamesTrigger}
            />
        </div>
    );
};

export default Aside;
