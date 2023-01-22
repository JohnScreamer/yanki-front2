import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { Game } from "./../../Types/gameType";

export interface CartItem extends Game {
    amount: number;
    totalPrice: number;
}
interface IInitialState {
    cart: Array<CartItem>;
    totalPrice: number;
    amount: number;
    orderCart: Array<Game>;
}
const initialState: IInitialState = {
    cart: [],
    totalPrice: 0,
    amount: 0,
    orderCart: [],
};

const Cart = createSlice({
    initialState,
    name: "Cart",
    reducers: {
        addGame(state, action: PayloadAction<Game>) {
            state.orderCart.push(action.payload);
            state.amount = state.amount + 1;
            state.totalPrice = state.totalPrice + action.payload.price;
            const hasAdd = state.cart.find(
                (el) => el._id === action.payload._id
            );
            if (hasAdd) {
                state.cart = state.cart.map((el) =>
                    el._id === action.payload._id
                        ? {
                              ...el,
                              totalPrice: el.totalPrice + el.price,
                              amount: el.amount + 1,
                          }
                        : el
                );
                return;
            }
            state.cart.push({
                ...action.payload,
                totalPrice: action.payload.price,
                amount: 1,
            });
        },
        removeAllGameCopy(state, action: PayloadAction<string>) {
            state.orderCart = state.orderCart.filter(
                (el) => el._id !== action.payload
            );
            const game = state.cart.find((el) => el._id === action.payload);
            if (game?.amount && game?.totalPrice) {
                state.amount -= game?.amount;
                state.totalPrice -= game?.totalPrice;
            }

            state.cart = state.cart.filter((el) => el._id !== action.payload);
        },
        removeGame(state, action: PayloadAction<Game>) {
            let hasInOrderCart = true;
            state.orderCart = state.orderCart.filter((el) => {
                if (hasInCart && el._id === action.payload._id) {
                    hasInOrderCart = false;
                    return false;
                }
                return true;
            });
            state.amount -= 1;
            state.totalPrice -= action.payload.price;

            const hasInCart = state.cart.find(
                (el) => el._id === action.payload._id
            );
            if (!hasInCart) {
                return;
            }
            if (hasInCart.amount > 1) {
                state.cart = state.cart.map((el) =>
                    el._id === action.payload._id
                        ? {
                              ...el,
                              totalPrice: el.totalPrice - el.price,
                              amount: el.amount - 1,
                          }
                        : el
                );
                return;
            }
            state.cart = state.cart.filter(
                (el) => el._id !== action.payload._id
            );
        },
    },
    extraReducers: {},
});

export default Cart.reducer;
export const { addGame, removeGame, removeAllGameCopy } = Cart.actions;
