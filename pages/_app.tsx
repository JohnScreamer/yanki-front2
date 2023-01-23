import "../styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import { wrapper } from "../Redux/store";
import Layout from "../components/layouts/Layout";
import { useEffect } from "react";
import NextNProgress from "nextjs-progressbar";
import { setFavorite, setProfile } from "../Redux/Slice/Profile";
import { api } from "../service/axiosApiRequest/api";

import { Toaster } from "react-hot-toast";
import { useAppDispatch } from "../Hooks/common";
import {
    IInitialState as CommonInit,
    setCommonState,
} from "../Redux/Slice/Common";
import { IInitialState, setCartState } from "../Redux/Slice/Cart";

function MyApp({ Component, ...rest }: AppProps) {
    const { store, props } = wrapper.useWrappedStore(rest);
    const dispatch = useAppDispatch();
    useEffect(() => {
        const common = localStorage.getItem("common");
        const cart = localStorage.getItem("cart");
        if (common) {
            dispatch(setCommonState(JSON.parse(common) as CommonInit));
        }
        if (cart) {
            dispatch(setCartState(JSON.parse(cart) as IInitialState));
        }

        const html = document.querySelector("html");
        if (html) {
            html.style.overflowY = "scroll";
        }
    }, []);

    return (
        <>
            <NextNProgress color="#CCA88A" />
            <Toaster position="bottom-center" reverseOrder={false} />
            <Layout>
                <Component {...props.pageProps} />
            </Layout>
        </>
    );
}

MyApp.getInitialProps = wrapper.getInitialAppProps(
    (store) =>
        async ({ Component, ctx }: AppContext) => {
            try {
                const profile = await api(ctx).apiReq.authMe();

                if (profile) {
                    store.dispatch(setProfile(profile.data.data));
                    const favorite = (
                        await api(ctx).apiReq.getUserFavorite(
                            profile.data.data._id
                        )
                    ).data;
                    store.dispatch(setFavorite(favorite.data.goods));
                }
            } catch (error) {
                console.log("no access");
            }

            return {
                pageProps: {
                    ...(Component.getInitialProps
                        ? await Component.getInitialProps({ ...ctx, store })
                        : {}),
                },
            };
        }
);
export default wrapper.withRedux(MyApp);
