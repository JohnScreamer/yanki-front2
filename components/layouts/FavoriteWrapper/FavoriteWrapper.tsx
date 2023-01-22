import { FC, ReactNode, useEffect } from "react";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { Game } from "../../../Types/gameType";
import ColorlessBtn from "../../UI/Buttons/ColorlessBtn/ColorlessBtn";
import { useFavorite } from "../../../Hooks/useFavorite";

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
                        className="fill-white"
                    />
                ) : (
                    <FavoriteBorderIcon
                        onClick={handlerOnClick}
                        className="fill-white"
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
