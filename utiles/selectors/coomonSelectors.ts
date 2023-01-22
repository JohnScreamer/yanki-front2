import { AppState } from "../../Redux/store";

export const getBurgerStatus = (state: AppState) => state.common.isBurgerActive;
