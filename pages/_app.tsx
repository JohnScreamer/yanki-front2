import "../styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import { wrapper } from "../Redux/store";
import Layout from "../components/layouts/Layout";
import { useEffect } from "react";
import { setFavorite, setProfile } from "../Redux/Slice/Profile";
import { api } from "../service/axiosApiRequest/api";
import { useSetFromLS } from "../Hooks/useSetFromLS";

function MyApp({ Component, ...rest }: AppProps) {
    const { store, props } = wrapper.useWrappedStore(rest);
    const setDataFromLS = useSetFromLS();
    useEffect(setDataFromLS, []);

    return (
        <>
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
                ("no access");
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
