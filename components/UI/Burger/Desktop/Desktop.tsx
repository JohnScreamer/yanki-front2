import Link from "next/link";
import { FC, useEffect } from "react";
import { useIsMain } from "../../../../Hooks/useIsMain";
import Burger from "../Burger";
import s from "./Desktop.module.scss";

type DesktopType = {};

const Desktop: FC<DesktopType> = () => {
    const isMain = useIsMain();

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
                        <li className="hover:text-accent-light dark:hover:text-accent75-dark">
                            <Link href={""}>Оплата і доставка</Link>
                        </li>
                        <li className="hover:text-accent-light dark:hover:text-accent75-dark">
                            <Link href={""}>Умови</Link>
                        </li>
                        <li className="hover:text-accent-light dark:hover:text-accent75-dark">
                            <Link href={""}>Контакти</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Desktop;
