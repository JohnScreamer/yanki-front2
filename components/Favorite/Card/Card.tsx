import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useAppSelector } from "../../../Hooks/common";
import { Game } from "../../../Types/gameType";
import Price from "../../../utiles/currency/Currency";

type CardType = {
    game: Game;
};

const Card: FC<CardType> = ({ game }) => {
    return (
        <Link href={`/catalog/${game._id}`}>
            <li className="  max-[768px]:w-1/2 w-1/3    max-[445px]:w-full        p-[7.5px] cursor-pointer">
                <div className="mb-[15px]">
                    <Image height={400} width={370} src={game.imgUrl} />
                </div>
                <div className="flex flex-col justify-center max-w-[370px] px-[15px]">
                    <h4 className="mb-[5px] line-clamp-2">{game.name}</h4>
                    <div className="font-bold text-center font-mono flex gap-1 justify-center">
                        <Price price={game.price} />
                        {/* {game.price}
                        <span>грн</span> */}
                    </div>
                </div>
            </li>
        </Link>
    );
};

export default Card;
