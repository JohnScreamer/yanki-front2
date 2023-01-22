import axios, { AxiosInstance } from "axios";
import { CommentsResponse, RatingResponseType } from "../../Types/CommentType";
import { getCookies, getCookie, setCookies, removeCookies } from "cookies-next";
import { AllGames, GetGame } from "../../Types/gameType";
import { AuthLogin, AuthMe } from "../../Types/authTypes";
import { FavoriteResponseType } from "../../Types/favoriteTypes";
import { OrderListResponse } from "../../Types/Order.Types";

const base = axios.create({ baseURL: "http://localhost:4000" });
base.interceptors.request.use((config: any) => {
    // const token = getCookie("auth");

    return config;
});

export const apiReq = (base: AxiosInstance) => ({
    async getAllGames(params: object) {
        return base.get<AllGames>("/game", { params });
    },
    async getGame(id: string) {
        return base.get<GetGame>(`/game/${id}`);
    },
    async getAllComments(id: string) {
        return base.get<CommentsResponse>(`/comment/${id}`);
    },
    async getGameRating(id: string) {
        const data = await base.get<RatingResponseType>(
            `/comment/rating/${id}`
        );
        if (data.data.status !== "ok") {
            return null;
        }
        return data;
    },
    async authMe() {
        return base.post<AuthMe>(
            `/auth`,
            {},
            {
                withCredentials: true,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            }
        );
    },
    async getUserFavorite(id: string) {
        return base.get<FavoriteResponseType>(`/favorite/${id}`);
    },
    async getUserOrders(id: string) {
        return base.get<OrderListResponse>(`/order/${id}`);
    },
});
