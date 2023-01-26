import { useRouter } from "next/router";
import { Dispatch, FC, memo, SetStateAction } from "react";
import { AllFiltersType } from "../../../../Types/catalogTypes";
import DefaultBtn from "../../../UI/Buttons/DefoultBtn/DefaultBtn";
import Input from "../../../UI/Input/Input";

type SearchGameType = {
    setFilter: Dispatch<SetStateAction<AllFiltersType>>;
    name: string;
    handlerSearch: () => void;
};

const SearchGame: FC<SearchGameType> = ({ handlerSearch, name, setFilter }) => {
    const filter = useRouter().query;

    return (
        <div className="flex  flex-col mb-[25px] gap-3 ">
            <Input
                placeholder="Назва"
                value={name}
                fn={(value) => setFilter({ ...filter, name: value })}
                padding
                className="px-[7px] py-[5px] w-full "
            />
            <DefaultBtn
                className="px-[7px] py-[5px] sm:text-sm  text-xs"
                fn={handlerSearch}
            >
                Пошук
            </DefaultBtn>
        </div>
    );
};

export default memo(SearchGame);
