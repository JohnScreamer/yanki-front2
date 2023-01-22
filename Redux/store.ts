import Main from "./Slice/Main";
import {
    Action,
    AnyAction,
    combineReducers,
    configureStore,
    ThunkAction,
} from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { gameApi } from "../service/api/game";
import Common from "./Slice/Common";
import Profile from "./Slice/Profile";
import Cart from "./Slice/Cart";
import {
    nextReduxCookieMiddleware,
    wrapMakeStore,
} from "next-redux-cookie-wrapper";
const combinedReducer = combineReducers({
    main: Main,
    common: Common,
    profile: Profile,
    cart: Cart,
    [gameApi.reducerPath]: gameApi.reducer,
});

// const makeStore = wrapMakeStore(() =>
//     configureStore({
//         reducer: reducer,
//         middleware: (getDefaultMiddleware) =>
//             getDefaultMiddleware().prepend(
//                 nextReduxCookieMiddleware({
//                     subtrees: ["my.subtree"],
//                 })
//             ),
//     })
// );
// const reducer = (
//     state: ReturnType<typeof combinedReducer>,
//     action: AnyAction
// ) => {
//     console.log(action.type === "__NEXT_REDUX_WRAPPER_HYDRATE__");

// if (action.type === HYDRATE) {
//     const nextState = {
//         ...state,
//         ...action.payload,
//     };
//     return nextState;
// } else {
// return combinedReducer(state, action);
// }
// };
export const makeStore = () =>
    configureStore({
        reducer: reducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(gameApi.middleware),
    });

const reducer: typeof combinedReducer = (state, action) => {
    return combinedReducer(state, action);
};

type Store = ReturnType<typeof makeStore>;

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = Store["dispatch"];
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
