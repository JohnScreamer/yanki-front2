import Link from "next/link";
import React from "react";
import { useAppSelector } from "../Hooks/common";
import { getCurrentCurrency } from "../utiles/selectors/coomonSelectors";
import Contacts from "./UI/Contacts/Contacts";
import DropList from "./UI/DropList/DropList";
const company = [
    { value: "Про нас", url: "№" },
    { value: "Контакти", url: "№" },
];
const useful = [
    { value: "Оплата і доставка", url: "№" },
    { value: "Бонуси", url: "№" },
];
const customer = [
    { value: "Вибране", url: "№" },
    { value: "Контакти", url: "№" },
];

const Footer = () => {
    const isBurgerActive = useAppSelector(getCurrentCurrency);
    return (
        <footer>
            <div
                className={`Container text-originText-dark dark:text-originText-light bg-white dark:bg-main-dark relative ${
                    isBurgerActive ? "z-0" : "z-50"
                }`}
            >
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
                <div className="md:hidden block bg-white dark:bg-main-dark ">
                    <DropList defaultValue="Компанія" center list={company} />
                    <DropList defaultValue="Корисне" center list={useful} />
                    <DropList defaultValue="Покупець" center list={customer} />
                    <div className="flex justify-center items-center flex-col w-full item-center pt-5">
                        <Contacts />
                    </div>
                </div>

                <div className="text-xs py-2 text-center">
                    <span>©️ 2023 Yanki. All rights reserved</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
