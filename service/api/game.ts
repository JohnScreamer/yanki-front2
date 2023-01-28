import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { BASE_URL } from "../../common/url";

import {
    AuthLogin,
    AuthLoginBody,
    EditProfileBody,
    RegistrationType,
} from "../../Types/authTypes";
import { AllFiltersType } from "../../Types/catalogTypes";
import {
    CommentAddResponse,
    CommentBody,
    CommentsResponse,
    CommentUpdateBody,
    RatingResponseType,
} from "../../Types/CommentType";
import { FavoriteResponseType, FavoriteType } from "../../Types/favoriteTypes";
import { AllGames } from "../../Types/gameType";
import { NewOrderType, NewOrderTypes } from "../../Types/Order.Types";
export const gameApi = createApi({
    reducerPath: "gameApi",
    tagTypes: ["Favorite", "Comment", "Rating"],
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        credentials: "include",
    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    endpoints: (builder) => ({
        getAllGames: builder.query<AllGames, AllFiltersType>({
            query: (param) => ({
                url: `/game`,
                params: { ...param },
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            }),
        }),
        postNewOrder: builder.mutation<NewOrderTypes, NewOrderType>({
            query: (body) => ({
                url: "/order",
                body,
                method: "POST",
            }),
        }),
        userLogin: builder.mutation<AuthLogin, AuthLoginBody>({
            query: (body) => ({
                url: "/auth/login",
                body,
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            }),
        }),
        userRegistration: builder.mutation<AuthLogin, RegistrationType>({
            query: (body) => ({
                url: "/auth/registration",
                body,
                method: "POST",
            }),
        }),
        addComment: builder.mutation<CommentAddResponse, CommentBody>({
            query: (body) => ({
                url: "/comment",
                body,
                method: "POST",
            }),
            invalidatesTags: ["Comment", "Rating"],
        }),
        updateComment: builder.mutation<CommentAddResponse, CommentUpdateBody>({
            query: (body) => ({
                url: "/comment",
                body,
                method: "PATCH",
            }),
            invalidatesTags: ["Comment", "Rating"],
        }),
        deleteComment: builder.mutation<CommentAddResponse, string>({
            query: (id) => ({
                url: `/comment/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Comment", "Rating"],
        }),
        getComment: builder.query<CommentsResponse, string>({
            query: (id) => ({
                url: `/comment/${id}`,
                method: "GET",
            }),
            providesTags: (result, error, arg) =>
                result
                    ? [
                          ...result.data.map((id: any) => ({
                              type: "Comment" as const,
                              id,
                          })),
                          "Comment",
                      ]
                    : ["Comment"],
        }),

        addFavorite: builder.mutation<FavoriteResponseType, FavoriteType>({
            query: (body) => ({
                url: "/favorite",
                body,
                method: "PATCH",
            }),
            invalidatesTags: ["Favorite"],
        }),
        removeFavorite: builder.mutation<FavoriteResponseType, FavoriteType>({
            query: (body) => ({
                url: "/favorite",
                body,
                method: "DELETE",
            }),
            invalidatesTags: ["Favorite"],
        }),
        createFavorite: builder.mutation<FavoriteResponseType, FavoriteType>({
            query: (body) => ({
                url: "/favorite",
                body,
                method: "POST",
            }),
            invalidatesTags: ["Favorite"],
        }),
        getFavorite: builder.query<FavoriteResponseType, string>({
            query: (id) => ({
                url: `/favorite/${id}`,
                method: "GET",
            }),
            providesTags: (result, error, arg) =>
                result
                    ? [
                          ...result.data.goods.map((id: any) => ({
                              type: "Favorite" as const,
                              id,
                          })),
                          "Favorite",
                      ]
                    : ["Favorite"],
        }),
        getAllRating: builder.query<RatingResponseType, string>({
            query: (id) => ({
                url: `/comment/rating/${id}`,
                method: "GET",
            }),
            providesTags: ["Rating"],
        }),
        editProfile: builder.mutation<CommentAddResponse, CommentUpdateBody>({
            query: (body) => ({
                url: "/comment",
                body,
                method: "PATCH",
            }),
            invalidatesTags: ["Comment", "Rating"],
        }),
        userEditProfile: builder.mutation<AuthLogin, EditProfileBody>({
            query: (body) => ({
                url: "/auth",
                body,
                method: "PATCH",
            }),
        }),
        setAvatar: builder.mutation<any, any>({
            query: (body) => ({
                url: "/uploads",
                body,
                method: "POST",
            }),
        }),
    }),
});

export const {
    useLazyGetAllGamesQuery,
    useGetAllGamesQuery,
    usePostNewOrderMutation,
    useUserLoginMutation,
    useUserRegistrationMutation,
    useAddCommentMutation,
    useUpdateCommentMutation,
    useDeleteCommentMutation,
    useAddFavoriteMutation,
    useCreateFavoriteMutation,
    useRemoveFavoriteMutation,
    useLazyGetFavoriteQuery,
    useLazyGetCommentQuery,
    useGetCommentQuery,
    useGetAllRatingQuery,
    useLazyGetAllRatingQuery,
    useUserEditProfileMutation,
} = gameApi;
