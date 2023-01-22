import { useRouter } from "next/router";
import React, { FC, Suspense, useEffect, useState } from "react";
import { useAppSelector } from "../../Hooks/common";
import Footer from "../Footer";
import Header from "../Header";
import Modals from "../Modals/Modals";
import MainHeaderWrapper from "./MainHeaderWrapper/MainHeaderWrapper";
type LayoutType = {
    children: React.ReactNode;
};
const Layout: FC<LayoutType> = ({ children }) => {
    const route = useRouter();
    const isMain = route.pathname === "/";
    const theme = useAppSelector((state) => state.common.theme);
    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.classList.remove(theme === "light" ? "dark" : "light");
            html.classList.add(theme);
        }
    }, [theme]);
    return (
        <div
            className={`min-h-full flex font-light   dark:text-originText-light text-originText-dark flex-col bg-white dark:bg-main-dark overflow-clip     `}
        >
            {isMain ? (
                <div className="relative  h-[200vh]">
                    <MainHeaderWrapper>
                        <Header />
                    </MainHeaderWrapper>
                </div>
            ) : (
                <>
                    <Header />
                </>
            )}
            <Modals />
            <main
                className={`grow ${
                    isMain ? "-mt-[100vh] bg-white dark:bg-main-dark" : ""
                } shrink flex-col  relative z-40 w-full h-full `}
            >
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
