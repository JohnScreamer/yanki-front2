import Image from "next/image";
import { FC, MutableRefObject, useRef } from "react";
import { MouseParallax } from "react-just-parallax";
import picture from "./../../../public/img/main.jpg";
import picture3 from "./../../../public/img/E6sZwlBVoAQvCaO.webp";
type BackgroundMainImgType = {
    refWindow: MutableRefObject<null>;
};

const BackgroundMainImg: FC<BackgroundMainImgType> = ({ refWindow }) => {
    return (
        <div className="flex  h-screen absolute w-screen top-0 left-0   ">
            <div className="group  h-full relative  scale-105    hover:grayscale-0 duration-300  md:w-[52%] w-full">
                <MouseParallax
                    shouldPause
                    strength={0.02}
                    parallaxContainerRef={refWindow}
                >
                    <div className=" group w-full  h-full relative scale-105  hover:grayscale-0 duration-300  grayscale-0  ">
                        <Image
                            src={picture}
                            layout="fill"
                            alt="бекграунд"
                            objectFit="cover"
                            placeholder="blur"
                            className="relative z-0 group-hover:scale-105 duration-300 transition-transform"
                        />
                    </div>
                </MouseParallax>
            </div>
            <div className="group  h-full relative  scale-105 md:block hidden    hover:grayscale-0 duration-300 w-[48%]">
                <MouseParallax
                    shouldPause
                    strength={0.02}
                    parallaxContainerRef={refWindow}
                >
                    <div className="group  h-full relative  scale-105    hover:grayscale-0 duration-300 ">
                        <Image
                            src={picture3}
                            layout="fill"
                            alt="бекграунд"
                            objectFit="cover"
                            placeholder="blur"
                            className="  object-[-200px]  duration-300 transition-transform"
                        />
                    </div>
                </MouseParallax>
            </div>
        </div>
    );
};

export default BackgroundMainImg;
