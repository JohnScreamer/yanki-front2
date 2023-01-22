import { FC } from "react";
import toast from "react-hot-toast";
import { useAppDispatch } from "../../../Hooks/common";
import { removeGame, addGame, CartItem } from "../../../Redux/Slice/Cart";
import { Game } from "../../../Types/gameType";

type AddRemoveGameType = {
    game: CartItem;
};

const AddRemoveGame: FC<AddRemoveGameType> = ({ game }) => {
    const dispatch = useAppDispatch();
    const removeGames = () => {
        dispatch(removeGame(game));
        toast.error(`Товар видалений з корзини.`);
    };
    const addGames = () => {
        toast.success(`Товар добавлений до корзини.`);
        dispatch(addGame(game));
    };

    return (
        <div className="flex justify-center items-center border-[0.3px] border-base2-light dark:border-text-dark mr-3 ">
            <button
                onClick={removeGames}
                className="text-accent-light dark:text-accent75-dark flex justify-center items-center h-full md:py-[24px] py-[19px] md:pr-[14px] pr-[7px]  md:pl-[20px] pl-[10px] dark:hover:bg-main2-dark hover:bg-prime15-light"
            >
                <span className="w-[10px] h-[1.5px] bg-accent-light dark:bg-accent75-dark inline-block"></span>{" "}
            </button>
            <span className="w-[25px] text-center">{game.amount}</span>
            <button
                onClick={addGames}
                className=" ml-auto text-accent-light dark:text-accent75-dark h-full flex justify-center items-center relative md:py-[24px] py-[19px]  md:pl-[14px] pl-[7px] md:pr-[20px] pr-[10px] dark:hover:bg-main2-dark hover:bg-prime15-light"
            >
                <span className="w-[10px] h-[1.5px] bg-accent-light dark:bg-accent75-dark inline-block"></span>{" "}
                <span className="w-[10px] h-[1.5px] bg-accent-light dark:bg-accent75-dark inline-block rotate-90 absolute"></span>{" "}
            </button>
        </div>
    );
};

export default AddRemoveGame;
