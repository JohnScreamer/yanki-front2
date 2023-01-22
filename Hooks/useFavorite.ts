import { useRouter } from "next/router";
import { FC, ReactNode, useEffect } from "react";
import toast from "react-hot-toast";

import {
    addGameToFavorite,
    removeGameFromFavorite,
} from "../Redux/Slice/Profile";
import {
    useAddFavoriteMutation,
    useRemoveFavoriteMutation,
    useCreateFavoriteMutation,
} from "../service/api/game";
import { Game } from "../Types/gameType";
import { useAppSelector, useAppDispatch } from "./common";
interface FavoriteType {
    handlerOnClick: () => void;
    isFavorite: boolean;
    param: { isLoading: boolean; isError: boolean };
}
export const useFavorite = (data: Game): FavoriteType => {
    const profile = useAppSelector((state) => state.profile);
    const route = useRouter();
    const favoriteArr = profile?.favorite ? profile?.favorite : [];
    const isFavorite = favoriteArr.find((el) => el._id === data._id);
    const dispatch = useAppDispatch();
    const isAuth = profile.isAuth;
    const userId = profile.profile?._id;

    const [addTrigger, { data: favData, isLoading, isError, isSuccess }] =
        useAddFavoriteMutation();
    const [
        removeTrigger,
        {
            data: favRemoveData,
            isLoading: removeLoading,
            isSuccess: removeSuccess,
            isError: removeError,
        },
    ] = useRemoveFavoriteMutation();
    const [
        createFavTrigger,
        {
            data: createData,
            isLoading: isLoadingCreate,
            isSuccess: isCreateSuccess,
            isError: addError,
        },
    ] = useCreateFavoriteMutation();

    useEffect(() => {
        if (isSuccess) dispatch(addGameToFavorite(data));
    }, [favData]);
    useEffect(() => {
        if (isCreateSuccess) dispatch(addGameToFavorite(data));
    }, [createData]);

    useEffect(() => {
        if (removeSuccess) dispatch(removeGameFromFavorite(data));
    }, [favRemoveData]);

    const handlerAddGame = () => {
        if (!isAuth) {
            route.replace({ query: { ...route.query, authorization: true } });
            return;
        }
        if (!!favoriteArr.length && userId) {
            toast("Добавлена в  обране!", {
                icon: "❤",
            });
            return addTrigger({ goodsId: data._id, userId });
        }
        if (userId) createFavTrigger({ goodsId: data._id, userId });
        toast("Добавлена в  обране!", {
            icon: "❤",
        });
    };
    const handlerRemoveGame = () => {
        if (!isAuth) {
            route.replace({ query: { ...route.query, authorization: true } });
            return;
        }
        if (userId) removeTrigger({ goodsId: data._id, userId });
        toast("Видалена з  обране!", {
            icon: "💔",
        });
    };
    const handlerOnClick = isFavorite ? handlerRemoveGame : handlerAddGame;
    const error = isError || removeError || addError;
    const loading = isLoading || isLoadingCreate || removeLoading;
    return {
        handlerOnClick,
        isFavorite: !!isFavorite,
        param: { isError: error, isLoading: loading },
    };
};
