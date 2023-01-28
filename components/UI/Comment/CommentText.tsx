import { FC } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
type CommentTextType = {
    text: string;
    handlerDeleteComment: () => void;
    handlerEditComment: () => void;
    isUserComment: boolean;
};

const CommentText: FC<CommentTextType> = ({
    text,
    handlerDeleteComment,
    handlerEditComment,
    isUserComment,
}) => {
    return (
        <>
            <div className=" min-h-[100px]  block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border focus:outline-none border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {text}
            </div>
            {isUserComment && (
                <div className="flex justify-end py-1 g-4">
                    <button
                        className="mr-[5px] group"
                        onClick={handlerDeleteComment}
                    >
                        <DeleteForeverIcon className="group-hover:fill-accent-light" />
                    </button>
                    <button onClick={handlerEditComment} className="group">
                        <EditIcon className="group-hover:fill-accent-light" />
                    </button>
                </div>
            )}
        </>
    );
};

export default CommentText;
