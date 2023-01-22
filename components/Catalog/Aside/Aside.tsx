import { useRouter } from "next/router";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { useAppSelector } from "../../../Hooks/common";
import { CurrencyPrice } from "../../../Hooks/useCurrentCurrency";
import { AllFiltersType } from "../../../pages/catalog";
import { isPropNull } from "../../../utiles/isPropNull";
import DefaultBtn from "../../UI/Buttons/DefoultBtn/DefaultBtn";
import Input from "../../UI/Input/Input";
import PublisherList from "./PublisherList/PublisherList";

type AsideType = {
    filter: AllFiltersType;
    fn: Dispatch<SetStateAction<AllFiltersType>>;
};
export type FilterKeys = keyof AllFiltersType;
const platform = [
    "PlayStation 5",
    "PlayStation 4",
    "PC",
    "Xbox One",
    "Nintendo Switch",
];

const Aside: FC<AsideType> = ({ filter, fn }) => {
    const router = useRouter();
    const handlerSearch = () => {
        router.push({
            pathname: "/catalog",
            query: isPropNull({ ...filter }),
        });
    };
    const currency = useAppSelector((state) => state.common.currency);
    const deleteFilterElem = (name: FilterKeys) => {
        const filtered = { ...filter };
        delete filtered[name];
        fn(isPropNull({ ...filtered }));
        router.push({
            pathname: "/catalog",
            query: isPropNull({ ...filtered }),
        });
    };
    const filterList = (Object.keys(filter) as Array<FilterKeys>).map((el) => {
        if (filter[el] === 0) {
            return;
        }
        if (el === "page" || el === "order") {
            return;
        }
        return (
            <li
                key={filter[el]}
                onClick={() => deleteFilterElem(el)}
                className="py-1  px-2 text-xs relative hover:border-red-600 cursor-pointer  border-accent2-light dark: border-[1px]  rounded-3xl inline-flex justify-center items-center  "
            >
                <span className="mr-2">{filter[el]}</span>
                <svg
                    width="10"
                    height="10"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_344_430)">
                        <path
                            d="M12.5 9.72267L22.2227 1.52588e-05L25 2.77736L15.2773 12.5L25 22.2227L22.2227 25L12.5 15.2774L2.77734 25L0 22.2227L9.72266 12.5L0 2.77736L2.77734 1.52588e-05L12.5 9.72267Z"
                            fill="#E0BEA2"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_344_430">
                            <rect width="25" height="25" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </li>
        );
    });

    return (
        <div className="flex flex-col gap-3 mt-[10px] md:mt-[112px] max-[768px]:mt-0 md:pr-2 relative">
            <div className="flex flex-col     ">
                <div className="flex  flex-col mb-[25px] gap-3 ">
                    <Input
                        placeholder="Назва"
                        value={filter?.name || ""}
                        fn={(value) => fn({ ...filter, name: value })}
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
                            fn({
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
                            fn({
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
            <ul className="flex gap-1 flex-wrap">{filterList}</ul>
        </div>
    );
};

export default Aside;
