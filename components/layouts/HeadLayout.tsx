import Head from "next/head";
import React, { FC } from "react";

type HeadLayoutType = {
    children: React.ReactNode;
    name: string;
};
const HeadLayout: FC<HeadLayoutType> = ({ children, name }) => {
    return (
        <>
            <Head>
                <title>{name}</title>

                <link rel="icon" href="../public/favicon.ico" />
            </Head>
            {children}
        </>
    );
};

export default HeadLayout;
