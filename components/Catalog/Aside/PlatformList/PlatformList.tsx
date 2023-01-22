import { FC, useState } from "react";
import { AllFiltersType } from "../../../../pages/catalog";
import SelectList from "../../../UI/SelectList/SelectList";
import { FilterKeys } from "../Aside";

type PlatformListType = {
    platform?: string;
    handlerSetFilter: (value: string, name: FilterKeys) => void;
};
const platformArr = [
    "PlayStation 5",
    "PlayStation 4",
    "PC",
    "Xbox One",
    "Nintendo Switch",
];
const PlatformList: FC<PlatformListType> = ({ platform, handlerSetFilter }) => {
    const [isVisible, setVIsible] = useState(false);

    return (
        <>
            <SelectList
                listStatus={isVisible}
                setListStatus={setVIsible}
                defaultValue={platform || "Платформа"}
                value={platform}
            >
                {platformArr.map((el) => (
                    <li
                        onClick={() => {
                            handlerSetFilter(el, "platform");
                            setVIsible(false);
                        }}
                        key={el}
                        className={`${
                            platform === el ? "font-black" : ""
                        } font-light text-sm cursor-pointer hover:text-accentActive-light dark:text-accent75-dark p-[2px]`}
                    >
                        {el}
                    </li>
                ))}
            </SelectList>
        </>
    );
};

export default PlatformList;
