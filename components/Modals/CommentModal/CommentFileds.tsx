import { Rating } from "@mui/material";
import { FC } from "react";
import { Control, Controller, FieldErrorsImpl } from "react-hook-form";
import DefaultBtn from "../../UI/Buttons/DefoultBtn/DefaultBtn";
import SendIcon from "@mui/icons-material/Send";
import { CommentFiledsType } from "../../../Types/CommentType";

const CommentFileds: FC<CommentFiledsType> = ({ control, errors }) => {
    return (
        <>
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
        </>
    );
};

export default CommentFileds;
