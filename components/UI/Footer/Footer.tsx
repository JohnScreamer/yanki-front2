import React, { FC } from "react";
import { useAppSelector } from "../../../Hooks/common";
import { getCurrentCurrency } from "../../../utiles/selectors/coomonSelectors";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

const Footer: FC = () => {
    const isBurgerActive = useAppSelector(getCurrentCurrency);
    return (
        <footer>
            <div
                className={`Container text-originText-dark dark:text-originText-light bg-white dark:bg-main-dark relative ${
                    isBurgerActive ? "z-0" : "z-50"
                }`}
            >
                <DesktopFooter />
                <MobileFooter />

                <div className="text-xs py-2 text-center">
                    <span>©️ 2023 Yanki. All rights reserved</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
