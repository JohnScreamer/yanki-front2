import { AppState } from "../../Redux/store";

export const getIsAuthSelector = (state: AppState) => state.profile.isAuth;
export const getFavoriteSelector = (state: AppState) => state.profile.favorite;
export const getProfileSelector = (state: AppState) => state.profile.profile;
export const getTokenSelector = (state: AppState) => state.profile.token;
export const getProfileSliceSelector = (state: AppState) => state.profile;
