import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

interface IInitialState {
    num: number;
}
const initialState: IInitialState = {
    num: 0,
};

const Main = createSlice({
    initialState,
    name: "main",
    reducers: {
        setNumb: (state, action: PayloadAction<number>) => {
            state.num = action.payload;
        },
    },
    extraReducers: {},
});

export default Main.reducer;
export const { setNumb } = Main.actions;
