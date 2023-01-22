import { GetServerSideProps } from "next";
import { FC, useState } from "react";
import Nav from "../../../components/Cabinet/Nav/Nav";
import { api } from "../../../service/axiosApiRequest/api";
import CardList from "../../../components/Cabinet/Card";
import { wrapper } from "../../../Redux/store";
import { OrderListResponse } from "../../../Types/Order.Types";
import { useAppSelector } from "../../../Hooks/common";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps =
    wrapper.getServerSideProps((store) => async (ctx) => {
        const id = store.getState().profile.profile?._id;
        if (!id) {
            return {
                props: {
                    data: {},
                },
            };
        }
        const newData = (await api(ctx).apiReq.getUserOrders(id)).data;

        if (!newData || newData.status !== "ok") {
            return { notFound: true };
        }
        return {
            props: {
                data: newData,
            },
        };
    });

type ordersType = {
    data: OrderListResponse;
};

const orders: FC<ordersType> = ({ data }) => {
    const route = useRouter();
    const isAuth = useAppSelector((state) => state.profile.isAuth);
    const isWindow = typeof window === "undefined" ? false : true;

    if (!isAuth && isWindow) {
        route.push("/");
    }
    if (!data?.data?.length) {
        return (
            <div className="Container">
                <Nav />
            </div>
        );
    }
    const list = data.data.map((el) => (
        <CardList data={el} key={el.createdAt} />
    ));

    return (
        <div className="Container">
            <Nav />
            <div>{list}</div>
        </div>
    );
};

export default orders;
