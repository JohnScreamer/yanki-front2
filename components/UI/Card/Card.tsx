import Image from "next/image";
import Link from "next/link";
import { FC, MouseEvent } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppDispatch, useAppSelector } from "../../../Hooks/common";
import { Game } from "../../../Types/gameType";
import Price from "../../../utiles/currency/Currency";
import {
    addGameToFavorite,
    removeGameFromFavorite,
} from "../../../Redux/Slice/Profile";
import FavoriteWrapper from "../../layouts/FavoriteWrapper/FavoriteWrapper";

type CardType = {
    game: Game;
};

const Card: FC<CardType> = ({ game }) => {
    const { imgUrl, _id, name, price } = game;
    const favoriteArr = useAppSelector((state) => state.profile.favorite);
    const isFavorite = favoriteArr.find((el) => el._id === _id);
    const dispatch = useAppDispatch();
    const handlerAddGame = (e: MouseEvent<HTMLDivElement>) => {
        dispatch(addGameToFavorite(game));
        e.stopPropagation();
    };
    const handlerRemoveGame = (e: MouseEvent<HTMLDivElement>) => {
        dispatch(removeGameFromFavorite(game));
        e.stopPropagation();
    };
    const handlerOnClick = isFavorite ? handlerRemoveGame : handlerAddGame;
    return (
        <Link href={`/catalog/${_id}`}>
            <div
                key={_id}
                className=" p-[7.5px]  lg:w-1/3 w-1/2 max-[375px]:w-full cursor-pointer group bg-white dark:bg-main2-dark dark:border-accent75-dark border-accent-light  dark:shadow-accent75-dark duration-500 hover:z-10 hover:shadow-2xl "
            >
                <div className="">
                    <div className="w-full pt-[116%] relative">
                        <Image
                            layout="fill"
                            objectFit="cover"
                            src={imgUrl}
                            className=" group-hover:scale-[115%] scale-110 duration-500"
                        />
                        <div
                            onClick={handlerOnClick}
                            className="absolute top-0 bg-accent-light active:bg-accentActive-light hover:bg-red-200 cursor-pointer right-0 p-[13px] rounded-bl-2xl"
                        >
                            <FavoriteWrapper card data={game} />
                        </div>
                    </div>
                </div>

                <div className="p-[15px] pb-10 max-[768px]:pb-3 flex flex-col justify-center items-center">
                    <span className="mb-[5px] text-center line-clamp-2 ">
                        {name}
                    </span>
                    <div className="font-bold inline-block font-sans">
                        <Price price={price} />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;
