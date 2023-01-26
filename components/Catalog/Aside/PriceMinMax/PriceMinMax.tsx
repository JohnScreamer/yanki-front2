import { Dispatch, FC, SetStateAction } from "react";
import { AllFiltersType } from "../../../../Types/catalogTypes";
import DefaultBtn from "../../../UI/Buttons/DefoultBtn/DefaultBtn";
import Input from "../../../UI/Input/Input";
type PriceMinMaxType = {
    setFilter: Dispatch<SetStateAction<AllFiltersType>>;
    filter: AllFiltersType;
    handlerSearch: () => void;
};

const PriceMinMax: FC<PriceMinMaxType> = ({
    filter,
    setFilter,
    handlerSearch,
}) => {
    return (
        <>
            <h5 className="text-lg font-medium  text-center">Ціна</h5>
            <div className="flex item-center justify-center ">
                <Input
                    placeholder="Від"
                    value={filter["price[gte]"] ? filter["price[gte]"] : ""}
                    className="md:w-[75px] w-full  px-[7px] py-[5px]"
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
                    className="md:w-[75px] w-full  px-[7px] py-[5px]"
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
                className="  px-[7px] py-[5px] sm:text-sm  text-xs"
                fn={handlerSearch}
            >
                Ок
            </DefaultBtn>
        </>
    );
};

export default PriceMinMax;
