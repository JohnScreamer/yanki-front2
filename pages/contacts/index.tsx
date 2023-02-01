import { GetStaticProps } from "next";
import { FC } from "react";
import { CONTACTS_URLS } from "../../common/constants/scumbsArrs";
import ContactInfo from "../../components/Contacts/ContactInfo";
import Subscribe from "../../components/Home/Subscribe/Subscribe";
import HeadLayout from "../../components/layouts/HeadLayout";
import Scrumbs from "../../components/UI/Scrumbs/Scrumbs";
export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {},
    };
};
const Contacts: FC = () => {
    return (
        <HeadLayout name="Контакти">
            <div className="Container">
                <Scrumbs arrName={CONTACTS_URLS} />
                <h1 className="mb-[30px] text-xl">Контакти</h1>
                <ContactInfo />
                <div className="md:mt-[100px] mt-[60px]">
                    <Subscribe />
                </div>
            </div>
        </HeadLayout>
    );
};

export default Contacts;
