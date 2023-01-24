import { FC, useEffect } from "react";
import { wrapper } from "../Redux/store";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
// import { useLazyGetTodosQuery } from "../service/api/game";
import HeadLayout from "../components/layouts/HeadLayout";
import Categories from "../components/Home/Categories";
import Subscribe from "../components/Home/Subscribe/Subscribe";
import { useAppSelector } from "../Hooks/common";
import { getCookie } from "cookies-next";
import { api } from "../service/axiosApiRequest/api";
import Cookies from "js-cookie";

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
