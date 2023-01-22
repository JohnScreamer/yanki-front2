import axios from "axios";
import { GetServerSidePropsContext, NextPageContext } from "next";
import Cookies, { parseCookies } from "nookies";
import { apiReq } from "./favorite";
type ApiReturnType = {
    apiReq: ReturnType<typeof apiReq>;
};
export const api = (
    ctx?: NextPageContext | GetServerSidePropsContext
): ApiReturnType => {
    const cookies = ctx ? Cookies.get(ctx) : parseCookies();
    const token = cookies.auth;
    const instance = axios.create({
        baseURL: "https://yankisli.herokuapp.com", //https://johnscreamer-yanki-back.onrender.com http://localhost:4000
        headers: {
            authorization: token,
        },
    });

    return {
        apiReq: apiReq(instance),
    };
};
