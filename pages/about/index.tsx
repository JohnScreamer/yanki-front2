import { GetStaticProps } from "next";
import { FC } from "react";
import { ABOUT_URLS } from "../../common/constants/scumbsArrs";
import HeadLayout from "../../components/layouts/HeadLayout";
import AboutWrapper from "../../components/Static/About";
import Scrumbs from "../../components/UI/Scrumbs/Scrumbs";

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {},
    };
};
const index: FC = () => {
    return (
        <HeadLayout name="Про нас">
            <section className="Container pb-[50px] ">
                <Scrumbs arrName={ABOUT_URLS} />
                <AboutWrapper />
            </section>
        </HeadLayout>
    );
};

export default index;
