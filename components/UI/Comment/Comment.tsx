import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import { CommentType } from "../../../Types/CommentType";
import noPhoto from "./../../../public/img/photo.png";
import EditIcon from "@mui/icons-material/Edit";
import { ClickAwayListener, Rating } from "@mui/material";

import { useAppSelector } from "../../../Hooks/common";
import {
    Controller,
    FieldValues,
    SubmitHandler,
    useForm,
} from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
    useDeleteCommentMutation,
    useUpdateCommentMutation,
} from "../../../service/api/game";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useRouter } from "next/router";
type Inputs = {
    rating: number;
    text: string;
};
const schema = yup
    .object({
        rating: yup
            .number()
            .min(1, "Обовязкове поле")
            .required("Обовязкове поле."),
        text: yup
            .string()
            .required("Обовязкове поле.")
            .min(4, "Не менше 4 символів."),
    })
    .required();

interface Comment {
    comment: CommentType;
}

const Comment: FC<Comment> = ({ comment }) => {
    const { text, createdAt, user, rating } = comment;
    const [isEdit, setEditStatus] = useState(false);
    const profile = useAppSelector((state) => state.profile.profile);
    const [time, setTime] = useState("");
    const handlerOnClick = () => {
        setEditStatus(true);
    };

    useEffect(() => {
        setTime(
            new Date(createdAt).toLocaleString("ua", {
                year: "numeric",
                month: "long",
                day: "numeric",
            })
        );
    }, [createdAt]);

    const [updateCommentTrigger, { isError, isLoading: load, data }] =
        useUpdateCommentMutation();
    const [deleteCommentTrigger, {}] = useDeleteCommentMutation();
    const handlerDeleteComment = () => {
        deleteCommentTrigger(comment._id);
    };
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
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        updateCommentTrigger({
            id: comment._id,
            rating: data.rating,
            text: data.text,
        });
        setEditStatus(false);
    };
    const isUserComment = user.username === profile?.username;
    return (
        <ClickAwayListener onClickAway={() => setEditStatus(false)}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="border-prime15-light dark:border-accent2-light border-[1px] p-2"
            >
                <div className="flex  border-accent-light dark:border-accent75-dark- border-b-[1px] items-center p-1 ">
                    <div className="relative w-11 h-10 mr-4 rounded-full overflow-hidden">
                        {/* <Image layout="fill" objectFit="cover" src={imgUrl} /> */}
                        <Image layout="fill" objectFit="cover" src={noPhoto} />
                    </div>

                    <div className="mr-auto text-lg font-medium">
                        {user.username}
                    </div>
                    <div className="text-sm ">{time}</div>
                </div>
                <div className="flex justify-end">
                    {isEdit && isUserComment ? (
                        <Controller
                            name="rating"
                            control={control}
                            render={({ field }) => (
                                <Rating
                                    className="text-[#E0BEA2] my-1"
                                    sx={{
                                        ".MuiRating-iconEmpty ": {
                                            color: "#E0BEA2",
                                        },
                                    }}
                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        e.preventDefault();
                                    }}
                                />
                            )}
                        />
                    ) : (
                        <Rating
                            className="text-[#E0BEA2] my-1"
                            sx={{
                                ".MuiRating-iconEmpty ": {
                                    color: "#E0BEA2",
                                },
                            }}
                            name={"simple-controlled"}
                            value={rating}
                            readOnly
                            onChange={(event, newValue) => {
                                // setValue(newValue);
                            }}
                        />
                    )}
                </div>

                {isEdit && isUserComment ? (
                    <div>
                        <Controller
                            name="text"
                            control={control}
                            render={({ field }) => (
                                <textarea
                                    id="message"
                                    rows={4}
                                    {...field}
                                    autoFocus
                                    className="block p-2.5 w-full text-sm text-gray-900  bg-gray-50 rounded-lg border focus:outline-none border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Напишіть свою думку про гру..."
                                ></textarea>
                            )}
                        />
                        {errors.text?.message ? (
                            <div className="text-red-600">
                                {errors.text?.message}
                            </div>
                        ) : null}

                        <div className="flex justify-end  py-1">
                            {" "}
                            <button type="submit">
                                <SendIcon />
                            </button>
                        </div>
                    </div>
                ) : (
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
                                <button
                                    onClick={handlerOnClick}
                                    className="group"
                                >
                                    <EditIcon className="group-hover:fill-accent-light" />
                                </button>
                            </div>
                        )}
                    </>
                )}
            </form>
        </ClickAwayListener>
    );
};

export default Comment;
