import { FC } from "react";
import { Control, Controller, FieldErrorsImpl } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";
type CommentTextEditorType = {
    control: Control<
        {
            rating: number;
            text: string;
        },
        any
    >;
    errors: Partial<
        FieldErrorsImpl<{
            rating: number;
            text: string;
        }>
    >;
};

const CommentTextEditor: FC<CommentTextEditorType> = ({ control, errors }) => {
    return (
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

            <div className="flex justify-end  py-1">
                {" "}
                <button type="submit">
                    <SendIcon />
                </button>
            </div>
        </div>
    );
};

export default CommentTextEditor;
