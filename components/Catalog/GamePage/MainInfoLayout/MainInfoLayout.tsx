import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import { CommentType, RatingType } from "../../../../Types/CommentType";
import { Game } from "../../../../Types/gameType";
import Price from "../../../../utiles/currency/Currency";
import { isPropNull } from "../../../../utiles/isPropNull";
import FavoriteWrapper from "../../../layouts/FavoriteWrapper/FavoriteWrapper";
import AddToCartBtns from "../../AddToCartBtn/AddToCartBtns";
import MainInfo from "../MainInfo/MainInfo";
import Rating from "../RatingWrapper/Rating";
const mainGameInfo: Array<keyof Game> = [
    "developer",
    "genre",
    "publisher",
    "platform",
    "localizetion",
];
type MainInfoLayoutType = {
    data: Game;

    rating: RatingType | null;
};

const MainInfoLayout: FC<MainInfoLayoutType> = ({ data, rating }) => {
    const { developer, genre, name, imgUrl, publisher, price, platform } = data;
    const router = useRouter();
    const findByProperties = (name: string, value: string | number) => {
        router.push({
            pathname: "/catalog",
            query: isPropNull({ [`${name}`]: value }),
        });
    };
    return (
        <div className="flex md:flex-row flex-col justify-center lg:gap-[50px] gap-[20px]">
            <div className=" max-w-[450px] w-full mx-auto  md:w-2/5   justify-center ">
                <div className="w-full pt-[120%]  relative ">
                    <Image
                        layout="fill"
                        objectFit="cover"
                        alt="товар"
                        src={imgUrl}
                    />
                </div>
            </div>
            <div className=" md:w-3/5 w-full flex flex-col gap-[20px] ">
                <h1 className="text-xl">{name}</h1>

                {rating ? (
                    <Rating
                        _id={data._id}
                        avgRating={rating?.avgRating}
                        totalVote={rating.totalVote}
                    />
                ) : null}
                <div className="font-bold text-prime-light dark:text-originText-light font-sans">
                    <Price price={price} />
                </div>
                <nav>
                    <ul className="flex flex-col gap-2">
                        {mainGameInfo.map((el, i) => {
                            if (!data[el]) {
                                return;
                            }
                            return (
                                <MainInfo
                                    findByProperties={findByProperties}
                                    data={data}
                                    index={i}
                                    key={el}
                                    name={el}
                                />
                            );
                        })}
                    </ul>
                </nav>
                <div className=" flex gap-[20px] w-full  ">
                    <div className="md:w-1/2 w-full  flex justify-center">
                        <AddToCartBtns data={data} />
                    </div>
                    <FavoriteWrapper data={data} />
                </div>
            </div>
        </div>
    );
};

export default MainInfoLayout;
