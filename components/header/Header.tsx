import React, { useState } from "react";
import { useAppSelector } from "../../Hooks/common";
import { useIsMain } from "../../Hooks/useIsMain";
import { getBurgerStatus } from "../../utiles/selectors/coomonSelectors";
import BurgerWrapper from "./BurgerWrapper/BurgerWrapper";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderLinks from "./HeaderLinks/HeaderLinks";
import SearchNavWrapper from "./SearchNavWrapper/SearchNavWrapper";

const Header = () => {
    const isMain = useIsMain();
    const isBurgerActive = useAppSelector(getBurgerStatus);
    const headerStyle = isMain
        ? "text-white "
        : "text-originText-dark dark:text-originText-light";
    return (
        <header
            className={`${headerStyle}  
                 font-light text-lg  z-50 flex justify-between  py-6 relative    `}
        >
            <div className="flex justify-between  Container  relative  z-20  ">
                <HeaderLinks />
                <HeaderLogo isMain={isMain} />
                <SearchNavWrapper />
            </div>

            {isBurgerActive ? <BurgerWrapper /> : null}
        </header>
    );
};

export default Header;
