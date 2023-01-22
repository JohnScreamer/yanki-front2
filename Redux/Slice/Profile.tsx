import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { log } from "console";
import { HYDRATE } from "next-redux-wrapper";
import { ProfileType } from "../../Types/authTypes";
import { Game } from "../../Types/gameType";

interface IInitialState {
    isAuth: boolean;
    favorite: Array<Game>;
    profile: ProfileType | null;
    token: string;
}
const initialState: IInitialState = {
    favorite: [],
    isAuth: false,
    profile: null,
    token: "zxc",
};

const Profile = createSlice({
    initialState,
    name: "Profile",
    reducers: {
        setFavorite(state, action: PayloadAction<Array<any>>) {
            if (state.isAuth) {
                state.favorite = action.payload;
            }
        },
        addGameToFavorite(state, action: PayloadAction<Game>) {
            if (!state.isAuth) {
                return;
            }
            if (!state.favorite.find((el) => el._id === action.payload._id))
                state.favorite.push(action.payload);
        },
        removeGameFromFavorite(state, action: PayloadAction<Game>) {
            if (!state.isAuth) {
                return;
            }
            state.favorite = state.favorite.filter(
                (el) => el._id !== action.payload._id
            );
        },
        setProfile(state, action: PayloadAction<ProfileType>) {
            state.isAuth = true;
            state.profile = action.payload;
        },
        clearProfile(state, action: PayloadAction<undefined>) {
            state.favorite = [];
            state.isAuth = false;
            state.profile = null;
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            console.log(action.payload.profile);
            if (action.payload.profile.profile) {
                return {
                    ...state,
                    ...action.payload.profile,
                };
            }
        },
    },
});

export default Profile.reducer;
export const {
    setFavorite,
    addGameToFavorite,
    removeGameFromFavorite,
    setProfile,
    clearProfile,
} = Profile.actions;
