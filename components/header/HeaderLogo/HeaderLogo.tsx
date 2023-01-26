import Link from "next/link";
import { FC } from "react";

type HeaderLogoType = {
    isMain: boolean;
};

const HeaderLogo: FC<HeaderLogoType> = ({ isMain }) => {
    return (
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
    );
};

export default HeaderLogo;
