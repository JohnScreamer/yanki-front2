import { ClickAwayListener } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { memo, useState } from "react";
import { useAppSelector } from "../Hooks/common";
import { useIsMain } from "../Hooks/useIsMain";
import { getBurgerStatus } from "../utiles/selectors/coomonSelectors";
import Curency from "./header/Curency/Curency";
import NavList from "./header/NavList/NavList";
import Search from "./header/Search/Search";
import Theme from "./header/Theme/Theme";
import Burger from "./UI/Burger/Burger";
import Desktop from "./UI/Burger/Desktop/Desktop";
import Mobile from "./UI/Burger/Mobile/Mobile";
import SelectCustom from "./UI/Select/Select";

const iconNav = [{ svg: "./../public/svg/loop.svg", ref: "" }];

const Header = () => {
    const isMain = useIsMain();
    const isBurgerActive = useAppSelector(getBurgerStatus);
    const [searchStatus, setSearchStatus] = useState(false);
    return (
        <header
            className={`${
                isMain
                    ? "text-white "
                    : "text-originText-dark dark:text-originText-light"
            }  
                 font-light text-lg  z-50 flex justify-between  py-6 relative    `}
        >
            <div className="flex justify-between  Container  relative  z-20  ">
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
                            <Link href={"/"}>ПРО НАС</Link>
                        </li>
                        <li className="center hover:text-accent-light dark:hover:text-accent75-dark duration-300">
                            <Link href={"/"}>ДОСТАВКА</Link>
                        </li>
                    </ul>
                </nav>
                <div className="center   mx-4 order-3 :md:order-1 md:text-4xl  text-xl  ">
                    <Link href={"/"}>
                        <span
                            className={`${
                                isMain
                                    ? " cursor-pointer duration-300"
                                    : "text-accent-light dark:hover:text-accent75-dark cursor-pointer duration-300"
                            }`}
                        >
                            YANKI
                        </span>
                    </Link>
                </div>
                <div className=" items-center flex justify-end  w-2/5 order-4  ">
                    <div className="mr-auto  hidden md:flex">
                        <Curency />
                        <Theme />
                    </div>
                    <NavList
                        searchStatus={searchStatus}
                        setSearchStatus={setSearchStatus}
                    />
                </div>
                <Search
                    setSearchStatus={setSearchStatus}
                    status={searchStatus}
                />
            </div>

            {isBurgerActive ? (
                <>
                    <div className="absolute top-0 md:block hidden left-0  w-full h-full z-30 ">
                        <div className="  h-full w-full   backdrop-blur-md ">
                            <Desktop />
                        </div>
                    </div>
                    <div className="md:hidden block h-screen absolute z-10   w-full">
                        <Mobile />
                    </div>
                </>
            ) : null}
        </header>
    );
};

export default Header;
