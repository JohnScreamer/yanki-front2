import { GetStaticProps } from "next";
import { FC } from "react";
import { DELIVERY_URLS } from "../../common/constants/scumbsArrs";
import HeadLayout from "../../components/layouts/HeadLayout";
import DeliveryWrapper from "../../components/Static/Delivery";
import Scrumbs from "../../components/UI/Scrumbs/Scrumbs";
export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {},
    };
};

const index: FC = () => {
    return (
        <HeadLayout name="Достаки">
            <section className="Container pb-[50px] ">
                <Scrumbs arrName={DELIVERY_URLS} />
                <DeliveryWrapper />
            </section>
        </HeadLayout>
    );
};

export default index;
