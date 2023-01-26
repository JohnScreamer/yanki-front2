import { AppState } from "../../Redux/store";

export const getAllCartSelector = (state: AppState) => state.cart;
export const getTotalPriceSelector = (state: AppState) => state.cart.totalPrice;
export const getAmountSelector = (state: AppState) => state.cart.amount;
export const getOrderCartSelector = (state: AppState) => state.cart.orderCart;
export const getCartSelector = (state: AppState) => state.cart.cart;
