import { FC } from "react";
import RatingWrapper from "./RatingWrapper";

type RatingType = {
    totalVote?: number;
    _id: string;
    avgRating?: number;
};

const Rating: FC<RatingType> = ({ _id, avgRating, totalVote }) => {
    return (
        <>
            <div className="flex gap-1">
                <div>
                    <RatingWrapper value={avgRating || 0} goodsId={_id} />
                </div>
                <span className="flex gap-1">
                    <span className="font-mono "> {totalVote}</span>
                    <span className="text-xs center">кількість відгуків</span>
                </span>
            </div>
        </>
    );
};
export default Rating;
