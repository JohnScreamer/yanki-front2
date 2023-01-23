import { FC, ReactNode, useEffect } from "react";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { Game } from "../../../Types/gameType";
import ColorlessBtn from "../../UI/Buttons/ColorlessBtn/ColorlessBtn";
import { useFavorite } from "../../../Hooks/useFavorite";
import s from "./index.module.scss";
type FavoriteType = {
    data: Game;
    card?: boolean;
};

const FavoriteWrapper: FC<FavoriteType> = ({ data, card }) => {
    const { handlerOnClick, isFavorite } = useFavorite(data);

    if (card) {
        return (
            <>
                {isFavorite ? (
                    <FavoriteIcon
                        onClick={handlerOnClick}
                        className={s.color}
                    />
                ) : (
                    <FavoriteBorderIcon
                        onClick={handlerOnClick}
                        className={s.color}
                    />
                )}
            </>
        );
    }
    return (
        <>
            <ColorlessBtn
                active={!!isFavorite}
                fn={handlerOnClick}
                className=" md:w-1/2 w-full "
            >
                У обране
            </ColorlessBtn>
        </>
    );
};

export default FavoriteWrapper;
