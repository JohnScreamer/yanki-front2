import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { HYDRATE } from "next-redux-wrapper";
import { Game } from "../../Types/gameType";
import cookie from "nookies";
type Theme = "light" | "dark";
export type Currency = "USD$" | "UA₴";
interface IInitialState {
    isBurgerActive: boolean;
    theme: Theme;
    currency: Currency;

    favorite: Array<Game>;
}
const initialState: IInitialState = {
    isBurgerActive: false,
    theme: "dark",
    currency: "UA₴",

    favorite: [],
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
            cookie.set(undefined, "theme", action.payload);
        },
        setCurrency(state, action: PayloadAction<Currency>) {
            state.currency = action.payload;
        },
    },
    extraReducers: {},
});

export default Common.reducer;
export const { setBurgerStatus, setTheme, setCurrency } = Common.actions;
