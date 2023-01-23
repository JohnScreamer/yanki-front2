import { FC } from "react";
import { wrapper } from "../Redux/store";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
// import { useLazyGetTodosQuery } from "../service/api/game";
import HeadLayout from "../components/layouts/HeadLayout";
import Categories from "../components/Home/Categories";
import Subscribe from "../components/Home/Subscribe/Subscribe";
import { useAppSelector } from "../Hooks/common";
import { getCookie } from "cookies-next";

type HomeType = {
    data: any;
};
export const getServerSideProps: GetServerSideProps =
    wrapper.getServerSideProps((store) => async (ctx) => {
        console.log("zxc");

        return {
            props: {},
        };
    });

const Home: FC<HomeType> = ({ data }) => {
    const profile = useAppSelector((state) => state.profile);
    console.log(profile);
    console.log(getCookie("auth"));
    return (
        <HeadLayout name="Головна">
            <div>
                <Categories />
                <Subscribe />
            </div>
        </HeadLayout>
    );
};

export default Home;
