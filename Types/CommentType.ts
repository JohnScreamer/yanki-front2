export type CommentType = {
    _id: string;

    text: string;

    user: {
        imgUrl: string;
        username: string;
    };

    rating: number;

    goodsId: string;

    createdAt: string;

    updatedAt: string;
};

export type CommentsResponse = {
    status: "ok";
    data: Array<CommentType>;
};

export type RatingType = { avgRating: number; totalVote: number; _id: string };

export type RatingResponseType = {
    status: "ok";
    rating: Array<RatingType>;
};

export type CommentBody = {
    text: string;
    user: string;
    rating: number;
    goodsId: string;
};
export type CommentAddResponse = {
    status: boolean;
    data: CommentType;
};
export type CommentUpdateBody = {
    text: string;
    id: string;
    rating: number;
};
export type ErrorData = {
    data: {
        message: string;
    };
    status: number;
};
