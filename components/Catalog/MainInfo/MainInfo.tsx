import { FC } from "react";
import { NAMES_PROP } from "../../../common/GamePropertiesName";
import { Game } from "../../../Types/gameType";

type MainInfoType = {
    findByProperties: (data: string, data2: string | number) => void;
    name: keyof Game;
    data: Game;
    index: number;
};

const MainInfo: FC<MainInfoType> = ({
    findByProperties,
    data,
    name,
    index,
}) => {
    return (
        <li
            onClick={() => findByProperties(name, data[name])}
            className="flex justify-between gap-3"
            key={`${data[name]} + ${index}`}
        >
            <span>{NAMES_PROP[name]}</span>
            <span className="hover:underline cursor-pointer text-right text-blue-700 dark:text-accent75-dark">
                {data[name]}
            </span>
        </li>
    );
};

export default MainInfo;
