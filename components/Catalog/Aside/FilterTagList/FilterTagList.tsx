import { useRouter } from "next/router";
import { FC } from "react";
import { AllFiltersType } from "../../../../Types/catalogTypes";
import { isPropNull } from "../../../../utiles/isPropNull";
import { AsideType, FilterKeys } from "../Aside";

type FilterTagListType = Omit<AsideType, "filter"> & {};

const FilterTagList: FC<FilterTagListType> = ({
    setFilter,
    getGamesTrigger,
}) => {
    const router = useRouter();
    const filter = router.query as AllFiltersType;
    const deleteFilterElem = (name: FilterKeys) => {
        const filtered = { ...filter };
        delete filtered[name];
        setFilter(isPropNull({ ...filtered, page: 1 }));
        router.push(
            {
                pathname: "/catalog",
                query: isPropNull({ ...filtered, page: 1 }),
            },
            undefined,
            { shallow: true }
        );
        getGamesTrigger(isPropNull({ ...filtered, page: 1 }));
    };

    const filterList = (Object.keys(filter) as Array<FilterKeys>).map((el) => {
        if (filter[el] === 0 || !filter[el]) {
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
    return <ul className="flex gap-1 flex-wrap">{filterList}</ul>;
};

export default FilterTagList;
