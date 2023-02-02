import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { CARD_ANIMATION } from "../../../../../common/constants/animationDefaultValue";

type BigImageType = {
    currentImage: string | StaticImageData;
};

const BigImage: FC<BigImageType> = ({ currentImage }) => {
    return (
        <>
            <motion.div
                key={currentImage.toString()}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.3 }}
                variants={CARD_ANIMATION}
                className="  md:max-w-[450px] max-w-full  w-full  md:order-2 order-1  justify-center "
            >
                <div className="w-full pt-[120%]  relative ">
                    <Image
                        layout="fill"
                        objectFit="cover"
                        alt="товар"
                        src={currentImage}
                    />
                </div>
            </motion.div>
        </>
    );
};

export default BigImage;
