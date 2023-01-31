import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAddCommentMutation } from "../../../service/api/game";
import { useRouter } from "next/router";
import ShowError from "../../UI/PopUp/ShowErrorPopUp";
import toast from "react-hot-toast";
import CommentFileds from "./CommentFileds";
import { useAppSelector } from "../../../Hooks/common";
import { getProfileSelector } from "../../../utiles/selectors/profileSelectors";
import { commentSchema } from "../../../common/shema/comment";

type Inputs = {
    rating: number;
    text: string;
};
type CommentModalType = {
    name: string;
    setVisibleCommentModal: (status: boolean) => void;
};

const CommentModal: FC<CommentModalType> = ({
    name,
    setVisibleCommentModal,
}) => {
    const route = useRouter();
    const userID = useAppSelector(getProfileSelector)?._id;
    const id = route.query.id as string;

    const [addComment, { isError, isLoading: load, data, error }] =
        useAddCommentMutation();

    const {
        handleSubmit,
        formState: { errors, isLoading },
        control,
    } = useForm({
        mode: "onSubmit",
        defaultValues: {
            rating: 0,
            text: "",
        },
        resolver: yupResolver(commentSchema),
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        if (id && userID) {
            addComment({
                goodsId: id,
                rating: data.rating,
                text: data.text,
                user: userID,
            });
            setVisibleCommentModal(false);
            toast.success("Відгук добавлено");
        }
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="  flex gap-3 flex-col md:w-[500px]  "
        >
            <h2 className="line-clamp-2 font-bold text-xl mr-[25px] ">
                <span className="text-xs font-normal"></span>
                {name}
            </h2>
            <CommentFileds control={control} errors={errors} />
            <ShowError error={error} isError={isError} />
        </form>
    );
};

export default CommentModal;
