import { useRouter } from "next/router";
import { FC } from "react";
import { NAMES_PROP } from "../../common/GamePropertiesName";
import { Game } from "../../Types/gameType";
import Price from "../../utiles/currency/Currency";
import { isPropNull } from "../../utiles/isPropNull";
// import s from `./GameInfo.module.scss`;

export type NAME_DROP_KEYS = keyof typeof NAMES_PROP;
type GameInfoType = {
    game: Game;
};
const notLinkedUrl = [
    "name",
    "features",
    "minRequireSis",
    "systemRequirements",
    "Guarantee",
    "price",
];
const GameInfo: FC<GameInfoType> = ({ game }) => {
    const productKeys = Object.keys(game) as Array<NAME_DROP_KEYS>;
    const router = useRouter();
    const findByProperties = (name: string, value: string | number) => {
        router.push({
            pathname: "/catalog",
            query: isPropNull({ [`${name}`]: value }),
        });
    };
    const list = productKeys.map((el) => {
        if (el === "imgUrl" || el === "_id") {
            return;
        }
        if (notLinkedUrl.includes(el)) {
            return (
                <div
                    className="flex justify-between gap-3"
                    key={NAMES_PROP[el]}
                >
                    <div className=" min-w-[150px] text font-medium ">
                        {NAMES_PROP[el]}
                    </div>
                    <span className="block w-full  cursor-pointer ">
                        {el === "price" ? <Price price={game[el]} /> : game[el]}
                    </span>
                </div>
            );
        }

        return (
            <div
                onClick={() => findByProperties(el, game[el])}
                className="flex justify-between gap-3 "
                key={NAMES_PROP[el]}
            >
                <div className=" min-w-[150px] text font-medium ">
                    {NAMES_PROP[el]}
                </div>
                <span className="inline-block w-full  cursor-pointer text-blue-700 dark:text-accent75-dark hover:underline ">
                    {game[el]}
                </span>
            </div>
        );
    });

    return (
        <div>
            <h2 className="font-bold mb-4 text-2xl">Характеристики</h2>
            <div className="flex flex-col gap-3">{list}</div>
        </div>
    );
};

export default GameInfo;
