import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../Hooks/common";
import { useIsMain } from "../../../../Hooks/useIsMain";
import { setBurgerStatus, setTheme } from "../../../../Redux/Slice/Common";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Search from "./Search";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useLogOut } from "../../../../Hooks/useLogOut";
import { disabledScroll } from "../../../../utiles/disabledScroll";
import { getIsAuthSelector } from "../../../../utiles/selectors/profileSelectors";
import { getCurrentTheme } from "../../../../utiles/selectors/coomonSelectors";
import Contacts from "../../Contacts/Contacts";
import NavList from "./NavList";
type MobileType = {};

const Mobile: FC<MobileType> = () => {
    const isMain = useIsMain();
    useEffect(disabledScroll, []);

    const linkStyle = isMain
        ? "backdrop-blur-xl"
        : "bg-white dark:bg-main2-dark border-t-2 dark:border-accent75-dark border-accent-light ";
    return (
        <div
            className={`h-screen w-full mt-[50px]  
              animate-slide  ${linkStyle}`}
        >
            <div className="flex  h-full w-full  overflow-y-scroll  Container   ">
                <nav className=" w-full">
                    <Search />
                    <div className="flex flex-col ">
                        <NavList isMain={isMain} linkStyle={linkStyle} />
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Mobile;
