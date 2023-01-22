import { getCookieParser } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";
import Cookies from "nookies";

export const middleware = async (req: any) => {
    const token = req.cookies;

    NextResponse.next();
};
