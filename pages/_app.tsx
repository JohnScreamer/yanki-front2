import "../styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import { wrapper } from "../Redux/store";
import { Provider } from "react-redux";
import Layout from "../components/layouts/Layout";
import { useEffect } from "react";
import NextNProgress from "nextjs-progressbar";
import AuthWrapper from "../components/layouts/AuthWrapper";
import Cookies from "js-cookie";
import { setFavorite, setProfile } from "../Redux/Slice/Profile";
import { api } from "../service/axiosApiRequest/api";
import { GetServerSidePropsContext } from "next";
import { parseCookies } from "nookies";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, ...rest }: AppProps) {
    const { store, props } = wrapper.useWrappedStore(rest);

    useEffect(() => {
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
                console.log(profile);

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
                    pageProps: {
                        ...(Component.getInitialProps
                            ? await Component.getInitialProps({ ...ctx, store })
                            : {}),
                    },
                },
            };
        }
);
export default wrapper.withRedux(MyApp);
