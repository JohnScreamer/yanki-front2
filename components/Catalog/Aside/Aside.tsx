import { useRouter } from "next/router";
import { Dispatch, FC, SetStateAction, useState } from "react";

import { AllFiltersType } from "../../../pages/catalog";
import { isPropNull } from "../../../utiles/isPropNull";
import DefaultBtn from "../../UI/Buttons/DefoultBtn/DefaultBtn";
import Input from "../../UI/Input/Input";
import FilterTagList from "./FilterTagList/FilterTagList";
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
            <div className="flex flex-col     ">
                <div className="flex  flex-col mb-[25px] gap-3 ">
                    <Input
                        placeholder="Назва"
                        value={filter?.name || ""}
                        fn={(value) => setFilter({ ...filter, name: value })}
                        padding
                        className="p-2 w-full "
                    />
                    <DefaultBtn
                        className="px-[15px] py-[9px] sm:text-sm  text-xs"
                        fn={handlerSearch}
                    >
                        Пошук
                    </DefaultBtn>
                </div>
                <h5 className="text-lg font-medium  text-center">Ціна</h5>
                <div className="flex item-center justify-center ">
                    <Input
                        placeholder="Від"
                        value={filter["price[gte]"] ? filter["price[gte]"] : ""}
                        className="md:w-[75px] w-full  py-4 px-3"
                        padding
                        type="number"
                        fn={(value) =>
                            setFilter({
                                ...filter,
                                ["price[gte]"]: +value,
                            })
                        }
                    />

                    <div className="flex justify-center items-center">
                        <span className="md:w-4 w-4   bg-black h-[1px] block"></span>
                    </div>
                    <Input
                        placeholder="До"
                        value={filter["price[lte]"] ? filter["price[lte]"] : ""}
                        className="md:w-[75px] w-full  py-4 px-3"
                        padding
                        type="number"
                        fn={(value) =>
                            setFilter({
                                ...filter,
                                ["price[lte]"]: +value,
                            })
                        }
                    />
                </div>
                <DefaultBtn
                    className=" mt-3  px-[15px] py-[9px] sm:text-sm  text-xs"
                    fn={handlerSearch}
                >
                    Ок
                </DefaultBtn>
            </div>
            <FilterTagList
                filter={filter}
                setFilter={setFilter}
                getGamesTrigger={getGamesTrigger}
            />
        </div>
    );
};

export default Aside;
