import { useRouter } from "next/router";
import { Dispatch, FC, memo, SetStateAction, useEffect, useState } from "react";
import { AllFiltersType } from "../../../pages/catalog";
import { isPropNull } from "../../../utiles/isPropNull";
import DefaultBtn from "../../UI/Buttons/DefoultBtn/DefaultBtn";
import DropList from "../../UI/DropList/DropList";
import Input from "../../UI/Input/Input";
import { FilterKeys } from "../Aside/Aside";
import PlatformList from "../Aside/PlatformList/PlatformList";
import PublisherList from "../Aside/PublisherList/PublisherList";

type FiltersType = {
    filter: AllFiltersType;
    fn: Dispatch<SetStateAction<AllFiltersType>>;
    getGamesTrigger: any;
};
const priceSort = [
    { value: "1", name: "Спочатку дешевші" },
    { value: "-1", name: "Спочатку дорощі" },
];
const Filters: FC<FiltersType> = ({ filter, fn, getGamesTrigger }) => {
    const router = useRouter();
    const showName =
        filter.order === "1" ? "Спочатку дешевші" : "Спочатку дорощі";
    const handlerSort = (value: string) => {
        fn(isPropNull({ ...filter, order: value, sort: "price" }));
        router.push({
            pathname: "/catalog",
            query: isPropNull({ ...filter, order: value, sort: "price" }),
        });
        router.push(
            {
                pathname: "/catalog",
                query: isPropNull({ ...filter, order: value, sort: "price" }),
            },
            undefined,
            { shallow: true }
        );
        fn(isPropNull({ ...filter, order: value, sort: "price" }));
        getGamesTrigger(isPropNull({ ...filter, order: value, sort: "price" }));
    };

    const handlerSetFilter = (value: string, name: FilterKeys) => {
        router.push(
            {
                pathname: "/catalog",
                query: isPropNull({ ...filter, [name]: value, page: 1 }),
            },
            undefined,
            { shallow: true }
        );
        fn(isPropNull({ ...filter, [name]: value, page: 1 }));
        getGamesTrigger(isPropNull({ ...filter, [name]: value, page: 1 }));
    };

    return (
        <div className="flex w-full">
            <div className="flex justify-between w-full md:flex-row flex-col-reverse md:pl-[15px] md:py-0 py-4 ">
                <div className="flex gap-[30px] max-[768px]:flex-col">
                    <div className="min-w-[170px]">
                        <DropList
                            list={priceSort}
                            defaultValue="Сортувати по ціні"
                            capitalize
                            absolute
                            value={
                                filter.sort === "price" ? showName : undefined
                            }
                            className="border-none text-base  "
                            fn={(value) => handlerSort(value)}
                        />
                    </div>
                    <PublisherList
                        handlerSetFilter={handlerSetFilter}
                        publisher={filter.publisher}
                    />
                    <PlatformList
                        platform={filter.platform}
                        handlerSetFilter={handlerSetFilter}
                    />
                </div>
            </div>
        </div>
    );
};

export default Filters;
