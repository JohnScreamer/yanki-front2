import { Control, FieldErrorsImpl } from "react-hook-form";

export type CommentType = {
    _id: string;

    text: string;

    user: {
        avatar: string;
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

export type CommentFiledsType = {
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
