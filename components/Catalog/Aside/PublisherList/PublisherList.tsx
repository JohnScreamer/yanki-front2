import { FC, useState } from "react";
import { AllFiltersType } from "../../../../pages/catalog";
import SelectList from "../../../UI/SelectList/SelectList";
import { FilterKeys } from "../Aside";

const publisherArr = [
    "Electronic Arts",
    "Rockstar Games",
    "Ubisoft Entertainment",
    "Activision",
];
type PublisherListType = {
    publisher?: string;
    handlerSetFilter: (value: string, name: FilterKeys) => void;
};

const PublisherList: FC<PublisherListType> = ({
    handlerSetFilter,
    publisher,
}) => {
    const [isVisible, setVIsible] = useState(false);

    return (
        <>
            <SelectList
                listStatus={isVisible}
                setListStatus={setVIsible}
                defaultValue={publisher || "Видавець"}
                value={publisher}
            >
                {publisherArr.map((el) => (
                    <li
                        onClick={() => {
                            handlerSetFilter(el, "publisher");
                            setVIsible(false);
                        }}
                        key={el}
                        className={`${
                            publisher === el ? "font-black" : ""
                        } font-light text-sm cursor-pointer hover:text-accentActive-light dark:text-accent75-dark p-[2px]`}
                    >
                        {el}
                    </li>
                ))}
            </SelectList>
        </>
    );
};

export default PublisherList;
