import { Rating } from "@mui/material";
import { FC, useEffect, useRef } from "react";

type RatingWrapperType = {
    value: number;
    goodsId: string;
};

const RatingWrapper: FC<RatingWrapperType> = ({ value }) => {
    let average = value;

    return (
        <>
            <Rating
                name="read-only"
                className="text-[#E0BEA2]"
                sx={{
                    ".MuiRating-iconEmpty ": {
                        color: "#E0BEA2",
                    },
                }}
                value={average}
                readOnly
            />
        </>
    );
};

export default RatingWrapper;
