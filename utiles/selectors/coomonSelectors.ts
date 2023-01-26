import { AppState } from "../../Redux/store";

export const getBurgerStatus = (state: AppState) => state.common.isBurgerActive;
export const getCurrentTheme = (state: AppState) => state.common.theme;
export const getCurrentCurrency = (state: AppState) => state.common.currency;
