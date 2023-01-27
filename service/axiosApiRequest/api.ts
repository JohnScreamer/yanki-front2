import axios from "axios";
import { GetServerSidePropsContext, NextPageContext } from "next";
import Cookies, { parseCookies } from "nookies";
import { BASE_URL } from "../../common/url";
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
        baseURL: BASE_URL,
        headers: {
            authorization: token,
        },
    });

    return {
        apiReq: apiReq(instance),
    };
};
