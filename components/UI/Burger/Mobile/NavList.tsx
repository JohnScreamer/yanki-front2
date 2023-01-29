import Link from "next/link";
import { FC, useEffect } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../../../Hooks/common";
import { useLogOut } from "../../../../Hooks/useLogOut";
import { setBurgerStatus, setTheme } from "../../../../Redux/Slice/Common";
import { getCurrentTheme } from "../../../../utiles/selectors/coomonSelectors";
import { getIsAuthSelector } from "../../../../utiles/selectors/profileSelectors";
import Contacts from "../../Contacts/Contacts";
import { disabledScroll } from "../../../../utiles/disabledScroll";
type NavListType = {
    isMain: boolean;
    linkStyle: string;
};

const NavList: FC<NavListType> = ({ isMain, linkStyle }) => {
    const dispatch = useAppDispatch();
    const route = useRouter();
    useEffect(disabledScroll, []);
    const isAuth = useAppSelector(getIsAuthSelector);
    const handlerIsAuth = () => {
        if (isAuth) {
            dispatch(setBurgerStatus(false));
            return route.push("/cabinet");
        }
        route.push({ query: { authorization: true } });
    };
    const theme = useAppSelector(getCurrentTheme);
    const handlerSetTheme = (theme: "light" | "dark") => {
        dispatch(setTheme(theme));
    };
    const handlerCloseBurger = () => {
        dispatch(setBurgerStatus(false));
    };
    const logOut = useLogOut();
    const handlerLogOut = () => {
        logOut();
        dispatch(setBurgerStatus(false));
    };
    return (
        <>
            <ul className="uppercase center flex flex-col w-full mb-20">
                <li
                    className={`py-5 cursor-pointer border-t-[0.5px] ${linkStyle} w-full text-center`}
                    onClick={handlerIsAuth}
                >
                    <div className="flex justify-center item-center">
                        {
                            <svg
                                width="20"
                                height="25"
                                viewBox="0 0 20 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-2"
                            >
                                <path
                                    d="M0.5 25C0.5 22.4741 1.5034 20.0517 3.28946 18.2656C5.07552 16.4796 7.49794 15.4762 10.0238 15.4762C12.5497 15.4762 14.9721 16.4796 16.7582 18.2656C18.5442 20.0517 19.5476 22.4741 19.5476 25H17.1667C17.1667 23.1056 16.4141 21.2888 15.0746 19.9492C13.735 18.6097 11.9182 17.8571 10.0238 17.8571C8.1294 17.8571 6.31259 18.6097 4.97305 19.9492C3.6335 21.2888 2.88095 23.1056 2.88095 25H0.5ZM10.0238 14.2857C6.07738 14.2857 2.88095 11.0893 2.88095 7.14286C2.88095 3.19643 6.07738 0 10.0238 0C13.9702 0 17.1667 3.19643 17.1667 7.14286C17.1667 11.0893 13.9702 14.2857 10.0238 14.2857ZM10.0238 11.9048C12.6548 11.9048 14.7857 9.77381 14.7857 7.14286C14.7857 4.5119 12.6548 2.38095 10.0238 2.38095C7.39286 2.38095 5.2619 4.5119 5.2619 7.14286C5.2619 9.77381 7.39286 11.9048 10.0238 11.9048Z"
                                    fill={isMain ? "white" : "#E0BEA2"}
                                />
                            </svg>
                        }
                        Особистий кабінет
                    </div>
                </li>
                <Link href={"/pay_information"}>
                    <li
                        className={`py-5 cursor-pointer border-t-[0.5px] ${linkStyle} w-full text-center`}
                        onClick={handlerCloseBurger}
                    >
                        Про оплата
                    </li>
                </Link>
                <Link href={"/about"}>
                    <li
                        onClick={handlerCloseBurger}
                        className={`py-5 cursor-pointer border-t-[0.5px] ${linkStyle} w-full text-center`}
                    >
                        Про нас
                    </li>
                </Link>
                <Link href={"/contacts"}>
                    <li
                        onClick={handlerCloseBurger}
                        className={`py-5 cursor-pointer border-t-[0.5px] ${linkStyle} w-full text-center`}
                    >
                        Контакти
                    </li>
                </Link>
                <li
                    className={`py-5 cursor-pointer border-t-[0.5px] ${linkStyle} w-full text-center`}
                >
                    {theme === "dark" ? (
                        <button
                            className="uppercase w-full  text-center"
                            onClick={() => handlerSetTheme("light")}
                        >
                            <span className="mr-2">Світла тема</span>
                            <LightModeIcon />
                        </button>
                    ) : (
                        <button
                            className="uppercase"
                            onClick={() => handlerSetTheme("dark")}
                        >
                            <DarkModeIcon />

                            <span className="mr-2"> Темна тема</span>
                        </button>
                    )}
                </li>
                {isAuth ? (
                    <li
                        className={`py-5 cursor-pointer border-t-[0.5px] ${linkStyle} w-full text-center`}
                        onClick={handlerLogOut}
                    >
                        Вийти
                    </li>
                ) : null}
            </ul>
            <div className="flex justify-center items-center flex-col w-full item-center pt-5">
                <Contacts />
            </div>
        </>
    );
};

export default NavList;
