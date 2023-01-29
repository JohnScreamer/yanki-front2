import { ClickAwayListener } from "@mui/material";
import Link from "next/link";
import { FC } from "react";
import { useSelector } from "react-redux";
import { HEADER_NAV_LINK } from "../../../../common/constants/burgerArr";
import { useAppDispatch } from "../../../../Hooks/common";
import { useIsMain } from "../../../../Hooks/useIsMain";
import { useLogOut } from "../../../../Hooks/useLogOut";
import { setBurgerStatus } from "../../../../Redux/Slice/Common";
import { getIsAuthSelector } from "../../../../utiles/selectors/profileSelectors";
import Burger from "../Burger";
import s from "./Desktop.module.scss";
type DesktopType = {};

const Desktop: FC<DesktopType> = () => {
    const isMain = useIsMain();
    const isAuth = useSelector(getIsAuthSelector);
    const dispatch = useAppDispatch();
    const logOutUser = useLogOut();
    const logOut = () => {
        logOutUser();
        dispatch(setBurgerStatus(false));
    };
    const closeBurger = () => {
        dispatch(setBurgerStatus(false));
    };
    return (
        <div className={s.animSlide}>
            <div
                className={`flex items-center h-full w-full  Container  ${
                    isMain ? "" : "bg-white dark:bg-main2-dark shadow-xl mb-1"
                }   `}
            >
                <div className="w-[40px] mr-3">
                    <Burger />
                </div>
                <nav className="">
                    <ul className="uppercase flex gap-6">
                        {HEADER_NAV_LINK.map((el) => (
                            <li
                                onClick={closeBurger}
                                key={el.name}
                                className="hover:text-accent-light dark:hover:text-accent75-dark"
                            >
                                <Link href={el.url}>{el.name}</Link>
                            </li>
                        ))}

                        {isAuth ? (
                            <li
                                className="hover:text-accent-light cursor-pointer dark:hover:text-accent75-dark"
                                onClick={logOut}
                            >
                                Вийти
                            </li>
                        ) : null}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Desktop;
