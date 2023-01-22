import { useRouter } from "next/router";
import { FC } from "react";
import Card from "../../components/Favorite/Card/Card";
import Scrumbs from "../../components/UI/Scrumbs/Scrumbs";
import { useAppSelector } from "../../Hooks/common";
import { Game } from "../../Types/gameType";

type FavoriteType = {};
const urlName = ["Головна", "Вибране"];
const favorite: FC<FavoriteType> = () => {
    const games = useAppSelector((state) => state.profile.favorite);
    const route = useRouter();
    const isWindow = typeof window === "undefined" ? false : true;
    if (!favorite.length && isWindow) {
        route.push("/");
    }

    const gameFavoriteList = games.length
        ? (games as Array<Game>).map((el) => <Card key={el._id} game={el} />)
        : null;
    return (
        <div className="">
            <div className="Container ">
                <Scrumbs arrName={urlName} />
                <ul className=" flex flex-wrap m-[-7.5px] ">
                    {gameFavoriteList}
                </ul>
            </div>
        </div>
    );
};

export default favorite;
