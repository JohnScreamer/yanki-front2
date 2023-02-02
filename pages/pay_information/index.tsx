import { GetStaticProps } from "next";
import { FC } from "react";
import { PAY_INFO_URLS } from "../../common/constants/scumbsArrs";
import HeadLayout from "../../components/layouts/HeadLayout";
import Pay_info_wrapper from "../../components/Static/Pay_information";
import Scrumbs from "../../components/UI/Scrumbs/Scrumbs";
export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {},
    };
};

const pay: FC = () => {
    return (
        <HeadLayout name="Про оплату">
            <div className="Container pb-[50px]">
                <Scrumbs arrName={PAY_INFO_URLS} />
                <Pay_info_wrapper />
            </div>
        </HeadLayout>
    );
};

export default pay;
