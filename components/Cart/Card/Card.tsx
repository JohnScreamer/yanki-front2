import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../Hooks/common";
import {
    addGame,
    CartItem,
    removeAllGameCopy,
    removeGame,
} from "../../../Redux/Slice/Cart";
import { Game } from "../../../Types/gameType";
import Price from "../../../utiles/currency/Currency";
import AddRemoveGame from "../../UI/AddRemoveGame/AddRemoveGame";
// import s from `./Card.module.scss`;

type CardType = {
    game: CartItem | Game;
    ordered?: boolean;
    noBorder?: boolean;
};

const Card: FC<CardType> = ({ game, ordered, noBorder }) => {
    const router = useRouter();
    const goTo = () => {
        router.push(`/catalog/${game._id}`);
    };
    const dispatch = useAppDispatch();
    const deleteGame = () => {
        dispatch(removeAllGameCopy(game._id));
    };
    return (
        <li
            className={`flex py-[10px] md:pb-[10px] pb-[0px]  ${
                noBorder ? "" : "border-b-[0.3px]"
            }  border-base-dark dark:border-text-dark items-center h-full`}
        >
            {/* <Link href={`/catalog/${game._id}`}> */}
            <div
                className=" items-center cursor-pointer h-[110px] flex"
                onClick={goTo}
            >
                <div className="min-h-[110px] min-w-[90px]">
                    <Image
                        height={110}
                        width={90}
                        src={game.imgUrl}
                        className="mr-[10px] "
                    />
                </div>

                <span className="md:block hidden     mx-[10px]">
                    <span className="line-clamp-2      max-w-[500px] ">
                        {game.name}
                    </span>
                </span>
            </div>
            {ordered ? (
                <div className="flex justify-between md:flex-row flex-col  gap-3 w-full md:max-w-[500px] max-w-full">
                    <span className="md:hidden block      mx-[10px]">
                        <span className="line-clamp-2      ">{game.name}</span>
                    </span>
                    <div className="flex justify-between md:items-center items-end  w-full md:flex-row flex-col ">
                        <div className="flex gap-1">
                            <span>Кількість:</span>
                            {"amount" in game ? game?.amount : 1}
                        </div>
                        <Price
                            price={
                                "totalPrice" in game
                                    ? game.totalPrice
                                    : game.price
                            }
                        />
                    </div>
                </div>
            ) : (
                <div className="flex flex-col w-full gap-2">
                    <div className="flex md:hidden justify-between">
                        <span className="max-[768px]:text-xs text-base  md:max-w-[100px] max-w-[500px] mr-3 line-clamp-2  ml-[10px]">
                            {game.name}
                        </span>
                        <div className=" md:hidden flex">
                            <Price
                                price={
                                    "totalPrice" in game
                                        ? game.totalPrice
                                        : game.price
                                }
                            />
                        </div>

                        {/* <div className="font-bold    md:hidden flex  w-[75px] font-mono    gap-1  ">
                        {game.totalPrice} <span>грн</span>
                    </div> */}
                    </div>

                    <div className="flex  items-center ml-auto">
                        {"totalPrice" in game ? (
                            <AddRemoveGame game={game} />
                        ) : null}
                        <div className="flex relative md:flex-row flex-col gap-[21px] justify-center item-center">
                            <div className="  md:flex hidden">
                                <Price
                                    price={
                                        "totalPrice" in game
                                            ? game.totalPrice
                                            : game.price
                                    }
                                />
                            </div>

                            {/* <div className="font-bold    w-[75px] font-mono    gap-1  ">
                            {game.totalPrice} <span>грн</span>
                        </div> */}
                            <button
                                className="flex justify-end items-end"
                                onClick={deleteGame}
                            >
                                <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 25 25"
                                    fill="#E0BEA2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="hover:fill-base2-light"
                                >
                                    <path d="M18.75 5H25V7.5H22.5V23.75C22.5 24.0815 22.3683 24.3995 22.1339 24.6339C21.8995 24.8683 21.5815 25 21.25 25H3.75C3.41848 25 3.10054 24.8683 2.86612 24.6339C2.6317 24.3995 2.5 24.0815 2.5 23.75V7.5H0V5H6.25V1.25C6.25 0.918479 6.3817 0.600537 6.61612 0.366116C6.85054 0.131696 7.16848 0 7.5 0H17.5C17.8315 0 18.1495 0.131696 18.3839 0.366116C18.6183 0.600537 18.75 0.918479 18.75 1.25V5ZM20 7.5H5V22.5H20V7.5ZM8.75 11.25H11.25V18.75H8.75V11.25ZM13.75 11.25H16.25V18.75H13.75V11.25ZM8.75 2.5V5H16.25V2.5H8.75Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </li>
    );
};

export default Card;
