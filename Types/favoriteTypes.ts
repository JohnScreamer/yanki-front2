import { Game } from "./gameType";

export type FavoriteType = {
    userId: string;
    goodsId: string;
};
export type FavoriteResponseType = {
    status: string;
    data: FavoriteGetResponseData;
};
type FavoriteGetResponseData = {
    _id: string;
    user: string;
    goods: Array<Game>;
};
