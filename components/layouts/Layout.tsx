import { useRouter } from "next/router";
import React, { FC, ReactNode, Suspense, useEffect, useState } from "react";
import { useAppSelector } from "../../Hooks/common";
import { getCurrentTheme } from "../../utiles/selectors/coomonSelectors";
import Footer from "../UI/Footer/Footer";
import Header from "../header/Header";
import NextNProgress from "nextjs-progressbar";
import MainHeaderWrapper from "./MainHeaderWrapper/MainHeaderWrapper";
import FrameMotionWrapper from "./FrameMotionWrapper/FrameMotionWrapper";
import Modals from "../Modals/Modals";
import { Toaster } from "react-hot-toast";
import { ACCENT_COLOR } from "../../common/colors";
type LayoutType = {
    children: React.ReactNode;
};
const Layout: FC<LayoutType> = ({ children }) => {
    const route = useRouter();
    const isMain = route.pathname === "/";
    const theme = useAppSelector(getCurrentTheme);
    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.classList.remove(theme === "light" ? "dark" : "light");
            html.classList.add(theme);
        }
    }, [theme]);
    // let toaster: ReactNode | null = null;
    // useEffect(() => {
    //     toaster = ;
    // }, []);
    const Main = (
        <main
            className={`grow ${
                isMain ? "-mt-[100vh] bg-white dark:bg-main-dark" : ""
            } shrink flex-col  relative z-40 w-full h-full `}
        >
            {children}
        </main>
    );
    return (
        <>
            <div
                className={`min-h-full flex font-light   dark:text-originText-light text-originText-dark flex-col bg-white dark:bg-main-dark overflow-clip     `}
            >
                <Modals />
                <NextNProgress color={ACCENT_COLOR} />
                <Toaster position="bottom-center" reverseOrder={false} />
                {isMain ? (
                    <>
                        <FrameMotionWrapper>
                            <div className="relative  h-[200vh]">
                                <MainHeaderWrapper>
                                    <Header />
                                </MainHeaderWrapper>
                            </div>
                            {Main}
                        </FrameMotionWrapper>
                    </>
                ) : (
                    <>
                        <Header />
                        <FrameMotionWrapper>{Main}</FrameMotionWrapper>
                    </>
                )}

                <Footer />
            </div>
        </>
    );
};

export default Layout;
