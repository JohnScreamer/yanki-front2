import Image from "next/image";
import Link from "next/link";
import { FC, ReactNode, useRef } from "react";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { useAppSelector } from "../../../Hooks/common";
import { getBurgerStatus } from "../../../utiles/selectors/coomonSelectors";
import picture from "./../../../public/img/main.jpg";
import picture2 from "./../../../public/img/main.webp";
import picture3 from "./../../../public/img/E6sZwlBVoAQvCaO.webp";
import s from "./MainHeaderWrapper.module.scss";

type MainHeaderWrapperType = {
    children: ReactNode;
};

const MainHeaderWrapper: FC<MainHeaderWrapperType> = ({ children }) => {
    const refWindow = useRef(null);
    const isBurgerActive = useAppSelector(getBurgerStatus);
    return (
        <div ref={refWindow} className="h-screen top-0   sticky ">
            <div className="z-10 relative bg-prime50-light     shadow-black">
                {children}
                <div
                    className={`absolute top-0 left-0 min-w-full min-h-full  backdrop-blur-md md:bg-transparent ${
                        isBurgerActive ? "bg-accent2-light" : ""
                    }  z-0`}
                ></div>
            </div>
            {/* <Image src={picture} layout="fill" objectFit="cover" /> */}

            <div className="flex  h-screen absolute w-screen top-0 left-0   ">
                <div className="group  h-full relative  scale-105    hover:grayscale-0 duration-300 w-full">
                    <MouseParallax
                        shouldPause
                        strength={0.02}
                        parallaxContainerRef={refWindow}
                    >
                        <div className=" group w-full  h-full relative scale-105  hover:grayscale-0 duration-300  grayscale-0  ">
                            <Image
                                src={picture}
                                layout="fill"
                                objectFit="cover"
                                className="relative z-0 group-hover:scale-105 duration-300 transition-transform"
                            />
                        </div>
                    </MouseParallax>
                </div>
                <div className="group  h-full relative  scale-105 md:block hidden    hover:grayscale-0 duration-300 w-full">
                    <MouseParallax
                        shouldPause
                        strength={0.02}
                        parallaxContainerRef={refWindow}
                    >
                        <div className="group  h-full relative  scale-105    hover:grayscale-0 duration-300 ">
                            <Image
                                src={picture3}
                                layout="fill"
                                objectFit="cover"
                                className="object-left  duration-300 transition-transform"
                            />
                        </div>
                    </MouseParallax>
                </div>
            </div>

            <MouseParallax
                shouldPause
                parallaxContainerRef={refWindow}
                strength={0.05}
            >
                <div className="backdrop-blur-md center rounded-xl overflow-hidden p-1 inline-flex absolute max-[640px]:w-full translate-y-[-50%] translate-x-[-50%] top-1/2 left-1/2  flex-col text-white">
                    <h1 className="md:text-[46px] text-[32px] md:mb-5 mb-[15px] p-2 text-center">
                        Нова колекція ігор
                    </h1>
                    <span className="h-[1px] w-[120px] mb-5 bg-white block"></span>
                    <Link href="/catalog">
                        <span className="md:text-lg text-base flex group items-center hover:text-yellow-300 dark:hover:text-accent75-dark cursor-pointer">
                            <span className="mr-[7px] uppercase">
                                Перейти до каталога
                            </span>

                            {
                                <svg
                                    width="10"
                                    height="14"
                                    viewBox="0 0 14 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="group-hover:translate-x-2 duration-300"
                                >
                                    <path
                                        d="M8.88186 12.1334L0.0666504 3.31817L2.58477 0.800049L13.9181 12.1334L2.58477 23.4667L0.0666504 20.9486L8.88186 12.1334Z"
                                        fill="white"
                                    />
                                </svg>
                            }
                        </span>
                    </Link>
                </div>
            </MouseParallax>
        </div>
    );
};

export default MainHeaderWrapper;
