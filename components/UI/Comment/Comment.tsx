import { FC, useEffect, useState } from "react";
import { CommentType } from "../../../Types/CommentType";
import { ClickAwayListener, Rating } from "@mui/material";
import { useAppSelector } from "../../../Hooks/common";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Loader from "../Loader/Loader";
import { getProfileSelector } from "../../../utiles/selectors/profileSelectors";
import Avatar from "./Avatar";
import RatingWrapper from "./RatingWrapper";
import CommentText from "./CommentText";
import CommentTextEditor from "./CommentTextEditor";
import { commentSchema } from "../../../common/yupValidationShema/comment";
import { useComment } from "../../../Hooks/useComment";

type Inputs = {
    rating: number;
    text: string;
};

interface Comment {
    comment: CommentType;
    getNewRating: () => void;
}

const Comment: FC<Comment> = ({ comment, getNewRating }) => {
    const { text, createdAt, user, rating, _id } = comment;
    const [isEdit, setEditStatus] = useState(false);
    const profile = useAppSelector(getProfileSelector);
    const handlerEditComment = () => {
        setEditStatus(true);
    };
    const {
        handlerDeleteComment,
        isRemove,
        isSuccess,
        updateCommentTrigger,
        load,
    } = useComment(_id);
    const {
        handleSubmit,
        formState: { errors, isLoading },
        control,
    } = useForm({
        mode: "onSubmit",
        defaultValues: {
            rating: rating,
            text: text,
        },
        resolver: yupResolver(commentSchema),
    });
    useEffect(() => {
        if (isSuccess || isRemove) {
            getNewRating();
        }
    }, [isSuccess, isRemove]);

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        updateCommentTrigger({
            id: comment._id,
            rating: data.rating,
            text: data.text,
        });
        setEditStatus(false);
    };
    const isUserComment = user?.username === profile?.username;
    return (
        <ClickAwayListener onClickAway={() => setEditStatus(false)}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="border-prime15-light dark:border-accent2-light border-[1px] p-2"
            >
                <Avatar comment={comment} />
                <RatingWrapper
                    control={control}
                    rating={rating}
                    isEdit={isEdit}
                    isUserComment={isUserComment}
                />
                {isEdit && isUserComment ? (
                    <CommentTextEditor control={control} errors={errors} />
                ) : (
                    <CommentText
                        text={text}
                        handlerEditComment={handlerEditComment}
                        handlerDeleteComment={handlerDeleteComment}
                        isUserComment={isUserComment}
                    />
                )}
                {load && <Loader />}
            </form>
        </ClickAwayListener>
    );
};

export default Comment;
