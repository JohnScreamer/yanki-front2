import { useAppDispatch } from "./common";
import { setCommonState } from "../Redux/Slice/Common";
import { IInitialState, setCartState } from "../Redux/Slice/Cart";
import { IInitialState as commonInit } from "../Redux/Slice/Common";

export const useSetFromLS = (): (() => void) => {
    const dispatch = useAppDispatch();
    return () => {
        const common = localStorage.getItem("common");
        const cart = localStorage.getItem("cart");
        if (common) {
            dispatch(setCommonState(JSON.parse(common) as commonInit));
        }
        if (cart) {
            dispatch(setCartState(JSON.parse(cart) as IInitialState));
        }

        const html = document.querySelector("html");
        if (html) {
            html.style.overflowY = "scroll";
        }
    };
};
