import "../styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import { wrapper } from "../Redux/store";
import Layout from "../components/layouts/Layout";
import { useEffect } from "react";
import NextNProgress from "nextjs-progressbar";
import { setFavorite, setProfile } from "../Redux/Slice/Profile";
import { api } from "../service/axiosApiRequest/api";
import { Toaster } from "react-hot-toast";
import { useSetFromLS } from "../Hooks/useSetFromLS";
import { accentColor } from "../common/colors";

function MyApp({ Component, ...rest }: AppProps) {
    const { store, props } = wrapper.useWrappedStore(rest);
    const setDataFromLS = useSetFromLS();
    useEffect(setDataFromLS, []);

    return (
        <>
            <NextNProgress color={accentColor} />
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
