import { useRouter } from "next/router";
import { Dispatch, FC, memo, SetStateAction, useEffect, useState } from "react";
import { isPropNull } from "../../../utiles/isPropNull";
import DropList from "../../UI/Select&DropList/DropList/DropList";
import { FilterKeys } from "../Aside/Aside";
import PlatformList from "./PlatformList/PlatformList";
import PublisherList from "./PublisherList/PublisherList";
import { AllFiltersType } from "../../../Types/catalogTypes";

type FiltersType = {
    sort: string | undefined;
    order: string | undefined;
    platform: string | undefined;
    publisher: string | undefined;
    fn: Dispatch<SetStateAction<AllFiltersType>>;
    getGamesTrigger: any;
};
const priceSort = [
    { value: "1", name: "Спочатку дешевші" },
    { value: "-1", name: "Спочатку дорощі" },
];
const Filters: FC<FiltersType> = ({
    fn,
    getGamesTrigger,
    order,
    platform,
    sort,
    publisher,
}) => {
    const router = useRouter();
    const currenParam = router.query;
    const showName = order === "1" ? "Спочатку дешевші" : "Спочатку дорощі";
    const handlerSort = (value: string) => {
        fn(isPropNull({ ...currenParam, order: value, sort: "price" }));
        router.push({
            pathname: "/catalog",
            query: isPropNull({ ...currenParam, order: value, sort: "price" }),
        });
        router.push(
            {
                pathname: "/catalog",
                query: isPropNull({
                    ...currenParam,
                    order: value,
                    sort: "price",
                }),
            },
            undefined,
            { shallow: true }
        );
        fn(isPropNull({ ...currenParam, order: value, sort: "price" }));
        getGamesTrigger(
            isPropNull({ ...currenParam, order: value, sort: "price" })
        );
    };

    const handlerSetFilter = (value: string, name: FilterKeys) => {
        router.push(
            {
                pathname: "/catalog",
                query: isPropNull({ ...currenParam, [name]: value, page: 1 }),
            },
            undefined,
            { shallow: true }
        );
        fn(isPropNull({ ...currenParam, [name]: value, page: 1 }));
        getGamesTrigger(isPropNull({ ...currenParam, [name]: value, page: 1 }));
    };

    return (
        <div className="flex w-full">
            <div className="flex justify-between w-full md:flex-row flex-col-reverse md:pl-[15px] md:py-0 py-4 ">
                <div className="flex md:gap-[30px]   max-[768px]:flex-col">
                    <div className="min-w-[170px]">
                        <DropList
                            list={priceSort}
                            defaultValue="Сортувати по ціні"
                            capitalize
                            absolute
                            value={sort === "price" ? showName : undefined}
                            className="border-none text-base  "
                            fn={(value) => handlerSort(value)}
                        />
                    </div>
                    <PublisherList
                        handlerSetFilter={handlerSetFilter}
                        publisher={publisher}
                    />
                    <PlatformList
                        platform={platform}
                        handlerSetFilter={handlerSetFilter}
                    />
                </div>
            </div>
        </div>
    );
};

export default memo(Filters);
