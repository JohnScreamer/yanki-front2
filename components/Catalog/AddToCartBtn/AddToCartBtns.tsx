import { FC, useState } from "react";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../../../Hooks/common";
import { addGame } from "../../../Redux/Slice/Cart";
import { Game } from "../../../Types/gameType";
import PopUp from "../../PopUp/PopUp";
import AddRemoveGame from "../../UI/AddRemoveGame/AddRemoveGame";
import DefaultBtn from "../../UI/Buttons/DefoultBtn/DefaultBtn";

type AddToCartBtnsType = {
    data: Game;
};

const AddToCartBtns: FC<AddToCartBtnsType> = ({ data }) => {
    const cartArr = useAppSelector((state) => state.cart.cart);
    const hasInCart = cartArr.find((el) => el._id === data._id);
    const dispatch = useAppDispatch();
    const addGameToCart = (data: Game) => {
        dispatch(addGame(data));
        toast.success(`Товар добавлений до корзини.`);
    };

    if (hasInCart) {
        return (
            <>
                <AddRemoveGame game={hasInCart} />
            </>
        );
    }
    return (
        <div className="w-full">
            <DefaultBtn
                fn={() => {
                    addGameToCart(data);
                }}
                className="w-full"
            >
                В КОШИК
            </DefaultBtn>
        </div>
    );
};

export default AddToCartBtns;
