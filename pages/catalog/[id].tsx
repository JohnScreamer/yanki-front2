import { Rating } from "@mui/material";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { TEXT } from "../../common/constants/text";
import { NAMES_PROP } from "../../common/GamePropertiesName";
import AddToCartBtns from "../../components/Catalog/AddToCartBtn/AddToCartBtns";
import MainInfo from "../../components/Catalog/MainInfo/MainInfo";
import RatingWrapper from "../../components/Catalog/RatingWrapper/RatingWrapper";
import Comments from "../../components/Game/Comments";
import GameInfo from "../../components/Game/GameInfo";
import FavoriteWrapper from "../../components/layouts/FavoriteWrapper/FavoriteWrapper";
import ModalLayout from "../../components/layouts/ModalLayout/ModalLayout";
import CommentModal from "../../components/Modals/CommentModal/CommentModal";
import Scrumbs from "../../components/UI/Scrumbs/Scrumbs";
import { api } from "../../service/axiosApiRequest/api";

import {
    CommentsResponse,
    CommentType,
    RatingType,
} from "../../Types/CommentType";
import { Game, GetGame } from "../../Types/gameType";
import Price from "../../utiles/currency/Currency";
import { isPropNull } from "../../utiles/isPropNull";
const urlName = ["Головна", "Каталог", "Гра"];
const mainGameInfo: Array<keyof Game> = [
    "developer",
    "genre",
    "publisher",
    "platform",
    "localizetion",
];
type gameType = {
    data: Game;
    comments: Array<CommentType>;
    rating: RatingType | null;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;

    const [comments, game, rating] = await Promise.all([
        api(context).apiReq.getAllComments(`${id}`),
        api(context).apiReq.getGame(`${id}`),
        api(context).apiReq.getGameRating(`${id}`),
    ]);

    if (!rating) {
        return {
            props: {
                data: game.data.game,
                comments: comments.data.data,
                rating: null,
            },
        };
    }
    if (game.data.status !== "ok") {
        return { notFound: true };
    }
    return {
        props: {
            data: game.data.game,
            comments: comments.data.data,
            rating: rating.data.rating[0],
        },
    };
};

const game: FC<gameType> = ({ data, comments, rating }) => {
    const [isVisibleCommentModal, setVisibleCommentModal] = useState(false);
    const { developer, genre, name, imgUrl, publisher, price, platform } = data;
    const router = useRouter();
    const findByProperties = (name: string, value: string | number) => {
        router.push({
            pathname: "/catalog",
            query: isPropNull({ [`${name}`]: value }),
        });
    };

    return (
        <div>
            <div className="Container">
                <Scrumbs arrName={urlName} />
            </div>
            <div className="Container">
                <div className="flex md:flex-row flex-col justify-center lg:gap-[50px] gap-[20px]">
                    <div className=" flex justify-center ">
                        <Image height={540} width={450} src={imgUrl} />
                    </div>
                    <div className=" md:w-3/5 w-full flex flex-col gap-[20px] ">
                        <h1 className="text-xl">{name}</h1>
                        {rating ? (
                            <div className="flex gap-1">
                                <div>
                                    <RatingWrapper
                                        value={rating.avgRating}
                                        goodsId={data._id}
                                    />
                                </div>
                                <span className="flex gap-1">
                                    <span className="font-mono ">
                                        {" "}
                                        {rating.totalVote}
                                    </span>
                                    <span className="text-xs center">
                                        кількість відгуків
                                    </span>
                                </span>
                            </div>
                        ) : null}
                        <div className="font-bold text-prime-light dark:text-originText-light font-sans">
                            <Price price={price} />
                        </div>
                        <nav>
                            <ul className="flex flex-col gap-2">
                                {mainGameInfo.map((el, i) => {
                                    if (!data[el]) {
                                        return;
                                    }
                                    return (
                                        <MainInfo
                                            findByProperties={findByProperties}
                                            data={data}
                                            index={i}
                                            key={el}
                                            name={el}
                                        />
                                    );
                                })}
                            </ul>
                        </nav>
                        <div className=" flex gap-[20px] w-full  ">
                            <div className="md:w-1/2 w-full  flex justify-center">
                                <AddToCartBtns data={data} />
                            </div>
                            <FavoriteWrapper data={data} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="py-[15px]">
                        <h3 className="text-xl mb-[30px]">Опис</h3>
                        <p>{TEXT}</p>
                    </div>

                    <div className="flex gap-3 py-8 md:flex-row flex-col justify-center ">
                        <div className="md:w-1/2 w-full ">
                            <GameInfo game={data} />
                        </div>
                        <div className="md:w-1/2 w-full ">
                            <Comments
                                data={comments}
                                openCommentModal={setVisibleCommentModal}
                                goodsId={data._id}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {isVisibleCommentModal ? (
                    <ModalLayout onClose={setVisibleCommentModal}>
                        <CommentModal
                            name={data.name}
                            setVisibleCommentModal={setVisibleCommentModal}
                        />
                    </ModalLayout>
                ) : null}
            </div>
        </div>
    );
};

export default game;
