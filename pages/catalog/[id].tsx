import { GetServerSideProps } from "next";
import { FC, useEffect, useRef, useState } from "react";
import { TEXT } from "../../common/constants/text";
import MainInfoLayout from "../../components/Catalog/GamePage/MainInfoLayout/MainInfoLayout";
import Comments from "../../components/Catalog/GamePage/Comments";
import GameInfo from "../../components/Game/GameInfo";
import HeadLayout from "../../components/layouts/HeadLayout";
import ModalLayout from "../../components/layouts/ModalLayout/ModalLayout";
import CommentModal from "../../components/Modals/CommentModal/CommentModal";
import Scrumbs from "../../components/UI/Scrumbs/Scrumbs";
import { api } from "../../service/axiosApiRequest/api";
import { CommentType, RatingType } from "../../Types/CommentType";
import { Game, GetGame } from "../../Types/gameType";
import { useLazyGetAllRatingQuery } from "../../service/api/game";
import { useRouter } from "next/router";
type gameType = {
    data: Game;
    comments: Array<CommentType>;
    rating: RatingType | null;
    id: string;
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
            id,
        },
    };
};

const game: FC<gameType> = ({ data, comments, rating, id }) => {
    const [isVisibleCommentModal, setVisibleCommentModal] = useState(false);
    const [getNewRatingData, { data: newRating }] = useLazyGetAllRatingQuery();
    const getNewRating = () => {
        getNewRatingData(id);
    };
    const totalRating = newRating?.rating[0] ? newRating?.rating[0] : rating;
    const { name } = data;
    const urlName = ["Головна", "Каталог", name];
    return (
        <HeadLayout name={name}>
            <div className="Container pb-[50px]">
                <div>
                    <Scrumbs arrName={urlName} />
                </div>
                <div>
                    <MainInfoLayout data={data} rating={totalRating} />
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
                                    getNewRating={getNewRating}
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
        </HeadLayout>
    );
};

export default game;
