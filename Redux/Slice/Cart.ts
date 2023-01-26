import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { Game } from "./../../Types/gameType";

export interface CartItem extends Game {
    amount: number;
    totalPrice: number;
}
export interface IInitialState {
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
                localStorage.setItem("cart", JSON.stringify(state));
                return;
            }
            state.cart.push({
                ...action.payload,
                totalPrice: action.payload.price,
                amount: 1,
            });
            localStorage.setItem("cart", JSON.stringify(state));
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
            localStorage.setItem("cart", JSON.stringify(state));
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
            localStorage.setItem("cart", JSON.stringify(state));
            state.amount -= 1;
            state.totalPrice -= action.payload.price;

            const hasInCart = state.cart.find(
                (el) => el._id === action.payload._id
            );
            localStorage.setItem("cart", JSON.stringify(state));
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
            localStorage.setItem("cart", JSON.stringify(state));
        },
        setCartState(state, action: PayloadAction<IInitialState>) {
            state.amount = action.payload.amount;
            state.cart = action.payload.cart;
            state.orderCart = action.payload.orderCart;
            state.totalPrice = action.payload.totalPrice;
        },
        clearCart(state, action: PayloadAction<undefined>) {
            state.orderCart = [];
            state.cart = [];
            state.totalPrice = 0;
            state.amount = 0;
        },
    },
    extraReducers: {},
});

export default Cart.reducer;
export const {
    addGame,
    removeGame,
    removeAllGameCopy,
    setCartState,
    clearCart,
} = Cart.actions;
