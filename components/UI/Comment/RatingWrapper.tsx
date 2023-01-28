import { Rating } from "@mui/material";
import { FC } from "react";
import { Control, Controller } from "react-hook-form";

type RatingWrapperType = {
    control: Control<
        {
            rating: number;
            text: string;
        },
        any
    >;
    rating: number;
    isUserComment: boolean;
    isEdit: boolean;
};

const RatingWrapper: FC<RatingWrapperType> = ({
    control,
    rating,
    isUserComment,
    isEdit,
}) => {
    return (
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
                    value={+rating}
                    readOnly
                    onChange={(event, newValue) => {
                        // setValue(newValue);
                    }}
                />
            )}
        </div>
    );
};

export default RatingWrapper;
