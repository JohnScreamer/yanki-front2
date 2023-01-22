import { FC, useEffect, useRef, useState } from "react";
import { CommentsResponse, CommentType } from "../../Types/CommentType";
import DefaultBtn from "../UI/Buttons/DefoultBtn/DefaultBtn";
import Comment from "../UI/Comment/Comment";
import CommentsDisabledIcon from "@mui/icons-material/CommentsDisabled";
import { useAppSelector } from "../../Hooks/common";
import PopUp from "../PopUp/PopUp";
import { useRouter } from "next/router";
import {
    useGetCommentQuery,
    useLazyGetCommentQuery,
} from "../../service/api/game";
// import s from `./Comments.module.scss`;

type Comments = {
    data: Array<CommentType>;
    openCommentModal: (state: boolean) => void;
    goodsId: string;
};

const Comments: FC<Comments> = ({ data, openCommentModal, goodsId }) => {
    const {
        isLoading,
        isSuccess,
        data: newComments,
    } = useGetCommentQuery(goodsId);

    const newDate = newComments?.data || data;
    const list = newDate.map((el) => <Comment key={el._id} comment={el} />);
    const route = useRouter();
    const isAuth = useAppSelector((state) => state.profile.isAuth);
    const profile = useAppSelector((state) => state.profile.profile);
    const [isVisible, setVisibleStatus] = useState(false);
    const hasRated = newDate.find(
        (el) => el.user.username === profile?.username
    );

    const toLogin = () => {
        route.replace(
            { query: { ...route.query, authorization: true } },
            undefined,
            { shallow: true }
        );
    };
    const handlerOnClick = () => {
        if (!isAuth) {
            return toLogin();
        }
        if (!!hasRated) {
            return setVisibleStatus(true);
        }
        openCommentModal(true);
    };
    return (
        <div className="flex flex-col">
            <div className="flex justify-between mb-4">
                <h4 className="text-2xl font-bold">Відгуки покупців</h4>{" "}
                <DefaultBtn fn={handlerOnClick}>Залишити відгук</DefaultBtn>
            </div>
            {list.length ? (
                <div className="flex gap-3 flex-col">{list}</div>
            ) : (
                <h4 className="flex flex-col justify-center  flex-grow min-h-[205px] text-lg  items-center h-full w-full">
                    Немає відгунів{" "}
                    <span>
                        <CommentsDisabledIcon className="w-16 h-16" />
                    </span>
                </h4>
            )}
            <PopUp
                isVisible={isVisible}
                text={"Ви вже залишили відгук."}
                setVisibleStatus={setVisibleStatus}
                alertType="warning"
            />
        </div>
    );
};

export default Comments;
