import Link from "next/link";
import { FC } from "react";
import ContactInfo from "../../components/Contacts/ContactInfo";
import Subscribe from "../../components/Home/Subscribe/Subscribe";
import HeadLayout from "../../components/layouts/HeadLayout";
import Scrumbs from "../../components/UI/Scrumbs/Scrumbs";

type ContactsType = {};
const urlName = ["Головна", "Доставка"];
const Contacts: FC<ContactsType> = () => {
    return (
        <HeadLayout name="Контакти">
            <div className="Container">
                <Scrumbs arrName={urlName} />
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
