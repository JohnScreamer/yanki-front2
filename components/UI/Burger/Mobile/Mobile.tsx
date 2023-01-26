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
type MobileType = {};

const Mobile: FC<MobileType> = () => {
    const isMain = useIsMain();
    const dispatch = useAppDispatch();
    const route = useRouter();
    const isAuth = useAppSelector(getIsAuthSelector);
    useEffect(disabledScroll, []);
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
    const linkStyle = isMain
        ? "backdrop-blur-xl"
        : "bg-white dark:bg-main2-dark border-t-2 dark:border-accent75-dark border-accent-light ";
    return (
        <div
            className={` h-screen w-full mt-[50px]  overflow-y-scroll
              animate-slide  ${linkStyle}`}
        >
            <div className="flex  h-full w-full   Container   ">
                <nav className=" w-full">
                    <Search />
                    <div></div>
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
                        <Link href={""}>
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
                    <ul className="flex justify-center flex-col items-center my-auto">
                        <li className="flex mb-1 cursor-pointer">
                            <Link href={"#"}>
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 17 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-4 "
                                >
                                    <path
                                        d="M8.49968 6.12492C7.86979 6.12492 7.2657 6.37514 6.8203 6.82054C6.3749 7.26594 6.12467 7.87003 6.12467 8.49992C6.12467 9.12981 6.3749 9.7339 6.8203 10.1793C7.2657 10.6247 7.86979 10.8749 8.49968 10.8749C9.12956 10.8749 9.73365 10.6247 10.1791 10.1793C10.6245 9.7339 10.8747 9.12981 10.8747 8.49992C10.8747 7.87003 10.6245 7.26594 10.1791 6.82054C9.73365 6.37514 9.12956 6.12492 8.49968 6.12492ZM8.49968 4.54159C9.54949 4.54159 10.5563 4.95862 11.2986 5.70095C12.041 6.44329 12.458 7.4501 12.458 8.49992C12.458 9.54974 12.041 10.5566 11.2986 11.2989C10.5563 12.0412 9.54949 12.4583 8.49968 12.4583C7.44986 12.4583 6.44304 12.0412 5.70071 11.2989C4.95838 10.5566 4.54134 9.54974 4.54134 8.49992C4.54134 7.4501 4.95838 6.44329 5.70071 5.70095C6.44304 4.95862 7.44986 4.54159 8.49968 4.54159ZM13.6455 4.34367C13.6455 4.60612 13.5413 4.85783 13.3557 5.04341C13.1701 5.22899 12.9184 5.33325 12.6559 5.33325C12.3935 5.33325 12.1418 5.22899 11.9562 5.04341C11.7706 4.85783 11.6663 4.60612 11.6663 4.34367C11.6663 4.08122 11.7706 3.82951 11.9562 3.64393C12.1418 3.45834 12.3935 3.35409 12.6559 3.35409C12.9184 3.35409 13.1701 3.45834 13.3557 3.64393C13.5413 3.82951 13.6455 4.08122 13.6455 4.34367ZM8.49968 2.16659C6.54109 2.16659 6.22126 2.17213 5.31005 2.2125C4.68938 2.24179 4.27297 2.32492 3.88663 2.47534C3.54305 2.60834 3.29526 2.76746 3.03163 3.03188C2.78385 3.27128 2.59333 3.56355 2.4743 3.88688C2.32388 4.27479 2.24076 4.69042 2.21226 5.31029C2.17109 6.18429 2.16634 6.48988 2.16634 8.49992C2.16634 10.4585 2.17188 10.7783 2.21226 11.6895C2.24155 12.3094 2.32467 12.7266 2.4743 13.1122C2.60888 13.4565 2.76722 13.7043 3.03005 13.9672C3.29684 14.2332 3.54463 14.3923 3.88505 14.5237C4.27613 14.6749 4.69255 14.7588 5.31005 14.7873C6.18405 14.8285 6.48963 14.8333 8.49968 14.8333C10.4583 14.8333 10.7781 14.8277 11.6893 14.7873C12.3084 14.758 12.7256 14.6749 13.1119 14.5253C13.4547 14.3915 13.7041 14.2324 13.9669 13.9695C14.2337 13.7028 14.3928 13.455 14.5243 13.1145C14.6747 12.7243 14.7586 12.307 14.7871 11.6895C14.8283 10.8155 14.833 10.51 14.833 8.49992C14.833 6.54134 14.8275 6.2215 14.7871 5.31029C14.7578 4.69121 14.6747 4.27321 14.5243 3.88688C14.4049 3.56388 14.2148 3.27172 13.9677 3.03188C13.7284 2.78396 13.4361 2.59343 13.1127 2.47454C12.7248 2.32413 12.3084 2.241 11.6893 2.2125C10.8153 2.17134 10.5097 2.16659 8.49968 2.16659ZM8.49968 0.583252C10.6506 0.583252 10.919 0.591169 11.7629 0.630752C12.6061 0.670335 13.18 0.802544 13.6851 0.998877C14.2076 1.19996 14.6478 1.47229 15.0879 1.91167C15.4905 2.30742 15.802 2.78613 16.0007 3.3145C16.1963 3.81879 16.3293 4.39354 16.3688 5.23667C16.4061 6.08059 16.4163 6.34896 16.4163 8.49992C16.4163 10.6509 16.4084 10.9193 16.3688 11.7632C16.3293 12.6063 16.1963 13.1803 16.0007 13.6853C15.8025 14.214 15.491 14.6928 15.0879 15.0882C14.6921 15.4906 14.2134 15.8021 13.6851 16.001C13.1808 16.1965 12.6061 16.3295 11.7629 16.3691C10.919 16.4063 10.6506 16.4166 8.49968 16.4166C6.34872 16.4166 6.08034 16.4087 5.23642 16.3691C4.3933 16.3295 3.81934 16.1965 3.31426 16.001C2.78568 15.8026 2.30688 15.4911 1.91142 15.0882C1.50879 14.6925 1.19729 14.2137 0.998633 13.6853C0.8023 13.181 0.670091 12.6063 0.630508 11.7632C0.593299 10.9193 0.583008 10.6509 0.583008 8.49992C0.583008 6.34896 0.590924 6.08059 0.630508 5.23667C0.670091 4.39275 0.8023 3.81959 0.998633 3.3145C1.19674 2.78581 1.50831 2.30696 1.91142 1.91167C2.307 1.50889 2.78576 1.19737 3.31426 0.998877C3.81934 0.802544 4.39251 0.670335 5.23642 0.630752C6.08034 0.593544 6.34872 0.583252 8.49968 0.583252Z"
                                        fill="#E0BEA2"
                                    />
                                </svg>
                            </Link>
                            <Link href={"#"}>
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 17 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.49968 14.8333C10.1794 14.8333 11.7903 14.166 12.978 12.9783C14.1657 11.7905 14.833 10.1796 14.833 8.49992C14.833 6.82021 14.1657 5.20931 12.978 4.02158C11.7903 2.83385 10.1794 2.16659 8.49968 2.16659C6.81997 2.16659 5.20906 2.83385 4.02133 4.02158C2.8336 5.20931 2.16634 6.82021 2.16634 8.49992C2.16634 10.1796 2.8336 11.7905 4.02133 12.9783C5.20906 14.166 6.81997 14.8333 8.49968 14.8333ZM8.49968 16.4166C4.1273 16.4166 0.583008 12.8723 0.583008 8.49992C0.583008 4.12754 4.1273 0.583252 8.49968 0.583252C12.8721 0.583252 16.4163 4.12754 16.4163 8.49992C16.4163 12.8723 12.8721 16.4166 8.49968 16.4166ZM6.03759 9.42617L4.06001 8.80946C3.63251 8.67884 3.63013 8.38434 4.1558 8.17296L11.8611 5.19629C12.3084 5.01421 12.5617 5.24459 12.4168 5.82171L11.1051 12.0125C11.0132 12.4535 10.748 12.5588 10.3799 12.3553L8.36034 10.8607L7.41905 11.7695C7.32247 11.8629 7.24409 11.9429 7.09526 11.9627C6.94722 11.9833 6.8253 11.9389 6.73584 11.6935L6.04709 9.42063L6.03759 9.42617Z"
                                        fill="#E0BEA2"
                                    />
                                </svg>
                            </Link>
                        </li>
                        <li className="font-extralight mb-1">info@yanki.com</li>
                        <li className="font-extralight">+38(073) 096 36 44</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Mobile;
