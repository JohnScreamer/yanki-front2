import { SubmitHandler } from "react-hook-form";
import {
    useDeleteCommentMutation,
    useUpdateCommentMutation,
} from "../service/api/game";
import { getProfileSelector } from "../utiles/selectors/profileSelectors";

export const useComment = (id: string) => {
    const [
        updateCommentTrigger,
        { isError, isLoading: load, data, isSuccess },
    ] = useUpdateCommentMutation();
    const [deleteCommentTrigger, { isSuccess: isRemove }] =
        useDeleteCommentMutation();
    const handlerDeleteComment = () => {
        deleteCommentTrigger(id);
    };

    return {
        isSuccess,
        isRemove,
        handlerDeleteComment,
        updateCommentTrigger,
        load,
    };
};
