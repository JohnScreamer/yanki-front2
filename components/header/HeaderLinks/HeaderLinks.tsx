import Link from "next/link";
import { FC } from "react";
import Burger from "../../UI/Burger/Burger";
import Curency from "../Curency/Curency";

type HeaderLinksType = {};

const HeaderLinks: FC<HeaderLinksType> = ({}) => {
    return (
        <nav className="flex items-center  justify-start md:justify-between w-2/5 order-0 - ">
            <div className="w-[40px] mr-3">
                <Burger />
            </div>
            <div className="md:hidden block ">
                <Curency />
            </div>
            <ul className=" hidden alight-center flex-wrap md:flex  ">
                <li className="center mr-6 hover:text-accent-light dark:hover:text-accent75-dark duration-300">
                    <Link href={"/catalog"}>КАТАЛОГ</Link>
                </li>
                <li className="center mr-6 hover:text-accent-light dark:hover:text-accent75-dark duration-300">
                    <Link href={"/about"}>ПРО НАС</Link>
                </li>
                <li className="center hover:text-accent-light dark:hover:text-accent75-dark duration-300">
                    <Link href={"/delivery"}>ДОСТАВКА</Link>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderLinks;
