import Image, { StaticImageData } from "next/image";
import { FC, useMemo, useState } from "react";
import { DefaultScreens } from "../../../../../common/GameScreenShots";
import BigImage from "./BigImage";

type ImageWrapperType = {
    imgUrl: string;
};

const ImageWrapper: FC<ImageWrapperType> = ({ imgUrl }) => {
    const photos = useMemo(() => [...DefaultScreens, imgUrl], [imgUrl]);

    const [currentImage, setImage] = useState<string | StaticImageData>(imgUrl);
    const hendkerSetImage = (el: string | StaticImageData) => {
        setImage(el);
    };
    const photoList = photos.map((el, id) => (
        <li
            key={id}
            onClick={() => hendkerSetImage(el)}
            className="  hover:cursor-pointer   w-1/5 md:w-full  hover:scale-[95%] duration-300 md:my-[5px]  md:pt-[100%]  pt-[20%] relative  "
        >
            <Image layout="fill" objectFit="cover" alt="товар" src={el} />
        </li>
    ));
    return (
        <div className="md:w-2/4 w-full flex  md:flex-row flex-col gap-[10px]  md:items-start items-center ">
            <ul className="flex  md:flex-col flex-row my-[-5px]   w-full   md:gap-0 gap-[5px]   md:w-1/5 md:order-1 order-2  ">
                {photoList}
            </ul>

            <BigImage currentImage={currentImage} />
        </div>
    );
};

export default ImageWrapper;
