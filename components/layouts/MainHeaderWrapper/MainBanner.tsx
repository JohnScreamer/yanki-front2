import Link from "next/link";
import { FC, MutableRefObject } from "react";
import { MouseParallax } from "react-just-parallax";

type MainBannerType = {
    refWindow: MutableRefObject<null>;
};

const MainBanner: FC<MainBannerType> = ({ refWindow }) => {
    return (
        <MouseParallax
            shouldPause
            parallaxContainerRef={refWindow}
            strength={0.05}
        >
            <div className="backdrop-blur-md center animate-scale rounded-xl overflow-hidden p-1 inline-flex absolute max-[640px]:w-full translate-y-[-50%] translate-x-[-50%] top-1/2 left-1/2  flex-col text-white">
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
    );
};

export default MainBanner;
