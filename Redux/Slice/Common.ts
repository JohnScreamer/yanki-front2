import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { HYDRATE } from "next-redux-wrapper";
import { Game } from "../../Types/gameType";
import cookie from "nookies";
type Theme = "light" | "dark";
export type Currency = "USD$" | "UA₴";
export interface IInitialState {
    isBurgerActive: boolean;
    theme: Theme;
    currency: Currency;
}
 const initialState: IInitialState = {
    isBurgerActive: false,
    theme: "dark",
    currency: "UA₴",
};

const Common = createSlice({
    initialState,
    name: "Common",
    reducers: {
        setBurgerStatus(state, action: PayloadAction<boolean>) {
            state.isBurgerActive = action.payload;
        },
        setTheme(state, action: PayloadAction<Theme>) {
            state.theme = action.payload;
            cookie.set(undefined, "theme", JSON.stringify(state));
            localStorage.setItem("common", JSON.stringify(state));
        },
        setCurrency(state, action: PayloadAction<Currency>) {
            state.currency = action.payload;
            localStorage.setItem("common", JSON.stringify(state));
        },
        setCommonState(state, action: PayloadAction<IInitialState>) {
            state.theme = action.payload.theme;
            state.currency = action.payload.currency;
        },
    },
    extraReducers: {},
});

export default Common.reducer;
export const { setBurgerStatus, setTheme, setCurrency, setCommonState } =
    Common.actions;
