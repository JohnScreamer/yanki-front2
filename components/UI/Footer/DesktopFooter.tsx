import Link from "next/link";
import { FC } from "react";
import Contacts from "../Contacts/Contacts";

type DesktopFooterType = {};

const DesktopFooter: FC<DesktopFooterType> = () => {
    return (
        <div className="md:flex justify-between py-6 hidden ">
            <div>
                <h2 className="mb-5 text-xl uppercase">Компанія</h2>
                <ul>
                    <li className="font-extralight">
                        <Link href={"#"}>Про нас</Link>
                    </li>
                    <li className="font-extralight">
                        <Link href={"#"}>Контакти</Link>
                    </li>
                </ul>
            </div>

            <div>
                <h2 className="mb-5 text-xl uppercase">Корисне</h2>
                <ul>
                    <li className="font-extralight mb-1">
                        <Link href={"#"}>Оплата і доставка</Link>
                    </li>
                    <li className="font-extralight">
                        <Link href={"#"}>Бонуси</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-5 text-xl uppercase">Покупець</h2>
                <ul className="font-extralight">
                    <li className="mb-1">
                        <Link href={"#"}>Вибране</Link>
                    </li>
                    <li className="font-extralight">
                        <Link href={"#"}>Контакти</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Contacts />
            </div>
        </div>
    );
};

export default DesktopFooter;
