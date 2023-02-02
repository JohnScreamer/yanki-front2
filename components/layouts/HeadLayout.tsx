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
            </Head>
            {children}
        </>
    );
};

export default HeadLayout;
