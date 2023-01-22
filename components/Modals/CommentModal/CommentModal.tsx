import { Rating } from "@mui/material";
import { FC } from "react";
import {
    Controller,
    FieldValues,
    SubmitHandler,
    useForm,
} from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DefaultBtn from "../../UI/Buttons/DefoultBtn/DefaultBtn";
import { useAddCommentMutation } from "../../../service/api/game";
import { useRouter } from "next/router";
import { useAppSelector } from "../../../Hooks/common";
import { useRouteTo } from "../../../Hooks/useRouteTo";
import ShowError from "../../PopUp/ShowErrorPopUp";
const schema = yup
    .object({
        rating: yup
            .number()
            .min(1, "Обовязкове поле")
            .required("Обовязкове поле."),
        text: yup
            .string()
            .required("Обовязкове поле.")
            .min(2, "Не менше 2 символів."),
    })
    .required();

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
    const userID = useAppSelector((state) => state.profile.profile?._id);
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
        resolver: yupResolver(schema),
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
            <div>
                <Controller
                    name="rating"
                    control={control}
                    render={({ field }) => (
                        <Rating
                            className="text-[#E0BEA2]"
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
                {errors.rating?.message ? (
                    <div className="text-red-600">{errors.rating?.message}</div>
                ) : null}
            </div>
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
                    <div className="text-red-600">{errors.text?.message}</div>
                ) : null}
            </div>
            <DefaultBtn fn={() => {}} type="submit">
                <div className="flex w-full justify-center  gap-1">
                    <span> Відправити відгук</span>
                    <span>
                        {" "}
                        <SendIcon />
                    </span>
                </div>
            </DefaultBtn>
            <ShowError error={error} isError={isError} />
        </form>
    );
};

export default CommentModal;
