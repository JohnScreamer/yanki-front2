import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import toast from "react-hot-toast";
import { useAppDispatch } from "../../../Hooks/common";
import { clearProfile } from "../../../Redux/Slice/Profile";

type NavType = {};

const Nav: FC<NavType> = () => {
    const route = useRouter();
    const url = route.asPath;
    const dispatch = useAppDispatch();
    const handlerLogout = () => {
        dispatch(clearProfile());
        Cookies.remove("auth");
        route.push("/");
        toast(`До зустрічі.`, {
            icon: "👏",
        });
    };

    return (
        <div className="border-y-[0.3px]  border-accent2-light flex md:flex-row  flex-col  justify-center ">
            <Link href={"/cabinet/orders"}>
                <div
                    className={` ${
                        url === "/cabinet/orders"
                            ? "bg-accent-light text-base-dark dark:text-base-dark"
                            : " text-accent-dark dark:text-base-light"
                    } hover:bg-accent-dark  py-[15px] px-[50px] duration-300 text-center h-full  cursor-pointer`}
                >
                    Історія замовлень
                </div>
            </Link>
            <Link href={"/cabinet"}>
                <div
                    className={` ${
                        url === "/cabinet"
                            ? "bg-accent-light text-base-dark dark:text-base-dark"
                            : " text-accent-dark dark:text-base-light"
                    } hover:bg-accent-dark  py-[15px] px-[50px] text-center duration-300 h-full  cursor-pointer`}
                >
                    Особисті данні
                </div>
            </Link>

            <button
                className={` 
                         text-accent-dark dark:text-base-light
                 hover:bg-accent-dark  py-[15px] px-[50px] duration-300 h-full  cursor-pointer`}
                onClick={handlerLogout}
            >
                Вийти
            </button>
        </div>
    );
};

export default Nav;
